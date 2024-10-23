import { FC, PropsWithChildren } from "react";

export const Title: FC<PropsWithChildren> = ({ children }) => {
  return <h1 className="text-2xl font-extrabold font-title">{children}</h1>;
};
