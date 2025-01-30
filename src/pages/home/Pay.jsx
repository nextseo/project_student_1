import React from "react";

const Pay = () => {
  return (
    <div className="mx-auto container ">
      <h1 className="text-2xl text-amber-800 text-center">แจ้งชำระเงิน</h1>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-4">
        <p className="text-start">เลขที่ใบสั่งซื้อ</p>
        <input
          type="text"
          className="bg-white px-4 py-2 w-72 border border-gray-400 rounded-md "
          placeholder="กรอกเลขที่ใบสั่งซื้อ"
        />
      </div>
      <p className="text-center text-sm mt-2 text-gray-700">
        สามารถตรวจสอบหมายเลขได้จากอีเมลยืนยันรายการสั่งซื้อ
      </p>

      <div className="flex flex-col lg:flex-row gap-4 mt-6">
        <div className="w-full">
          <p>ชื่อ</p>
          <input
            type="text"
            className="bg-white px-4 py-2 w-full border border-gray-400 rounded-md"
            placeholder="ชื่อ"
          />
        </div>
        <div className="w-full">
          <p>อีเมล</p>
          <input
            type="text"
            className="bg-white px-4 py-2 w-full border border-gray-400 rounded-md"
            placeholder="อีเมล"
          />
        </div>
        <div className="w-full">
          <p>เบอร์โทร</p>
          <input
            type="number"
            className="bg-white px-4 py-2 w-full border border-gray-400 rounded-md"
            placeholder="เบอร์โทร"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mt-6">
        <div className="w-full">
          <p>วิธีการชำระเงิน</p>
          <select
            name="Sex"
            className="bg-gray-50  px-4 py-2 rounded-lg border border-gray-400 w-full"
          >
            <option value="">เลือกธนาคาร</option>
            <option value="ธนาคารกรุงเทพ">ธนาคารกรุงเทพ</option>
            <option value="ธนาคารออมสิน">ธนาคารออมสิน</option>
            <option value="ไม่เลือก">ไม่เลือก</option>
          </select>
        </div>
        <div className="w-full">
          <p>วันที่ชำระ</p>
          <input
            type="date"
            className="bg-white px-4 py-2 w-full border border-gray-400 rounded-md"
            placeholder="อีเมล"
          />
        </div>
        <div className="w-full">
          <p>เวลาชำระ</p>
          <input
            type="time"
            className="bg-white px-4 py-2 w-full border border-gray-400 rounded-md"
            placeholder="เบอร์โทร"
          />
        </div>
        <div className="w-full">
          <p>หลักฐานการชำระเงิน</p>
          <input
            type="file"
            className="bg-white px-4 py-2 w-full border border-gray-400 rounded-md"
            placeholder="เบอร์โทร"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-12">
        <div className="w-full">
            <p>ยืนยันการชำระเงิน ORDER ID 1234</p>

            <img
              src="/images/home_6.webp"
              className="w-full rounded-lg mt-4"
              alt=""
            />

        </div>

        <div className="w-full">

        <div className="">
          <p>ยอดที่ต้องชำระ</p>
          <input
            disabled
            type="text"
            value={100}
            className="bg-gray-300 px-4 py-2 w-full border border-gray-400 rounded-md"
            placeholder="เบอร์โทร"
          />
        </div>

        <div className="mt-6">
          <p>วันที่ชำระ</p>
          <input
            
            type="date"
            value={100}
            className="bg-white px-4 py-2 w-full border border-gray-400 rounded-md"
            placeholder="เบอร์โทร"
          />
        </div>

        <div className="mt-6">
          <p>เวลาชำระ</p>
          <input
            
            type="time"
            value={100}
            className="bg-white px-4 py-2 w-full border border-gray-400 rounded-md"
            placeholder="เบอร์โทร"
          />
        </div>



        </div>

      </div>
    </div>
  );
};

export default Pay;
