import { Button } from "../../atom";

const ButtonFilter = () => {
  const onClick = () => console.log("button filter");

  return (
    <>
      <div className="flex mb-5">
        <Button
          type="secondary"
          onClickAction={onClick}
          className="py-2.5 px-10 bg-black text-white text-sm font-normal"
          style={{ marginRight: 18 }}
        >
          All trx
        </Button>
        <Button
          type="secondary"
          onClickAction={onClick}
          className="py-2.5 px-10 bg-gray2 text-sm font-normal"
          style={{ marginRight: 18 }}
        >
          Success
        </Button>
        <Button
          type="secondary"
          onClickAction={onClick}
          className="py-2.5 px-10 bg-gray2 text-sm font-normal"
          style={{ marginRight: 18 }}
        >
          Pending
        </Button>
        <Button
          type="secondary"
          onClickAction={onClick}
          className="py-2.5 px-10 bg-gray2 text-sm font-normal"
          style={{ marginRight: 18 }}
        >
          Failed
        </Button>
      </div>
    </>
  );
};

export default ButtonFilter;
