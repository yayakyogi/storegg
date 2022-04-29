import { Text } from "../../../atom";

interface ItemReachedProp {
  value: string;
  label: string;
}

const ItemReached = ({ value, label }: ItemReachedProp) => {
  return (
    <>
      <div>
        <Text type="fs-42" weight="bold" text={value} color="black" />
        <Text type="fs-18" weight="regular" text={label} color="grey" />
      </div>
    </>
  );
};
export default ItemReached;
