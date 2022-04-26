import {
  MemberTemplate,
  Text,
  TopUpCategories,
  TableTransactions,
} from "../../../components";

const Overview = () => {
  return (
    <>
      <MemberTemplate>
        <Text
          type="fs-32"
          weight="bold"
          text="Overview"
          color="black"
          style={{ marginBottom: 30 }}
        />
        <TopUpCategories
          spentDekstopGame={1200000}
          spentMobileGame={500000}
          spentOtherGame={1000000}
        />
        <TableTransactions />
      </MemberTemplate>
    </>
  );
};

export default Overview;
