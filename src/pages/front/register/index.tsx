import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../../assets/icon";
import { Button, Image, InputText, Text } from "../../../components";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const saveData = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("/register-photo");
    if (data.password.length >= 8 && data.fullName.length >= 4) {
      setData({ fullName: "", email: "", password: "" });
    }
  };

  const formOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="w-full lg:mx-auto lg:w-2/5 py-8 lg:pt-40 px-4 lg:px-36">
        <Image
          type="imageIcon"
          url={Logo}
          alt="logo"
          style={{ marginBottom: 50 }}
        />
        <Text
          type="fs-32"
          weight="bold"
          text="Sign Up"
          color="black"
          style={{ marginBottom: 10 }}
        />
        <Text
          type="fs-18"
          weight="regular"
          text="Daftar dan bergabung dengan kami"
          color="black"
          style={{ marginBottom: 50 }}
        />
        <form onSubmit={saveData}>
          <InputText
            type="text"
            name="fullName"
            label="Full Name"
            value={data.fullName}
            placeholder="Write your name"
            onChange={formOnChange}
          />
          <InputText
            type="email"
            name="email"
            label="Email Address"
            value={data.email}
            placeholder="Enter your email address"
            onChange={formOnChange}
          />

          <InputText
            type="password"
            label="Password"
            name="password"
            value={data.password}
            placeholder="Your password"
            onChange={formOnChange}
          />
          <Button
            type="link"
            href="/register-photo"
            onClickAction={saveData}
            className="px-5 py-3 lg:py-4 bg-purple text-white mt-8 font-medium lg:mt-5 text-center block w-full rounded-full"
          >
            Continue
          </Button>
        </form>
        <Button
          type="link"
          href="/login"
          onClickAction={saveData}
          className="px-5 py-3 lg:py-4 bg-gray2 text-dark font-medium mt-3 lg:mt-5 text-center block w-full rounded-full"
        >
          Sign In
        </Button>
      </div>
    </>
  );
};

export default Register;
