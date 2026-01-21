import { userArr ,checkFeildsFun} from '../data'
import type{ User} from '../data'
import { Link } from 'react-router-dom'
type props = {
    userId: string
    username: string
    email: string
    setUserId: (userId: string) => void
    setUsername: (username: string) => void
    setEmail: (email: string) => void
}
    const MainPage = ({userId,username,email,setUserId,setUsername,setEmail}:props) => {
    return (
        <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">BaseUser</h1>
        <p className="mt-1 text-sm text-slate-600">Enter the user details below.</p>

        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700" htmlFor="id">
              Id
            </label>
            <input
              id="id"
              type="text"
              placeholder="id"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700" htmlFor="userName">
              Username
            </label>
            <input
              id="userName"
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-4">
          <Link
            // onClick={handleclick} 
            to='/'
            className="text-sm font-semibold text-slate-700 hover:text-slate-900"
          >
            Login
          </Link>
          <Link
            to="/Register"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Register
          </Link>
          <Link
            to="/GuestUster"
            className="text-sm font-semibold text-slate-700 hover:text-slate-900"
          >
            GuestUster
          </Link>
        </div>
      </div>
    </div>
    )
}
export default MainPage