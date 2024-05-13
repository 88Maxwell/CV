interface JobRecordProps {
    children: React.ReactNode;
  }
  
  export function JobRecord({ children }: JobRecordProps): React.ReactElement {
    return <div className="flex flex-col">{children}</div>;
  }
  
  