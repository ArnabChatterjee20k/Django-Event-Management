import { PrimitiveInputProps } from "@radix-ui/react-form";
export default interface InputProps {
  label: string;
  message: string;
  type: PrimitiveInputProps["type"];
  value: PrimitiveInputProps["value"];
  name?: string;
  disabled?:boolean;
  onChange?: PrimitiveInputProps["onChange"];
}
