import { Image, Text } from "../../atom";
import { FormatRupiah } from "../../../utils";

interface ItemSpentProps {
  imageUrl: string;
  type: string;
  totalSpent: number;
}

const ItemSpent = ({ imageUrl, type, totalSpent }: ItemSpentProps) => {
  return (
    <>
      <div className="py-7 px-7 w-96 bg-white rounded-2xl shadow-sm">
        <div className="flex justify-start items-center mb-7">
          <Image type="imageIcon" url={imageUrl} alt="icon" />
          <div className="ml-3">
            <Text type="fs-16" weight="regular" text="Game" color="black" />
            <Text type="fs-16" weight="regular" text={type} color="black" />
          </div>
        </div>
        <Text type="fs-14" weight="regular" text="Total Spent" />
        <Text
          type="fs-22"
          weight="medium"
          text={`Rp ${FormatRupiah(totalSpent)}`}
          color="black"
        />
      </div>
    </>
  );
};

export default ItemSpent;
