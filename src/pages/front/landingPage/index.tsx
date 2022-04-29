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
      <div className="px-4 lg:px-32 py-7 lg:py-10 bg-white">
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
