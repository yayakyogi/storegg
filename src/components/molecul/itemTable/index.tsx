import React, { CSSProperties } from "react";
import { Image, Text } from "../../atom";

interface ItemTableProps {
  imageUrl: string;
  title: string;
  gameType: string;
  style?: CSSProperties;
}

const ItemTable = ({ imageUrl, title, gameType, style }: ItemTableProps) => {
  return (
    <>
      <div className="flex items-center" style={style}>
        <Image url={imageUrl} type="imageTable" alt="table image" />
        <div className="ml-4">
          <Text type="fs-16" weight="medium" text={title} color="black" />
          <Text type="fs-12" weight="regular" text={gameType} color="grey" />
        </div>
      </div>
    </>
  );
};

export default ItemTable;
