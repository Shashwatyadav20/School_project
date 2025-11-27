export default function ClassesPage() {
    const classes = [
        { id: 1, name: 'Mathematics 101', teacher: 'Dr. Sarah Johnson', students: 32, schedule: 'Mon, Wed, Fri 9:00 AM', color: 'gradient-primary' },
        { id: 2, name: 'Physics Advanced', teacher: 'Prof. Michael Chen', students: 28, schedule: 'Tue, Thu 10:30 AM', color: 'gradient-secondary' },
        { id: 3, name: 'English Literature', teacher: 'Ms. Emily Davis', students: 35, schedule: 'Mon, Wed 2:00 PM', color: 'gradient-success' },
        { id: 4, name: 'Computer Science', teacher: 'Dr. James Wilson', students: 30, schedule: 'Tue, Thu 1:00 PM', color: 'gradient-warning' },
        { id: 5, name: 'Chemistry Lab', teacher: 'Dr. Lisa Anderson', students: 25, schedule: 'Wed, Fri 3:00 PM', color: 'gradient-primary' },
        { id: 6, name: 'World History', teacher: 'Mr. Robert Brown', students: 33, schedule: 'Mon, Thu 11:00 AM', color: 'gradient-secondary' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="mb-12 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Classes
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Manage and view all classes in your school
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="mb-8 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <input
                        type="text"
                        placeholder="Search classes..."
                        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button className="btn btn-primary">
                        <span>➕</span>
                        Add New Class
                    </button>
                </div>

                {/* Classes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {classes.map((classItem, index) => (
                        <div
                            key={classItem.id}
                            className="card animate-fade-in cursor-pointer"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={`w-full h-2 rounded-full ${classItem.color} mb-4`}></div>
                            <h3 className="text-xl font-bold mb-2">{classItem.name}</h3>
                            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <div className="flex items-center gap-2">
                                    <span>👨‍🏫</span>
                                    <span>{classItem.teacher}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>👥</span>
                                    <span>{classItem.students} students</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>🕐</span>
                                    <span>{classItem.schedule}</span>
                                </div>
                            </div>
                            <button className="mt-4 w-full btn btn-secondary justify-center">
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
