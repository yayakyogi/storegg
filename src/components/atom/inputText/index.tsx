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
    "px-6 py-2.5 lg:py-3 bg-white shadow rounded-full w-full placeholder:text-sm lg:placeholder:text-base border focus:outline-none mb-3",
    className,
  ];

  return (
    <>
      <label
        id={name}
        className="text-base lg:text-base font-medium text-black my-2 block"
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
        onChange={onChange}
        autoComplete="off"
      />
    </>
  );
};

export default InputText;
