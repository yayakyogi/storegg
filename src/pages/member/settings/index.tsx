import { ChangeEvent, useState } from "react";
import {
  Button,
  Image,
  InputText,
  MemberTemplate,
  Text,
} from "../../../components";
import { IcTrash, IcUpload } from "../../../assets/icon";
import Avatar from "../../../assets/img/avatar-1.png";

const Settings = () => {
  const [emailError, setEmailError] = useState<string | undefined>("");
  const [showButtonTrash, setShowButtonTrash] = useState<Boolean>(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const saveData = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.name.length > 5 && data.phone.length > 9 && emailError === "") {
      setData({ name: "", email: "", phone: "" });
    }
  };

  const formOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = {
      name: e.target.name,
      value: e.target.value,
    };

    let pattern: RegExp | any = "";

    // set RegExp pattern
    target.name === "email" && (pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    target.name === "phone" && (pattern = /^[0-9\b]+$/);

    // ceek RegExp email
    target.name === "email" && !pattern.test(e.target.value)
      ? setEmailError("Email tidak valid")
      : setEmailError("");

    // cek RegExp phone
    target.name === "phone"
      ? pattern.test(e.target.value) &&
        setData({
          ...data,
          [e.target.name]: e.target.value,
        })
      : setData({
          ...data,
          [e.target.name]: e.target.value,
        });
  };
  return (
    <>
      <MemberTemplate>
        <Text
          type="fs-32"
          weight="bold"
          text="Settings"
          color="black"
          style={{ marginBottom: 30 }}
        />
        <div className="w-full lg:w-3/4 xl:w-5/12 bg-white px-2 py-5 lg:p-10 rounded-xl shadow-sm">
          <div className="flex items-center mb-5">
            <div
              className="relative"
              onMouseEnter={() => setShowButtonTrash(true)}
              onMouseLeave={() => setShowButtonTrash(false)}
            >
              <Image type="imageProfile" url={Avatar} alt="ic-profile" />
              <Button
                onClickAction={() => console.log("Hapus gambar")}
                className={`${
                  showButtonTrash ? "opacity-100" : " opacity-0"
                } transition ease-in-out duration-300 absolute -left-3 top-0 w-24 h-24 p-8 rounded-full bg-black bg-opacity-70 ml-3`}
              >
                <Image url={IcTrash} alt="ic-trash" />
              </Button>
            </div>
            <input type="file" id="inputFile" className="hidden" name="img" />
            <label htmlFor="inputFile">
              <div className="w-24 h-24 p-8 rounded-full bg-gray2 ml-3 hover:cursor-pointer">
                <Image url={IcUpload} alt="ic-update" />
              </div>
            </label>
          </div>
          <form onSubmit={saveData}>
            <InputText
              type="text"
              label="Name"
              name="name"
              value={data.name}
              placeholder="Please type your name"
              onChange={formOnChange}
              className={`${
                data.name.length > 4 ? " border-green" : " border-grey"
              }`}
            />
            <InputText
              type="text"
              name="email"
              label="Email Address"
              value={data.email}
              placeholder="Please type here.."
              onChange={formOnChange}
              className={`${
                emailError !== "" && data.email.length > 1
                  ? "border-red"
                  : data.email.length > 2
                  ? "border-green"
                  : "border border-grey"
              }`}
            />
            {emailError !== "" && data.email.length > 1 && (
              <span className="text-red font-medium text-sm block mb-4">
                {emailError}
              </span>
            )}
            <InputText
              type="text"
              label="Phone Number"
              name="phone"
              style={{ appearance: "none" }}
              value={data.phone}
              placeholder="Please type your phone number"
              onChange={formOnChange}
              className={`${
                data.phone.length >= 9
                  ? "border-green"
                  : data.phone.length > 1 && data.phone.length < 9
                  ? "border-red"
                  : "border border-grey"
              }`}
            />
            <Button
              type="submit"
              isBlock
              className="px-5 py-3 lg:py-4 bg-purple text-white mt-5 lg:mt-8"
            >
              Save my profile
            </Button>
          </form>
        </div>
      </MemberTemplate>
    </>
  );
};

export default Settings;
