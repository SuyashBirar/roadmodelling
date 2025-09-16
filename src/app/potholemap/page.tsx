// PotholeMap.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Map, { Marker, Source, Layer } from 'react-map-gl';

type Feature = {
    geometry: {
        coordinates: [number, number];
    };
    properties: {
        confidence: number;
    };
};

type GeoJSON = {
    type: string;
    features: Feature[];
};

export default function PotholeMap() {
    const [potholes, setPotholes] = useState<GeoJSON | null>(null);

    useEffect(() => {
        fetch('/output/potholes.geojson')
            .then((res) => res.json())
            .then(setPotholes)
            .catch(console.error);
    }, []);

    const layerStyle = {
        id: 'potholes',
        type: 'circle',
        paint: {
            'circle-radius': 6,
            'circle-color': '#FF0000',
            'circle-stroke-width': 2,
            'circle-stroke-color': '#FFFFFF',
        },
    };

    return (
        <Map
            initialViewState={{
                longitude: 77.5946,
                latitude: 12.9716,
                zoom: 14,
            }}
            style={{ width: '100%', height: '500px' }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        >
            {potholes && (
                <Source id="potholes" type="geojson" data={potholes}>
                    <Layer {...layerStyle} />
                </Source>
            )}
        </Map>
    );
}
