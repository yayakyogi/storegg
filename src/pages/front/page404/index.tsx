import { Image404 } from "../../../assets/img";
import { MessagePage } from "../../../components";

const Page404 = () => {
  return (
    <>
      <MessagePage
        title="Oops! Not Found"
        message="Halaman yang anda kunjungi tidak tersedia pada sistem kami"
        href="/"
        imageUrl={Image404}
        buttonTitle="Home Page"
      />
    </>
  );
};

export default Page404;
