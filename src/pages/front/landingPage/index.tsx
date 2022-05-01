import {
  Feature,
  FrontFooter,
  Hero,
  Navbar,
  Procedures,
  Reached,
  Story,
} from "../../../components";

const LandingPage = () => {
  return (
    <>
      <div className="px-4 md:px-16 lg:px-20 xl:px-32 pt-7 pb-10 lg:py-10 bg-white">
        <Navbar />
        <Hero />
        <Procedures />
        <Feature />
        <Reached />
        <Story />
      </div>
      <FrontFooter />
    </>
  );
};

export default LandingPage;
