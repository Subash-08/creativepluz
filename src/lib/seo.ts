import { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site";

interface MetadataProps {
    title: string;
    description?: string;
    image?: string;
    noIndex?: boolean;
}

export function generateMetadata({
    title,
    description = SITE_CONFIG.description,
    image = SITE_CONFIG.ogImage,
    noIndex = false
}: MetadataProps): Metadata {
    return {
        title,
        description,
        openGraph: {
            title: `${title} | ${SITE_CONFIG.name}`,
            description,
            url: SITE_CONFIG.url,
            siteName: SITE_CONFIG.name,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | ${SITE_CONFIG.name}`,
            description,
            images: [image],
        },
        robots: {
            index: !noIndex,
            follow: !noIndex,
        },
    };
}
