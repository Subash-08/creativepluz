import { IProject } from '@/models/Project';

export interface WorkSectionProps {
    className?: string;
}

export interface ProjectCardProps {
    project: IProject;
    index: number;
}
