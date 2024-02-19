import { useEffect, useRef, type CSSProperties } from "react";
import { classNames } from "../helper/classes";
import { OnyxTheme } from "../onyx-theme/theme";
import { OnyxButton } from "./button";

export const ButtonStory = () => {
  return (
    <OnyxTheme
      theme="light"
      className="scale-[1] origin-top text-[11px] leading-[11px] tracking-tight"
    >
      <main className="inline-flex flex-col gap-[5px] p-[10px]">
        <div className="grid grid-flow-col gap-[5px]">
          <TestLabel label="primary" width={10} />
          <TestGrid label="default" height={4}>
            <OnyxButton>Button</OnyxButton>
          </TestGrid>
          <TestGrid label="focus" height={4}>
            <TestScope isFocused>
              <OnyxButton>Button</OnyxButton>
            </TestScope>
          </TestGrid>
          <TestGrid label="hover" height={4}>
            <TestScope isHovered>
              <OnyxButton>Button</OnyxButton>
            </TestScope>
          </TestGrid>
          <TestGrid label="active" height={4}>
            <TestScope isPressed>
              <OnyxButton>Button</OnyxButton>
            </TestScope>
          </TestGrid>
        </div>

        <div className="grid grid-flow-col gap-[5px]">
          <TestLabel label="secondary" width={10} />
          <TestGrid label="default" height={4}>
            <OnyxButton>Button</OnyxButton>
          </TestGrid>
          <TestGrid label="focus" height={4}>
            <TestScope isFocused>
              <OnyxButton>Button</OnyxButton>
            </TestScope>
          </TestGrid>
          <TestGrid label="hover" height={4}>
            <TestScope isHovered>
              <OnyxButton>Button</OnyxButton>
            </TestScope>
          </TestGrid>
          <TestGrid label="active" height={4}>
            <TestScope isPressed>
              <OnyxButton>Button</OnyxButton>
            </TestScope>
          </TestGrid>
        </div>

        <div className="grid grid-flow-col gap-[5px]">
          <TestLabel label="disabled" width={10} />
          <TestGrid label="default" height={4}>
            <OnyxButton isDisabled>Button</OnyxButton>
          </TestGrid>
          <TestGrid label="focus" height={4}>
            <TestScope isFocused>
              <OnyxButton isDisabled>Button</OnyxButton>
            </TestScope>
          </TestGrid>
          <TestGrid label="hover" height={4}>
            <TestScope isHovered>
              <OnyxButton isDisabled>Button</OnyxButton>
            </TestScope>
          </TestGrid>
          <TestGrid label="active" height={4}>
            <TestScope isPressed>
              <OnyxButton isDisabled>Button</OnyxButton>
            </TestScope>
          </TestGrid>
        </div>
      </main>
    </OnyxTheme>
  );
};

type TestLabelProps = {
  label?: string;
  width?: number;
};

const TestLabel = (props: TestLabelProps) => {
  return (
    <div
      style={
        {
          "--label-width": props.width ?? 10,
        } as CSSProperties
      }
      className="font-mono text-[8px] pb-[4px] w-[calc(var(--label-width)*10px+1px)]"
    >
      {props.label}
    </div>
  );
};

type TestGridProps = {
  children?: React.ReactNode;
  label?: string;
  width?: number;
  height?: number;
};

const TestGrid = ({ children, ...props }: TestGridProps) => {
  return (
    <div>
      <TestLabel label={props.label} />
      <div
        style={
          {
            "--grid-color": "var(--tabs-border)",
            "--grid-width": props.width ?? 10,
            "--grid-height": props.height ?? 10,
          } as React.CSSProperties
        }
        className={classNames(
          "w-[calc(var(--grid-width)*10px+1px)] h-[calc(var(--grid-height)*10px+1px)]",
          "[background-image:linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)]",
          "[background-size:10px_10px]",
          "overflow-hidden"
        )}
      >
        {children}
      </div>
    </div>
  );
};

type TestScopeProps = {
  children?: React.ReactNode;
  isFocused?: boolean;
  isHovered?: boolean;
  isPressed?: boolean;
};

const TestScope = ({ children, ...props }: TestScopeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      for (const node of ref.current.children) {
        if (props.isFocused) {
          node.setAttribute("data-focused", "true");
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
