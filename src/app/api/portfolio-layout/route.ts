import { NextResponse } from 'next/server';
import connectToDB from '@/lib/dbConnect';
import PortfolioLayoutBox from '@/models/PortfolioLayoutBox';
import Project from '@/models/Project';
import Category from '@/models/Category'; // Register Category model

// Types for the sanitized response
interface SanitizedProject {
    id: string;
    title: string;
    thumbnail: string | null;
    slug?: string;
    category?: any;
}

interface SanitizedBox {
    id: string;
    order: number;
    project: SanitizedProject | null;
}

export async function GET() {
    try {
        await connectToDB();

        // Fetch all boxes sorted by order
        const boxes = await PortfolioLayoutBox.find().sort({ order: 1 }).lean();

        // Extract project IDs
        const projectIds = boxes
            .map((box: any) => box.projectId)
            .filter((id: any) => id); // Filter out nulls

        // Fetch valid projects manually
        // This avoids "Schema hasn't been registered for model 'Project'" error
        // because we use the imported Project model directly.
        const projects = await Project.find({ _id: { $in: projectIds } })
            .select('title slug coverImage categoryId')
            .populate('categoryId', 'name') // Populate Category (we know this works or is less critical)
            .lean();

        // Create a lookup map for efficiency
        const projectMap = new Map(projects.map((p: any) => [p._id.toString(), p]));

        // Sanitize and transform the data
        const sanitizedBoxes: SanitizedBox[] = boxes.map((box: any) => {
            let projectData: SanitizedProject | null = null;

            if (box.projectId) {
                const projectDoc = projectMap.get(box.projectId.toString());

                if (projectDoc) {
                    projectData = {
                        id: projectDoc._id.toString(),
                        title: projectDoc.title,
                        thumbnail: projectDoc.coverImage?.url || null,
                        slug: projectDoc.slug,
                        category: projectDoc.categoryId || null
                    };
                }
            }

            return {
                id: box._id.toString(),
                order: box.order,
                project: projectData,
            };
        });

        // Lazy Integrity Check
        let needsResequencing = false;
        for (let i = 0; i < sanitizedBoxes.length; i++) {
            if (sanitizedBoxes[i].order !== i + 1) {
                needsResequencing = true;
                break;
            }
        }

        if (needsResequencing && sanitizedBoxes.length > 0) {
            console.warn('Portfolio Layout integrity issue detected. Resequencing...');
            for (let i = 0; i < boxes.length; i++) {
                if (boxes[i].order !== i + 1) {
                    await PortfolioLayoutBox.findByIdAndUpdate(boxes[i]._id, { order: i + 1 });
                    sanitizedBoxes[i].order = i + 1; // Update response too
                }
            }
        }

        return NextResponse.json({ boxes: sanitizedBoxes });
    } catch (error: any) {
        console.error('Error fetching portfolio layout:', error?.message, error?.stack);
        return NextResponse.json({ error: 'Failed to fetch layout', details: error?.message }, { status: 500 });
    }
}
