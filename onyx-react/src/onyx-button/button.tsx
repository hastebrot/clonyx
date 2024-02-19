import { Button, ButtonProps } from "react-aria-components";
import { classNames } from "../helper/classes";

export const OnyxButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      className={classNames(
        "border border-[--button-border]",
        "bg-[--button-background]",
        "w-[73px] h-[21px] flex items-start justify-center",
        "text-[11px] leading-[21px] tracking-tight",
        "enabled:data-[focused]:outline outline-[--button-border-focus] outline-2 -outline-offset-2",
        "enabled:data-[hovered]:bg-black",
        "enabled:data-[pressed]:bg-black",
        "disabled:bg-[--button-background-disabled] disabled:text-gray-400"
      )}
    >
      {children}
    </Button>
  );
};
