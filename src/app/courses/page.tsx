"use client";

import { BookOpen, Users, Clock, TrendingUp } from "lucide-react";

export default function Courses() {
    const courses = [
        {
            name: "Mathematics",
            students: 45,
            teacher: "Dr. Smith",
            color: "from-blue-500 to-cyan-500",
            progress: 75,
            duration: "12 weeks"
        },
        {
            name: "Physics",
            students: 38,
            teacher: "Prof. Johnson",
            color: "from-purple-500 to-pink-500",
            progress: 60,
            duration: "10 weeks"
        },
        {
            name: "Chemistry",
            students: 42,
            teacher: "Dr. Williams",
            color: "from-orange-500 to-red-500",
            progress: 85,
            duration: "11 weeks"
        },
        {
            name: "Biology",
            students: 40,
            teacher: "Prof. Brown",
            color: "from-green-500 to-emerald-500",
            progress: 50,
            duration: "13 weeks"
        },
        {
            name: "Computer Science",
            students: 52,
            teacher: "Dr. Davis",
            color: "from-indigo-500 to-purple-500",
            progress: 90,
            duration: "14 weeks"
        },
        {
            name: "English Literature",
            students: 35,
            teacher: "Prof. Wilson",
            color: "from-pink-500 to-rose-500",
            progress: 70,
            duration: "12 weeks"
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

            <div className="relative max-w-7xl mx-auto px-8 py-12">
                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full mb-6 shadow-lg border border-white/20">
                        <BookOpen className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-medium text-gray-700">All Courses</span>
                    </div>
                    <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Courses
                    </h1>
                    <p className="text-xl text-gray-600">
                        Explore our comprehensive course catalog and track your progress.
                    </p>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course, index) => (
                        <div
                            key={course.name}
                            className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20"
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                            }}
                        >
                            {/* Icon */}
                            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <BookOpen className="w-7 h-7 text-white" />
                            </div>

                            {/* Course Info */}
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{course.name}</h3>
                            <p className="text-gray-600 mb-4">Instructor: {course.teacher}</p>

                            {/* Stats */}
                            <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                    <Users className="w-4 h-4" />
                                    <span>{course.students} students</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{course.duration}</span>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="mb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-gray-700">Progress</span>
                                    <span className="text-sm font-bold text-gray-800">{course.progress}%</span>
                                </div>
                                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full bg-gradient-to-r ${course.color} transition-all duration-1000 ease-out`}
                                        style={{ width: `${course.progress}%` }}
                                    />
                                </div>
                            </div>

                            {/* Action Button */}
                            <button className={`w-full py-3 px-4 bg-gradient-to-r ${course.color} text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2`}>
                                <TrendingUp className="w-4 h-4" />
                                View Course
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
}
