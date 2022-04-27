import { ChangeEvent, useState } from "react";
import { TextinputProps } from "./interface";

const InputText = ({
  label,
  value,
  placeholder,
  type,
  onChange,
  name,
  style,
  className,
}: TextinputProps) => {
  const classNames = [
    "px-6 py-2.5 lg:py-3 bg-white shadow rounded-full w-full placeholder:text-sm lg:placeholder:text-base border border-grey focus:outline-none",
    className,
  ];

  const [emailError, setEmailError] = useState<string | undefined>("");

  let pattern: RegExp | any = "";
  if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (name === "phone") pattern = /^[0-9\b]+$/;

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const target = {
      name: name,
      value: e.target.value,
    };
    classNames.push("border-gray");
    if (type === "email") {
      if (!pattern.test(e.target.value)) setEmailError("Email tidak valid");
      else setEmailError("");
    }
    target.name === "phone"
      ? pattern.test(e.target.value) && onChange(e)
      : onChange(e);
  };

  return (
    <>
      <label
        id={name}
        className="text-base lg:text-base font-medium text-black mb-2 mt-4 block"
      >
        {label}
      </label>
      <input
        aria-labelledby={name}
        name={name}
        type={type}
        className={classNames.join(" ")}
        style={style}
        value={value}
        placeholder={placeholder}
        onChange={onChangeText}
        autoComplete="off"
      />
      {emailError !== "" && type === "email" && value.length > 1 && (
        <span className="text-red font-medium text-sm block">{emailError}</span>
      )}
    </>
  );
};

export default InputText;
