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
        <div className="pr-60">
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
          <TableTransactions type="table-overview" />
        </div>
      </MemberTemplate>
    </>
  );
};

export default Overview;
