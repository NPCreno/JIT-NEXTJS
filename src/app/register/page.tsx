import Link from "next/link";

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg transform transition-all duration-500 hover:shadow-2xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800">Create an Account</h2>
        <p className="text-center text-gray-600">Sign up to get started!</p>

        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <Link href="/jobs">
            <button
              type="submit"
              className="w-full py-3 mt-4 text-lg font-semibold text-white bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-600 hover:shadow-lg transition-all duration-300"
            >
              Sign Up
            </button>
          </Link>
        </form>

        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-500 font-semibold hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
