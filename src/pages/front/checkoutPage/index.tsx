import { Logo } from "../../../assets/icon";
import { ImageThumbnail3 } from "../../../assets/img";
import {
  Button,
  Image,
  ItemDetailLabel,
  Text,
  TitlePage,
} from "../../../components";
import { FormatRupiah } from "../../../utils";

const CheckoutPage = () => {
  return (
    <>
      <div className="px-3 lg:px-96 bg-white py-8 lg:py-16">
        <Image
          type="imageIcon"
          url={Logo}
          alt="logo"
          style={{ marginBottom: 50 }}
        />
        <TitlePage
          title="Checkout"
          subTitle="Waktunya meningkatkan cara bermain"
        />
        <div className="flex items-center mt-12">
          <img
            src={ImageThumbnail3}
            className="w-1/3 lg:w-56 lg:h-40 rounded-3xl"
            alt="game"
          />
          <div className="max-w-xs ml-3 lg:ml-8">
            <h1 className="text-xl lg:text-3xl font-bold lg:max-w-sm text-black lg:leading-snug">
              Mobile Legends: The New Battle 2021
            </h1>
            <p className="text-sm lg:text-lg text-grey mt-3">
              Category: Mobile
            </p>
          </div>
        </div>
        <div className="w-full bg-gray2 my-10" style={{ height: 1 }} />
        <Text
          type="fs-32"
          weight="bold"
          text="Purchase Details"
          color="black"
        />
        <ItemDetailLabel label="Your Game ID" value="masayoshizero" />
        <ItemDetailLabel label="Order ID" value="#GG001" />
        <ItemDetailLabel label="Item" value={`${250} Diamonds`} />
        <ItemDetailLabel label="Price" value={`Rp ${FormatRupiah(42850500)}`} />
        <ItemDetailLabel
          label="Tax (10%)"
          value={`Rp ${FormatRupiah(4228000)}`}
        />
        <ItemDetailLabel label="Total" value={`Rp ${FormatRupiah(55000600)}`} />
        <Text
          type="fs-20"
          weight="bold"
          text="Payment Informations"
          color="black"
          style={{ marginTop: 30 }}
        />
        <ItemDetailLabel label="Account Name" value="Masayoshi Angga Zero" />
        <ItemDetailLabel label="Type" value="Worldwide Transfer" />
        <ItemDetailLabel label="Bank Name" value="Mandiri" />
        <ItemDetailLabel
          label="Bank Account Name"
          value="PT Store GG Indonesia"
        />
        <ItemDetailLabel label="Bank Number" value="1800 - 9090 - 2021" />
        <label className="flex items-center mt-5">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue" />
          <span className="ml-2 text-black text-base lg:text-lg">
            I have transferred the money
          </span>
        </label>
        <Button
          type="primary"
          onClickAction={() => console.log("WhatsApp Admin")}
          className="px-20 py-3 font-medium text-sm lg:text-lg w-full xl:w-auto"
          style={{ marginTop: 30 }}
        >
          Confirm Payment
        </Button>
      </div>
    </>
  );
};
export default CheckoutPage;
