import { Icon, Icon1, Icon2 } from "../../../../assets/icon";
import { Text } from "../../../atom";
import { CardProcedure } from "../../../molecul";

const Procedurs = () => {
  return (
    <>
      <div className="flex justify-center text-center mt-28 mb-8">
        <Text
          type="fs-42"
          weight="bold"
          text="It’s Really That Easy to Win the Game"
          color="black"
          style={{ maxWidth: 300 }}
        />
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
