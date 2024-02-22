import { cloneElement } from "react";
import { TestGrid, TestLabel, TestLayout, TestScope } from "../helper/tests";
import { OnyxTheme, OnyxThemeProps } from "../onyx-theme/theme";
import { OnyxButton, OnyxButtonProps } from "./button";

export const OnyxButtonMatrix = () => {
  const themes = [
    <OnyxTheme theme="light" className="bg-white text-black [--grid-color:#d4d4d4]" />,
    <OnyxTheme theme="dark" className="bg-black text-white [--grid-color:#353535]" />,
  ];

  type MatrixVariant = {
    label: string;
    buttonProps: OnyxButtonProps;
  };
  const variants: MatrixVariant[] = [
    {
      label: "primary",
      buttonProps: { children: "Label", variation: "primary" },
    },
    {
      label: "primary outline",
      buttonProps: { children: "Label", variation: "primary", mode: "outline" },
    },
    {
      label: "primary plain",
      buttonProps: { children: "Label", variation: "primary", mode: "plain" },
    },
    {
      label: "secondary",
      buttonProps: { children: "Label", variation: "secondary" },
    },
    {
      label: "secondary outline",
      buttonProps: { children: "Label", variation: "secondary", mode: "outline" },
    },
    {
      label: "secondary plain",
      buttonProps: { children: "Label", variation: "secondary", mode: "plain" },
    },
    {
      label: "danger",
      buttonProps: { children: "Label", variation: "danger" },
    },
    {
      label: "danger outline",
      buttonProps: { children: "Label", variation: "danger", mode: "outline" },
    },
    {
      label: "danger plain",
      buttonProps: { children: "Label", variation: "danger", mode: "plain" },
    },
  ];

  const labelWidth = 10;
  const gridHeight = 5;
  const gridWidth = 10;

  return (
    <TestLayout>
      {themes.map((theme) => {
        const Theme = (props: OnyxThemeProps) => cloneElement(theme, props);
        return (
          <Theme key={theme.props.theme}>
            <div className="grid grid-flow-row gap-[10px] p-[10px]">
              <TestLabel label={theme.props.theme} width={labelWidth} />
              {variants.map((variant) => {
                return (
                  <div key={variant.label} className="grid grid-flow-col gap-[10px]">
                    <TestLabel label={variant.label} width={labelWidth} />

                    <TestGrid label="normal" height={gridHeight} width={gridWidth}>
                      <OnyxButton {...variant.buttonProps} />
                    </TestGrid>

                    <TestGrid label="hovered" height={gridHeight} width={gridWidth}>
                      <TestScope isHovered>
                        <OnyxButton {...variant.buttonProps} />
                      </TestScope>
                    </TestGrid>

                    <TestGrid label="focus-visible" height={gridHeight} width={gridWidth}>
                      <TestScope isFocusVisible>
                        <OnyxButton {...variant.buttonProps} />
                      </TestScope>
                    </TestGrid>

                    <TestGrid label="disabled, normal" height={gridHeight} width={gridWidth}>
                      <OnyxButton {...variant.buttonProps} isDisabled />
                    </TestGrid>

                    <TestGrid label="disabled, hovered" height={gridHeight} width={gridWidth}>
                      <TestScope isHovered>
                        <OnyxButton {...variant.buttonProps} isDisabled />
                      </TestScope>
                    </TestGrid>

                    <TestGrid label="disabled, focus-visible" height={gridHeight} width={gridWidth}>
                      <TestScope isFocusVisible>
                        <OnyxButton {...variant.buttonProps} isDisabled />
                      </TestScope>
                    </TestGrid>
                  </div>
                );
              })}
            </div>
          </Theme>
        );
      })}
    </TestLayout>
  );
};
