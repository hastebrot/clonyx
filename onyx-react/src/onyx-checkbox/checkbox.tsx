import { Fragment } from "react";
import { Checkbox, CheckboxProps } from "react-aria-components";
import { classNames, classNamesUniq } from "../helper/classes";
import { useTestStateContext } from "../helper/tests";

export type OnyxCheckboxProps = CheckboxProps & {};

export const OnyxCheckbox = ({ children, ...props }: OnyxCheckboxProps) => {
  const testState = useTestStateContext();

  return (
    <Checkbox
      {...props}
      className={(state) =>
        classNamesUniq(
          // .onyx-checkbox
          "group flex items-center",
          "max-w-max",
          "text-[--onyx-color-text-icons-neutral-intense]",
          state.isDisabled ? "cursor-default" : "cursor-pointer",
          state.isDisabled && "text-[--onyx-color-text-icons-neutral-soft]",

          "[--onyx-radiobutton-outline-color:--onyx-color-base-primary-200]",
          "[--onyx-radiobutton-outline-width:0]",

          (state.isFocusVisible || testState.isFocusVisible) && [
            "[--onyx-radiobutton-outline-width:--onyx-spacing-sm]",
          ]
        )
      }
    >
      {(state) => (
        <Fragment>
          <div
            className={classNames(
              // .onyx-checkbox__container
              "inline-flex items-center",
              "p-[--onyx-spacing-sm]",
              "-m-[--onyx-spacing-sm]",
              "rounded-[--onyx-radius-full]",

              !state.isDisabled && [
                /* wrap */
                "group-data-[focus-visible]:bg-[--onyx-color-base-primary-200]",
              ]
            )}
          >
            <div
              className={classNames(
                // .onyx-checkbox__input
                "h-[1rem] w-[1rem]",
                "rounded-[--onyx-radius-sm]",
                "border-[0.0625rem]",
                "border-[--onyx-color-base-neutral-400]",
                "[outline:none]",
                "bg-[--onyx-color-base-background-blank]",
                "bg-no-repeat bg-[position:50%] bg-[size:100%]",
                // "[outline:var(--onyx-radiobutton-outline-width)_solid_var(--onyx-radiobutton-outline-color)]",

                (state.isSelected || state.isIndeterminate) && [
                  "border-[--onyx-color-base-primary-500]",
                  "bg-[--onyx-color-base-primary-500]",
                ],

                state.isInvalid && [
                  "border-[--onyx-color-base-danger-500]",
                  "bg-[--onyx-color-base-danger-200]",

                  (state.isSelected || state.isIndeterminate) && [
                    "bg-[--onyx-color-base-danger-500]",

                    (state.isHovered || testState.isHovered) && [
                      "border-[--onyx-color-base-danger-400]",
                      "bg-[--onyx-color-base-danger-400]",
                    ],
                  ],
                ],

                state.isDisabled && [
                  /* wrap */
                  "border-[--onyx-color-base-neutral-300]",
                ],
                !state.isDisabled && [
                  /* wrap */
                  "group-data-[hovered]:border-[--onyx-color-base-primary-300]",
                  "group-data-[hovered]:bg-[--onyx-color-base-primary-300]",
                ]
              )}
            >
              {state.isSelected && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 32 32">
                  <path d="m21.311 10.793-8.293 8.293-3.291-3.292-1.415 1.415 4.706 4.705 9.707-9.707z" />
                </svg>
              )}
              {state.isIndeterminate && (
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 32 32">
                  <path d="M8 15h16v2H8z" />
                </svg>
              )}
            </div>
          </div>
          <div
            className={classNames(
              // .onyx-checkbox__label
              "inline-block m-0 pl-[--onyx-spacing-sm] text-[1rem] leading-[1]"
            )}
          >
            {children as React.ReactNode}
            {/* {props.isRequired && <span>required</span>} */}
            {/* {!props.isRequired && <span>optional</span>} */}
          </div>
        </Fragment>
      )}
    </Checkbox>
  );
};
