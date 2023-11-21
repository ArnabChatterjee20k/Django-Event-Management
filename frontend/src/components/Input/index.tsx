import * as Form from "@radix-ui/react-form";
import InputProps from "./type";
export default function index({
  label,
  message,
  type,
  value,
  name,
  disabled,
  onChange,
}: InputProps) {
  return (
    <Form.Field className="grid mb-[10px] w-full" name="email">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] leading-[35px] text-white">
          {label}
        </Form.Label>
        <Form.Message className="text-[13px] text-red-200" match="valueMissing">
          {value?.toString().trim() === "" && message}
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          value={value}
          name={name}
          disabled={disabled}
          onChange={onChange}
          className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
          type={type}
          required={!disabled}
        />
      </Form.Control>
    </Form.Field>
  );
}
