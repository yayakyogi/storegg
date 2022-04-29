import { Text } from "../../../atom";
import { CardFeature } from "../../../molecul";

import {
  ImageThumbnail1,
  ImageThumbnail2,
  ImageThumbnail3,
  ImageThumbnail4,
  ImageThumbnail5,
} from "../../../../assets/img";

const Feature = () => {
  return (
    <>
      <div className="mt-28 mb-8 w-60">
        <Text
          type="fs-42"
          weight="bold"
          text="Our Featured Game This Year"
          color="black"
        />
      </div>
      <div className="flex justify-between items-center overflow-x-auto h-80 px-1.5 last:mr-0">
        <CardFeature
          title="Super Mechs"
          category="Mobile"
          imageUrl={ImageThumbnail1}
        />
        <CardFeature
          title="Call of Duty: Modern"
          category="Mobile"
          imageUrl={ImageThumbnail2}
        />
        <CardFeature
          title="Mobile Legends"
          category="Mobile"
          imageUrl={ImageThumbnail3}
        />
        <CardFeature
          title="Clash of Clans"
          category="Mobile"
          imageUrl={ImageThumbnail4}
        />
        <CardFeature
          title="Valorant"
          category="Mobile"
          imageUrl={ImageThumbnail5}
        />
      </div>
    </>
  );
};
export default Feature;
