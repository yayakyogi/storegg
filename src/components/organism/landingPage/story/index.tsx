import { ImageStory } from "../../../../assets/img";
import { Button, Image, Text } from "../../../atom";

const Story = () => {
  return (
    <>
      <div className="mt-28 lg:px-40 flex justify-center items-center">
        <div className="hidden lg:block max-w-xl">
          <Image url={ImageStory} alt="image-story" />
        </div>
        <div className="px-2 lg:max-w-xs lg:ml-24">
          <Text
            type="fs-42"
            weight="bold"
            text="Win the battle."
            color="black"
          />
          <Text
            type="fs-42"
            weight="bold"
            text="be the Champion"
            color="black"
          />
          <Text
            type="fs-20"
            weight="regular"
            text="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
            color="black"
            style={{ marginBottom: 30, marginTop: 30 }}
          />
          <Button
            type="link"
            href="/"
            className="w-full lg:w-48 block text-center bg-gray2 rounded-full py-3 text-black text-lg"
          >
            Read Story
          </Button>
        </div>
      </div>
    </>
  );
};
export default Story;
