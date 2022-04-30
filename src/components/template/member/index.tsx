import { ReactNode } from "react";
import { Button } from "../../atom";
import { Sidebar } from "../../organism";

interface MemberTemplateProps {
  children: ReactNode;
}

const MemberTemplate = ({ children }: MemberTemplateProps) => {
  const onClick = () => {
    const node = document.querySelector(".sidebar");
    node?.classList.toggle("w-full");
    node?.classList.toggle("-translate-x-96");
    const hamburgerButton = document.querySelector(".hamburger-button");
    hamburgerButton?.classList.toggle("hamburger-active");
  };
  return (
    <>
      <div className="relative flex justify-start">
        <Sidebar />
        <div className="py-8 lg:py-12 ml-0 lg:ml-80 px-4 lg:px-12 w-full flex-1">
          {children}
        </div>
        <Button
          className="hamburger-button h-10 w-8 block lg:hidden absolute top-8 right-8 z-10"
          onClickAction={onClick}
        >
          <span className="hamburger-line bg-black block rounded-sm transition origin-top-left duration-300 ease-in-out"></span>
          <span className="hamburger-line bg-black block rounded-sm my-1.5 transition duration-300 ease-in-out"></span>
          <span className="hamburger-line bg-black block rounded-sm transition origin-bottom-left duration-300 ease-in-out"></span>
        </Button>
      </div>
    </>
  );
};

export default MemberTemplate;
