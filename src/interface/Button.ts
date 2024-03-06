import { ReactNode } from "react";

export type ButtonType = "submit" | "reset" | "button";

export interface ButtonInterface {
  label: string;
  onClick?: () => void;
  className: string;
  type: ButtonType;
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
}
