export default function StudentsPage() {
    const students = [
        { id: 1, name: 'Alex Thompson', grade: '10th', class: 'A', gpa: '3.8', status: 'Active' },
        { id: 2, name: 'Emma Rodriguez', grade: '11th', class: 'B', gpa: '3.9', status: 'Active' },
        { id: 3, name: 'Michael Kim', grade: '9th', class: 'A', gpa: '3.7', status: 'Active' },
        { id: 4, name: 'Sophia Patel', grade: '12th', class: 'C', gpa: '4.0', status: 'Active' },
        { id: 5, name: 'James Wilson', grade: '10th', class: 'B', gpa: '3.6', status: 'Active' },
        { id: 6, name: 'Olivia Chen', grade: '11th', class: 'A', gpa: '3.9', status: 'Active' },
        { id: 7, name: 'Noah Anderson', grade: '9th', class: 'C', gpa: '3.5', status: 'Active' },
        { id: 8, name: 'Ava Martinez', grade: '12th', class: 'B', gpa: '3.8', status: 'Active' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-teal-900 dark:to-gray-900">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="mb-12 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                        Students
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        View and manage student information
                    </p>
                </div>

                {/* Search and Actions */}
                <div className="mb-8 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <input
                        type="text"
                        placeholder="Search students..."
                        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <button className="btn btn-primary">
                        <span>➕</span>
                        Add Student
                    </button>
                </div>

                {/* Students Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {students.map((student, index) => (
                        <div
                            key={student.id}
                            className="card animate-fade-in text-center"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="w-20 h-20 rounded-full gradient-success mx-auto mb-4 flex items-center justify-center text-3xl text-white font-bold shadow-lg">
                                {student.name.charAt(0)}
                            </div>
                            <h3 className="text-lg font-bold mb-2">{student.name}</h3>
                            <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400 mb-4">
                                <p>Grade: {student.grade} - Class {student.class}</p>
                                <p>GPA: {student.gpa}</p>
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                    {student.status}
                                </span>
                            </div>
                            <button className="w-full btn btn-secondary justify-center text-sm">
                                View Profile
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
