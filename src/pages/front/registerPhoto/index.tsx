import { useNavigate } from "react-router-dom";
import { IcUpload } from "../../../assets/icon";
import { Button, Image, InputSelect, Text } from "../../../components";

const RegisterPhoto = () => {
  const navigate = useNavigate();
  const onChange = () => {};

  const onSubmit = () => {
    navigate("/register-success");
  };
  return (
    <>
      <div className="w-full lg:mx-auto lg:w-2/5 pt-32 lg:pt-40 px-4 lg:px-36">
        <div className="flex justify-center">
          <input type="file" id="inputFile" className="hidden" name="img" />
          <label htmlFor="inputFile">
            <div className="w-28 h-28 p-8 rounded-full bg-gray2 hover:cursor-pointer">
              <Image url={IcUpload} alt="ic-update" />
            </div>
          </label>
        </div>
        <Text
          type="fs-20"
          weight="bold"
          text="Shayna Anne"
          color="black"
          style={{ marginTop: 20, textAlign: "center" }}
        />
        <Text
          type="fs-18"
          weight="regular"
          text="shayna@anne.com"
          color="black"
          style={{ marginBottom: 50, textAlign: "center" }}
        />
        <form onSubmit={onSubmit} method="post">
          <InputSelect
            label="Favorite Game"
            name="game"
            onChange={onChange}
            value=""
          >
            <option value="">Select Game</option>
          </InputSelect>
          <div className="lg:relative absolute bottom-14 w-full right-0 px-2 lg:px-0">
            <Button
              onClickAction={onSubmit}
              type="submit"
              className="px-5 py-3 bg-purple text-white mt-8 font-medium lg:mt-24 text-center block w-full rounded-full"
            >
              Create My Account
            </Button>
            <Button
              type="link"
              href="/"
              className="underline block text-center mt-3"
            >
              Terms & Conditions
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterPhoto;
