import { Logo } from "../../../../assets/icon";
import { Button, Image } from "../../../atom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-12 lg:mb-28">
        <Image type="imageIcon" url={Logo} alt="logo" />
        <div className="w-1/2 hidden lg:flex justify-between items-center">
          <Button
            type="link"
            href="/"
            className="font-medium text-lg text-black"
          >
            Home
          </Button>
          <Button
            type="link"
            href="/games"
            className="font-regular text-lg text-grey hover:border-b hover:border-black hover:text-black"
          >
            Games
          </Button>
          <Button
            type="link"
            href="/rewards"
            className="font-regular text-lg text-grey hover:border-b hover:border-black hover:text-black"
          >
            Rewards
          </Button>
          <Button
            type="link"
            href="/discover"
            className="font-regular text-lg text-grey hover:border-b hover:border-black hover:text-black"
          >
            Discover
          </Button>
          <Button
            type="link"
            href="/global-rank"
            className="font-regular text-lg text-grey hover:border-b hover:border-black hover:text-black"
          >
            Global Rank
          </Button>
          <Button
            type="link"
            href="/login"
            className="font-regular text-lg text-black px-8 py-2 rounded-full bg-gray2 hover:bg-black hover:text-white transition ease-in-out duration-300"
          >
            Sign In
          </Button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
