import { Icon, Icon1, Icon2 } from "../../../../assets/icon";
import { CardProcedure } from "../../../molecul";

const Procedurs = () => {
  return (
    <>
      <div className="flex justify-center mt-28 mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-black max-w-md text-center leading-normal lg:leading-relaxed">
          It’s Really That Easy to Win the Game
        </h1>
      </div>
      <div className="lg:flex justify-between items-center">
        <CardProcedure
          icon={Icon}
          title="1. Start"
          description="Pilih salah satu game yang ingin kamu top up"
        />
        <div className="w-10" />
        <CardProcedure
          icon={Icon1}
          title="2. Fill Up"
          description="Top up sesuai dengan nominal yang sudah tersedia"
        />
        <div className="w-10" />
        <CardProcedure
          icon={Icon2}
          title="3. Be a Winner"
          description="Siap digunakan untuk improve permainan kamu"
        />
      </div>
    </>
  );
};
export default Procedurs;
