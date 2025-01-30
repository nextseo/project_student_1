import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link , Outlet , useLocation  } from "react-router-dom";


const Layout = ({ children }) => {
  const [menu_1, setMenu_1] = useState(false);
  const [menu_2, setMenu_2] = useState(false);
  const location = useLocation();

  

  const openMenu = (number) => {
    if (number == 1) {
      setMenu_1(!menu_1);
      setMenu_2(false);
    } else {
      setMenu_2(!menu_2);
      setMenu_1(false);
    }
  };

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
    <div>
      <Header openMenu={openMenu} />

      {/* Contents  */}
      <section
        className={`${menu_1 ? "py-0 " : "py-6"} bg-[#fbeee6] px-10 lg:px-36 `}
      >
        <div className="flex flex-row gap-4 mx-auto container    ">
          {/* Left */}
          <div
            className={` ${
              menu_1 ? "block w-60 absolute bg-white  shadow-xl " : "hidden "
            }   lg:block w-1/6 px-0 `}
          >
            <img
              src="/images/home_1.png"
              alt=""
              className=" lg:-mt-16 w-52 hidden lg:block"
            />

            <p className="mt-4 py-2 font-semibold px-4 text-[#cd6155]">
              หมวดหมู่สินค้า
            </p>
            <ul className=" text-[#cd6155] flex flex-col gap-3">
              <li className="hover:bg-[#f6ddcc] hover:rounded-lg py-2 hover:font-semibold px-4 cursor-pointer">
                สินค้าใหม่
              </li>
              <li className="hover:bg-[#f6ddcc] hover:rounded-lg py-2 hover:font-semibold px-4 cursor-pointer">
                เบเกอรี่ ( Bakery ){" "}
              </li>
              <li className="hover:bg-[#f6ddcc] hover:rounded-lg py-2 hover:font-semibold px-4 cursor-pointer">
                เทศกาลวันวาเลนไทน์
              </li>
              <li className="hover:bg-[#f6ddcc] hover:rounded-lg py-2 hover:font-semibold px-4 cursor-pointer">
                เบเกอรี่ ( Bakery ){" "}
              </li>
              <li className="hover:bg-[#f6ddcc] hover:rounded-lg py-2 hover:font-semibold px-4 cursor-pointer">
                เทศกาลปีใหม่{" "}
              </li>
            </ul>
          </div>
          {/* Rifht */}
          <div className=" w-full lg:w-5/6   lg:mx-0">
            <header className="flex flex-row justify-between items-center">
              <div
                className={` ${
                  menu_2
                    ? "block w-60 absolute bg-white mt-48  shadow-xl px-5"
                    : "hidden "
                }   lg:block w-2/3 `}
              >
                <ul className="flex flex-col py-4  lg:flex-row gap-6 lg:gap-0 text-[#cd6155] text-md  font-semibold">
                  <li className={ ` ${location.pathname === "/" ? "bg-[#f6ddcc] border-2 border-amber-800" : "hover:bg-[#f6ddcc]"} px-4 py-1 rounded-md`}>
                  <Link onClick={()=>setMenu_2(false)} to="/">หน้าแรก </Link>
                  </li>
                  <li className="hover:bg-[#f6ddcc] px-4 py-1 rounded-md">
                    หมวดหมู่สินค้า
                  </li>
                  <li className={ ` ${location.pathname === "/pay" ? "bg-[#f6ddcc] border-2 border-amber-800" : "hover:bg-[#f6ddcc]"} px-4 py-1 rounded-md`}>
                    <Link onClick={()=>setMenu_2(false)} to="/pay">แจ้งชำระเงิน</Link>
                  </li>
                  <li className={ ` ${location.pathname === "/contact" ? "bg-[#f6ddcc] border-2 border-amber-800" : "hover:bg-[#f6ddcc]"} px-4 py-1 rounded-md`}>
                    <Link onClick={()=>setMenu_2(false)} to="/contact">ติดต่อเรา</Link>
                  </li>
                </ul>
              </div>

              <div className="w-1/3  justify-end hidden lg:flex">
                <img src="/images/home_2.png" alt="" className=" w-20" />
              </div>
            </header>

            <Outlet />

          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-[#cd6155] py-4  ">
        <div className="mx-auto container px-10 lg:px-36s">
          <p className="text-white text-xl text-center">
            'เบเกอรี่แสนอร่อย สำหรับทุกคนในครบครัว ทุกโอกาศทุกเทศกาล'
          </p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
