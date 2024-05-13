import { Paragraph } from "../Typography/Paragraph";

interface JobRecordTechStackProps {
  children: React.ReactNode;
}

export function JobRecordTechStack({ children }: JobRecordTechStackProps): React.ReactElement {
  return (
    <Paragraph className="mb-4 italic text-sm">
      <strong className="text-white">Stack: </strong>{children}
    </Paragraph>
  );
}
