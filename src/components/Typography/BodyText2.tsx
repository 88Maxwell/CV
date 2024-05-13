import { WithChildren, WithClassName } from "@/types";
import clsx from "clsx";
import React from "react";

export function BodyText2({ className, children }: WithChildren<WithClassName<{}>>) {
  return <div className={clsx(className)}>{children}</div>;
}
