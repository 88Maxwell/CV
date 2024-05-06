interface AchivementsListItemProps {
  children: React.ReactNode;
}

export function AchivementsListItem({ children }: AchivementsListItemProps) {
  return <li className="m-0">{children}</li>;
}
