"use client";

import { Target, Users, Award, Zap } from "lucide-react";

export default function About() {
    const features = [
        {
            icon: Target,
            title: "Our Mission",
            description: "Empowering education through innovative technology solutions",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: Users,
            title: "Community First",
            description: "Building strong connections between students, teachers, and parents",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: Award,
            title: "Excellence",
            description: "Committed to delivering the highest quality educational experience",
            gradient: "from-orange-500 to-red-500"
        },
        {
            icon: Zap,
            title: "Innovation",
            description: "Constantly evolving with cutting-edge educational technology",
            gradient: "from-green-500 to-emerald-500"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

            <div className="relative max-w-7xl mx-auto px-8 py-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full mb-6 shadow-lg border border-white/20">
                        <span className="text-sm font-medium text-gray-700">About Us</span>
                    </div>
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        School Portal
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A comprehensive education management system designed to streamline administrative tasks
                        and enhance the learning experience for everyone involved.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.title}
                                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                                }}
                            >
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Stats Section */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 shadow-2xl text-white">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-bold mb-2">10K+</div>
                            <div className="text-blue-100">Students</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2">500+</div>
                            <div className="text-blue-100">Teachers</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2">200+</div>
                            <div className="text-blue-100">Schools</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2">99%</div>
                            <div className="text-blue-100">Satisfaction</div>
                        </div>
                    </div>
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
