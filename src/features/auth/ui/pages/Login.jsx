import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    const { register, handleSubmit, errors, handleLogin, navigate } = useAuth()

    return (
        <div className="min-h-screen min-h-[100dvh] flex flex-col bg-[#f8f8ff] font-sans text-slate-900">
            {/* Top bar */}
            <header className="flex items-center px-4 py-2.5 border-t-[3px]  bg-gradient-to-b from-slate-200 to-[#f8f8ff]">
                <div className="flex items-center gap-2.5">
                    <span className="grid place-items-center w-8 h-8 rounded-lg bg-blue-600 text-white">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="4" y="3" width="16" height="18" rx="2" />
                            <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
                        </svg>
                    </span>
                    <span className="leading-tight">
                        <span className="block text-sm font-bold">Team Sync</span>
                        <span className="block text-[10px] font-semibold text-slate-500">Employee Management</span>
                    </span>
                </div>
            </header>

            <main className="flex-1 flex items-center justify-center px-4 py-4 sm:py-6">
                <div className="w-full max-w-[420px]">
                    {/* Logo + heading */}
                    <div className="text-center mb-4">
                        <div className="relative mx-auto mb-2 grid place-items-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="4" y="3" width="16" height="18" rx="2" />
                                <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
                            </svg>
                            <span className="absolute -right-1 -bottom-1 w-3.5 h-3.5 rounded-full bg-emerald-600 border-2 border-[#f8f8ff]" />
                        </div>
                        <p className="text-sm font-semibold">Team Sync</p>
                        <h1 className="mt-2 text-xl sm:text-2xl font-extrabold tracking-tight">Welcome back</h1>
                    </div>

                    {/* Login card */}
                    <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm shadow-slate-900/5">
                        <form onSubmit={handleSubmit(handleLogin)} noValidate>
                            {/* Email */}
                            <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                                Work Email
                            </label>
                            <div className="flex items-center gap-2.5 h-9 px-3 rounded-md bg-[#eef0fb] border border-transparent text-slate-500 focus-within:bg-white focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-600/15">
                                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="5" width="18" height="14" rx="2" />
                                    <path d="m3 7 9 6 9-6" />
                                </svg>
                                <input
                                    {...register('email')}
                                    id="email"
                                    type="email"
                                    placeholder="name@company.com"
                                    autoComplete="email"
                                    className="flex-1 min-w-0 bg-transparent outline-none text-sm text-slate-900 placeholder:text-slate-400"
                                />
                            </div>

                            {/* Password */}
                            <label htmlFor="password" className="block text-xs font-semibold text-slate-700 mt-3 mb-1.5">
                                Password
                            </label>
                            <div className="flex items-center gap-2.5 h-9 px-3 rounded-md bg-[#eef0fb] border border-transparent text-slate-500 focus-within:bg-white focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-600/15">
                                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="5" y="11" width="14" height="10" rx="2" />
                                    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                                </svg>
                                <input
                                    {...register('password')}
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="••••••••••••"
                                    autoComplete="current-password"
                                    className="flex-1 min-w-0 bg-transparent outline-none text-sm text-slate-900 placeholder:text-slate-400"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((v) => !v)}
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    className="text-slate-500 hover:text-slate-700"
                                >
                                    {showPassword ? (
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17.9 17.9A10.1 10.1 0 0 1 12 19c-6.5 0-10-7-10-7a17.7 17.7 0 0 1 4.1-5M9.9 5.2A9.7 9.7 0 0 1 12 5c6.5 0 10 7 10 7a17.6 17.6 0 0 1-2.2 3.2M3 3l18 18" />
                                            <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    )}
                                </button>
                            </div>

                            {/* Remember + forgot */}
                            <div className="flex items-center justify-between my-3">
                                <label className="flex items-center gap-2 text-xs text-slate-500 cursor-pointer">
                                    <input type="checkbox" className="w-3.5 h-3.5 accent-blue-600" />
                                    Remember device
                                </label>
                                <a href="#forgot" className="text-xs font-semibold text-blue-800 hover:underline">
                                    Forgot password?
                                </a>
                            </div>

                            {/* Sign in */}
                            <button
                                type="submit"
                                className="w-full h-9 flex items-center justify-center gap-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-colors"
                            >
                                Sign In
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M13 6l6 6-6 6" />
                                </svg>
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="relative my-3 text-center">
                            <div className="absolute inset-x-0 top-1/2 h-px bg-slate-200" />
                            <span className="relative bg-white px-2 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                                Or continue with
                            </span>
                        </div>

                        {/* SSO buttons */}
                        <div className="space-y-2">
                            <button
                                type="button"
                                className="w-full h-9 flex items-center justify-center gap-2.5 rounded-md bg-[#eef0fb] hover:bg-[#e2e5f8] text-slate-800 text-xs font-semibold transition-colors"
                            >
                                <svg className="w-5 h-5 shrink-0" viewBox="0 0 48 48" aria-hidden="true">
                                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                                </svg>
                                Sign in with Google
                            </button>
                            <button
                                type="button"
                                className="w-full h-9 flex items-center justify-center gap-2.5 rounded-md bg-[#eef0fb] hover:bg-[#e2e5f8] text-slate-800 text-xs font-semibold transition-colors"
                            >
                                <svg className="w-5 h-5 shrink-0" viewBox="0 0 21 21" aria-hidden="true">
                                    <rect x="1" y="1" width="9" height="9" fill="#F25022" />
                                    <rect x="11" y="1" width="9" height="9" fill="#7FBA00" />
                                    <rect x="1" y="11" width="9" height="9" fill="#00A4EF" />
                                    <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
                                </svg>
                                Sign in with Microsoft
                            </button>
                        </div>
                    </div>

                    {/* Register employee */}
                    <p className="mt-4 text-center text-xs text-slate-500">
                        New employee?{' '}
                        <Link onClick={() => navigate("/register")} className="inline-flex items-center gap-1 font-semibold text-blue-800 hover:underline">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="9" cy="8" r="4" />
                                <path d="M2 21a7 7 0 0 1 14 0M19 8v6M16 11h6" />
                            </svg>
                            Register Employee
                        </Link>
                    </p>
                </div>
            </main>
        </div>
    )
}

export default Login