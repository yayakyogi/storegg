import {
  ChangeEventHandler,
  CSSProperties,
  HTMLInputTypeAttribute,
} from "react";

export interface TextinputProps {
  label: string;
  value: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  style?: CSSProperties;
  className?: string;
}
