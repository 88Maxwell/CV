interface JobRecordProps {
    children: React.ReactNode;
  }
  
  export function JobRecord({ children }: JobRecordProps): React.ReactElement {
    return <div className="flex flex-col gap-2 prose prose-invert">{children}</div>;
  }
  
  