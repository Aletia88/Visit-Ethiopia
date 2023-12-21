import { useState } from 'react';
import { Link } from "react-router-dom";
//import { useHistory } from 'react-router-dom';

const Registration = () => {
  //const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegistration = (e) => {
    e.preventDefault();

    // Validate registration inputs
    if (username.trim() === '') {
      setError('Please enter a username');
      return;
    }

    if (password.trim() === '') {
      setError('Please enter a password');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Store registration data in localStorage
    const registrationData = {
      username,
      password,
    };
    localStorage.setItem('registrationData', JSON.stringify(registrationData));

    // Registration successful
    setError('');
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    alert('Registration successful!');

    // Redirect to login page
    // history.push('/login');
  };

  return (
    <div className="flex backg items-center justify-center h-screen w-screen">
      <div className='w-1/2 h-screen'>
        <img src="../../public/engin-akyurt-VCUSHIWzs0M-unsplash.jpg" alt=""  className='h-screen'/>
      </div>
      <div className=" w-1/2 h-screen bg-white flex flex-col items-center  rounded px-8 py-6 shadow-gray">
        <h1 className='font-whisper text-4xl mt-3 mb-9   font-extrabold text-[#271D3B]  align-center'>WELCOME</h1>
        <h2 className="text-2xl font-bold mb-6">Registration Page</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleRegistration} className='w-4/5 self-center'>
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
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className='flex items-center gap-4 flex-col'>

          
          <button
            type="submit"
            className="w-32 bg-black text-white px-4 py-2 rounded hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        {/* <a href="./Login.jsx">Login</a> */}
     
        <div className='flex'>
         
        <p>Already have an accout?</p>
        <Link to="../Login">
        <p className=' text-blue-800'>Login</p>
        </Link>
        </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;