# pothole_detect_and_georeference.py
import torch
import rasterio
from rasterio.plot import reshape_as_image
import numpy as np
import json

# Load pretrained YOLOv5 model (replace with your custom trained model)
model = torch.hub.load('ultralytics/yolov5', 'yolov5s', pretrained=True)

# Load georeferenced drone/satellite multispectral image
image_path = 'data/drone_image.tif'
dataset = rasterio.open(image_path)
img = dataset.read()
img = reshape_as_image(img)  # Convert to HWC for model input

# Run inference (convert to RGB if needed)
results = model(img[..., :3])  # Use only RGB bands if multispectral

# Extract bounding boxes with confidence > threshold (e.g., 0.5)
detections = []
for *box, conf, cls in results.xyxy[0].numpy():
    if conf > 0.5:
        xmin, ymin, xmax, ymax = map(int, box)
        # Calculate centroid pixel
        cx = (xmin + xmax) / 2
        cy = (ymin + ymax) / 2
        # Convert pixel coordinate to geo coordinate using rasterio transform
        lon, lat = dataset.xy(cy, cx)
        detections.append({
            'bbox': [xmin, ymin, xmax, ymax],
            'confidence': float(conf),
            'class': int(cls),
            'coordinates': [lon, lat]
        })

# Save detections as GeoJSON points
geojson = {
    'type': 'FeatureCollection',
    'features': []
}
for det in detections:
    feature = {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': det['coordinates']
        },
        'properties': {
            'confidence': det['confidence'],
            'class': det['class'],
        }
    }
    geojson['features'].append(feature)

with open('output/potholes.geojson', 'w') as f:
    json.dump(geojson, f, indent=2)

print(f"Detected {len(detections)} potholes saved to potholes.geojson")
