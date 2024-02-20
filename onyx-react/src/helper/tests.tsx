import { useEffect, useRef, type CSSProperties } from "react";
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
};

export const TestLabel = (props: TestLabelProps) => {
  return (
    <div
      style={
        {
          "--label-width": props.width ?? 10,
        } as CSSProperties
      }
      className="font-mono text-[10px] pb-[5px] w-[calc(var(--label-width)*10px+1px)]"
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
    <div>
      <TestLabel label={props.label} />
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

export type TestScopeProps = {
  children?: React.ReactNode;
  isFocused?: boolean;
  isFocusVisible?: boolean;
  isHovered?: boolean;
  isPressed?: boolean;
};

export const TestScope = ({ children, ...props }: TestScopeProps) => {
  const ref = useRef<HTMLDivElement>(null);
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

  return <div ref={ref}>{children}</div>;
};
