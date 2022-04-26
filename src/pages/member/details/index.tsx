import { MemberTemplate, Text, TransactionDetails } from "../../../components";
import { useParams } from "react-router-dom";

const Details = () => {
  let { id } = useParams(); // get params id
  return (
    <>
      <MemberTemplate>
        <Text
          type="fs-32"
          weight="bold"
          text={`Details #${id}`}
          color="black"
          style={{ marginBottom: 30 }}
        />
        <TransactionDetails />
      </MemberTemplate>
    </>
  );
};

export default Details;
