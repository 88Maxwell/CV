import { WithChildren, WithClassName } from "@/types";
import clsx from "clsx";
import React from "react";

export function Heading1({ className, children }: WithChildren<WithClassName<{}>>) {
  return <h1 className={clsx(className, "text-7xl font-bold")}>{children}</h1>;
}
