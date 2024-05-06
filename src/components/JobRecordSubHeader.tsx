interface JobRecordSubHeaderProps {
    children: React.ReactNode;
  }
  
  export function JobRecordSubHeader({ children }: JobRecordSubHeaderProps): React.ReactElement {
    return <span className="prose-sm prose-stone">{children}</span>;
  }
  
  