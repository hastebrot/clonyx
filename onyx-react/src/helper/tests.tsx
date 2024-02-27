import {
  createContext,
  useContext,
  useEffect,
  useRef,
  type CSSProperties,
  type ElementRef,
} from "react";
import { classNames } from "./classes";

export type TestLayoutProps = {
  children?: React.ReactNode;
};

export const TestLayout = ({ children }: TestLayoutProps) => {
  return (
    <div
      className={classNames(
        "[text-rendering:optimizelegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]",
        "min-h-[100vh] supports-[-webkit-touch-callout:none]:min-h-[-webkit-fill-available]",
        "scale-[1] origin-top"
      )}
    >
      <main className="inline-grid grid-flow-row">{children}</main>
    </div>
  );
};

export type TestLabelProps = {
  label?: React.ReactNode;
  width?: number;
  nowrapText?: boolean;
};

export const TestLabel = (props: TestLabelProps) => {
  return (
    <div
      style={
        {
          "--label-width": props.width,
        } as CSSProperties
      }
      className={classNames(
        "font-mono text-[10px] leading-normal",
        "pb-[5px] w-[calc(var(--label-width)*10px+1px)]",
        !props.nowrapText ? "[word-spacing:999px] break-keep" : "whitespace-nowrap"
      )}
    >
      {props.label}
    </div>
  );
};

export type TestGridProps = {
  children?: React.ReactNode;
  label?: React.ReactNode;
  width?: number;
  height?: number;
};

export const TestGrid = ({ children, ...props }: TestGridProps) => {
  return (
    <div className="flex flex-col items-start">
      <TestLabel label={props.label} nowrapText />
      <div
        style={
          {
            "--grid-width": props.width ?? 10,
            "--grid-height": props.height ?? 10,
          } as React.CSSProperties
        }
        className={classNames(
          "w-[calc(var(--grid-width)*10px+1px)] h-[calc(var(--grid-height)*10px+1px)]",
          "[background-image:linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)]",
          "[background-size:10px_10px]"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export const TestStateContext = createContext<TestStateProps>({});

export const useTestStateContext = (): TestStateProps => {
  return useContext(TestStateContext);
};

export type TestStateProps = {
  children?: React.ReactNode;
  isFocused?: boolean;
  isFocusVisible?: boolean;
  isHovered?: boolean;
  isPressed?: boolean;
};

export const TestState = ({ children, ...props }: TestStateProps) => {
  const ref = useRef<ElementRef<"div">>(null);
  useEffect(() => {
    if (ref.current) {
      for (const node of ref.current.children) {
        if (props.isFocused) {
          node.setAttribute("data-focused", "true");
        }
        if (props.isFocusVisible) {
          node.setAttribute("data-focus-visible", "true");
        }
        if (props.isHovered) {
          node.setAttribute("data-hovered", "true");
        }
        if (props.isPressed) {
          node.setAttribute("data-pressed", "true");
        }
      }
    }
  }, [ref.current]);

  return (
    <TestStateContext.Provider value={{ ...props }}>
      <div ref={ref} className="[display:inherit]">
        {children}
      </div>
    </TestStateContext.Provider>
  );
};
