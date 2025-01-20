import { useState } from 'react';
import { Link } from 'react-router-dom';

function ProjectsPage() {
    // Mock Data - zamenicemo sa Redux stateom kasnije
    const [projects] = useState([
        { id: 1, name: 'Summer Collection', imagesCount: 5, lastUpdated: '2024-01-20' },
        { id: 2, name: 'Winter Collection', imagesCount: 3, lastUpdated: '2024-01-19' },
    ]);

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2x1 font-bold">My Porjects</h1>
                <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90">
                New Project               
                </button>
            </div>

            {/* Grid svih projekata */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(project => (
                    <div key={project.id} className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                        <div className="text-gray-600 mb-4">
                            <p>{project.imagesCount} images</p>
                            <p>Last updated: {new Date(project.lastUpdated).toLocaleDateString()}</p>
                        </div>
                        <div className="flex gap-2">
                            <Link
                            to={`/projects/${project.id}`}
                            className="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary/90"
                            >
                                View Details
                            </Link>
                            <button className="border border-primary text-primary px-3 py-1 rounded text-sm hover:bg-primary/10">
                                Generate Image
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty state */}
            {projects.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-600 mb-4">No porjects yet</p>
                    <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90">
                    Create project
                    </button>
                </div>
            )}
        </div>
    );
}

export default ProjectsPage;
