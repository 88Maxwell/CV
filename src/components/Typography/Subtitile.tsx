import { WithChildren, WithClassName } from "@/types";
import clsx from "clsx";
import React from "react";

export function Subtitile({ className, children }: WithChildren<WithClassName<{}>>) {
  return <h2 className={clsx(className, "text-2xl font-bold")}>{children}</h2>;
}
