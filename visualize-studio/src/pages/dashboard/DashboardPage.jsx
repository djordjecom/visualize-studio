function DashboardPage() {

    return(
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Statistika projekta */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Your projects</h2>
                    <div className="space-y-2">
                        <p>Total Projects: 0</p>
                        <p>Images Generated: 0</p>
                        <p>Storage Used: 0 MB</p>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                    <div className="space-y-3">
                        <button className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary/90">
                            New Project
                        </button>
                        <button className="w-full border border-primary text-primary py-2 px-4 rounded hover:bg-primary/10">
                            View All Projects
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;

// DEVELOP LP IN FRAMER, INTEGRATE IT HERE, Then continue with Projects page. 