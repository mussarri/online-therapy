import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header
      className="main h-[74px]"
      style={{
        color: "rgb(29, 38, 48)",
        backdropFilter: "blur(8px)",
        boxShadow: "rgba(0, 0, 0, 0.5) 0px 8px 6px -10px",
        backgroundColor: "rgba(248, 249, 250, 0.8)",
      }}
    >
      <div className="px-6 mx-auto max-w-[1440px] w-full h-full">
        <div className="py-3 w-full h-full flex items-center justify-between ">
          <div className="hidden lg:block relative overflow-hidden h-full w-[100px]">
            <Image
              src={"/logo/sakin hayat logo.svg"}
              alt=""
              width={100}
              height={80}
              objectFit="contain"
            />
          </div>
          <div className="flex items-center">
            <ul className="flex gap-[24px]">
              <li>
                <a href="">Dashboard</a>
              </li>
              <li>
                <a href="">Components</a>
              </li>
              <li>
                <a href="">Forms</a>
              </li>
              <li>
                <a href="">About </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
