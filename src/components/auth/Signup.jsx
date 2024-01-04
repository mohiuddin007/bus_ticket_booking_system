import { useState } from 'react';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log('Signing up with:', { username, email, password });
  };

  const handleSocialSignUp = (provider) => {
    console.log(`Signing up with ${provider}`);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
          <input
            type="text"
            id="username"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 w-full mb-4"
          onClick={handleSignUp}
        >
          Sign Up
        </button>

        <div className="flex items-center justify-between">
          <hr className="flex-grow border-t border-gray-400 mr-4" />

          <span className="text-sm text-gray-500">Or sign up with</span>

          <hr className="flex-grow border-t border-gray-400 ml-4" />
        </div>

        <div className="flex justify-around mt-4">
          <button
            className="bg-red-600 text-white p-2 rounded-md w-full m-2 hover:bg-red-700"
            onClick={() => handleSocialSignUp('Google')}
          >
            Google
          </button>

          <button
            className="bg-blue-600 text-white p-2 rounded-md w-full m-2 hover:bg-blue-700"
            onClick={() => handleSocialSignUp('Facebook')}
          >
            Facebook
          </button>
        </div>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login here</a>.
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
