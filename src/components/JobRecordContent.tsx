interface JobRecordContentProps {
  children: React.ReactNode;
}

export function JobRecordContent({ children }: JobRecordContentProps): React.ReactElement {
  return <p className="m-0 py-4">{children}</p>;
}

