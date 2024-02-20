import { useEffect, useRef, type CSSProperties } from "react";
import { classNames } from "../helper/classes";
import { OnyxTheme } from "../onyx-theme/theme";
import { OnyxButton } from "./button";

export const OnyxButtonStory = () => {
  const labelWidth = 8;
  const gridHeight = 5;

  return (
    <TestLayout>
      <OnyxTheme theme="light" className="scale-[1] origin-top">
        <main className="inline-flex flex-col gap-[10px] p-[10px]">
          <div className="grid grid-flow-col gap-[10px]">
            <TestLabel label="primary" width={labelWidth} />
            <TestGrid label="normal" height={gridHeight}>
              <OnyxButton>Button</OnyxButton>
            </TestGrid>
            <TestGrid label="focus visible" height={gridHeight}>
              <TestScope isFocusVisible>
                <OnyxButton>Button</OnyxButton>
              </TestScope>
            </TestGrid>
            <TestGrid label="hovered" height={gridHeight}>
              <TestScope isHovered>
                <OnyxButton>Button</OnyxButton>
              </TestScope>
            </TestGrid>
            <TestGrid label="disabled" height={gridHeight}>
              <OnyxButton isDisabled>Button</OnyxButton>
            </TestGrid>
          </div>

          <div className="grid grid-flow-col gap-[10px]">
            <TestLabel label="primary outline" width={labelWidth} />
            <TestGrid label="normal" height={gridHeight}>
              <OnyxButton mode="outline">Button</OnyxButton>
            </TestGrid>
            <TestGrid label="focus visible" height={gridHeight}>
              <TestScope isFocusVisible>
                <OnyxButton mode="outline">Button</OnyxButton>
              </TestScope>
            </TestGrid>
            <TestGrid label="hovered" height={gridHeight}>
              <TestScope isHovered>
                <OnyxButton mode="outline">Button</OnyxButton>
              </TestScope>
            </TestGrid>
            <TestGrid label="disabled" height={gridHeight}>
              <OnyxButton mode="outline" isDisabled>
                Button
              </OnyxButton>
            </TestGrid>
          </div>

          <div className="grid grid-flow-col gap-[5px]">
            <TestLabel label="secondary" width={labelWidth} />
            <TestGrid label="normal" height={5}>
              <OnyxButton variation="secondary">Button</OnyxButton>
            </TestGrid>
            <TestGrid label="focus visible" height={gridHeight}>
              <TestScope isFocusVisible>
                <OnyxButton variation="secondary">Button</OnyxButton>
              </TestScope>
            </TestGrid>
            <TestGrid label="hovered" height={gridHeight}>
              <TestScope isHovered>
                <OnyxButton variation="secondary">Button</OnyxButton>
              </TestScope>
            </TestGrid>
            <TestGrid label="disabled" height={gridHeight}>
              <OnyxButton variation="secondary" isDisabled>
                Button
              </OnyxButton>
            </TestGrid>
          </div>

          <div className="grid grid-flow-col gap-[5px]">
            <TestLabel label="secondary outline" width={labelWidth} />
            <TestGrid label="normal" height={gridHeight}>
              <OnyxButton variation="secondary" mode="outline">
                Button
              </OnyxButton>
            </TestGrid>
            <TestGrid label="focus visible" height={gridHeight}>
              <TestScope isFocusVisible>
                <OnyxButton variation="secondary" mode="outline">
                  Button
                </OnyxButton>
              </TestScope>
            </TestGrid>
            <TestGrid label="hovered" height={gridHeight}>
              <TestScope isHovered>
                <OnyxButton variation="secondary" mode="outline">
                  Button
                </OnyxButton>
              </TestScope>
            </TestGrid>
            <TestGrid label="disabled" height={gridHeight}>
              <OnyxButton variation="secondary" mode="outline" isDisabled>
                Button
              </OnyxButton>
            </TestGrid>
          </div>

          <div className="grid grid-flow-col gap-[5px]">
            <TestLabel label="danger" width={labelWidth} />
            <TestGrid label="normal" height={5}>
              <OnyxButton variation="danger">Button</OnyxButton>
            </TestGrid>
            <TestGrid label="focus visible" height={gridHeight}>
              <TestScope isFocusVisible>
                <OnyxButton variation="danger">Button</OnyxButton>
              </TestScope>
            </TestGrid>
            <TestGrid label="hovered" height={gridHeight}>
              <TestScope isHovered>
                <OnyxButton variation="danger">Button</OnyxButton>
              </TestScope>
            </TestGrid>
            <TestGrid label="disabled" height={gridHeight}>
              <OnyxButton variation="danger" isDisabled>
                Button
              </OnyxButton>
            </TestGrid>
          </div>

          <div className="grid grid-flow-col gap-[5px]">
            <TestLabel label="danger outline" width={labelWidth} />
            <TestGrid label="normal" height={gridHeight}>
              <OnyxButton variation="danger" mode="outline">
                Button
              </OnyxButton>
            </TestGrid>
            <TestGrid label="focus visible" height={gridHeight}>
              <TestScope isFocusVisible>
                <OnyxButton variation="danger" mode="outline">
                  Button
                </OnyxButton>
              </TestScope>
            </TestGrid>
            <TestGrid label="hovered" height={gridHeight}>
              <TestScope isHovered>
                <OnyxButton variation="danger" mode="outline">
                  Button
                </OnyxButton>
              </TestScope>
            </TestGrid>
            <TestGrid label="disabled" height={gridHeight}>
              <OnyxButton variation="danger" mode="outline" isDisabled>
                Button
              </OnyxButton>
            </TestGrid>
          </div>
        </main>
      </OnyxTheme>
    </TestLayout>
  );
};

type TestLayoutProps = {
  children?: React.ReactNode;
};

const TestLayout = ({ children }: TestLayoutProps) => {
  return (
    <div
      className={classNames(
        "[text-rendering:optimizelegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]",
        "min-h-[100vh] supports-[-webkit-touch-callout:none]:min-h-[-webkit-fill-available]"
      )}
    >
      {children}
    </div>
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
      className="font-mono text-[10px] pb-[5px] w-[calc(var(--label-width)*10px+1px)]"
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
            "--grid-color": "#ddd",
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

type TestScopeProps = {
  children?: React.ReactNode;
  isFocused?: boolean;
  isFocusVisible?: boolean;
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
