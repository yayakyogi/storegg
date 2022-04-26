import { CSSProperties } from "react";

type fontType =
  | "fs-12"
  | "fs-14"
  | "fs-16"
  | "fs-18"
  | "fs-20"
  | "fs-22"
  | "fs-32"
  | "fs-42";
type weightType = "regular" | "medium" | "bold";
type colorType = "black" | "grey" | "purple";

export interface TextProps {
  type?: fontType;
  weight?: weightType;
  color?: colorType;
  style?: CSSProperties;
  text: string;
}
