import { IProject } from '@/models/Project';

export interface StackedCaseStudiesProps {
    className?: string;
}

export interface CaseStudySectionProps {
    project: IProject;
    index: number;
    total: number;
}
