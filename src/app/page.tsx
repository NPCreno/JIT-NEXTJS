'use client';
import Link from "next/link";
import { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (emailValue === '') {
      setIsEmailValid(null); // Indicate no input
    } else {
      // Basic email validation regex
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
      setIsEmailValid(isValid);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-sky-500 to-sky-200">
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
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none"
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
              className={`w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:outline-none ${isEmailValid === null
                  ? 'focus:ring-slate-50' // No input
                  : isEmailValid
                    ? 'focus:ring-sky-400'  // Valid email
                    : 'focus:ring-rose-400 border-rose-400' // Invalid email
                }`}
              placeholder="john@example.com"
              value={email}
              onChange={handleEmailChange}
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
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none"
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
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <Link href="/samples">
            <button
              type="submit"
              className="w-full py-3 mt-4 text-lg font-semibold text-white bg-sky-400 rounded-lg shadow-md hover:bg-sky-600 hover:shadow-lg "
            >
              Sign Up
            </button>
          </Link>
        </form>

      </div>
    </div>
  );
}
