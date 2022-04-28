import { Button, Image } from "../../atom";
import { CardTestimoni, CardNewGame } from "../../molecul";
import { ImageLandingPage } from "../../../assets/img";

const FrontHero = () => {
  return (
    <>
      <div className="mt-12 lg:flex justify-between items-center">
        <div className="lg:max-w-2xl">
          <h1 className="text-lg text-grey mb-3">Hello gamers</h1>
          <h1
            className="text-4xl lg:text-6xl font-bold text-black pr-14"
            style={{ lineHeight: 1.2 }}
          >
            Topup & Get a{" "}
            <span className="lg:border-b-8 lg:inline-block lg:h-16 lg:w-36 lg:text-right border-blue">
              New
            </span>{" "}
            <span className="lg:border-b-8 lg:inline-block lg:h-16 border-blue">
              Experience
            </span>{" "}
            in Gaming
          </h1>
          <p className="mt-7 lg:mt-10 text-md lg:text-xl font-normal text-black pr-24 lg:pr-28">
            Kami menyediakan jutaan cara untuk membantu players menjadi pemenang
            sejati
          </p>
          <div className="mt-10 lg:flex justify-start items-center">
            <Button
              type="link"
              href="/"
              className="w-full lg:w-60 block text-center text-white py-3 rounded-full bg-purple lg:text-lg"
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
export default FrontHero;
