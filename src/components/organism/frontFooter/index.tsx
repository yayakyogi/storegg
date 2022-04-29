import { Logo } from "../../../assets/icon";
import { Button, Text } from "../../atom";

const FrontFooter = () => {
  return (
    <>
      <div className="mt-20 flex flex-wrap justify-between py-14 lg:py-20 px-4 lg:px-32 bg-gray">
        <div className="text-center lg:text-left lg:mx-0 px-8">
          <img src={Logo} alt="logo" className="mx-auto lg:mx-0 w-16 h-16" />
          <div className="max-w-xs lg:pr-10">
            <Text
              type="fs-18"
              weight="regular"
              text="StoreGG membantu gamers untuk menjadi pemenang sejati"
              color="black"
              style={{ marginTop: 30 }}
            />
            <Text
              type="fs-18"
              weight="regular"
              text="Copyright &copy; 2021. All Rights Reserved."
              color="black"
              style={{ marginTop: 30 }}
            />
          </div>
        </div>
        <div className="w-1/2 lg:w-auto mt-12 lg:mt-0">
          <Text
            type="fs-20"
            weight="bold"
            text="Company"
            color="black"
            style={{ marginBottom: 12 }}
          />
          <Button
            type="link"
            href="/"
            className="block text-lg text-black mb-1.5"
          >
            About Us
          </Button>
          <Button
            type="link"
            href="/"
            className="block text-lg text-purple underline mb-1.5"
          >
            Press Realease
          </Button>
          <Button
            type="link"
            href="/"
            className="block text-lg text-black mb-1.5"
          >
            Terms of Use
          </Button>
          <Button
            type="link"
            href="/"
            className="block text-lg text-black mb-1.5"
          >
            Privacy & Policy
          </Button>
        </div>
        <div className="w-1/2 lg:w-auto mt-12 lg:mt-0">
          <Text
            type="fs-20"
            weight="bold"
            text="Support"
            color="black"
            style={{ marginBottom: 12 }}
          />
          <Button
            type="link"
            href="/"
            className="block text-lg text-black mb-1.5"
          >
            Refund Policy
          </Button>
          <Button
            type="link"
            href="/"
            className="block text-lg text-black mb-1.5"
          >
            Unlock Rewards
          </Button>
          <Button
            type="link"
            href="/"
            className="block text-lg text-black mb-1.5"
          >
            Live Chatting
          </Button>
        </div>
        <div className="w-full lg:w-auto mt-12 lg:mt-0">
          <Text
            type="fs-20"
            weight="bold"
            text="Connect"
            color="black"
            style={{ marginBottom: 12 }}
          />
          <Text
            type="fs-20"
            weight="regular"
            text="hi@store.gg"
            color="black"
            style={{ marginBottom: 4 }}
          />
          <Text
            type="fs-20"
            weight="regular"
            text="team@store.gg"
            color="black"
            style={{ marginBottom: 4 }}
          />
          <Text
            type="fs-20"
            weight="regular"
            text="Pasific 12, Jakarta Selatan"
            color="black"
            style={{ marginBottom: 4 }}
          />
          <Text
            type="fs-20"
            weight="regular"
            text="021 - 1122 - 9090"
            color="black"
            style={{ marginBottom: 4 }}
          />
        </div>
      </div>
    </>
  );
};
export default FrontFooter;
