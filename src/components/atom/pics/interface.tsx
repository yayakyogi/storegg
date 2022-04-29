import { CSSProperties } from "react";

type imageType =
  | "imageProfile"
  | "imageIcon"
  | "imageListTransaction"
  | "imageDetailTransaction"
  | "imageTable"
  | "imageFeature";
export interface ImageProps {
  type?: imageType;
  url: string;
  alt: string;
  style?: CSSProperties;
}
