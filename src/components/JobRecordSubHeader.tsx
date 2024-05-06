interface JobRecordSubHeaderProps {
    children: React.ReactNode;
  }
  
  export function JobRecordSubHeader({ children }: JobRecordSubHeaderProps): React.ReactElement {
    return <span>{children}</span>;
  }
  
  