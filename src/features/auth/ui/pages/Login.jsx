import { useState } from 'react'
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    const { register, handleSubmit, handleLogin, navigate } = useAuth()

    return (
        <div className="min-h-screen min-h-[100dvh] flex flex-col bg-[var(--bg-main)] font-sans text-[var(--text-primary)] transition-colors">
            {/* Top bar */}
            <header className="flex items-center bg-[var(--bg-surface)] px-4 py-2.5">
                <div className="flex items-center gap-2.5">
                    <span className="grid place-items-center w-8 h-8 rounded-lg bg-[var(--auth-accent)] text-white">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="4" y="3" width="16" height="18" rx="2" />
                            <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
                        </svg>
                    </span>
                    <span className="leading-tight">
                        <span className="block text-sm font-bold">Team Sync</span>
                        <span className="block text-[10px] font-semibold text-[var(--text-muted)]">Employee Management</span>
                    </span>
                </div>
            </header>

            <main className="flex-1 flex items-center justify-center px-4 py-4 sm:py-6">
                <div className="w-full max-w-[420px]">
                    {/* Logo + heading */}
                    <div className="text-center mb-4">
                        <div className="relative mx-auto mb-2 grid place-items-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[var(--auth-accent)] text-white shadow-[var(--shadow-md)]">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="4" y="3" width="16" height="18" rx="2" />
                                <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
                            </svg>
                            <span className="absolute -right-1 -bottom-1 w-3.5 h-3.5 rounded-full bg-emerald-600 border-2 border-[var(--bg-main)]" />
                        </div>
                        <p className="text-sm font-semibold">Team Sync</p>
                        <h1 className="mt-2 text-xl sm:text-2xl font-extrabold tracking-tight">Welcome back</h1>
                    </div>

                    {/* Login card */}
                    <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-4 shadow-[var(--shadow-md)] sm:p-5">
                        <form onSubmit={handleSubmit(handleLogin)} noValidate>
                            {/* Email */}
                            <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-[var(--text-secondary)]">
                                Work Email
                            </label>
                            <div className="flex h-9 items-center gap-2.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-main)] px-3 text-[var(--text-muted)] focus-within:border-[var(--auth-accent)] focus-within:bg-[var(--bg-surface)]">
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
                                    className="min-w-0 flex-1 bg-transparent text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)]"
                                />
                            </div>

                            {/* Password */}
                            <label htmlFor="password" className="mb-1.5 mt-3 block text-xs font-semibold text-[var(--text-secondary)]">
                                Password
                            </label>
                            <div className="flex h-9 items-center gap-2.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-main)] px-3 text-[var(--text-muted)] focus-within:border-[var(--auth-accent)] focus-within:bg-[var(--bg-surface)]">
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
                                    className="min-w-0 flex-1 bg-transparent text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)]"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((v) => !v)}
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    className="text-[var(--text-muted)] hover:text-[var(--text-primary)]"
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
                                <label className="flex cursor-pointer items-center gap-2 text-xs text-[var(--text-muted)]">
                                    <input type="checkbox" className="h-3.5 w-3.5 accent-[var(--auth-accent)]" />
                                    Remember device
                                </label>
                                <a href="#forgot" className="text-xs font-semibold text-[var(--auth-accent)] hover:underline">
                                    Forgot password?
                                </a>
                            </div>

                            {/* Sign in */}
                            <button
                                type="submit"
                                className="flex h-9 w-full items-center justify-center gap-2 rounded-md bg-[var(--auth-accent)] text-sm font-bold text-white transition-opacity hover:opacity-90"
                            >
                                Sign In
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M13 6l6 6-6 6" />
                                </svg>
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="relative my-3 text-center">
                            <div className="absolute inset-x-0 top-1/2 h-px bg-[var(--border-color)]" />
                            <span className="relative bg-[var(--bg-surface)] px-2 text-[10px] font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                                Or continue with
                            </span>
                        </div>

                        {/* SSO buttons */}
                        <div className="space-y-2">
                            <button
                                type="button"
                                className="flex h-9 w-full items-center justify-center gap-2.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-main)] text-xs font-semibold text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-hover)]"
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
                                className="flex h-9 w-full items-center justify-center gap-2.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-main)] text-xs font-semibold text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-hover)]"
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
                    <p className="mt-4 text-center text-xs text-[var(--text-muted)]">
                        New employee?{' '}
                        <Link onClick={() => navigate("/register")} className="inline-flex items-center gap-1 font-semibold text-[var(--auth-accent)] hover:underline">
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