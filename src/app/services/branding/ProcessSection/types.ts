export interface StepItem {
    num: string;
    title: string;
    desc: string;
}

export interface ProcessStepProps extends StepItem {
    delay?: number;
}
