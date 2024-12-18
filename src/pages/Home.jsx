import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/home/Header";



const Home = ({menu_1, menu_2,  setMenu_1, setMenu_2 }) => {


  

  return (
    <div className="">

<h2 className="text-center text-amber-800 text-2xl mt-4">
              NEW ITEMS
            </h2>

            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-10  ">
              <div className="w-full">
                <div className="px-4 py-4 rounded-md border-2 border-amber-700 hover:bg-amber-200">
                  <img
                    src="/images/home_3.png"
                    className="w-full rounded-lg"
                    alt=""
                  />
                  <p className="text-lg text-amber-800 mt-3 ">
                    เค้กมะยงชิด (ขนาด 1 ปอนด์)
                  </p> 
                  <p className="text-lg text-amber-800 ">MA-YONG-Chid-Cake</p>
                  <p className="text-lg text-amber-800  font-semibold ">350</p>
                </div>
              </div>
              <div className="w-full">
                <div className="px-4 py-4 rounded-md border-2 border-amber-700 hover:bg-amber-200">
                  <img
                    src="/images/home_4.png"
                    className="w-full rounded-lg"
                    alt=""
                  />
                  <p className="text-lg text-amber-800 mt-3 ">
                    เค้กมะยงชิด (ขนาด 1 ปอนด์)
                  </p>
                  <p className="text-lg text-amber-800 ">MA-YONG-Chid-Cake</p>
                  <p className="text-lg text-amber-800  font-semibold ">350</p>
                </div>
              </div>
              <div className="w-full">
                <div className="px-4 py-4 rounded-md border-2 border-amber-700 hover:bg-amber-200">
                  <img
                    src="/images/home_6.webp"
                    className="w-full rounded-lg"
                    alt=""
                  />
                  <p className="text-lg text-amber-800 mt-3 ">
                    เค้กมะยงชิด (ขนาด 1 ปอนด์)
                  </p>
                  <p className="text-lg text-amber-800 ">MA-YONG-Chid-Cake</p>
                  <p className="text-lg text-amber-800  font-semibold ">350</p>
                </div>
              </div>
            </div>


            
            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-10 ">
              <div className="w-full">
                <div className="px-4 py-4 rounded-md border-2 border-amber-700 hover:bg-amber-200">
                  <img
                    src="/images/home_3.png"
                    className="w-full rounded-lg"
                    alt=""
                  />
                  <p className="text-lg text-amber-800 mt-3 ">
                    เค้กมะยงชิด (ขนาด 1 ปอนด์)
                  </p>
                  <p className="text-lg text-amber-800 ">MA-YONG-Chid-Cake</p>
                  <p className="text-lg text-amber-800  font-semibold ">350</p>
                </div>
              </div>
              <div className="w-full">
                <div className="px-4 py-4 rounded-md border-2 border-amber-700 hover:bg-amber-200">
                  <img
                    src="/images/home_4.png"
                    className="w-full rounded-lg"
                    alt=""
                  />
                  <p className="text-lg text-amber-800 mt-3 ">
                    เค้กมะยงชิด (ขนาด 1 ปอนด์)
                  </p>
                  <p className="text-lg text-amber-800 ">MA-YONG-Chid-Cake</p>
                  <p className="text-lg text-amber-800  font-semibold ">350</p>
                </div>
              </div>
              <div className="w-full">
                <div className="px-4 py-4 rounded-md border-2 border-amber-700 hover:bg-amber-200">
                  <img
                    src="/images/home_6.webp"
                    className="w-full rounded-lg"
                    alt=""
                  />
                  <p className="text-lg text-amber-800 mt-3 ">
                    เค้กมะยงชิด (ขนาด 1 ปอนด์)
                  </p>
                  <p className="text-lg text-amber-800 ">MA-YONG-Chid-Cake</p>
                  <p className="text-lg text-amber-800  font-semibold ">350</p>
                </div>
              </div>
            </div>

    </div>
  );
};

export default Home;
