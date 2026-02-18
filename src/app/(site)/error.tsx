'use client';

import { useEffect } from 'react';
import PageContainer from '@/components/layout/PageContainer';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <PageContainer className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
            <h1 className="text-4xl font-bold text-destructive">Something went wrong!</h1>
            <p className="text-muted-foreground text-lg">
                We apologize for the inconvenience. Please try again.
            </p>
            <button
                onClick={reset}
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-black shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
                Try again
            </button>
        </PageContainer>
    );
}
