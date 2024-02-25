import { cloneElement } from "react";
import { RadioGroupProps } from "react-aria-components";
import { TestGrid, TestLabel, TestLayout, TestState } from "../helper/tests";
import { OnyxTheme, OnyxThemeProps } from "../onyx-theme/theme";
import { OnyxRadioButton, OnyxRadioButtonProps } from "./radiobutton";
import { OnyxRadioButtonGroup } from "./radiobuttongroup";

export const OnyxRadioButtonMatrix = () => {
  const themes = [
    <OnyxTheme theme="light" className="bg-white text-black [--grid-color:#d4d4d4]" />,
    <OnyxTheme theme="dark" className="bg-black text-white [--grid-color:#353535]" />,
  ];

  type MatrixVariant = {
    label: string;
    radioButtonProps: OnyxRadioButtonProps;
    radioGroupProps: RadioGroupProps;
  };
  const variants: MatrixVariant[] = [
    {
      label: "unselected",
      radioButtonProps: { children: "Label", value: "radio" },
      radioGroupProps: { value: "" },
    },
    {
      label: "selected",
      radioButtonProps: { children: "Label", value: "radio" },
      radioGroupProps: { value: "radio" },
    },
    {
      label: "invalid unselected",
      radioButtonProps: { children: "Label", value: "radio" },
      radioGroupProps: { value: "", isInvalid: true },
    },
    {
      label: "invalid selected",
      radioButtonProps: { children: "Label", value: "radio" },
      radioGroupProps: { value: "radio", isInvalid: true },
    },
  ];

  const labelWidth = 10;
  const gridHeight = 4;
  const gridWidth = 12;

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
                      <OnyxRadioButtonGroup {...variant.radioGroupProps}>
                        <OnyxRadioButton {...variant.radioButtonProps} />
                      </OnyxRadioButtonGroup>
                    </TestGrid>

                    <TestGrid label="hovered" height={gridHeight} width={gridWidth}>
                      <OnyxRadioButtonGroup {...variant.radioGroupProps}>
                        <TestState isHovered>
                          <OnyxRadioButton {...variant.radioButtonProps} />
                        </TestState>
                      </OnyxRadioButtonGroup>
                    </TestGrid>

                    <TestGrid label="focus-visible" height={gridHeight} width={gridWidth}>
                      <OnyxRadioButtonGroup {...variant.radioGroupProps}>
                        <TestState isFocusVisible>
                          <OnyxRadioButton {...variant.radioButtonProps} />
                        </TestState>
                      </OnyxRadioButtonGroup>
                    </TestGrid>

                    <TestGrid label="disabled, normal" height={gridHeight} width={gridWidth}>
                      <OnyxRadioButtonGroup {...variant.radioGroupProps}>
                        <OnyxRadioButton {...variant.radioButtonProps} isDisabled />
                      </OnyxRadioButtonGroup>
                    </TestGrid>

                    <TestGrid label="disabled, hovered" height={gridHeight} width={gridWidth}>
                      <OnyxRadioButtonGroup {...variant.radioGroupProps}>
                        <TestState isHovered>
                          <OnyxRadioButton {...variant.radioButtonProps} isDisabled />
                        </TestState>
                      </OnyxRadioButtonGroup>
                    </TestGrid>

                    <TestGrid label="disabled, focus-visible" height={gridHeight} width={gridWidth}>
                      <OnyxRadioButtonGroup {...variant.radioGroupProps}>
                        <TestState isFocusVisible>
                          <OnyxRadioButton {...variant.radioButtonProps} isDisabled />
                        </TestState>
                      </OnyxRadioButtonGroup>
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
