import { ChangeEvent, useState } from "react";
import { Logo } from "../../assets/icon";
import Avatar from "../../assets/img/avatar-1.png";
import {
  Button,
  Image,
  InputText,
  SidebarMenu,
  SidebarPop,
  SidebarUser,
  Text,
} from "../../components";

const ElementPage = () => {
  const [emailError, setEmailError] = useState<string | undefined>("");
  const [menuActive, setMenuActive] = useState<string | undefined>("Overview");
  const menuSidebar = [
    ["Overview", "/overview"],
    ["Transactions", "/transactions"],
    ["Messages", "/messages"],
    ["Card", "/card"],
    ["Rewards", "/rewards"],
    ["Settings", "/settings"],
    ["Log Out", "/logout"],
  ];
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
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-3">Component Button</h1>
      <Button
        type="primary"
        className="px-5 py-2"
        onClickAction={() => console.log("Klik")}
      >
        Button Primary
      </Button>
      <Button
        type="secondary"
        className="px-5 py-2"
        onClickAction={() => console.log("Klik")}
      >
        Button secondary
      </Button>
      <Button
        type="dark"
        className="px-5 py-2"
        onClickAction={() => console.log("Klik")}
      >
        Button dark
      </Button>
      <Button type="link" className="px-5 py-2" href="/page">
        Button link
      </Button>
      <Button type="loading" className="px-5 py-2">
        Loading...
      </Button>
      <br />
      <br />
      <h1 className="text-3xl font-bold mb-3">Component Text</h1>
      <Text type="fs-12" weight="regular" color="black" text="fs-12 regular" />
      <Text type="fs-14" weight="medium" color="grey" text="fs-14 medium" />
      <Text type="fs-16" weight="medium" color="black" text="fs-16 medium" />
      <Text type="fs-18" weight="medium" color="grey" text="fs-18 medium" />
      <Text type="fs-32" weight="bold" color="black" text="fs-32 bold" />
      <Text type="fs-42" weight="bold" color="grey" text="fs-42 bold" />
      <br />
      <h1 className="text-3xl font-bold mb-3">Component Image</h1>
      <div className="flex">
        <Image type="imageProfile" url={Avatar} alt="img-profile" />
        <Image type="imageIcon" url={Logo} alt="img-icon" />
      </div>
      <br />
      <h1 className="text-3xl font-bold mb-3">Component Textinput</h1>
      <div className="w-80">
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
            <p className="text-red font-medium text-sm">{emailError}</p>
          )}
          <Button
            type="submit"
            isBlock
            className="px-5 py-3 bg-purple text-white mt-5"
          >
            Submit
          </Button>
        </form>
      </div>
      <br />
      <h1 className="text-3xl font-bold mb-3">Component Sidebar - User Info</h1>
      <div className="w-72 px-16 py-14">
        <SidebarUser
          imageUrl={Avatar}
          name="Shayna Anne"
          email="shayna@anne.com"
        />
      </div>
      <h1 className="text-3xl font-bold mb-3">Component Sidebar - Pop</h1>
      <div className="w-72 px-7 py-12">
        <SidebarPop />
      </div>
      <h1 className="text-3xl font-bold mb-3">Component Sidebar - Menu</h1>
      <div className="w-72 pl-7 py-4">
        {menuSidebar.map((item, key) => {
          return (
            <SidebarMenu
              key={key}
              onClick={() => setMenuActive(item[0])}
              className={`${
                item[0] === menuActive && "active border-r-4 border-blue"
              }`}
              text={item[0]}
              href={`#`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ElementPage;
