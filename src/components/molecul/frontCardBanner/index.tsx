import { Image, Text } from "../../atom";
import { ImageAvatar, ImageNewGame } from "../../../assets/img";
import { IcStar } from "../../../assets/icon";

const CardTestimoni = () => {
  return (
    <>
      <div className="bg-white rounded-xl py-5 px-7 shadow-2xl">
        <div className="flex justify-start items-center">
          <div className="w-14 h-14 rounded-full">
            <Image url={ImageAvatar} alt="image avatar" />
          </div>
          <div className="ml-3">
            <Text
              type="fs-16"
              weight="medium"
              text="Shayna Anne"
              color="black"
            />
            <Text type="fs-14" text="Professional Gamer" />
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <img src={IcStar} className="w-6 h-6" alt="icon rating" />
          <img src={IcStar} className="w-6 h-6" alt="icon rating" />
          <img src={IcStar} className="w-6 h-6" alt="icon rating" />
          <img src={IcStar} className="w-6 h-6" alt="icon rating" />
          <img src={IcStar} className="w-6 h-6" alt="icon rating" />
        </div>
      </div>
    </>
  );
};

const CardNewGame = () => {
  return (
    <>
      <div className="px-6 py-5 rounded-2xl bg-white shadow-2xl">
        <div className="w-20 h-20 rounded-full">
          <Image url={ImageNewGame} alt="image new game" />
        </div>
        <div className="bg-blue text-white w-16 text-sm rounded-md -mt-3 text-center mx-auto relative z-10">
          New
        </div>
        <Text
          type="fs-14"
          weight="medium"
          text="Lann Knight"
          color="black"
          style={{ textAlign: "center", marginTop: 5 }}
        />
        <Text
          type="fs-12"
          weight="regular"
          text="Dota 2"
          color="grey"
          style={{ textAlign: "center" }}
        />
      </div>
    </>
  );
};

export { CardTestimoni, CardNewGame };
