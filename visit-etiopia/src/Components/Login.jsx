import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve the registration data from localStorage
    const registrationData = localStorage.getItem('registrationData');

    // Check if registration data exists
    if (!registrationData) {
      setError('No registration data found');
      return;
    }

    // Parse the registration data
    const { username: registeredUsername, password: registeredPassword } = JSON.parse(registrationData);

    // Check if the entered username and password match the registered data
    if (username === registeredUsername && password === registeredPassword) {
      // Login successful
      setAuthenticated(true);
      navigate('/'); // Redirect to the home page
    } else {
      // Login failed
      setError('Invalid credentials');
    }
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="flex  items-center justify-center min-h-screen bg-gray-100 ">
      <div className='w-1/2 h-screen'>
        <img src="../../public/engin-akyurt-VCUSHIWzs0M-unsplash.jpg" alt=""  className='h-screen'/>
      </div>
      <div className="w-1/2 h-screen bg-white flex flex-col items-center rounded px-8 py-6 shadow-gray justify-center">
        <h2 className="text-2xl font-bold mb-6">Login Page</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin} className='w-4/5 self-center'>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 items-center "
          >
            Login
          </button>
        </form>

        <p className="mt-4">
          Don't have an account?{' '}
          <Link
            to="/register"
            onClick={handleRegisterClick}
            className="text-blue-500 hover:text-blue-700"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;