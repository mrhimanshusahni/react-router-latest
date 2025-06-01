import { cn } from "@/lib/utils";

export const CustomTextArea = ({
  className,
  ...restProps
}: React.ComponentProps<"textarea">) => {
  return (
    <textarea
      className={cn(
        "scrollbar-custom resize-none rounded-md border px-3 py-2 text-base shadow-xs outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      rows={5}
      {...restProps}
    />
  );
};
