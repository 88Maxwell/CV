interface JobRecordTechStackProps {
  children: React.ReactNode;
}

export function JobRecordTechStack({ children }: JobRecordTechStackProps): React.ReactElement {
  return (
    <span>
      <strong>Stack: </strong>{children}
    </span>
  );
}
