import { RadioGroup, RadioGroupProps } from "react-aria-components";

export type OnyxRadioButtonGroupProps = RadioGroupProps;

export const OnyxRadioButtonGroup = ({ children, ...props }: OnyxRadioButtonGroupProps) => {
  return <RadioGroup {...props}>{children}</RadioGroup>;
};
