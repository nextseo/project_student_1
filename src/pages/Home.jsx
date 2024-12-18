import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { LuCircleUser } from "react-icons/lu";



const Home = () => {
  const [menu_1, setMenu_1] = useState(false)
  const [menu_2, setMenu_2] = useState(false)

  const openMenu = (number)=> {
    if(number == 1){
      setMenu_1( ! menu_1)
      setMenu_2(false)
    }else {
      setMenu_2( ! menu_2)
      setMenu_1(false)

    }

  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenu_1(false); 
        setMenu_2(false); 
      }
    };

    // ตรวจสอบขนาดหน้าจอครั้งแรก
    handleResize();

    // เพิ่ม event listener เพื่อตรวจจับการเปลี่ยนแปลงขนาดหน้าจอ
    window.addEventListener("resize", handleResize);

    return () => {
      // ลบ event listener เมื่อ component ถูก unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      {/* Header */}
      <header className="bg-amber-700 py-4   ">
        <div className="mx-auto container flex justify-end">
          <ul className="flex flex-row gap-4 text-white ">
            <li onClick={()=>openMenu(1)} className="block lg:hidden cursor-pointer">เมนู 1</li>
            <li onClick={()=>openMenu(2)} className="block lg:hidden cursor-pointer">เมนู 2</li>
            <li  className="flex flex-row gap-1 items-center">
              <FaSignOutAlt size={20} />
              <Link to="/login"> เข้าสู่ระบบ</Link>
            </li>
            <li className="flex flex-row gap-1 items-center"> <LuCircleUser size={20} /> <p>สมัครสมาชิก</p></li>
          </ul>
        </div>
      </header>

      {/* Contents  */}
      <section className={`${menu_1 ? "py-0 " : "py-6"} bg-amber-100 `}>
        <div className="flex flex-row gap-4 mx-auto container    ">
          {/* Left */}
          <div className={ ` ${menu_1 ? "block w-full absolute bg-white  shadow-xl" : "hidden "}   lg:block w-1/6 `}>
            <img src="/images/home_1.png" alt="" className=" lg:-mt-16 w-52 hidden lg:block" />
            <ul className="py-4 text-amber-800 flex flex-col gap-3">
              <li className="hover:bg-amber-200 hover:rounded-lg py-2 hover:font-semibold px-4 cursor-pointer">
                หมวดหมู่สินค้า
              </li>
              <li className="hover:bg-amber-200 hover:rounded-lg py-2 hover:font-semibold px-4 cursor-pointer">
                สินค้าใหม่
              </li>
              <li className="hover:bg-amber-200 hover:rounded-lg py-2 hover:font-semibold px-4 cursor-pointer">
                เบเกอรี่ ( Bakery ){" "}
              </li>
              <li className="hover:bg-amber-200 hover:rounded-lg py-2 hover:font-semibold px-4 cursor-pointer">
                เทศกาลวันวาเลนไทน์
              </li>
              <li className="hover:bg-amber-200 hover:rounded-lg py-2 hover:font-semibold px-4 cursor-pointer">
                เบเกอรี่ ( Bakery ){" "}
              </li>
              <li className="hover:bg-amber-200 hover:rounded-lg py-2 hover:font-semibold px-4 cursor-pointer">
                เทศกาลปีใหม่{" "}
              </li>
            </ul>
          </div>
          {/* Rifht */}
          <div className=" w-full lg:w-5/6   lg:mx-0">
            <header className="flex flex-row justify-between items-center">
              <div className={` ${menu_2 ? "block w-full absolute bg-white mt-48  shadow-xl" : "hidden "}   lg:block w-2/3 `}>
                <ul className="flex flex-col py-4  lg:flex-row gap-6 lg:gap-3 text-amber-800 text-md lg:text-lg font-semibold">
                  <li className="hover:bg-amber-200 px-4 py-1 rounded-md">
                    หน้าแรก
                  </li>
                  <li className="hover:bg-amber-200 px-4 py-1 rounded-md">
                    หมวดหมู่สินค้า
                  </li>
                  <li className="hover:bg-amber-200 px-4 py-1 rounded-md">
                    แจ้งชำระเงิน
                  </li>
                  <li className="hover:bg-amber-200 px-4 py-1 rounded-md">
                    ติดต่อเรา
                  </li>
                </ul>
              </div>

              <div className="w-1/3  justify-end hidden lg:flex">
                <img src="/images/home_2.png" alt="" className=" w-20" />
              </div>
            </header>

            <h2 className="text-center text-amber-800 text-2xl mt-10">
              NEW ITEMS
            </h2>

            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-10  mx-10 lg:mx-0">
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
        </div>
      </section>

      {/* Footer */}
      <div className="bg-amber-700 py-4 ">
        <div className="mx-auto container">
          <p className="text-white text-xl text-center">
            'เบเกอรี่แสนอร่อย สำหรับทุกคนในครบครัว ทุกโอกาศทุกเทศกาล'
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
