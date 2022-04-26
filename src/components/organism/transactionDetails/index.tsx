import { Button, Text } from "../../atom";
import { ItemDetail, ItemDetailLabel } from "../../molecul";
import ImageTable from "../../../assets/img/overview-1.png";
import { FormatRupiah } from "../../../utils";

const TransactionDetails = () => {
  return (
    <>
      <div className="bg-white w-full 2xl:w-3/4 rounded-2xl p-7 shadow-sm">
        <ItemDetail
          imageUrl={ImageTable}
          gameType="Mobile"
          title="Mobile Legends: The New Battle 2021"
          status="Pending"
        />
        <div className="h-0.5 w-full bg-gray my-6" />
        <Text
          type="fs-20"
          weight="bold"
          text="Purchase Details"
          color="black"
        />
        <ItemDetailLabel label="Your Game ID" value="masayoshizero" />
        <ItemDetailLabel label="Order ID" value="#GG001" />
        <ItemDetailLabel label="Item" value={`${250} Diamonds`} />
        <ItemDetailLabel label="Price" value={`Rp ${FormatRupiah(42850500)}`} />
        <ItemDetailLabel
          label="Tax(10%)"
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
        <ItemDetailLabel
          label="Your Account Name"
          value="Masayoshi Angga Zero"
        />
        <ItemDetailLabel label="Type" value="Worldwide Transfer" />
        <ItemDetailLabel label="Bank Name" value="Mandiri" />
        <ItemDetailLabel
          label="Bank Account Name"
          value="PT Store GG Indonesia"
        />
        <ItemDetailLabel label="Bank Number" value="1800 - 9090 - 2021" />
        <Button
          type="primary"
          onClickAction={() => console.log("WhatsApp Admin")}
          className="px-20 py-3 font-medium text-lg w-full xl:w-auto"
          style={{ marginTop: 30 }}
        >
          WhatsApp ke Admin
        </Button>
      </div>
    </>
  );
};

export default TransactionDetails;
