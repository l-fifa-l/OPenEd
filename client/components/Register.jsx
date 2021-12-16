import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Spinner from './micro/Spinner';
import Link from 'next/link';

export default function Register() {
  const [name, setName] = useState('vivek');
  const [email, setEmail] = useState('starktestic@gmail.com');
  const [password, setPassword] = useState('samosa');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      // console.table({ email, password });
      const { data } = await axios.post(`/api/register`, {
        name,
        email,
        password,
      });
      toast.success('Registration successful');
      setLoading(false);
      // console.log('REGISTER RESPONSE', data);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data);
    }
  };

  return (
    <div className="p-8 space-y-3 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold text-center">Register</h1>
      <form
        noValidate=""
        action=""
        className="space-y-6 ng-untouched ng-pristine ng-valid"
        onSubmit={handleSubmit}
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="text" className="block text-gray-600">
            name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          className="block w-full p-3 text-center text-lg rounded-sm text-gray-50 bg-indigo-600"
          disabled={!name || !email || !password || loading}
        >
          {loading ? <Spinner /> : 'Sign in'}
        </button>
      </form>
      {/* Social Register */}
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        <p className="px-3 text-sm text-gray-600">
          Register with social accounts
        </p>
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
        Have an account?{' '}
        <Link href="/login">
          <a className="underline text-gray-800">Log in</a>
        </Link>
      </p>
    </div>
  );
}
