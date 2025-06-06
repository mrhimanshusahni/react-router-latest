// External Dependencies
import { cva } from "class-variance-authority";
import React from "react";

// Internal Dependencies
import Loader from "@/components/common/loader";
import { cn } from "@/lib/utils";

interface Button extends React.ComponentProps<"button"> {
  variant?:
    | "outline-full"
    | "outline-rounded"
    | "solid-outline-full"
    | "solid-rounded-full"
    | "solid-rounded";
  buttonLoaderClassName?: React.ComponentProps<"svg">["className"];
  buttonLoaderSpeed?: "normal" | "slow" | "fast" | "default";
  buttonLoadingText?: string;
  isButtonLoading?: boolean;
  isOverRideDefaultClasses?: boolean;
}

const CustomButton = ({
  buttonLoaderClassName,
  buttonLoaderSpeed = "default",
  buttonLoadingText,
  children,
  className,
  isButtonLoading,
  isOverRideDefaultClasses = false,
  title = isButtonLoading
    ? buttonLoadingText
      ? buttonLoadingText
      : children?.toString()
    : children?.toString(),
  type = "button",
  variant = "solid-outline-full",
  ...restProps
}: Button) => {
  return (
    <button
      className={cn(
        isOverRideDefaultClasses ? className : buttonVariants({ variant }),
        className,
      )}
      type={type}
      title={title}
      {...restProps}
    >
      {isButtonLoading ? (
        <div className="flex items-center justify-between gap-x-2">
          <Loader
            className={cn(
              [
                "solid-outline-full",
                "solid-rounded-full",
                "solid-rounded",
              ]?.includes(variant)
                ? "text-white"
                : "text-blue-500",
              buttonLoaderClassName,
            )}
            speed={buttonLoaderSpeed}
          />
          {buttonLoadingText ? <span>{buttonLoadingText}</span> : children}
        </div>
      ) : (
        children
      )}
    </button>
  );
};

const buttonVariants = cva(
  "inline-flex items-center justify-center px-4 py-2 h-9.5 text-sm whitespace-nowrap font-medium disabled:pointer-events-none transition-all disabled:opacity-50 shadow-xs",
  {
    variants: {
      variant: {
        "solid-outline-full":
          "rounded-full bg-blue-500 text-white hover:outline-2 hover:outline-offset-2 hover:outline-blue-500 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-600 active:outline-2 active:outline-offset-2 active:outline-blue-600",
        "solid-rounded-full":
          "rounded-full bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:focus:outline-none",
        "solid-rounded":
          "rounded-md bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:focus:outline-none",
        "outline-full":
          "rounded-full bg-white border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:focus:outline-none",
        "outline-rounded":
          "rounded-md bg-white border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:focus:outline-none",
      },
    },
    defaultVariants: {
      variant: "solid-outline-full",
    },
  },
);

export { CustomButton };
