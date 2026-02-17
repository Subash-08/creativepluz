import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NextTopLoader from 'nextjs-toploader';
import AuthProvider from '@/components/providers/AuthProvider';
import { inter, outfit } from '@/lib/fonts';
import { generateThemeVariables } from '@/lib/theme-provider';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
        default: SITE_CONFIG.name,
        template: `%s | ${SITE_CONFIG.name}`,
    },
    description: SITE_CONFIG.description,
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
            <body
                className="font-sans antialiased bg-background text-foreground"
                style={generateThemeVariables()}
            >
                <AuthProvider>
                    <NextTopLoader color="#ffd700" showSpinner={false} />
                    <Navbar />
                    {children}
                </AuthProvider>
                <Footer />
            </body>
        </html>
    );
}
