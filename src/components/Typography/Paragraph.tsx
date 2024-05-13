import { WithChildren, WithClassName } from "@/types";
import clsx from "clsx";
import React from "react";

export function Paragraph({ className, children }: WithChildren<WithClassName<{}>>) {
  return <p className={clsx(className)}>{children}</p>;
}
