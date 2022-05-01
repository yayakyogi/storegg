import { Button, Image } from "../../../atom";
import { CardTestimoni, CardNewGame } from "../../../molecul";
import { ImageLandingPage } from "../../../../assets/img";

const Hero = () => {
  return (
    <>
      <div className="mt-12 lg:flex justify-between items-center lg:px-0 2xl:px-48">
        <div className="lg:max-w-2xl">
          <h1 className="lg:text-lg text-grey mb-3">Hello gamers</h1>
          <h1 className="text-5xl font-bold text-black pr-8 lg:pr-12 leading-snug lg:leading-tight">
            Topup & Get a{" "}
            <span className="lg:border-b-8 lg:inline-block lg:h-14 lg:w-28 lg:text-right border-blue">
              New
            </span>{" "}
            <span className="lg:border-b-8 lg:inline-block lg:h-14 border-blue">
              Experience
            </span>{" "}
            in Gaming
          </h1>
          <p className="mt-7 lg:mt-10 text-base lg:text-xl font-normal text-black pr-14 lg:pr-28">
            Kami menyediakan jutaan cara untuk membantu players menjadi pemenang
            sejati
          </p>
          <div className="mt-20 lg:mt-12 lg:flex justify-start items-center">
            <Button
              type="link"
              href="/"
              className="w-full lg:w-56 block text-center text-white py-3.5 rounded-full bg-purple lg:text-lg font-medium"
            >
              Get Started
            </Button>
            <Button
              type="link"
              href="/"
              className="mt-5 lg:mt-0 w-full lg:w-40 block text-center text-black underline lg:text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <Image
            url={ImageLandingPage}
            alt="image landing page"
            style={{ marginLeft: "auto", width: 490, height: 484 }}
          />
          <div className="absolute top-24 -left-20">
            <CardTestimoni />
          </div>
          <div className="absolute bottom-24 -right-10">
            <CardNewGame />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
