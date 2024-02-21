import { cloneElement } from "react";
import { TestGrid, TestLabel, TestLayout, TestScope } from "../helper/tests";
import { OnyxTheme, OnyxThemeProps } from "../onyx-theme/theme";
import { OnyxButton, OnyxButtonProps } from "./button";

export const OnyxButtonMatrix = () => {
  const themes = [
    <OnyxTheme theme="light" className="bg-white text-black [--grid-color:#d4d4d4]" />,
    <OnyxTheme theme="dark" className="bg-black text-white [--grid-color:#353535]" />,
  ];

  type OnyxButtonVariant = { label: string; props: OnyxButtonProps };
  const variants: OnyxButtonVariant[] = [
    { label: "primary", props: { variation: "primary" } },
    { label: "primary outline", props: { variation: "primary", mode: "outline" } },
    { label: "primary plain", props: { variation: "primary", mode: "plain" } },
    { label: "secondary", props: { variation: "secondary" } },
    { label: "secondary outline", props: { variation: "secondary", mode: "outline" } },
    { label: "secondary plain", props: { variation: "secondary", mode: "plain" } },
    { label: "danger", props: { variation: "danger" } },
    { label: "danger outline", props: { variation: "danger", mode: "outline" } },
    { label: "danger plain", props: { variation: "danger", mode: "plain" } },
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
                      <OnyxButton {...variant.props}>Label</OnyxButton>
                    </TestGrid>

                    <TestGrid label="hovered" height={gridHeight} width={gridWidth}>
                      <TestScope isHovered>
                        <OnyxButton {...variant.props}>Label</OnyxButton>
                      </TestScope>
                    </TestGrid>

                    <TestGrid label="focus-visible" height={gridHeight} width={gridWidth}>
                      <TestScope isFocusVisible>
                        <OnyxButton {...variant.props}>Label</OnyxButton>
                      </TestScope>
                    </TestGrid>

                    <TestGrid label="disabled, normal" height={gridHeight} width={gridWidth}>
                      <OnyxButton {...variant.props} isDisabled>
                        Label
                      </OnyxButton>
                    </TestGrid>

                    <TestGrid label="disabled, hovered" height={gridHeight} width={gridWidth}>
                      <TestScope isHovered>
                        <OnyxButton {...variant.props} isDisabled>
                          Label
                        </OnyxButton>
                      </TestScope>
                    </TestGrid>

                    <TestGrid label="disabled, focus-visible" height={gridHeight} width={gridWidth}>
                      <TestScope isFocusVisible>
                        <OnyxButton {...variant.props} isDisabled>
                          Label
                        </OnyxButton>
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
