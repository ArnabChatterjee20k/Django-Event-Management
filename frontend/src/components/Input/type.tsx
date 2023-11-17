import { PrimitiveInputProps } from "@radix-ui/react-form";
export default interface InputProps {
  label: string;
  message: string;
  type: PrimitiveInputProps["type"];
}
