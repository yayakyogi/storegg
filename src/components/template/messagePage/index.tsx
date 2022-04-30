import { Text, Image, Button } from "../../atom";

interface MessagePageProps {
  imageUrl: string;
  title: string;
  message: string;
  href: string;
  buttonTitle: string;
  isSuccessCheckout?: Boolean;
  href2?: string;
  buttonTitle2?: string;
}

const MessagePage = ({
  imageUrl,
  title,
  message,
  href,
  buttonTitle,
  isSuccessCheckout,
  href2,
  buttonTitle2,
}: MessagePageProps) => {
  return (
    <>
      <div className="w-full pt-36 px-8">
        <div className="flex justify-center w-52 lg:w-full lg:h-auto mx-auto mb-16">
          <Image url={imageUrl} alt="image-signup-success" />
        </div>
        <Text
          type="fs-32"
          weight="bold"
          text={title}
          style={{ textAlign: "center", marginBottom: 10 }}
          color="black"
        />
        <Text
          type="fs-18"
          weight="regular"
          text={message}
          style={{ margin: "auto", textAlign: "center", maxWidth: 300 }}
          color="black"
        />
        <div className="lg:relative absolute bottom-20 w-full right-0 px-4 lg:px-0 lg:mt-32">
          <Button
            type="link"
            href={href}
            className="px-5 py-3 bg-purple text-white mt-8 font-medium text-center block w-full lg:w-52 rounded-full lg:mx-auto"
          >
            {buttonTitle}
          </Button>
          {isSuccessCheckout && (
            <Button
              type="link"
              href={href2}
              className="px-5 py-3 bg-gray2 text-black mt-3 font-medium text-center block w-full lg:w-52 rounded-full lg:mx-auto"
            >
              {buttonTitle2}
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default MessagePage;
