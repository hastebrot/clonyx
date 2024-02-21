import { cloneElement } from "react";
import { TestGrid, TestLabel, TestLayout, TestScope } from "../helper/tests";
import { OnyxTheme, OnyxThemeProps } from "../onyx-theme/theme";
import { OnyxCheckbox, OnyxCheckboxProps } from "./checkbox";

export const OnyxCheckboxMatrix = () => {
  const themes = [
    <OnyxTheme theme="light" className="bg-white text-black [--grid-color:#d4d4d4]" />,
    <OnyxTheme theme="dark" className="bg-black text-white [--grid-color:#353535]" />,
  ];

  type OnyxCheckboxVariant = { label: string; props: OnyxCheckboxProps };
  const variants: OnyxCheckboxVariant[] = [
    {
      label: "unselected",
      props: { children: "Label", isSelected: false },
    },
    {
      label: "selected",
      props: { children: "Label", isSelected: true },
    },
    {
      label: "indeterminate",
      props: { children: "Label", isIndeterminate: true },
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
                      <OnyxCheckbox {...variant.props} />
                    </TestGrid>

                    <TestGrid label="hovered" height={gridHeight} width={gridWidth}>
                      <TestScope isHovered>
                        <OnyxCheckbox {...variant.props} />
                      </TestScope>
                    </TestGrid>

                    <TestGrid label="focus visible" height={gridHeight} width={gridWidth}>
                      <TestScope isFocusVisible>
                        <OnyxCheckbox {...variant.props} />
                      </TestScope>
                    </TestGrid>

                    <TestGrid label="disabled, normal" height={gridHeight} width={gridWidth}>
                      <OnyxCheckbox {...variant.props} isDisabled />
                    </TestGrid>

                    <TestGrid label="disabled, hovered" height={gridHeight} width={gridWidth}>
                      <TestScope isHovered>
                        <OnyxCheckbox {...variant.props} isDisabled />
                      </TestScope>
                    </TestGrid>

                    <TestGrid label="disabled, focus-visible" height={gridHeight} width={gridWidth}>
                      <TestScope isFocusVisible>
                        <OnyxCheckbox {...variant.props} isDisabled />
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
