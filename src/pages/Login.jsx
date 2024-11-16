import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = login(email, password);
    if (user) {
      navigate(`/${user.role}`);
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">เข้าสู่ระบบ</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
          placeholder="Username"
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value.trim())}
          placeholder="Password"
          className="mb-4 p-2 border rounded w-full"
        />

        <div className='flex flex-col items-center justify-center lg:flex-row gap-4'>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          เข้าสู่ระบบ
        </button>
        
        <Link className='w-full bg-red-500 text-white text-center p-2 rounded' to="/">กลับหน้าหลัก</Link>
        </div>

        <ul>
            <li>admin : admin / 1234</li>
            <li>พนักงานในร้าน : mmm / 1234</li>
            <li>ลูกค้า : uuu / 1234</li>
        </ul>
  
      </form>
    </div>
  );
};

export default Login;