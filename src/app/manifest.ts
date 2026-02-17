import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/site';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: SITE_CONFIG.name,
        short_name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#ffd700',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
