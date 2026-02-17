
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// We need to define the schema blindly or import it if we could, but let's just use a loose schema for checking
const projectSchema = new mongoose.Schema({}, { strict: false });
const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

async function checkProject() {
    try {
        if (!process.env.MONGODB_URI) {
            console.error('MONGODB_URI is missing');
            return;
        }
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to DB');

        const slug = 'ars-textiles';
        const project = await Project.findOne({ slug });

        console.log(`Checking for slug: ${slug}`);
        if (project) {
            console.log('Project found:', JSON.stringify(project, null, 2));
        } else {
            console.log('Project NOT found');
            // List all slugs
            const allProjects = await Project.find({}, 'slug status title');
            console.log('All available projects:', allProjects);
        }

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await mongoose.disconnect();
    }
}

checkProject();
