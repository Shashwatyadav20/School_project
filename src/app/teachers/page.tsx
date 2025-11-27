export default function TeachersPage() {
    const teachers = [
        { id: 1, name: 'Dr. Sarah Johnson', subject: 'Mathematics', department: 'Science', email: 'sarah.j@school.edu', experience: '12 years' },
        { id: 2, name: 'Prof. Michael Chen', subject: 'Physics', department: 'Science', email: 'michael.c@school.edu', experience: '15 years' },
        { id: 3, name: 'Ms. Emily Davis', subject: 'English', department: 'Arts', email: 'emily.d@school.edu', experience: '8 years' },
        { id: 4, name: 'Dr. James Wilson', subject: 'Computer Science', department: 'Technology', email: 'james.w@school.edu', experience: '10 years' },
        { id: 5, name: 'Dr. Lisa Anderson', subject: 'Chemistry', department: 'Science', email: 'lisa.a@school.edu', experience: '14 years' },
        { id: 6, name: 'Mr. Robert Brown', subject: 'History', department: 'Social Studies', email: 'robert.b@school.edu', experience: '11 years' },
    ];

    const departments = ['All', 'Science', 'Arts', 'Technology', 'Social Studies'];

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-900 dark:via-orange-900 dark:to-gray-900">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="mb-12 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                        Teachers
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        View teacher profiles and contact information
                    </p>
                </div>

                {/* Filters */}
                <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {departments.map((dept) => (
                            <button
                                key={dept}
                                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${dept === 'All'
                                        ? 'gradient-warning text-white'
                                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                    }`}
                            >
                                {dept}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="Search teachers..."
                            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                        <button className="btn btn-primary">
                            <span>➕</span>
                            Add Teacher
                        </button>
                    </div>
                </div>

                {/* Teachers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teachers.map((teacher, index) => (
                        <div
                            key={teacher.id}
                            className="card animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-16 h-16 rounded-full gradient-warning flex items-center justify-center text-2xl text-white font-bold shadow-lg flex-shrink-0">
                                    {teacher.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold mb-1">{teacher.name}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{teacher.subject}</p>
                                </div>
                            </div>
                            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <div className="flex items-center gap-2">
                                    <span>🏢</span>
                                    <span>{teacher.department}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>📧</span>
                                    <span className="truncate">{teacher.email}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>⏱️</span>
                                    <span>{teacher.experience}</span>
                                </div>
                            </div>
                            <div className="mt-4 flex gap-2">
                                <button className="flex-1 btn btn-secondary justify-center text-sm">
                                    View Profile
                                </button>
                                <button className="btn btn-secondary text-sm">
                                    📧
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
