import { ReactNode } from "react";
import { Sidebar } from "../../organism";

interface MemberTemplateProps {
  children: ReactNode;
}

const MemberTemplate = ({ children }: MemberTemplateProps) => {
  return (
    <>
      <div className="flex justify-start">
        <Sidebar />
        <div className="py-12 ml-80 px-12 w-full flex-1">{children}</div>
      </div>
    </>
  );
};

export default MemberTemplate;
