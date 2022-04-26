import { Button, Text } from "../../atom";
import { ItemTable, ButtonFilter } from "../../molecul";
import ImageTable from "../../../assets/img/overview-1.png";
import { FormatRupiah } from "../../../utils";

interface TableTransactionsProps {
  type: "table-overview" | "table-transactions";
}

const TableTransactions = ({ type }: TableTransactionsProps) => {
  return (
    <>
      <div className="w-full">
        {type === "table-overview" ? (
          <Text
            type="fs-20"
            weight="medium"
            text="Latest Transactions"
            color="black"
            style={{ marginBottom: 30 }}
          />
        ) : (
          <ButtonFilter />
        )}
        {/* Show on dekstop */}
        <div className="hidden lg:block relative overflow-x-auto bg-white shadow-sm rounded-2xl px-5 py-2">
          <table className="w-full text-sm text-left text-black">
            <thead className="text-xs">
              <tr>
                <th scope="col" className="py-3 pl-2 w-1/2">
                  <Text
                    type="fs-16"
                    weight="regular"
                    text="Game"
                    color="black"
                  />
                </th>
                <th scope="col" className="text-center py-3 ">
                  <Text
                    type="fs-16"
                    weight="regular"
                    text="Item"
                    color="black"
                  />
                </th>
                <th scope="col" className="text-center py-3">
                  <Text
                    type="fs-16"
                    weight="regular"
                    text="Price"
                    color="black"
                  />
                </th>
                <th scope="col" className="text-center py-3">
                  <Text
                    type="fs-16"
                    weight="regular"
                    text="Status"
                    color="black"
                  />
                </th>
                {type === "table-transactions" && (
                  <th scope="col" className="text-center py-3">
                    <Text
                      type="fs-16"
                      weight="regular"
                      text="Action"
                      color="black"
                    />
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="py-2.5">
                  <ItemTable
                    imageUrl={ImageTable}
                    gameType="Dekstop"
                    title="Mobile Legend"
                  />
                </td>
                <td className="text-center">
                  <Text
                    type="fs-16"
                    weight="medium"
                    text={`200 Gold`}
                    color="black"
                  />
                </td>
                <td className="text-center">
                  <Text
                    type="fs-16"
                    weight="medium"
                    text={`Rp ${FormatRupiah(290000)}`}
                    color="black"
                  />
                </td>
                <td className="text-center">
                  <div className="flex justify-center items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-green mr-2" />
                    <Text
                      type="fs-16"
                      weight="medium"
                      text={`Success`}
                      color="black"
                    />
                  </div>
                </td>
                {type === "table-transactions" && (
                  <td className="text-center">
                    <Button
                      type="link"
                      href="/details/GG001"
                      onClickAction={() => console.log("action")}
                      className="py-2 px-8 bg-gray2 text-sm rounded-full"
                    >
                      Destails
                    </Button>
                  </td>
                )}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Show on mobile */}
        <div className="block lg:hidden bg-white shadow-sm rounded-2xl px-3 py-3">
          <ItemTable
            imageUrl={ImageTable}
            gameType="Dekstop"
            title="Mobile Legend"
          />
          <div className="flex justify-between items-center mt-3">
            <Text type="fs-14" weight="regular" text="Item" color="grey" />
            <Text
              type="fs-14"
              weight="medium"
              text={`200 Gold`}
              color="black"
            />
          </div>
          <div className="flex justify-between items-center mt-1">
            <Text type="fs-14" weight="regular" text="Price" color="grey" />
            <Text
              type="fs-14"
              weight="medium"
              text={`Rp ${FormatRupiah(290000)}`}
              color="black"
            />
          </div>
          <div className="flex justify-between items-center mt-1">
            <Text type="fs-14" weight="regular" text="Status" color="grey" />
            <div className="flex justify-center items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-green mr-2" />
              <Text
                type="fs-14"
                weight="medium"
                text={`Success`}
                color="black"
              />
            </div>
          </div>
          {type === "table-transactions" && (
            <Button
              type="link"
              href="/details/GG001"
              onClickAction={() => console.log("action")}
              className="py-2 lg:px-8 bg-gray2 text-sm rounded-full mt-5 block text-center"
            >
              Destails
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default TableTransactions;
