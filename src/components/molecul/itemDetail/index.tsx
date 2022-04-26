import { CSSProperties } from "react";
import { Image, Text } from "../../atom";

interface ItemDetailProps {
  imageUrl: string;
  title: string;
  gameType: string;
  status: string;
  style?: CSSProperties;
}

const ItemDetail = ({
  imageUrl,
  title,
  gameType,
  style,
  status,
}: ItemDetailProps) => {
  const classStatus = [
    "mt-3 lg:mt-0 w-32 text-center py-1 lg:py-2 rounded-full bg-opacity-30 font-medium",
  ];
  if (status.toLowerCase() === "failed") classStatus.push("bg-red text-red");
  if (status.toLowerCase() === "pending")
    classStatus.push("bg-yellow text-yellow");
  if (status.toLowerCase() === "success")
    classStatus.push("bg-green text-green");

  return (
    <>
      <div className="block lg:flex justify-between items-center" style={style}>
        <div className="flex flex-wrap items-center">
          <Image
            url={imageUrl}
            type="imageDetailTransaction"
            alt="table image"
          />
          <div className="mt-3 lg:mt-0 lg:ml-4 lg:max-w-[300px]">
            <Text
              type="fs-20"
              weight="bold"
              text={title}
              color="black"
              style={{ marginBottom: 5 }}
            />
            <Text
              type="fs-16"
              weight="regular"
              text={`Category: ${gameType}`}
              color="grey"
            />
          </div>
        </div>
        <div className={classStatus.join(" ")}>{status}</div>
      </div>
    </>
  );
};

export default ItemDetail;
