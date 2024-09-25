import React, { useState } from 'react';
import Checkbox from '../components/Checkbox';
import { useNavigate } from 'react-router-dom'; 
import Cookies from 'universal-cookie'; 
import axios from 'axios'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); 
  const cookies = new Cookies(); // Instantiate Cookies

  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/v1/users/login', {
        email,
        password
      });
      
      const cookieOptions = rememberMe ? { expires: 7 } : {};
      cookies.set('token', response.data.token, { path: '/', ...cookieOptions });
      console.log('Login successful! Token:', response.data.token);
      navigate('/');
    } catch (error) {
      setError(error.response?.data?.message || 'Invalid email or password.'); // Improved error handling
      console.log(error);
    }
  };

  return (
    <div className="flex mx-auto justify-center items-center h-screen">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-2xl">
        <div className="text-center">
          <h2 className="mt-6 text-4xl font-bold text-gray-900">Welcome Back</h2>
          <p className="mt-2 text-gray-900 text-sm">Sign in to your account to continue shopping</p>
        </div>
        {error && <div className="text-red-500 text-center">{error}</div>} 
        <form className="mt-8 space-y-4" onSubmit={onSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="email-or-username" className="sr-only">Email or Username</label>
              <input 
                onChange={(e) => setEmail(e.target.value)}
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none focus:ring-primary sm:text-sm"
                type="text"
                name="email-or-username"
                id="email-or-username"
                placeholder="Email or Username"
                autoComplete="off" 
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none focus:ring-primary sm:text-sm"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                autoComplete="new-password"
                required
              />
            </div>
          </div>
          <div className="flex justify-between">
            <Checkbox
              id="remember-me"
              label="Remember me"
              checked={rememberMe}
              onChange={handleCheckboxChange}
            />
            <div>
              <a href="/forgot-password" className="text-sm text-slate-800 hover:underline">Forgot your password?</a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="relative py-3 flex justify-center w-full rounded-md border border-transparent bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="mt-6 text-center text-md">
          <p className="text-gray-700">
            Don't have an account?{' '}
            <a 
              className="font-medium text-slate-800 hover:text-slate-900 hover:underline"
              href="/signup"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
