import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { LuCircleUser } from "react-icons/lu";
import { Link } from "react-router-dom";


const Header = ({openMenu}) => {
  return (
    <div>
      {/* Header */}
      <header className="bg-yellow-900 py-4   ">
        <div className="mx-auto container flex justify-end px-10 lg:px-36">
          <ul className="flex flex-row gap-4 text-white ">
            <li
              onClick={() => openMenu(1)}
              className="block lg:hidden cursor-pointer"
            >
              เมนู 1
            </li>
            <li
              onClick={() => openMenu(2)}
              className="block lg:hidden cursor-pointer"
            >
              เมนู 2
            </li>
            <li className="flex flex-row gap-1 items-center">
              <FaSignOutAlt size={20} />
              <Link to="/login"> เข้าสู่ระบบ</Link>
            </li>
            <li className="flex flex-row gap-1 items-center">
              {" "}
              <LuCircleUser size={20} /> <p>สมัครสมาชิก</p>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
