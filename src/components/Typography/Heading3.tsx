import { WithChildren, WithClassName } from "@/types";
import clsx from "clsx";
import React from "react";

export function Heading3({ className, children }: WithChildren<WithClassName<{}>>) {
  return <h3 className={clsx(className, "text-3xl font-bold")}>{children}</h3>;
}
