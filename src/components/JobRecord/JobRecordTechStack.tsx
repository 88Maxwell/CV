interface JobRecordTechStackProps {
  children: React.ReactNode;
}

export function JobRecordTechStack({ children }: JobRecordTechStackProps): React.ReactElement {
  return (
    <span className="">
      <strong>Stack: </strong>{children}
    </span>
  );
}
