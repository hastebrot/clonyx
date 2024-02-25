import { cloneElement } from "react";
import { TestGrid, TestLabel, TestLayout, TestState } from "../helper/tests";
import { OnyxTheme, OnyxThemeProps } from "../onyx-theme/theme";
import { OnyxCheckbox, OnyxCheckboxProps } from "./checkbox";

export const OnyxCheckboxMatrix = () => {
  const themes = [
    <OnyxTheme theme="light" className="bg-white text-black [--grid-color:#d4d4d4]" />,
    <OnyxTheme theme="dark" className="bg-black text-white [--grid-color:#353535]" />,
  ];

  type MatrixVariant = {
    label: string;
    checkboxProps: OnyxCheckboxProps;
  };
  const variants: MatrixVariant[] = [
    {
      label: "unselected",
      checkboxProps: { children: "Label", isSelected: false },
    },
    {
      label: "selected",
      checkboxProps: { children: "Label", isSelected: true },
    },
    {
      label: "indeterminate",
      checkboxProps: { children: "Label", isIndeterminate: true },
    },
  ];

  const labelWidth = 10;
  const gridHeight = 5;
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
                      <OnyxCheckbox {...variant.checkboxProps} />
                    </TestGrid>

                    <TestGrid label="hovered" height={gridHeight} width={gridWidth}>
                      <TestState isHovered>
                        <OnyxCheckbox {...variant.checkboxProps} />
                      </TestState>
                    </TestGrid>

                    <TestGrid label="focus-visible" height={gridHeight} width={gridWidth}>
                      <TestState isFocusVisible>
                        <OnyxCheckbox {...variant.checkboxProps} />
                      </TestState>
                    </TestGrid>

                    <TestGrid label="disabled, normal" height={gridHeight} width={gridWidth}>
                      <OnyxCheckbox {...variant.checkboxProps} isDisabled />
                    </TestGrid>

                    <TestGrid label="disabled, hovered" height={gridHeight} width={gridWidth}>
                      <TestState isHovered>
                        <OnyxCheckbox {...variant.checkboxProps} isDisabled />
                      </TestState>
                    </TestGrid>

                    <TestGrid label="disabled, focus-visible" height={gridHeight} width={gridWidth}>
                      <TestState isFocusVisible>
                        <OnyxCheckbox {...variant.checkboxProps} isDisabled />
                      </TestState>
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
