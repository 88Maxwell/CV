interface JobRecordContentProps {
  children: React.ReactNode;
}

export function JobRecordContent({ children }: JobRecordContentProps): React.ReactElement {
  return <p className="m-0 text-gray-300">{children}</p>;
}

