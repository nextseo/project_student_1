import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-3xl">Nextsoftware Hello World</h1> <br />
      <p></p> <br />
      <Link to="/login" className="bg-red-500 text-white py-2 px-4 rounded">
        เข้าสู่ระบบ
      </Link>

    </div>
  );
};

export default Home;