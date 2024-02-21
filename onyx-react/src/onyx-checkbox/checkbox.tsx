import { Checkbox, CheckboxProps } from "react-aria-components";
import { classNames, classNamesUniq } from "../helper/classes";

export type OnyxCheckboxProps = CheckboxProps & {};

export const OnyxCheckbox = ({ children, ...props }: OnyxCheckboxProps) => {
  return (
    <Checkbox
      {...props}
      className={classNamesUniq(
        // .onyx-checkbox
        "group inline-flex items-center",
        "max-w-max",
        "text-[--onyx-color-text-icons-neutral-intense]",
        props.isDisabled ? "cursor-default" : "cursor-pointer",
        props.isDisabled && "text-[--onyx-color-text-icons-neutral-soft]"
      )}
    >
      <div
        className={classNames(
          // .onyx-checkbox__container
          "inline-flex items-center",
          "p-[--onyx-spacing-sm]",
          "rounded-[--onyx-radius-full]",

          !props.isDisabled && [
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

            (props.isSelected || props.isIndeterminate) && [
              "border-[--onyx-color-base-primary-500]",
              "bg-[--onyx-color-base-primary-500]",
            ],
            props.isDisabled && [
              /* wrap */
              "border-[--onyx-color-base-neutral-300]",
            ],
            !props.isDisabled && [
              /* wrap */
              "group-data-[hovered]:border-[--onyx-color-base-primary-300]",
              "group-data-[hovered]:bg-[--onyx-color-base-primary-300]",
            ]
          )}
        >
          {props.isSelected && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 32 32">
              <path d="m21.311 10.793-8.293 8.293-3.291-3.292-1.415 1.415 4.706 4.705 9.707-9.707z" />
            </svg>
          )}
          {props.isIndeterminate && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 32 32">
              <path d="M8 15h16v2H8z" />
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
    </Checkbox>
  );
};
