import { Link } from "react-router-dom";
import { ButtonProps } from "./interface";

const Button = ({
  children,
  className,
  onClickAction,
  style,
  type,
  href,
  isEksternal,
  isBlock,
}: ButtonProps) => {
  const classNames = [
    "rounded-full hover:shadow-md focus:ring-2 focus:ring-white duration-200 ease-in-out font-medium",
    className,
  ];

  if (type === "primary") classNames.push("bg-purple text-white");
  if (type === "secondary") classNames.push("bg-gray text-dark");
  if (type === "dark") classNames.push("bg-black text-white");
  if (isBlock) classNames.push("block w-full");

  const onClick = () => {
    if (onClickAction) onClickAction();
  };

  if (type === "submit") {
    return (
      <>
        <button type="submit" className={classNames.join(" ")}>
          {children}
        </button>
      </>
    );
  }

  if (type === "loading") {
    return (
      <>
        <button
          type="button"
          className="bg-purple text-white inline-flex px-5 py-2 opacity-50 hover:cursor-progress rounded-full"
          disabled
        >
          <div className="animate-spin mr-3 h-5 w-5 border-r-2 border-white flex justify-center items-center rounded-full">
            <div className="h-4 w-4 bg-purple rounded-full"></div>
          </div>
          loading...
        </button>
      </>
    );
  }

  if (type === "link") {
    if (isEksternal) {
      return (
        <>
          <a
            href={href}
            className={className}
            style={style}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        </>
      );
    }
    return (
      <>
        <Link
          to={href as string}
          className={className}
          style={style}
          onClick={onClick}
        >
          {children}
        </Link>
      </>
    );
  }

  return (
    <>
      <button onClick={onClick} className={classNames.join(" ")} style={style}>
        {children}
      </button>
    </>
  );
};

export default Button;
