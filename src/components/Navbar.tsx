"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, Settings, BookOpen, Users, Calendar } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/courses", label: "Courses", icon: BookOpen },
  { href: "/students", label: "Students", icon: Users },
  { href: "/calendar", label: "Calendar", icon: Calendar },
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 top-0 h-screen w-20 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white shadow-2xl z-50 flex flex-col items-center transition-all duration-300" style={{ width: '5rem' }}>
      {/* Logo Section */}
      <div className="p-4 border-b border-white/10 w-full flex justify-center">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
          <span className="text-xl font-bold">S</span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 px-2 py-6 space-y-4 overflow-y-auto w-full flex flex-col items-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                group relative flex items-center justify-center w-12 h-12 rounded-xl
                transition-all duration-300 ease-out
                ${isActive
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
                }
              `}
              title={item.label}
            >
              {/* Active Indicator */}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-r-full" />
              )}

              {/* Icon */}
              <Icon
                className={`w-6 h-6 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"
                  }`}
              />

              {/* Hover Effect */}
              {!isActive && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300" />
              )}
            </Link>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-white/10 w-full flex justify-center">
        <div className="w-8 h-8 rounded-lg bg-white/5 backdrop-blur-sm flex items-center justify-center text-xs text-gray-400">
          v1
        </div>
      </div>
    </nav>
  );
}
