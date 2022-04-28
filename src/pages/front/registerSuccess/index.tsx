import { ImageSignUpSuccess } from "../../../assets/img";
import { MessagePage } from "../../../components";

const RegisterSuccess = () => {
  return (
    <>
      <MessagePage
        title="Well Done!"
        message="Kamu sudah bisa melakukan top up dan menjadi pemenang!"
        href="/"
        imageUrl={ImageSignUpSuccess}
        buttonTitle="Top Up"
      />
    </>
  );
};

export default RegisterSuccess;
