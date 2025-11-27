export default function CalendarPage() {
    const upcomingEvents = [
        { id: 1, title: 'Parent-Teacher Meeting', date: 'Nov 28, 2025', time: '2:00 PM - 5:00 PM', type: 'Meeting', color: 'gradient-primary' },
        { id: 2, title: 'Science Fair', date: 'Dec 1, 2025', time: '9:00 AM - 3:00 PM', type: 'Event', color: 'gradient-success' },
        { id: 3, title: 'Winter Break Begins', date: 'Dec 20, 2025', time: 'All Day', type: 'Holiday', color: 'gradient-warning' },
        { id: 4, title: 'Final Exams Start', date: 'Dec 10, 2025', time: '8:00 AM', type: 'Exam', color: 'gradient-secondary' },
        { id: 5, title: 'Sports Day', date: 'Nov 30, 2025', time: '10:00 AM - 4:00 PM', type: 'Event', color: 'gradient-success' },
        { id: 6, title: 'School Assembly', date: 'Nov 27, 2025', time: '9:00 AM - 10:00 AM', type: 'Assembly', color: 'gradient-primary' },
    ];

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const currentMonth = 'November 2025';

    // Generate a simple calendar grid (simplified for demo)
    const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1);

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-gray-900 dark:via-violet-900 dark:to-gray-900">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="mb-12 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                        Calendar
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        View school events and important dates
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Calendar Grid */}
                    <div className="lg:col-span-2 card animate-fade-in">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold">{currentMonth}</h2>
                            <div className="flex gap-2">
                                <button className="btn btn-secondary text-sm">← Prev</button>
                                <button className="btn btn-secondary text-sm">Next →</button>
                            </div>
                        </div>

                        {/* Calendar Header */}
                        <div className="grid grid-cols-7 gap-2 mb-2">
                            {daysOfWeek.map((day) => (
                                <div key={day} className="text-center font-semibold text-sm text-gray-600 dark:text-gray-400 py-2">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Calendar Days */}
                        <div className="grid grid-cols-7 gap-2">
                            {calendarDays.map((day) => {
                                const hasEvent = [1, 10, 20, 27, 28, 30].includes(day);
                                return (
                                    <div
                                        key={day}
                                        className={`
                      aspect-square flex items-center justify-center rounded-lg text-sm font-medium
                      transition-all cursor-pointer
                      ${hasEvent
                                                ? 'gradient-primary text-white shadow-lg hover:shadow-xl'
                                                : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                                            }
                      ${day === 26 ? 'ring-2 ring-purple-500' : ''}
                    `}
                                    >
                                        {day}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-4 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded gradient-primary"></div>
                                <span>Has Events</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded border-2 border-purple-500"></div>
                                <span>Today</span>
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Events */}
                    <div className="card animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
                        <div className="space-y-4">
                            {upcomingEvents.map((event, index) => (
                                <div
                                    key={event.id}
                                    className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className={`w-full h-1 rounded-full ${event.color} mb-3`}></div>
                                    <h3 className="font-semibold mb-1">{event.title}</h3>
                                    <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <span>📅</span>
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span>🕐</span>
                                            <span>{event.time}</span>
                                        </div>
                                        <span className="inline-block px-2 py-1 rounded text-xs font-semibold bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 mt-2">
                                            {event.type}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="mt-6 w-full btn btn-primary justify-center">
                            <span>➕</span>
                            Add Event
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
