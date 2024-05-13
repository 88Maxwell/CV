import clsx from "clsx";

type Props = {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export function List({ children, title, className }: Props) {
  return (
    <div className={clsx("prose prose-invert", className)}>
      <h3>{title}</h3>
      <ul>{children}</ul>
    </div>
  );
}
