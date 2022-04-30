import { MessagePage } from "../../../components";
import { ImageCompletedCheckout } from "../../../assets/img";
import { useEffect } from "react";

const CheckoutSuccess = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
