import { WithChildren, WithClassName } from "@/types";
import clsx from "clsx";
import React from "react";

export function Heading4({ className, children }: WithChildren<WithClassName<{}>>) {
  return <h4 className={clsx(className)}>{children}</h4>;
}
