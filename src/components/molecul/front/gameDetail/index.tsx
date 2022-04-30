import { Image } from "../../../atom";

interface GameDetailProps {
  imageUrl: string;
  title: string;
  category: string;
}

const GameDetail = ({ imageUrl, title, category }: GameDetailProps) => {
  return (
    <>
      <div className="w-full flex justify-start items-center mb-8">
        <div className="block lg:hidden mr-3 w-1/2 md:w-auto">
          <Image type="imageGameDetail" url={imageUrl} alt="imageGameDetail" />
        </div>
        <div>
          <h1 className="text-xl lg:text-4xl font-bold lg:max-w-sm text-black lg:leading-snug">
            {title}
          </h1>
          <p className="text-sm lg:text-lg text-grey mt-3">
            Category: {category}
          </p>
        </div>
      </div>
      <div className="w-full bg-gray2 my-8 lg:my-12" style={{ height: 1 }} />
    </>
  );
};
export default GameDetail;
