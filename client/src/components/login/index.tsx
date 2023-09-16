import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='bg-gray-200 min-h-screen flex justify-center items-center'>
      <div className='bg-white p-6 rounded-lg shadow-md w-full max-w-md'>
        <div className='flex items-center mb-6'>
          <Link to="/home" className='mr-2'>
            <img
              src='https://images.collegedunia.com/public/college_data/images/logos/16336900566237748820344441900178615267475362148777984n.png'
              alt=''
              className='w-16 h-auto'
            />
          </Link>
          <div>
            <span className='text-4xl font-bold'>Rotract Stride</span>
            <span className='text-base font-bold block'>Rotract Official Marathon Organizer</span>
          </div>
        </div>
        <h1 className='text-2xl font-semibold mb-4'>Sign In</h1>
        <form>
          <div className='mb-4'>
            <label htmlFor='username' className='text-sm font-semibold'>
              Username
            </label>
            <input
              type='text'
              id='username'
              name='username'
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='text-sm font-semibold'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300'
            />
          </div>
          <button className='w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600'>
            Sign In
          </button>
        </form>
        <p className='mt-4 text-sm'>
          By continuing, you agree to Terms And Conditions of Use and Privacy Notice
        </p>
      </div>
    </div>
  );
}

export default Login;
