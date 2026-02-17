'use client';

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { ServiceType, HeroStateContextType } from './types';

const ROTATION_INTERVAL = 4000;

const HeroContext = createContext<HeroStateContextType | undefined>(undefined);

interface Props {
    services: ServiceType[];
    children: React.ReactNode;
}

export function HeroStateProvider({ services, children }: Props) {
    const [activeServiceIndex, setActiveServiceIndex] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const startRotation = () => {
        stopRotation();
        intervalRef.current = setInterval(() => {
            setActiveServiceIndex((prev) => (prev + 1) % services.length);
        }, ROTATION_INTERVAL);
    };

    const stopRotation = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    useEffect(() => {
        startRotation();
        return stopRotation;
    }, [services.length]);

    const handleServiceHover = (index: number) => {
        stopRotation();
        setActiveServiceIndex(index);
    };

    const handleServiceLeave = () => {
        startRotation();
    };

    return (
        <HeroContext.Provider value={{
            activeServiceIndex,
            setActiveServiceIndex,
            services,
            handleServiceHover,
            handleServiceLeave
        }}>
            {children}
        </HeroContext.Provider>
    );
}

export function useHeroState() {
    const context = useContext(HeroContext);
    if (!context) {
        throw new Error('useHeroState must be used within a HeroStateProvider');
    }
    return context;
}
