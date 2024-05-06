interface AchivementsListProps {
    children: React.ReactNode;
  }
  
  export function AchivementsList({ children }: AchivementsListProps) {
    return <ul>{children}</ul>;
  }
  