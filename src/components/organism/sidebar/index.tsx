import { SidebarMenu, SidebarPop, SidebarUser } from "../../molecul";
import Avatar from "../../../assets/img/avatar-1.png";
import { useState } from "react";

const Sidebar = () => {
  const [menuActive, setMenuActive] = useState<string | undefined>("Overview");
  const menuSidebar = [
    ["Overview", "/overview"],
    ["Transactions", "/transactions"],
    ["Messages", "/messages"],
    ["Card", "/card"],
    ["Rewards", "/rewards"],
    ["Settings", "/settings"],
    ["Log Out", "/logout"],
  ];
  return (
    <>
      <div className="fixed h-screen w-80 bg-white shadow-sm">
        {/* User info */}
        <div className="px-16 pb-10 pt-14">
          <SidebarUser
            imageUrl={Avatar}
            name="Shayna Anne"
            email="shayna@anne.com"
          />
        </div>
        {/* Sidebar menu */}
        <div className="pl-7 py-4">
          {menuSidebar.map((item, key) => {
            return (
              <SidebarMenu
                key={key}
                onClick={() => setMenuActive(item[0])}
                className={`${
                  item[0] === menuActive && "active border-r-4 border-blue"
                }`}
                text={item[0]}
                href={`#`}
                color={`${item[0] === menuActive ? "black" : "grey"}`}
              />
            );
          })}
        </div>
        {/* Sidebar pop */}
        <div className="px-7 py-12">
          <SidebarPop />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
