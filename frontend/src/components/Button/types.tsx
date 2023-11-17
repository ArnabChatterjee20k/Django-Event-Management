import { ComponentPropsWithoutRef ,ReactNode} from "react";

export default interface ButtonProps extends ComponentPropsWithoutRef<"button">{
    children:ReactNode
}
