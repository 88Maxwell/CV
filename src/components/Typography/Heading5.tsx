import { WithChildren, WithClassName } from "@/types";
import clsx from "clsx";
import React from "react";

export function Heading5({ className, children }: WithChildren<WithClassName<{}>>) {
  return <h5 className={clsx(className)}>{children}</h5>;
}
