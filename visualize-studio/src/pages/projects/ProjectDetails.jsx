import { useState } from 'react';
import { useParams } from 'react-router-dom'

function ProjectDetails() {
    const { id } = useParams(); // Povlacenje ID projekta sa URLa

    // mock data - kasnije menjamo reduxom
    const [project] = useState({
        id,
        name: 'Summer Collection', 
        imagesCount: 5,
        lastUpdated: '2024-01-20',
        images: [
            { id: 1, url: 'https://placehold.co/300x300', prompt: 'Summer beach product' },
            { id: 2, url: 'https://placehold.co/300x300', prompt: 'Sunny day product' },
        ]
    });

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">{project.name}</h1>
                <p className="text-gray-600">
                    Last Updated: {new Date(project.lastUpdated).toLocaleDateString()}
                </p>
            </div>

            {/* Generisanje fotografija */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Generate New Image</h2>
                <div className="space-y-4">
                    <textarea
                    className="w-full p-2 border rounded"
                    placeholder="Enter your image prompt..."
                    rows="5"
                    />
                    <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90">
                    Generate
                    </button>
                </div>
            </div>

            {/* Grid generisanih fotografija */}
            <div>
                <h2 className="text-xl font-semibold mb-4">Generated Images</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.images.map(image => (
                        <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={image.url} alt={image.prompt} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <p className="text-sm text-gray-600">Image prompt:</p>
                                <p className="text-sm text-gray-600">{image.prompt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
