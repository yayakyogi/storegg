import { Image, Text, Button } from "../../atom";
import { Icon2 } from "../../../assets/icon";

const SidebarPop = () => {
  return (
    <>
      <div className="p-5 bg-gray rounded-2xl shadow">
        <div className="flex justify-start items-center mb-5">
          <Image type="imageIcon" url={Icon2} alt="icon" />
          <div className="ml-4">
            <Text type="fs-16" weight="medium" color="black" text="Top Up &" />
            <Text
              type="fs-16"
              weight="medium"
              color="black"
              text="Be The Winner"
            />
          </div>
        </div>
        <Button
          type="link"
          href="/"
          className="bg-purple px-5 py-1.5 block text-center text-sm font-medium text-white rounded-full focus:ring-2 ring-white hover:shadow-lg duration-200 ease-in-out"
        >
          Get Started
        </Button>
      </div>
    </>
  );
};

export default SidebarPop;
