import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`/api/employee-login`);

    try {
      // const res = await axios.post(
      //   `${process.env.REACT_APP_API}/employee-login`,
      //   {
      //     Username: email,
      //     Password: password,
      //   }
      // );

      // if (res.data.results.length > 0) {
      //   const role = "employee";
      //   toast.success(res.data.message);
      //   const { emp_id, emp_fname, emp_lname } = res.data.results[0];
      //   const data = { emp_id, emp_fname, emp_lname, role };
      //   localStorage.setItem("auth_react", JSON.stringify(data));
      //   window.location.reload();
      // } else {
      //   toast.error("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
      // }

      if (email === "admin" && password === "1234") {
        const role = "employee";
        toast.success("เข้าสู่ระบบสำเร็จ");
        // const { emp_id, emp_fname, emp_lname } = res.data.results[0];
        const data = { emp_id : 1, emp_fname : "admin", emp_lname : "dev" , role };
        localStorage.setItem("auth_react", JSON.stringify(data));
        window.location.reload();
      } else {
        toast.error("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
      }
    } catch (error) {
      console.log(error);
      toast.error("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  useEffect(() => {
    const authData = localStorage.getItem("auth_react");
    if (authData) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 border border-gray-300 p-6 rounded shadow-md"
      >
        <h2 className="text-2xl mb-4">เข้าสู่ระบบ</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
          placeholder="Username"
          className="mb-4 p-2 border border-gray-400 rounded-md w-full"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value.trim())}
          placeholder="Password"
          className="mb-4 p-2 border border-gray-400 rounded-md w-full"
        />

        <div className="flex flex-col items-center justify-center lg:flex-row gap-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            เข้าสู่ระบบ
          </button>

          <Link
            className="w-full bg-red-500 text-white text-center p-2 rounded"
            to="/"
          >
            กลับหน้าหลัก
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
