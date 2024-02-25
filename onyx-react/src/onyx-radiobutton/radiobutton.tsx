import { Fragment, useContext } from "react";
import { Radio, RadioProps } from "react-aria-components";
import { classNames, classNamesUniq } from "../helper/classes";
import { TestStateContext } from "../helper/tests";

export type OnyxRadioButtonProps = RadioProps & {
  children?: React.ReactNode;
};

export const OnyxRadioButton = ({ children, ...props }: OnyxRadioButtonProps) => {
  const testState = useContext(TestStateContext);

  return (
    <Radio
      {...props}
      className={(state) =>
        classNamesUniq(
          // .onyx-radiobutton
          "flex items-center",

          state.isDisabled ? "cursor-default" : "cursor-pointer",

          "[--onyx-radiobutton-background-color:--onyx-color-base-background-blank]",
          "[--onyx-radiobutton-border-color:--onyx-color-base-neutral-400]",
          "[--onyx-radiobutton-outline-color:--onyx-color-base-primary-200]",
          "[--onyx-radiobutton-outline-width:0]",
          "[--onyx-radiobutton-text-color:--onyx-color-text-icons-neutral-intense]",

          (state.isHovered || testState.isHovered) && [
            /* wrap */
            "[--onyx-radiobutton-border-color:--onyx-color-base-primary-300]",
          ],

          state.isSelected && [
            "[--onyx-radiobutton-border-color:--onyx-color-base-primary-500]",
            "[--onyx-radiobutton-background-color:--onyx-color-base-primary-500]",

            (state.isHovered || testState.isHovered) && [
              "[--onyx-radiobutton-border-color:--onyx-color-base-primary-400]",
              "[--onyx-radiobutton-background-color:--onyx-color-base-primary-400]",
            ],
          ],

          state.isInvalid && [
            "[--onyx-radiobutton-border-color:--onyx-color-base-danger-500]",
            "[--onyx-radiobutton-outline-color:--onyx-color-base-danger-200]",

            state.isSelected && [
              "[--onyx-radiobutton-background-color:--onyx-color-base-danger-500]",

              (state.isHovered || testState.isHovered) && [
                "[--onyx-radiobutton-border-color:--onyx-color-base-danger-400]",
                "[--onyx-radiobutton-background-color:--onyx-color-base-danger-400]",
              ],
            ],
          ],

          (state.isFocusVisible || testState.isFocusVisible) && [
            "[--onyx-radiobutton-outline-width:--onyx-spacing-sm]",
          ],

          state.isDisabled && [
            "[--onyx-radiobutton-border-color:--onyx-color-base-neutral-200]",
            "[--onyx-radiobutton-outline-width:0]",
            "[--onyx-radiobutton-text-color:--onyx-color-text-icons-neutral-soft]",

            state.isSelected && [
              "[--onyx-radiobutton-background-color:--onyx-color-base-neutral-300]",
              "[--onyx-radiobutton-border-color:--onyx-color-base-neutral-300]",
            ],
          ]
        )
      }
    >
      {(_state) => (
        <Fragment>
          <div
            className={classNames(
              // .onyx-radiobutton__container
              "inline-flex items-center"
            )}
          >
            <div
              className={classNames(
                // .onyx-radiobutton__input
                "inline-flex items-center justify-center",
                "h-[1rem] w-[1rem]",

                "rounded-[--onyx-radius-full]",
                "border-[0.0625rem]",
                "border-[--onyx-radiobutton-border-color]",
                "bg-[--onyx-radiobutton-background-color]",
                "[outline:var(--onyx-radiobutton-outline-width)_solid_var(--onyx-radiobutton-outline-color)]"
              )}
            >
              <div
                className={classNames(
                  // .onyx-radiobutton__input::before
                  "h-[0.375rem] w-[0.375rem]",
                  "bg-[--onyx-color-base-background-blank]",
                  "rounded-[--onyx-radius-full]"
                )}
              ></div>
            </div>
          </div>
          <div
            className={classNames(
              // .onyx-radiobutton__label
              "inline-block m-0 pl-[--onyx-spacing-sm] text-[1rem] leading-[1]"
            )}
          >
            {children as React.ReactNode}
            {/* {props.isRequired && <span>required</span>} */}
            {/* {!props.isRequired && <span>optional</span>} */}
          </div>
        </Fragment>
      )}
    </Radio>
  );
};
