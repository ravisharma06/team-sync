import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router';

const iconProps = {
  className: 'w-4 h-4 shrink-0',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const icons = {
  user: (
    <svg {...iconProps}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </svg>
  ),
  mail: (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  id: (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="11" r="2" />
      <path d="M6 16c.6-1.4 1.7-2 3-2s2.4.6 3 2M15 10h3M15 14h3" />
    </svg>
  ),
  building: (
    <svg {...iconProps}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
    </svg>
  ),
  lock: (
    <svg {...iconProps}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  ),
  eye: (
    <svg {...iconProps}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  eyeOff: (
    <svg {...iconProps}>
      <path d="M17.9 17.9A10.1 10.1 0 0 1 12 19c-6.5 0-10-7-10-7a17.7 17.7 0 0 1 4.1-5M9.9 5.2A9.7 9.7 0 0 1 12 5c6.5 0 10 7 10 7a17.6 17.6 0 0 1-2.2 3.2M3 3l18 18" />
      <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
    </svg>
  ),
  arrow: (
    <svg {...iconProps}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
}

const fieldBox =
  'flex items-center gap-2.5 h-9 px-3 rounded-md bg-[#eef0fb] border border-transparent text-slate-500 focus-within:bg-white focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-600/15'
const inputCls =
  'flex-1 min-w-0 bg-transparent outline-none text-sm text-slate-900 placeholder:text-slate-400'
const labelCls = 'block text-xs font-semibold text-slate-700 mb-1.5'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const { register, handleSubmit, errors, navigate, handleRegister } = useAuth()


  return (
    <div className="min-h-screen min-h-[100dvh] flex flex-col bg-[#f8f8ff] font-sans text-slate-900">
      {/* Top bar */}
      <header className="flex items-center px-4 py-2.5 border-t-[3px]  bg-gradient-to-b from-slate-200 to-[#f8f8ff]">
        <div className="flex items-center gap-2.5">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-blue-600 text-white">
            {icons.building}
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold">Team Sync</span>
            <span className="block text-[10px] font-semibold text-slate-500">Employee Management</span>
          </span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-4 sm:py-6">
        <div className="w-full max-w-[420px]">
          {/* Heading */}
          <div className="text-center mb-3">
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">Register employee</h1>
          </div>

          {/* Register card */}
          <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm shadow-slate-900/5">
            <form onSubmit={(e) => e.preventDefault()} noValidate className="space-y-2.5">
              {/* Name + Employee ID */}
              <div className="space-y-2.5">
                <div>
                  <label htmlFor="fullName" className={labelCls}>Full Name</label>
                  <div className={fieldBox}>
                    {icons.user}
                    <input id="fullName" type="text" placeholder="John Doe" autoComplete="name" className={inputCls} />
                  </div>
                </div>
                <div>
                  <label htmlFor="employeeId" className={labelCls}>Employee ID</label>
                  <div className={fieldBox}>
                    {icons.id}
                    <input id="employeeId" type="text" placeholder="EMP-1024" className={inputCls} />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className={labelCls}>Work Email</label>
                <div className={fieldBox}>
                  {icons.mail}
                  <input id="email" type="email" placeholder="name@company.com" autoComplete="email" className={inputCls} />
                </div>
              </div>

              {/* Department */}
              <div>
                <label htmlFor="department" className={labelCls}>Department</label>
                <div className={fieldBox}>
                  {icons.building}
                  <select id="department" defaultValue="" className={`${inputCls} cursor-pointer`}>
                    <option value="" disabled>Select department</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Finance</option>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Operations</option>
                  </select>
                </div>
              </div>

              {/* Passwords */}
              <div className="space-y-2.5">
                <div>
                  <label htmlFor="password" className={labelCls}>Password</label>
                  <div className={fieldBox}>
                    {icons.lock}
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      autoComplete="new-password"
                      className={inputCls}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      className="text-slate-500 hover:text-slate-700"
                    >
                      {showPassword ? icons.eyeOff : icons.eye}
                    </button>
                  </div>
                </div>
                <div>
                  <label htmlFor="confirmPassword" className={labelCls}>Confirm Password</label>
                  <div className={fieldBox}>
                    {icons.lock}
                    <input
                      id="confirmPassword"
                      type={showConfirm ? 'text' : 'password'}
                      placeholder="••••••••"
                      autoComplete="new-password"
                      className={inputCls}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm((v) => !v)}
                      aria-label={showConfirm ? 'Hide password' : 'Show password'}
                      className="text-slate-500 hover:text-slate-700"
                    >
                      {showConfirm ? icons.eyeOff : icons.eye}
                    </button>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-2 text-xs text-slate-500 cursor-pointer">
                <input type="checkbox" className="mt-0.5 w-3.5 h-3.5 accent-blue-600" />
                <span>
                  I agree to the{' '}
                  <a href="#terms" className="font-semibold text-blue-800 hover:underline">
                    company policies
                  </a>
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="w-full h-9 flex items-center justify-center gap-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-colors"
              >
                Register
                {icons.arrow}
              </button>
            </form>
          </div>

          {/* Back to login */}
          <p className="mt-4 text-center text-xs text-slate-500">
            Already registered?{' '}
            <Link onClick={() => navigate("/")} className="font-semibold text-blue-800 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}

export default Register