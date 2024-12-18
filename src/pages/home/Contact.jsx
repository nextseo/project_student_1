import React from "react";
import { FaSignOutAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="mx-auto container">
      <h1 className="text-2xl text-amber-800 text-center">ติดต่อเรา</h1>
        <ul className="mt-10 flex flex-col justify-start lg:justify-center items-start lg:items-center gap-6 mb-10">
          <li className="flex items-center gap-2">
            <FaSignOutAlt
              className="bg-red-500 rounded-full p-2 text-white"
              size={40}
            />{" "}
            <p className="bg-amber-700 bg-opacity-50 px-6 py-2 rounded-md w-full lg:w-96">097-183-2104</p>
          </li>

          <li className="flex items-center gap-2">
            <FaSignOutAlt
              className="bg-red-500 rounded-full p-2 text-white"
              size={40}
            />{" "}
            <p className="bg-amber-700 bg-opacity-50 px-6 py-2 rounded-md w-full lg:w-96">Nanabakery.shop</p>
          </li>

          <li className="flex items-center gap-2">
            <FaSignOutAlt
              className="bg-red-500 rounded-full p-2 text-white"
              size={40}
            />{" "}
            <p className="bg-amber-700 bg-opacity-50 px-6 py-2 rounded-md w-full lg:w-96">@Nanabakery.shop</p>
          </li>

          <li className="flex items-center gap-2">
            <FaSignOutAlt
              className="bg-red-500 rounded-full p-2 text-white"
              size={40}
            />{" "}
            <p className="bg-amber-700 bg-opacity-50 px-6 py-2 rounded-md w-full lg:w-96">YouTube.com/Nanabakery-shop</p>
          </li>

          <li className="flex items-center gap-2">
            <FaSignOutAlt
              className="bg-red-500 rounded-full p-2 text-white"
              size={40}
            />{" "}
            <p className="bg-amber-700 bg-opacity-50 px-6 py-2 rounded-md w-full lg:w-96">  ที่อยู่: นครขื่อนขันธ์ 3/1 บางพึ่ง อ.พระประแดง สมุทรปราการ 10130 </p>
          </li>

      
        </ul>
    </div>
  );
};

export default Contact;
