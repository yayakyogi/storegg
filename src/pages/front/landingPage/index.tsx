import { Feature, Hero, Navbar, Procedures } from "../../../components";

const LandingPage = () => {
  return (
    <>
      <div className="px-4 lg:px-32 py-7 lg:py-10 bg-white">
        <Navbar />
        <Hero />
        <Procedures />
        <Feature />
      </div>
    </>
  );
};

export default LandingPage;
