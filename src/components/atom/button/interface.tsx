import { CSSProperties, ReactNode } from "react";

type ButtonType =
  | "link"
  | "loading"
  | "primary"
  | "secondary"
  | "dark"
  | "submit";

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  onClickAction?: Function;
  href?: string;
  style?: CSSProperties;
  type?: ButtonType;
  isEksternal?: Boolean;
  isBlock?: Boolean;
}
