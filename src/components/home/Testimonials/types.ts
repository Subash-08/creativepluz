export interface Testimonial {
    text: string;
    image: string;
    name: string;
    role: string;
}

export interface TestimonialsColumnProps {
    testimonials: Testimonial[];
    duration?: number;
    className?: string;
}
