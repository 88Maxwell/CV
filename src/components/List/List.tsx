import clsx from "clsx";
import { Heading3 } from "../Typography/Heading3";

type Props = {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export function List({ children, title, className }: Props) {
  return (
    <div className={clsx("", className)}>
      <Heading3 className="mb-2">{title}</Heading3>
      <ul className="text-xl font-bold text-gray-300">{children}</ul>
    </div>
  );
}
