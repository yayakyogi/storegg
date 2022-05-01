interface ItemDetailLabelProps {
  label: string;
  value: string;
}

const ItemDetailLabel = ({ label, value }: ItemDetailLabelProps) => {
  return (
    <>
      <div className="flex justify-between items-center my-3">
        <p className="text-sm lg:text-xl">{label}</p>
        <p
          className={`text-sm lg:text-xl font-medium ${
            label.toLowerCase() === "total" ? "text-purple" : "text-black"
          }`}
        >
          {value}
        </p>
      </div>
    </>
  );
};

export default ItemDetailLabel;
