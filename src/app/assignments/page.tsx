export default function AssignmentsPage() {
    const assignments = [
        { id: 1, title: 'Calculus Problem Set 5', subject: 'Mathematics', dueDate: 'Nov 28, 2025', status: 'Pending', submissions: 24, total: 32 },
        { id: 2, title: 'Physics Lab Report', subject: 'Physics', dueDate: 'Nov 30, 2025', status: 'Pending', submissions: 18, total: 28 },
        { id: 3, title: 'Essay: Shakespeare Analysis', subject: 'English', dueDate: 'Dec 2, 2025', status: 'Pending', submissions: 30, total: 35 },
        { id: 4, title: 'Python Programming Project', subject: 'Computer Science', dueDate: 'Dec 5, 2025', status: 'Pending', submissions: 22, total: 30 },
        { id: 5, title: 'Chemical Reactions Quiz', subject: 'Chemistry', dueDate: 'Nov 27, 2025', status: 'Grading', submissions: 25, total: 25 },
        { id: 6, title: 'World War II Timeline', subject: 'History', dueDate: 'Nov 25, 2025', status: 'Completed', submissions: 33, total: 33 },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Completed':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            case 'Grading':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
            default:
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 dark:from-gray-900 dark:via-pink-900 dark:to-gray-900">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="mb-12 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
                        Assignments
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Track and manage all assignments
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <div className="card">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center text-2xl shadow-lg">
                                📝
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">156</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Total Assignments</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl gradient-warning flex items-center justify-center text-2xl shadow-lg">
                                ⏳
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">42</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Pending Review</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl gradient-success flex items-center justify-center text-2xl shadow-lg">
                                ✅
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">114</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search and Filter */}
                <div className="mb-8 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <input
                        type="text"
                        placeholder="Search assignments..."
                        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <button className="btn btn-primary">
                        <span>➕</span>
                        Create Assignment
                    </button>
                </div>

                {/* Assignments List */}
                <div className="space-y-4">
                    {assignments.map((assignment, index) => (
                        <div
                            key={assignment.id}
                            className="card animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center text-xl shadow-lg flex-shrink-0">
                                            📄
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold mb-1">{assignment.title}</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{assignment.subject}</p>
                                            <div className="flex flex-wrap items-center gap-3 text-sm">
                                                <span className="flex items-center gap-1">
                                                    <span>📅</span>
                                                    <span className="text-gray-600 dark:text-gray-400">Due: {assignment.dueDate}</span>
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <span>📊</span>
                                                    <span className="text-gray-600 dark:text-gray-400">
                                                        {assignment.submissions}/{assignment.total} submitted
                                                    </span>
                                                </span>
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(assignment.status)}`}>
                                                    {assignment.status}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="btn btn-secondary text-sm">
                                        View Details
                                    </button>
                                    <button className="btn btn-secondary text-sm">
                                        Grade
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
