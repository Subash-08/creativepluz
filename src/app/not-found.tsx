import Link from 'next/link';
import PageContainer from '@/components/layout/PageContainer';

export default function NotFound() {
    return (
        <PageContainer className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
            <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                404
            </h1>
            <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
            <p className="text-muted-foreground max-w-md">
                Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
            </p>
            <Link
                href="/"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-black shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
                Return Home
            </Link>
        </PageContainer>
    );
}
