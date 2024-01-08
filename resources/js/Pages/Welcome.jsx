import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
                <div className="text-center">
                    {props.auth.user ? (
                        <Link href={route('dashboard')} className="text-sm text-gray-700 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-sm text-gray-700 underline">
                                Log in
                            </Link>

                            <Link href={route('register')} className="ml-4 text-sm text-gray-700 underline">
                                Register
                            </Link>
                        </>
                    )}

                    <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 mt-8">
                        <h1 className="text-4xl font-semibold text-gray-900 dark:text-white">
                            Welcome to StudySelect
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                            Sistem Pendudung Keputusan pemilihan jurusan
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
