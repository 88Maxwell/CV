import { ImageProps } from "next/image";
import { JobRecordSubHeader } from "@/components/JobRecord/JobRecordSubHeader";
import JobRecordIcon from "./JobRecordIcon";

interface JobRecordHeaderProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  src: ImageProps["src"];
  alt: string;
}

export function JobRecordHeader({ title, subtitle, src, alt }: JobRecordHeaderProps): React.ReactElement {
  return (
    <div className="flex gap-4 flex-row">
      <JobRecordIcon src={src} alt={alt} />
      <div>
        <h3 className="m-0">{title}</h3>
        <JobRecordSubHeader>{subtitle}</JobRecordSubHeader>
      </div>
    </div>
  );
}
