import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside
      style={{
        backgroundColor: "rgb(248, 249, 250)",
        width: 280,
        borderRight: "1px dashed rgb(190, 200, 208)",
        boxShadow: "none",
        overflowX: "hidden",
        transition: "width 225ms cubic-bezier(0.4, 0, 0.6, 1)",
        height: "100vh",
      }}
    >
      <div>
        <div className="logo pt-3">
          <Link href="/">
            <div
              className="h-full relative flex logo"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                minHeight: 74,
                width: "initial",
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 24,
              }}
            >
              <Image
                src={"/logo/sakin hayat logo.svg"}
                alt=""
                width={50}
                height={50}
                objectFit="contain"
              />
            </div>
          </Link>
        </div>
        <div className="pt-4">
          <div className="pl-6 pb-3">
            <h5>Dashboard</h5>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
