interface AchivementsListItemProps {
  children: React.ReactNode;
}

export function AchivementsListItem({ children }: AchivementsListItemProps) {
  return <li>{children}</li>;
}
