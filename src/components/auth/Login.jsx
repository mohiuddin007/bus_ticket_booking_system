import { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', { username, password });
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

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
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full mb-4 "
          onClick={handleLogin}
        >
          Login
        </button>

        <div className="flex items-center justify-between">
          <hr className="flex-grow border-t border-gray-400 mr-4" />

          <span className="text-sm text-gray-500">Or login with</span>

          <hr className="flex-grow border-t border-gray-400 ml-4" />
        </div>

        <div className="flex justify-around mt-4">
          <button
            className="bg-red-600 text-white p-2 rounded-md w-full hover:bg-red-700 m-2"
            onClick={() => handleSocialLogin('Google')}
          >
            Google
          </button>

          <button
            className="bg-blue-600 text-white p-2 rounded-md w-full hover:bg-blue-700 m-2"
            onClick={() => handleSocialLogin('Facebook')}
          >
            Facebook
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Create a new account <a href="/signup" className="text-blue-500 hover:underline">SignUp here</a>.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
