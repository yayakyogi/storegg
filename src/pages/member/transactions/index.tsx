import { MemberTemplate, TableTransactions, Text } from "../../../components";
import { FormatRupiah } from "../../../utils";

const Transactions = () => {
  return (
    <>
      <MemberTemplate>
        <Text
          type="fs-32"
          weight="bold"
          text="My Transactions"
          color="black"
          style={{ marginBottom: 50 }}
        />
        <Text type="fs-18" weight="regular" text="You're spent" color="grey" />
        <Text
          type="fs-42"
          weight="medium"
          text={`Rp ${FormatRupiah(4518000500)}`}
          color="black"
          style={{ marginBottom: 30 }}
        />
        <TableTransactions type="table-transactions" />
      </MemberTemplate>
    </>
  );
};

export default Transactions;
