import React from 'react';
import ImpactClient from './Impact.client';
import { ImpactItem } from './types';

const DATA: ImpactItem[] = [
    {
        id: 1,
        label: "Success Through Our Clients",
        value: "99%",
        src: "https://cdn.prod.website-files.com/690377929e578438b80ba47a/6904dd3bfa6f7cbca3bec982_about-image-1.avif"
    },
    {
        id: 2,
        label: "Creative ideas delivered",
        value: "12M",
        src: "https://cdn.prod.website-files.com/690377929e578438b80ba47a/6904dd3bb5a1dc8f04ed32b4_about-image-2.avif"
    },
    {
        id: 3,
        label: "Social media impression",
        value: "33%",
        src: "https://cdn.prod.website-files.com/690377929e578438b80ba47a/6904dd3a313a0bdb0ff4c5ba_about-image-3.avif"
    },
    {
        id: 4,
        label: "High value projects",
        value: "$124k",
        src: "https://cdn.prod.website-files.com/690377929e578438b80ba47a/6904dd3b069826f3ba9133ca_about-image-4.avif"
    }
];

export default function Impact() {
    return (
        <ImpactClient data={DATA} />
    );
}
