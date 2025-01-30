import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Home = ({ menu_1, menu_2, setMenu_1, setMenu_2 }) => {
  return (
    <div className="">
      <h2 className="text-center font-bold text-[#cd6155] text-2xl mt-4">
        NEW ITEMS
      </h2>

      <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-10  ">
        <div className="w-full">
          <div className="px-4 py-4 rounded-md border-2 border-[#cd6155] hover:bg-[#f6ddcc]">
            <img
              src="/images/home_3.png"
              className="w-full rounded-lg"
              alt=""
            />
            <p className="text-lg text-[#cd6155] mt-3 ">
              เค้กมะยงชิด (ขนาด 1 ปอนด์)
            </p>
            <p className="text-lg text-[#cd6155] ">MA-YONG-Chid-Cake</p>
            <p className="text-lg text-[#cd6155]  font-semibold ">350</p>
          </div>
        </div>
        <div className="w-full">
          <div className="px-4 py-4 rounded-md border-2 border-[#cd6155] hover:bg-[#f6ddcc]">
            <img
              src="/images/home_6.webp"
              className="w-full rounded-lg"
              alt=""
            />
            <p className="text-lg text-[#cd6155] mt-3 ">
              เค้กมะยงชิด (ขนาด 1 ปอนด์)
            </p>
            <p className="text-lg text-[#cd6155] ">MA-YONG-Chid-Cake</p>
            <p className="text-lg text-[#cd6155]  font-semibold ">500</p>
          </div>
        </div>
        <div className="w-full">
          <div className="px-4 py-4 rounded-md border-2 border-[#cd6155] hover:bg-[#f6ddcc]">
            <img
              src="/images/home_6.webp"
              className="w-full rounded-lg"
              alt=""
            />
            <p className="text-lg text-[#cd6155] mt-3 ">
              เค้กมะยงชิด (ขนาด 1 ปอนด์)
            </p>
            <p className="text-lg text-[#cd6155] ">MA-YONG-Chid-Cake</p>
            <p className="text-lg text-[#cd6155]  font-semibold ">200</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-10 ">
        <div className="w-full">
          <div className="px-4 py-4 rounded-md border-2 border-[#cd6155] hover:bg-[#f6ddcc]">
            <img
              src="/images/home_6.webp"
              className="w-full rounded-lg"
              alt=""
            />
            <p className="text-lg text-[#cd6155] mt-3 ">
              เค้กมะยงชิด (ขนาด 1 ปอนด์)
            </p>
            <p className="text-lg text-[#cd6155] ">MA-YONG-Chid-Cake</p>
            <p className="text-lg text-[#cd6155]  font-semibold ">700</p>
          </div>
        </div>
        <div className="w-full">
          <div className="px-4 py-4 rounded-md border-2 border-[#cd6155] hover:bg-[#f6ddcc]">
            <img
              src="/images/home_6.webp"
              className="w-full rounded-lg"
              alt=""
            />
            <p className="text-lg text-[#cd6155] mt-3 ">
              เค้กมะยงชิด (ขนาด 1 ปอนด์)
            </p>
            <p className="text-lg text-[#cd6155] ">MA-YONG-Chid-Cake</p>
            <p className="text-lg text-[#cd6155]  font-semibold ">800</p>
          </div>
        </div>
        <div className="w-full">
          <div className="px-4 py-4 rounded-md border-2 border-[#cd6155] hover:bg-[#f6ddcc]">
            <img
              src="/images/home_6.webp"
              className="w-full rounded-lg"
              alt=""
            />
            <p className="text-lg text-[#cd6155] mt-3 ">
              เค้กมะยงชิด (ขนาด 1 ปอนด์)
            </p>
            <p className="text-lg text-[#cd6155] ">MA-YONG-Chid-Cake</p>
            <p className="text-lg text-[#cd6155]  font-semibold ">550</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
