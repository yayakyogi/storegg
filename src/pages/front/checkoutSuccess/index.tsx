import { MessagePage } from "../../../components";
import { ImageCompletedCheckout } from "../../../assets/img";

const CheckoutSuccess = () => {
  return (
    <>
      <MessagePage
        isSuccessCheckout
        imageUrl={ImageCompletedCheckout}
        title="Checkout Completed"
        message="Kami akan periksa pembayaran Anda dan menghubungi via WhatsApp"
        buttonTitle="My Dashboard"
        href="/member"
        buttonTitle2="WhatsApp ke Admin"
        href2="/"
      />
    </>
  );
};
export default CheckoutSuccess;
