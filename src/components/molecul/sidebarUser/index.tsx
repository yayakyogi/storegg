import { Image, Text } from "../../atom";

interface SidebarUserProps {
  imageUrl: string;
  name: string;
  email: string;
}

const SidebarUser = ({ imageUrl, name, email }: SidebarUserProps) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="text-center">
          <Image
            type="imageProfile"
            url={imageUrl}
            alt="Image Profile"
            style={{ marginBottom: 20, display: "inline-block" }}
          />
          <Text
            type="fs-20"
            weight="bold"
            text={name}
            color="black"
            style={{ marginBottom: 4 }}
          />
          <Text type="fs-16" weight="regular" text={email} />
        </div>
      </div>
    </>
  );
};

export default SidebarUser;
