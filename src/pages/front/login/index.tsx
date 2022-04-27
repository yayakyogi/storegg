import { ChangeEvent, useState } from "react";
import { Logo } from "../../../assets/icon";
import { ImageLogin } from "../../../assets/img";
import { Button, Image, InputText, Text } from "../../../components";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const saveData = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (data.password.length >= 8) {
      setData({ email: "", password: "" });
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
      <div className="flex h-screen">
        <div className="w-full lg:w-2/5 py-8 lg:pt-40 px-4 lg:px-36">
          <Image
            type="imageIcon"
            url={Logo}
            alt="logo"
            style={{ marginBottom: 50 }}
          />
          <Text
            type="fs-32"
            weight="bold"
            text="Sign In"
            color="black"
            style={{ marginBottom: 10 }}
          />
          <Text
            type="fs-18"
            weight="regular"
            text="Masuk untuk melakukan proses top up"
            color="black"
            style={{ marginBottom: 50 }}
          />
          <form onSubmit={saveData}>
            <InputText
              type="text"
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
              type="submit"
              isBlock
              onClickAction={saveData}
              className="px-5 py-3 lg:py-4 bg-purple text-white mt-5 lg:mt-8"
            >
              Continue to Sign In
            </Button>
          </form>
          <Button
            type="link"
            href="/register"
            onClickAction={saveData}
            className="px-5 py-3 lg:py-4 bg-gray2 text-dark mt-3 font-medium lg:mt-5 text-center block w-full rounded-full"
          >
            Sign Up
          </Button>
        </div>
        <div className="hidden lg:flex w-3/5 bg-dark py-36 px-40 justify-center">
          <div className="flex-col items-center justify-center max-w-lg">
            <Image
              url={ImageLogin}
              alt="image-login"
              style={{ width: 502, height: 392, margin: "auto" }}
            />
            <h1 className="font-bold text-3xl text-white mt-12 text-center">
              Win the battle. <br />
              Be the Champion.
            </h1>
            <p className="font-regular text-lg text-white mt-8 text-center">
              Kami menyediakan jutaan cara untuk <br /> membantu players menjadi{" "}
              <br />
              pemenang sejati
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
