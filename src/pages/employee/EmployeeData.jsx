import React from "react";

const EmployeeData = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">ข้อมูลพนักงาน</h1>
      <div className="mt-5 flex justify-between gap-4">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="ค้นหา"
            className="bg-gray-50 border border-gray-400 rounded-md px-4 py-1"
          />
          <button className="px-4 py-1 bg-red-500 text-white rounded-md">
            ค้นหา
          </button>
        </div>
        <div>
          <button className="px-4 py-1 bg-blue-600 text-white rounded-md">
            + เพิ่มข้อมูลพนักงาน
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeData;
