import { Hero, Navbar } from "../../../components";

const LandingPage = () => {
  return (
    <>
      <div className="px-4 lg:px-40 xl:px-60 py-7 lg:py-10">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default LandingPage;
