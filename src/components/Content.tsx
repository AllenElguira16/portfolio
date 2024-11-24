import { ComponentProps, FC } from "react";
import { cn } from "../utils/cn";

export const Content: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  return (
    <div
      {...props}
      className={cn(className, "lg:max-w-screen-lg max-w-none mx-auto px-4")}
    />
  );
};
