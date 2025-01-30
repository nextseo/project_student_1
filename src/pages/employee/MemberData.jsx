import React, { useState } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MemberData = () => {

const employees = [
    {
      id: 1,
      fname: "Karin",
      lname: "Doe",
      role: "Employee",
      email: "karin@example.com",
    },
    {
      id: 2,
      fname: "John",
      lname: "Smith",
      role: "Manager",
      email: "john@example.com",
    },
    {
      id: 3,
      fname: "Alice",
      lname: "Johnson",
      role: "HR",
      email: "alice@example.com",
    },
  ];

  const [search, setSearch] = useState("");

  // 🔹 กรองพนักงานตามชื่อ, นามสกุล หรือ ตำแหน่ง
  const filteredEmployees = employees.filter(
    (emp) =>
      emp.fname.toLowerCase().includes(search.toLowerCase()) ||
      emp.lname.toLowerCase().includes(search.toLowerCase()) ||
      emp.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
          <h1 className="text-xl font-bold">ข้อมูลสมาชิก</h1>
          <div className="mt-5 flex justify-between gap-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="ค้นหา ข้อมูลสมาชิก"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-gray-50 border border-gray-400 rounded-md px-4 py-1"
              />
              <button className="px-4 py-1 bg-red-500 text-white rounded-md">
                ค้นหา
              </button>
            </div>
            <div>
              <Link to="/employee/member/add" className="px-4 py-1 bg-blue-600 text-white rounded-md">
                + เพิ่มข้อมูลสมาชิก
              </Link>
            </div>
          </div>
    
          {/* Table */}
          <div className="overflow-x-auto mt-5">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="border border-gray-300 p-2">ID</th>
                  <th className="border border-gray-300 p-2">ชื่อ</th>
                  <th className="border border-gray-300 p-2">นามสกุล</th>
                  <th className="border border-gray-300 p-2">เลขบัตรประชาชน</th>
                  <th className="border border-gray-300 p-2">อีเมล</th>
                  <th className="border border-gray-300 p-2">เบอร์โทร</th>
                  <th className="border border-gray-300 p-2">ที่อยู่</th>
                  <th className="border border-gray-300 p-2">วันที่เริ่มงาน</th>
                  <th className="border border-gray-300 p-2">สถานะ</th>
                  <th className="border border-gray-300 p-2">แก้ไข/ลบ</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.length > 0 ? (
                  filteredEmployees.map((emp) => (
                    <tr key={emp.id} className="hover:bg-gray-100">
                      <td className="border border-gray-300 p-2 text-center">
                        {emp.id}
                      </td>
                      <td className="border border-gray-300 p-2">{emp.fname}</td>
                      <td className="border border-gray-300 p-2">{emp.lname}</td>
                      <td className="border border-gray-300 p-2">{emp.role}</td>
                      <td className="border border-gray-300 p-2">{emp.email}</td>
                      <td className="border border-gray-300 p-2">{emp.email}</td>
                      <td className="border border-gray-300 p-2">{emp.email}</td>
                      <td className="border border-gray-300 p-2">{emp.email}</td>
                      <td className="border border-gray-300 p-2">{emp.email}</td>
                      <td className="border border-gray-300 p-2">
                        <div className="flex gap-2 justify-center">
                          <FaRegEdit size={18} />
                          <FaRegTrashAlt color="red" size={18} />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center p-4 text-gray-500">
                      ไม่พบข้อมูล
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
    
        </div>
  )
}

export default MemberData