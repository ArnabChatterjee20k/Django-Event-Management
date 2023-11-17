import { twMerge } from "tailwind-merge";
import ButtonProps from "./types";
export default function Button({
  children,
  className,
  onClick
}: ButtonProps ) {
  return (
    <button
      className={twMerge("px-4 py-2 bg-black text-white rounded-md", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
