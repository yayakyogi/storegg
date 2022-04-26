import { ItemSpent } from "../../molecul";
import { Text } from "../../atom";
import { Icon, Icon1 } from "../../../assets/icon";

interface TopUpCategoriesProps {
  spentDekstopGame: number;
  spentMobileGame: number;
  spentOtherGame: number;
}

const TopUpCategories = ({
  spentDekstopGame,
  spentMobileGame,
  spentOtherGame,
}: TopUpCategoriesProps) => {
  return (
    <>
      <div>
        <Text
          type="fs-20"
          weight="medium"
          text="Top Up Categories"
          color="black"
          style={{ marginBottom: 30 }}
        />
        <div className="flex justify-between items-center mb-8">
          <ItemSpent
            type="Dekstop"
            imageUrl={Icon1}
            totalSpent={spentDekstopGame}
          />
          <ItemSpent
            type="Mobile"
            imageUrl={Icon}
            totalSpent={spentMobileGame}
          />
          <ItemSpent
            type="Other"
            imageUrl={Icon1}
            totalSpent={spentOtherGame}
          />
        </div>
      </div>
    </>
  );
};

export default TopUpCategories;
