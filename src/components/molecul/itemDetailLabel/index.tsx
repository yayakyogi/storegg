import { Text } from "../../atom";

interface ItemDetailLabelProps {
  label: string;
  value: string;
}

const ItemDetailLabel = ({ label, value }: ItemDetailLabelProps) => {
  return (
    <>
      <div className="flex justify-between items-center my-3">
        <Text type="fs-18" weight="regular" text={label} color="black" />
        <Text
          type="fs-18"
          weight={label.toLowerCase() === "total" ? "bold" : "medium"}
          text={value}
          color={label.toLowerCase() === "total" ? "purple" : "black"}
        />
      </div>
    </>
  );
};

export default ItemDetailLabel;
