import { CSSProperties } from "react";

type imageType =
  | "imageProfile"
  | "imageIcon"
  | "imageListTransaction"
  | "imageDetailTransaction"
  | "imageDetailTransactionLarge"
  | "imageTable"
  | "imageFeature"
  | "imageGameDetail";
export interface ImageProps {
  type?: imageType;
  url: string;
  alt: string;
  style?: CSSProperties;
}
