import { ItemReached } from "../../../molecul";

const Reached = () => {
  const Line = () => {
    return (
      <>
        <div
          className="block lg:hidden w-full bg-gray2 mx-auto my-8"
          style={{ height: 1 }}
        />
        <div className="hidden lg:block h-24 bg-gray2" style={{ width: 1 }} />
      </>
    );
  };
  return (
    <>
      <div className="px-10 lg:px-80 text-center lg:flex justify-between items-center mt-14 lg:mt-28">
        <ItemReached label="Players Top Up" value="290M+" />
        <Line />
        <ItemReached label="Games Available" value="12.500" />
        <Line />
        <ItemReached label="Happy Players" value="99,9%" />
        <Line />
        <ItemReached label="Rating Worldwide" value="4.7" />
      </div>
    </>
  );
};
export default Reached;
