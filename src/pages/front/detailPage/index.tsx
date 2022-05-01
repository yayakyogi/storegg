import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImageThumbnail3 } from "../../../assets/img";
import {
  CardTopUp,
  GameDetail,
  Image,
  InputText,
  Navbar,
  TitlePage,
  Text,
  CardPayment,
  Button,
  FrontFooter,
} from "../../../components";

const DetailPage = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    idUser: "",
    bankAccountName: "",
    idTopUp: 0,
    topUp: 0,
    idPaymentMethod: 0,
    paymentMethod: "",
    isChosenTopUp: false,
    isChosenPayment: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    navigate("/checkout");
  };

  const onChooseTopUp = (id: number) => {
    setState({
      ...state,
      idTopUp: id,
    });
  };
  const onChoosePayment = (id: number) => {
    setState({
      ...state,
      idPaymentMethod: id,
    });
  };

  const listTopUp = [
    { id: 1, gold: 125, nominal: 3250000 },
    { id: 2, gold: 225, nominal: 3250000 },
    { id: 3, gold: 350, nominal: 3250000 },
    { id: 4, gold: 550, nominal: 3250000 },
    { id: 5, gold: 750, nominal: 3250000 },
  ];

  const listPayment = [
    { id: 1, method: "Transfer", description: "Worldwide Available" },
    { id: 2, method: "VISA", description: "Credit card" },
  ];

  return (
    <>
      <div className="px-4 lg:px-32 py-7 lg:py-10 bg-white">
        <Navbar />
        <TitlePage
          title="Top Up"
          subTitle="Perkuat akun dan jadilah pemenang"
        />
        <div className="flex justify-start mt-12">
          <div className="max-w-xs hidden lg:block">
            <Image
              type="imageDetailTransactionLarge"
              url={ImageThumbnail3}
              alt="image-detail"
            />
          </div>
          <div className="w-full lg:w-3/4 lg:ml-10">
            <GameDetail
              imageUrl={ImageThumbnail3}
              title="Mobile Legends: The New Battle 2021"
              category="mobile"
            />
            <div className="w-full xl:w-1/3">
              <InputText
                label="Verify ID"
                type="text"
                name="idUser"
                placeholder="Enter your ID"
                value={state.idUser}
                onChange={onChange}
              />
            </div>
            {/* Nominal TopUp */}
            <Text
              type="fs-18"
              weight="medium"
              text="Nominal Top Up"
              color="black"
              style={{ marginTop: 50 }}
            />
            <div className="flex flex-wrap justify-start items-center mt-3">
              {listTopUp.map((item, key) => {
                return (
                  <CardTopUp
                    key={key}
                    gold={item.gold}
                    nominal={item.nominal}
                    onChoose={() => onChooseTopUp(item.id)}
                    isChosen={item.id === state.idTopUp && true}
                  />
                );
              })}
            </div>
            {/* Peyment method */}
            <Text
              type="fs-18"
              weight="medium"
              text="Payment Method"
              color="black"
              style={{ marginTop: 20 }}
            />
            <div className="flex flex-wrap justify-start items-center mt-3">
              {listPayment.map((item, key) => {
                return (
                  <CardPayment
                    key={key}
                    method={item.method}
                    description={item.description}
                    onChoose={() => onChoosePayment(item.id)}
                    isChosen={item.id === state.idPaymentMethod && true}
                  />
                );
              })}
            </div>
            {/* Form Bank Account Name */}
            <div className="w-full xl:w-1/3 mt-8">
              <form onSubmit={onSubmit}>
                <InputText
                  label="Bank Account Name"
                  type="text"
                  name="bankAccountName"
                  placeholder="Enter your bank account name"
                  value={state.bankAccountName}
                  onChange={onChange}
                />
                <Button
                  type="submit"
                  onClickAction={onSubmit}
                  className="w-full lg:w-48 mt-8 py-3 text-center bg-purple text-white"
                >
                  Continue
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FrontFooter />
    </>
  );
};
export default DetailPage;
