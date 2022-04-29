import { Image, Text } from "../../../atom";

interface CardProcedureProps {
  icon: string;
  title: string;
  description: string;
}

const CardProcedure = ({ icon, title, description }: CardProcedureProps) => {
  return (
    <>
      <div className="p-7 rounded-3xl bg-gray w-full lg:w-1/3 h-64 mb-5">
        <div className="w-20 h-20 rounded-full mb-8">
          <Image url={icon} alt={icon} />
        </div>
        <Text
          type="fs-22"
          weight="bold"
          text={title}
          color="black"
          style={{ marginBottom: 8 }}
        />
        <Text
          type="fs-18"
          weight="regular"
          text={description}
          color="black"
          style={{ maxWidth: 250 }}
        />
      </div>
    </>
  );
};
export default CardProcedure;
