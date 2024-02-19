import { classNames } from "../helper/classes";

export type OnyxThemeProps = React.PropsWithChildren & {
  theme?: "light" | "dark";
  className?: string;
};

export const OnyxTheme = ({ children, ...props }: OnyxThemeProps) => {
  return (
    <div
      className={classNames(
        props.theme === undefined && trimLines(themeLight),
        props.theme === "light" && trimLines(themeLight),
        props.theme === "dark" && trimLines(themeDark),
        props.className
      )}
    >
      {children}
    </div>
  );
};

const trimLines = (lines: string): string => {
  return lines
    .split("\n")
    .map((line) => line.trim())
    .join(" ")
    .trim();
};

const themeLight = `
  bg-[#ffffff]
  text-[#000000]
  font-["Microsoft_Sans_Serif",sans-serif]
  [-webkit-font-smoothing:antialiased]
  [--dialog-border:#7b7b7b]
  [--dialog-background:#f2f2f2]
  [--dialog-background-header:#ffffff]
  [--button-border:#b6b6b6]
  [--button-background:#e5e5e5]
  [--button-background-disabled:#d0d0d0]
  [--button-border-focus:#1080e0]
  [--select-border-focus:#000000]
  [--listbox-border:#8d929b]
  [--listbox-background-selected:#1080e0]
  [--listbox-text-selected:#ffffff]
  [--tabs-border:#dedede]
  [--tabs-background:#f2f2f2]
  [--tabs-background-hover:#ddecfa]
  [--tabs-background-selected:#ffffff]
  [--scrollbar-background:#f2f2f2]
  [--scrollbar-background-thumb:#d3d3d3]
`;

const themeDark = `
  bg-[#000000]
  text-[#ffffff]
  font-["Microsoft_Sans_Serif",sans-serif]
  [-webkit-font-smoothing:antialiased]
  [--dialog-border:#373838]
  [--dialog-background:#212223]
  [--dialog-background-header:#000000]
  [--button-border:#696969]
  [--button-background:#595959]
  [--button-background-disabled:#2e3233]
  [--button-border-focus:#47b5ff]
  [--select-border-focus:#000000]
  [--select-background:#212223]
  [--listbox-border:#696969]
  [--listbox-background-selected:#1080e0]
  [--listbox-text-selected:#ffffff]
  [--tabs-border:#3c4144]
  [--tabs-background:#212223]
  [--tabs-background-hover:#47b5ff]
  [--tabs-background-selected:#373a3d]
  [--scrollbar-background:#181818]
  [--scrollbar-background-thumb:#575757]
`;
