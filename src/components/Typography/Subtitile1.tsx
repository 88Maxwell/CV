import { WithChildren, WithClassName } from "@/types";
import clsx from "clsx";
import React from "react";

export function Subtitile1({ className, children }: WithChildren<WithClassName<{}>>) {
  return <h2 className={clsx(className)}>{children}</h2>;
}
