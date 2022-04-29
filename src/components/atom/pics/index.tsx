import { ImageProps } from "./interface";

const Image = ({ type, url, alt, style }: ImageProps) => {
  const className = [];

  switch (type) {
    case "imageProfile":
      className.push("w-24 h-24 rounded-full");
      break;
    case "imageIcon":
      className.push("w-16 h-16 rounded-full");
      break;
    case "imageListTransaction":
      className.push("w-20 h-14 rounded-2xl");
      break;
    case "imageDetailTransaction":
      className.push("w-48 h-32 rounded-3xl");
      break;
    case "imageTable":
      className.push("w-24 h-16 rounded-2xl");
      break;
    case "imageFeature":
      className.push("w-52 h-72");
      break;
    default:
      className.push("w-100 h-100");
      break;
  }

  return (
    <img src={url} alt={alt} className={className.join(" ")} style={style} />
  );
};

export default Image;
