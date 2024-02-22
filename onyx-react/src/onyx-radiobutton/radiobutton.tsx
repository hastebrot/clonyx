import { Fragment } from "react";
import { Radio, RadioProps } from "react-aria-components";
import { classNames, classNamesUniq } from "../helper/classes";

export type OnyxRadioButtonProps = RadioProps & {
  children?: React.ReactNode;
};

export const OnyxRadioButton = ({ children, ...props }: OnyxRadioButtonProps) => {
  return (
    <Radio
      {...props}
      className={(state) =>
        classNamesUniq(
          // .onyx-checkbox
          "group inline-flex items-center",
          "max-w-max",
          "text-[--onyx-color-text-icons-neutral-intense]",
          state.isDisabled ? "cursor-default" : "cursor-pointer",
          state.isDisabled && "text-[--onyx-color-text-icons-neutral-soft]"
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

                state.isSelected && [
                  "border-[--onyx-color-base-primary-500]",
                  "bg-[--onyx-color-base-primary-500]",
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
            </div>
          </div>
          <div
            className={classNames(
              // .onyx-checkbox__label
              "inline-block m-0 text-[1rem] leading-[1.5rem]"
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
