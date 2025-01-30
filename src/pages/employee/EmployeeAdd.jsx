import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const EmployeeAdd = () => {
  const [sendData, setSendData] = useState({
    FirstName: "",
    LastName: "",
    Image: "",
    IdCard: "",
    Study: "",
    Birth: "",
    Sex: "",
    StatusLove: "",
    Address: "",
    Province: "",
    ZipCode: "",
    PhoneNumber: "",
    Email: "",
    Username: "",
    Password: "",
    StartDate: "",
    Status: "",
  });

  const handleInputData = (e) => {
    setSendData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handelSave = async () => {
    try {
      const data = {
        FirstName: sendData.FirstName || "11",
        LastName: sendData.LastName || "22",
        Image: sendData.Image || "33",
        IdCard: sendData.IdCard || "44",
        Study: sendData.Study || "55",
        Birth: sendData.Birth || "2025-01-30",
        Sex: sendData.Sex || "77",
        StatusLove: sendData.StatusLove || "88",
        Address: sendData.Address || "99",
        Province: sendData.Province || "123",
        ZipCode: sendData.ZipCode || "213",
        PhoneNumber: sendData.PhoneNumber || "123",
        Email: sendData.Email || "123",
        Username: sendData.Username || "123",
        Password: sendData.Password || "123",
        StartDate: sendData.StartDate || "2025-01-30",
        Status: sendData.Status || "213",
      };

      console.log('1111111111111');
      const res = await axios.post(
        `${process.env.REACT_APP_API}/employee-add`,
        data
      );

      

    //   console.log("data ", res.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex flex-row gap-4 items-center">
        <h1 className="text-xl font-bold">เพิ่มข้อมูลพนักงาน</h1>
        <Link
          to="/employee/employee/data"
          className="px-4 py-1 bg-red-500 text-white rounded-md"
        >
          กลับหน้าข้อมูลพนักงาน
        </Link>
      </div>

      {/* test : {JSON.stringify(sendData)} */}

      <div className="bg-white shadow-lg mt-8 px-6 py-8 border border-gray-200 rounded-md">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full">
            <p>รหัสพนักงาน</p>
            <input
              disabled
              type="text"
              placeholder="รหัสพนักงาน"
              className="bg-gray-200 mt-3 px-4 py-1 rounded-lg border border-gray-400"
            />
          </div>
          <div className="w-full">
            <p>ชื่อ</p>
            <input
              name="FirstName"
              value={sendData?.FirstName}
              onChange={(e) => handleInputData(e)}
              type="text"
              placeholder="FirstName"
              className="bg-gray-50 mt-3 px-4 py-1 rounded-lg border border-gray-400"
            />
          </div>
          <div className="w-full">
            <p>นามสกุล</p>
            <input
              name="LastName"
              value={sendData?.LastName}
              onChange={(e) => handleInputData(e)}
              type="text"
              placeholder="LastName"
              className="bg-gray-50 mt-3 px-4 py-1 rounded-lg border border-gray-400"
            />
          </div>
          <div className="w-full">
            <p>ชื่อ (Eng)</p>
            <input
              type="text"
              placeholder="ไม่มีตัวแปล"
              className="bg-gray-50 mt-3 px-4 py-1 rounded-lg border border-gray-400"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mt-5">
          <div className="w-full">
            <p>นามสกุล (Eng)</p>
            <input
              type="text"
              placeholder="ไม่มีตัวแปล"
              className="bg-gray-50 mt-3 px-4 py-1 rounded-lg border border-gray-400"
            />
          </div>
          <div className="w-full">
            <p>ชื่อเล่น</p>
            <input
              type="text"
              placeholder="ไม่มีตัวแปล"
              className="bg-gray-50 mt-3 px-4 py-1 rounded-lg border border-gray-400"
            />
          </div>
          <div className="w-full">
            <p>เพศ</p>
            <select
              name="Sex"
              value={sendData?.Sex}
              onChange={(e) => handleInputData(e)}
              className="bg-gray-50 mt-3 px-4 py-1 rounded-lg border border-gray-400 w-full"
            >
              <option value="">เลือกเพศ</option>
              <option value="ชาย">ชาย</option>
              <option value="หญิง">หญิง</option>
              <option value="ไม่เลือก">ไม่เลือก</option>
            </select>
          </div>
          <div className="w-full">
            <p>เลขบัตรประชาชน</p>
            <input
              name="IdCard"
              value={sendData?.IdCard}
              onChange={(e) => handleInputData(e)}
              type="text"
              placeholder="เลขบัตรประชาชน"
              className="bg-gray-50 mt-3 px-4 py-1 rounded-lg border border-gray-400"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mt-5">
          <div className="w-full">
            <p>ระดับการศึกษา</p>
            <select
              name="Study"
              value={sendData?.Study}
              onChange={(e) => handleInputData(e)}
              className="bg-gray-50 mt-3 px-4 py-1 rounded-lg border border-gray-400 w-full"
            >
              <option value="">เลือกระดับการศึกษา</option>
              <option value="มัธยมศึกษาตอนต้น">มัธยมศึกษาตอนต้น</option>
              <option value="มัธยมศึกษาตอนปลาย">มัธยมศึกษาตอนปลาย</option>
              <option value="สายอาชีพ">สายอาชีพ</option>
              <option value="ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)">
                ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)
              </option>
              <option value="ระดับปริญญาตรี (ป.ตรี)">
                ระดับปริญญาตรี (ป.ตรี)
              </option>
              <option value="ระดับปริญญาโท (ป.โท)">ระดับปริญญาโท (ป.โท)</option>
              <option value="ระดับปริญญาเอก ">ระดับปริญญาเอก </option>
            </select>
          </div>
          <div className="w-full">
            <p>วันเกิด</p>
            <input
              name="Birth"
              value={sendData?.Birth}
              onChange={(e) => handleInputData(e)}
              type="date"
              placeholder="วันเกิด"
              className="bg-gray-50 mt-3 px-4 py-1 rounded-lg border border-gray-400 w-full"
            />
          </div>
          <div className="w-full">
            <p>สถานภาพ</p>
            <select
              name="StatusLove"
              value={sendData?.StatusLove}
              onChange={(e) => handleInputData(e)}
              className="bg-gray-50 mt-3 px-4 py-1 rounded-lg border border-gray-400 w-full"
            >
              <option value="">เลือกสถานภาพ</option>
              <option value="โสด">โสด</option>
              <option value="แต่งงานแล้ว">แต่งงานแล้ว</option>
              <option value="หย่าล้าง">หย่าล้าง</option>
            </select>
          </div>
          <div className="w-full">
            <p>เบอร์โทร</p>
            <input
              name="PhoneNumber"
              value={sendData?.PhoneNumber}
              onChange={(e) => handleInputData(e)}
              type="text"
              placeholder="เบอร์โทร"
              className="bg-gray-50 mt-3 px-4 py-1 rounded-lg border border-gray-400"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mt-5">
          <div className="w-full">
            <p>อีเมล</p>
            <input
              name="Email"
              value={sendData?.Email}
              onChange={(e) => handleInputData(e)}
              type="email"
              placeholder="Email"
              className="bg-gray-50 mt-3 px-4 py-1 rounded-lg border border-gray-400"
            />
          </div>
          <div className="w-full">
            <p>รหัสผ่าน</p>
            <input
              name="Password"
              value={sendData?.Password}
              onChange={(e) => handleInputData(e)}
              type="password"
              placeholder="Password"
              className="bg-gray-50 mt-3 px-4 py-1 rounded-lg border border-gray-400"
            />
          </div>
          <div className="w-full">
            <p>วันเข้าทำงาน</p>
            <input
              name="StartDate"
              value={sendData?.StartDate}
              onChange={(e) => handleInputData(e)}
              type="date"
              placeholder=""
              className="bg-gray-50 mt-3 px-4 py-1 rounded-lg border border-gray-400"
            />
          </div>
          <div className="w-full">
            <p>สถานะ</p>
            <input
              name="Status"
              value={sendData?.Status}
              onChange={(e) => handleInputData(e)}
              type="text"
              placeholder="สถานะ"
              className="bg-gray-50 mt-3 px-4 py-1 rounded-lg border border-gray-400"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mt-5">
          <div className="w-full">
            <p>ที่อยู่</p>
            <input
              name="Address"
              value={sendData?.Address}
              onChange={(e) => handleInputData(e)}
              type="text"
              placeholder="ที่อยู่"
              className="bg-gray-50 mt-3 px-4 py-1 rounded-lg border border-gray-400"
            />
          </div>
          <div className="w-full">
            <p>จังหวัด</p>
            <input
              name="Province"
              value={sendData?.Province}
              onChange={(e) => handleInputData(e)}
              type="text"
              placeholder="จังหวัด"
              className="bg-gray-50 mt-3 px-4 py-1 rounded-lg border border-gray-400"
            />
          </div>
          <div className="w-full">
            <p>ไปษณีย์</p>
            <input
              name="ZipCode"
              value={sendData?.ZipCode}
              onChange={(e) => handleInputData(e)}
              type="text"
              placeholder="ไปษณีย์"
              className="bg-gray-50 mt-3 px-4 py-1 rounded-lg border border-gray-400"
            />
          </div>
          <div className="w-full"></div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={handelSave}
            className="px-4 py-1 bg-green-500 text-white rounded-md"
          >
            บันทึก
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAdd;
