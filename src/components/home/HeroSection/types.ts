export interface ServiceType {
    id: string;
    title: string;
    description: string;
    image: string;
}

export interface HeroStateContextType {
    activeServiceIndex: number;
    setActiveServiceIndex: (index: number) => void;
    services: ServiceType[];
    handleServiceHover: (index: number) => void;
    handleServiceLeave: () => void;
}
