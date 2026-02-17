import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";
import Project from "@/models/Project";
import dbConnect from "@/lib/dbConnect";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    await dbConnect();

    const projects = await Project.find().select("slug updatedAt");

    const projectEntries: MetadataRoute.Sitemap = projects.map((project: any) => ({
        url: `${SITE_CONFIG.url}/works/${project.slug}`,
        lastModified: new Date(project.updatedAt),
        changeFrequency: "weekly",
        priority: 0.8,
    }));

    const staticEntries: MetadataRoute.Sitemap = [
        {
            url: SITE_CONFIG.url,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: `${SITE_CONFIG.url}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${SITE_CONFIG.url}/works`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
        {
            url: `${SITE_CONFIG.url}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ];

    return [...staticEntries, ...projectEntries];
}
