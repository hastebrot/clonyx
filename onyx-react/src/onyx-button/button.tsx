import { Button, ButtonProps } from "react-aria-components";
import { classNames, classNamesUniq } from "../helper/classes";

export type OnyxButtonProps = ButtonProps & {
  type?: "button" | "submit" | "reset";
  variation?: "primary" | "secondary" | "danger";
  mode?: "default" | "outline" | "plain";
};

export const OnyxButton = ({ children, ...props }: OnyxButtonProps) => {
  props.type = props.type ?? "button";
  props.variation = props.variation ?? "primary";
  props.mode = props.mode ?? "default";

  return (
    <Button
      {...props}
      className={classNamesUniq(
        "[--onyx-button-background-color:transparent]",
        "[--onyx-button-background-hover-color:--onyx-color-base-primary-100]",
        "[--onyx-button-border-color:transparent]",
        "[--onyx-button-text-color:--onyx-color-text-icons-primary-intense]",
        "[--onyx-button-outline-color:--onyx-color-base-primary-200]",

        !props.isDisabled && [
          "data-[hovered]:[--onyx-button-background-color:--onyx-button-background-hover-color]",
          "data-[focus-visible]:[outline:0.25rem_solid_var(--onyx-button-outline-color)]",
        ],

        "flex items-center justify-center",
        "py-[--onyx-spacing-3xs] px-[--onyx-spacing-sm]",
        "gap-[--onyx-spacing-5xs]",
        "rounded-[--onyx-radius-sm]",
        "border-[0.0625rem]",
        "bg-[--onyx-button-background-color]",
        "border-[--onyx-button-border-color]",
        "text-[--onyx-button-text-color]",

        props.isDisabled ? "cursor-default" : "cursor-pointer",

        props.variation === "primary" && [
          props.isDisabled && [
            /* wrap */
            "[--onyx-button-text-color:--onyx-color-text-icons-primary-soft]",
          ],

          props.mode === "default" && [
            "[--onyx-button-background-color:--onyx-color-base-primary-500]",
            "[--onyx-button-background-hover-color:--onyx-color-base-primary-400]",
            "[--onyx-button-border-color:--onyx-color-base-primary-500]",
            "[--onyx-button-text-color:--onyx-color-text-icons-neutral-inverted]",

            props.isDisabled && [
              "[--onyx-button-background-color:--onyx-color-base-primary-200]",
              "[--onyx-button-border-color:--onyx-color-base-primary-200]",
              "[--onyx-button-text-color:--onyx-color-text-icons-neutral-inverted]",
            ],
          ],

          props.mode === "outline" && [
            "[--onyx-button-border-color:--onyx-color-base-primary-500]",

            props.isDisabled && [
              /* wrap */
              "[--onyx-button-border-color:--onyx-color-base-primary-200]",
            ],
          ],
        ],

        props.variation === "secondary" && [
          "[--onyx-button-background-hover-color:--onyx-color-base-neutral-200]",
          "[--onyx-button-outline-color:--onyx-color-base-neutral-300]",
          "[--onyx-button-text-color:--onyx-color-text-icons-neutral-intense]",

          props.isDisabled && [
            /* wrap */
            "[--onyx-button-text-color:--onyx-color-text-icons-neutral-soft]",
          ],

          props.mode === "default" && [
            "[--onyx-button-background-color:--onyx-color-base-background-blank]",
            "[--onyx-button-background-hover-color:--onyx-color-base-neutral-200]",
            "[--onyx-button-border-color:--onyx-color-base-neutral-400]",

            props.isDisabled && [
              "[--onyx-button-background-color:--onyx-color-base-background-blank]",
              "[--onyx-button-border-color:--onyx-color-base-neutral-200]",
            ],
          ],

          props.mode === "outline" && [
            "[--onyx-button-border-color:--onyx-color-base-neutral-400]",

            props.isDisabled && [
              /* wrap */
              "[--onyx-button-border-color:--onyx-color-base-neutral-200]",
            ],
          ],
        ],

        props.variation === "danger" && [
          "[--onyx-button-background-hover-color:--onyx-color-base-danger-200]",
          "[--onyx-button-outline-color:--onyx-color-base-danger-300]",
          "[--onyx-button-text-color:--onyx-color-text-icons-danger-intense]",

          props.isDisabled && [
            /* wrap */
            "[--onyx-button-text-color:--onyx-color-text-icons-danger-medium]",
          ],

          props.mode === "default" && [
            "[--onyx-button-background-color:--onyx-color-base-danger-200]",
            "[--onyx-button-background-hover-color:--onyx-color-base-danger-100]",
            "[--onyx-button-border-color:--onyx-color-base-danger-500]",

            props.isDisabled && [
              "[--onyx-button-background-color:--onyx-color-base-danger-100]",
              "[--onyx-button-border-color:--onyx-color-base-danger-200]",
            ],
          ],

          props.mode === "outline" && [
            "[--onyx-button-border-color:--onyx-color-base-danger-500]",

            props.isDisabled && [
              /* wrap */
              "[--onyx-button-border-color:--onyx-color-base-danger-200]",
            ],
          ],
        ]
      )}
    >
      <span
        className={classNames(
          "flex px-[--onyx-spacing-4xs] max-w-[12.25rem]",
          "overflow-hidden overflow-ellipsis",
          "text-[1rem] font-[600] leading-[1.5]"
        )}
      >
        {children as React.ReactNode}
      </span>
    </Button>
  );
};
