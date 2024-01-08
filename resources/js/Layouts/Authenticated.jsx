import React, { useState } from 'react';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/inertia-react';

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Left Sidebar */}
            <div className="flex-shrink-0 w-24 bg-88AAC8 border-r border-gray-400">
                <Link href="/">
                    <span className="text-black font-bold text-lg">StudySelect</span>
                </Link>

                <div className="flex flex-col items-center mt-8">
                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                        <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6 text-black hover:text-gray-300"
                        >
                            <path d="M12 6v6l6 3M12 6V3l-6 3M12 12v6l6 3M12 12V9l-6 3"></path>
                        </svg>
                    </NavLink>

                    <NavLink href={route('posts.index')} active={route().current('posts.index')}>
                        <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6 mt-4 text-black hover:text-gray-300"
                        >
                            <path d="M6 9l6 6 6-6"></path>
                        </svg>
                    </NavLink>
                </div>
            </div>

            {/* Page Content */}
            <div className="flex-1 overflow-hidden">
                <nav className="bg-white border-b border-gray-200">
                    {/* ... (unchanged) ... */}
                </nav>

                {header && (
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                    </header>
                )}

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="container mx-auto mt-6">{children}</div>
                </main>
            </div>
        </div>
    );
}
