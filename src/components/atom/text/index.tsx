import { TextProps } from "./interface";

const Text = ({ type, weight, text, color, style }: TextProps) => {
  const className = [];

  color === "purple" && className.push("text-purple");
  color === "black"
    ? className.push("text-black")
    : className.push("text-grey");

  switch (weight) {
    case "medium":
      className.push("font-medium");
      break;
    case "bold":
      className.push("font-bold");
      break;
    default:
      className.push("font-normal");
      break;
  }

  switch (type) {
    case "fs-12":
      className.push("text-xs");
      break;
    case "fs-14":
      className.push("text-sm");
      break;
    case "fs-18":
      className.push("text-base");
      break;
    case "fs-20":
      className.push("text-lg");
      break;
    case "fs-22":
      className.push("text-xl");
      break;
    case "fs-32":
      className.push("text-2xl");
      break;
    case "fs-42":
      className.push("text-3xl");
      break;
    default:
      className.push("text-base");
      break;
  }

  return (
    <div className={className.join(" ")} style={style}>
      {text}
    </div>
  );
};

export default Text;
