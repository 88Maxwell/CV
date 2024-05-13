import clsx from "clsx"
interface AchivementsListProps {
  children: React.ReactNode;
  className?: string;
}

export function AchivementsList({ children, className }: AchivementsListProps) {
  return <ul className={clsx("pl-3 mb-1", className)}>{children}</ul>;
}
