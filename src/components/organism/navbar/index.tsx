import { Logo } from "../../../assets/icon";
import { Button, Image } from "../../atom";

const Navbar = () => {
  const onClick = () => {
    const navbar = document.querySelector("#navbar");
    navbar?.classList.toggle("-translate-x-96");
    navbar?.classList.toggle("opacity-0");
    navbar?.classList.toggle("max-h-0");
    navbar?.classList.toggle("max-h-80");
    navbar?.classList.toggle("mt-5");
    console.log(navbar);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 lg:mb-28 relative z-20">
        <Image type="imageIcon" url={Logo} alt="logo" />
        <div
          id="navbar"
          className={`lg:pl-32 w-full md:w-3/4 lg:w-10/12 xl:w-3/6 flex flex-col lg:flex-row justify-between items-start lg:items-center lg:mt-0 max-h-0 opacity-0 -translate-x-96 lg:h-auto lg:opacity-100 lg:translate-x-0 transition-all ease-in-out duration-500`}
        >
          <Button
            type="link"
            href="/"
            className="font-regular text-lg text-grey hover:text-black py-3 lg:py-0 w-full lg:w-auto"
          >
            Home
          </Button>
          <Button
            type="link"
            href="/games"
            className="font-regular text-lg text-grey hover:text-black py-3 lg:py-0 w-full lg:w-auto"
          >
            Games
          </Button>
          <Button
            type="link"
            href="/rewards"
            className="font-regular text-lg text-grey hover:text-black py-3 lg:py-0 w-full lg:w-auto"
          >
            Rewards
          </Button>
          <Button
            type="link"
            href="/discover"
            className="font-regular text-lg text-grey hover:text-black py-3 lg:py-0 w-full lg:w-auto"
          >
            Discover
          </Button>
          <Button
            type="link"
            href="/global-rank"
            className="font-regular text-lg text-grey hover:text-black py-3 lg:py-0 w-full lg:w-auto"
          >
            Global Rank
          </Button>
          <Button
            type="link"
            href="/login"
            className="font-regular mt-3 lg:mt-0 w-full lg:w-auto text-center text-lg text-black px-8 py-2.5 rounded-full bg-gray2 hover:bg-black hover:text-white transition ease-in-out duration-300"
          >
            Sign In
          </Button>
        </div>
        <div
          onClick={onClick}
          className="absolute top-3 right-3 flex justify-center items-center lg:hidden w-12 h-12 border border-grey rounded-lg bg-white"
        >
          <div>
            <span className="block w-7 h-0.5 bg-grey"></span>
            <span className="block w-7 h-0.5 bg-grey my-1.5"></span>
            <span className="block w-7 h-0.5 bg-grey"></span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
