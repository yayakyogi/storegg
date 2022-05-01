import { Text } from "../../../atom";

interface TitlePageProps {
  title: string;
  subTitle: string;
}

const TitlePage = ({ title, subTitle }: TitlePageProps) => {
  return (
    <>
      <Text type="fs-42" weight="bold" text={title} color="black" />
      <Text
        type="fs-18"
        weight="regular"
        text={subTitle}
        color="black"
        style={{ marginTop: 10 }}
      />
    </>
  );
};
export default TitlePage;
