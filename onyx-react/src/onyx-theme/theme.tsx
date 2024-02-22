import { classNames } from "../helper/classes";
import "./variables-dark.css";
import "./variables-light.css";
import "./variables-onyx.css";

export type OnyxThemeProps = React.PropsWithChildren & {
  theme?: "light" | "dark";
  className?: string;
};

export const OnyxTheme = ({ children, ...props }: OnyxThemeProps) => {
  return (
    <div
      className={classNames(
        props.theme === undefined && "onyx-light",
        props.theme === "light" && "onyx-light",
        props.theme === "dark" && "onyx-dark",
        props.className
      )}
    >
      {children}
    </div>
  );
};
