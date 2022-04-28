import { ImageSignUpSuccess } from "../../../assets/img";
import { Image, Text, Button } from "../../../components";

const RegisterSuccess = () => {
  return (
    <>
      <div className="w-full pt-36 px-8">
        <div className="w-52 lg:w-80 h-48 lg:h-80 mx-auto mb-16">
          <Image url={ImageSignUpSuccess} alt="image-signup-success" />
        </div>
        <Text
          type="fs-32"
          weight="bold"
          text="Well Done!"
          style={{ textAlign: "center", marginBottom: 10 }}
          color="black"
        />
        <Text
          type="fs-18"
          weight="regular"
          text="Kamu sudah bisa melakukan top up dan menjadi pemenang!"
          style={{ margin: "auto", textAlign: "center", maxWidth: 300 }}
          color="black"
        />
        <div className="lg:relative absolute bottom-20 w-full right-0 px-4 lg:px-0 lg:mt-32">
          <Button className="px-5 py-3 bg-purple text-white mt-8 font-medium text-center block w-full lg:w-52 rounded-full lg:mx-auto">
            Top up
          </Button>
        </div>
      </div>
    </>
  );
};

export default RegisterSuccess;
