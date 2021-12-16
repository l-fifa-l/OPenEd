import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Spinner from './micro/Spinner';

export default function Login() {
  const [email, setEmail] = useState('starktestic@gmail.com');
  const [password, setPassword] = useState('samosa');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();

      console.log(email, password);
      const { data } = await axios.post(`/api/login`, {
        email,
        password,
      });
      toast.success('Login successful');
      setLoading(false);
      console.log('REGISTER RESPONSE', data);
    } catch (error) {
      setLoading(false);
      toast.error('Login failed');
    }
  };

  return (
    <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5 p-8 space-y-3 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form
        noValidate=""
        action=""
        className="space-y-6 ng-untouched ng-pristine ng-valid"
        onSubmit={handleSubmit}
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            type="text"
            name="Email"
            id="email"
            placeholder="email"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border-coolGray-300 bg-gray-50 text-gray-800"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-end text-xs text-gray-600">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
        <button
          type="submit"
          disabled={!email || !password || loading}
          className="block w-full p-3 text-center text-lg rounded-sm text-gray-50 bg-indigo-600"
        >
          {loading ? <Spinner /> : 'Sign in'}
        </button>
      </form>
      {/* Social Login */}
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        <p className="px-3 text-sm text-gray-600">Login with social accounts</p>
        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button aria-label="Log in with Google" className="p-3 rounded-sm">
          <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
        </button>
        <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
          <img src="https://img.icons8.com/color/48/000000/twitter.png" />
        </button>
        <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
          <img src="https://img.icons8.com/material-outlined/48/000000/github.png" />
        </button>
      </div>
      <p className="text-center text-sm sm:px-6 text-gray-600">
        Don't have an account?{' '}
        <Link href="/register">
          <a className="underline text-gray-800">Sign up</a>
        </Link>
      </p>
    </div>
  );
}
