import FormatRupiah from "../../../../utils/formatRupiah";
import { Button } from "../../../atom";

interface CardTopUpProps {
  gold: number;
  isChosen: Boolean;
  nominal: number;
  onChoose: Function;
}

const CardTopUp = ({ gold, nominal, isChosen, onChoose }: CardTopUpProps) => {
  return (
    <>
      <Button
        type="secondary"
        onClickAction={onChoose}
        className={`px-7 py-10 text-left rounded-3xl w-full sm:w-72 md:w-96 lg:w-72 xl:w-1/4 relative border-2 sm:mr-3 md:mr-5 md:mb-5 lg:mr-3 lg:mb-3 xl:mr-7 xl:mb-7 mb-3 ${
          isChosen
            ? "bg-blue bg-opacity-10 border-blue"
            : "bg-gray border-white"
        }`}
      >
        <h1 className="font-bold text-3xl">
          {gold} <span className="font-light">Gold</span>
        </h1>
        <p className="text-lg font-normal mt-0.5">Rp {FormatRupiah(nominal)}</p>
        {isChosen && (
          <div className="absolute top-10 right-8">
            <svg
              width="30"
              height="30"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
              <path
                d="M5.83325 10L8.46483 12.5L14.1666 7.5"
                stroke="#00BAFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </Button>
    </>
  );
};
export default CardTopUp;
