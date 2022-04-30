import { Button } from "../../atom";

const ButtonFilter = () => {
  const onClick = () => console.log("button filter");

  return (
    <>
      <div className="flex flex-wrap mb-5 w-full">
        <Button
          type="secondary"
          onClickAction={onClick}
          className="py-2 lg:py-2.5 px-4 lg:px-10 mr-2 bg-black text-gray text-sm font-normal"
        >
          All trx
        </Button>
        <Button
          type="secondary"
          onClickAction={onClick}
          className="py-2 lg:py-2.5 px-4 lg:px-10 mr-2 bg-gray2 text-sm font-normal"
        >
          Success
        </Button>
        <Button
          type="secondary"
          onClickAction={onClick}
          className="py-2 lg:py-2.5 px-4 lg:px-10 mr-2 bg-gray2 text-sm font-normal"
        >
          Pending
        </Button>
        <Button
          type="secondary"
          onClickAction={onClick}
          className="py-2 lg:py-2.5 px-4 lg:px-10 mr-2 bg-gray2 text-sm font-normal"
        >
          Failed
        </Button>
      </div>
    </>
  );
};

export default ButtonFilter;
