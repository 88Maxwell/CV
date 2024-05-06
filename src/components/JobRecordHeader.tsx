interface JobRecordHeaderProps {
    children: React.ReactNode;
  }
  
  export function JobRecordHeader({ children }: JobRecordHeaderProps): React.ReactElement {
    return <h5 className="font-bold">{children}</h5>;
  }
  
  