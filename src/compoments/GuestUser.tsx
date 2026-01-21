import { useState } from 'react'
import { Link } from 'react-router-dom'
import MainPage from './mainPage'
const GuestUser = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleLogin = (): void => {
    if (!name || !email) {
      alert('Please fill in both name and email.')
      return
    }
   if(sessionStorage.getItem('user')){ alert('there is a guest account exist already'); return}
    const arr: string[] = [name, email]
    sessionStorage.setItem('user', JSON.stringify(arr))
    alert(`Logged in as guest: ${name} (${email})`)
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">Guest Login</h1>
        <p className="mt-1 text-sm text-slate-600">Enter your details to continue as a guest.</p>

        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700" htmlFor="guestName">
              Name
            </label>
            <input
              id="guestName"
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700" htmlFor="guestEmail">
              Email
            </label>
            <input
              id="guestEmail"
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Login
          </button>

          <div className="mt-4 flex items-center justify-between gap-3">
            <Link
              to="/"
              className="text-sm font-semibold text-slate-400 transition-colors duration-200 hover:text-slate-600"
            >
              Login 
            </Link>
            <Link
              to="/Register"
              className="text-sm font-semibold text-slate-400 transition-colors duration-200 hover:text-slate-600"
            >
              Register 
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuestUser