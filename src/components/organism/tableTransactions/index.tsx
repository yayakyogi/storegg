import { Text } from "../../atom";
import { ItemTable } from "../../molecul";
import ImageTable from "../../../assets/img/overview-1.png";
import { FormatRupiah } from "../../../utils";

const TableTransactions = () => {
  return (
    <>
      <div className="w-full">
        <Text
          type="fs-20"
          weight="medium"
          text="Latest Transactions"
          color="black"
          style={{ marginBottom: 30 }}
        />
        <div className="relative overflow-x-auto bg-white shadow-sm rounded-2xl px-5 py-2">
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
              </tr>
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableTransactions;
