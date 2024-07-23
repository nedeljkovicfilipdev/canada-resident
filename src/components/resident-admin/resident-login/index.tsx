// ResidentLogin.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, reset } from '../../../features/auth/authSlice';
import { AppDispatch, RootState } from '../../../app/store';
import { LoginError } from 'src/types/auth';

export const ResidentLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isLoading, isError } = useSelector((state: RootState) => state.auth);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await dispatch(login({ username, password })).unwrap();
      navigate('/panel');
    } catch (err) {
      const loginError = err as LoginError;
      console.error('Login failed:', loginError.message);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-900 bg-opacity-50 bg-[url('/images/canada-resident-poster3.jpg')] bg-cover bg-center">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-semibold text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="mb-2 block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-customblue"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-customblue"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-customblue px-4 py-2 text-lg font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-custombluehover focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-1"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
          {isError && <p className="text-red-500 mt-4">{isError}</p>}
        </form>
      </div>
    </section>
  );
};
