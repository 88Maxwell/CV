import clsx from "clsx"
interface AchivementsListProps {
  children: React.ReactNode;
  className?: string;
}

export function AchivementsList({ children, className }: AchivementsListProps) {
  return <ul className={clsx("m-0", className)}>{children}</ul>;
}
