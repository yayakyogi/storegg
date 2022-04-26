import { SidebarMenu, SidebarPop, SidebarUser } from "../../molecul";
import Avatar from "../../../assets/img/avatar-1.png";
import { useState } from "react";

const Sidebar = () => {
  const [menuActive, setMenuActive] = useState<string | undefined>("Overview");
  const menuSidebar = [
    ["Overview", "/member"],
    ["Transactions", "/transactions"],
    ["Messages", "/messages"],
    ["Card", "/card"],
    ["Rewards", "/rewards"],
    ["Settings", "/settings"],
    ["Log Out", "/logout"],
  ];
  return (
    <>
      <div className="fixed z-10 h-screen w-80 bg-white shadow-sm">
        {/* User info */}
        <div className="px-16 pb-10 pt-14">
          <SidebarUser
            imageUrl={Avatar}
            name="Shayna Anne"
            email="shayna@anne.com"
          />
        </div>
        {/* Sidebar menu */}
        <div className="pl-7">
          {menuSidebar.map((item, key) => {
            return (
              <SidebarMenu
                key={key}
                onClick={() => setMenuActive(item[0])}
                className="active hover:border-r-4 hover:border-blue text-grey font-semibold text-lg hover:bg-gray hover:text-black"
                text={item[0]}
                href={item[1]}
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
