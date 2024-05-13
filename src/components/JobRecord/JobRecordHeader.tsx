import { ImageProps } from "next/image";
import { JobRecordSubHeader } from "@/components/JobRecord/JobRecordSubHeader";
import JobRecordIcon from "./JobRecordIcon";
import { Heading3 } from "../Typography/Heading3";

interface JobRecordHeaderProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  src: ImageProps["src"];
  alt: string;
}

export function JobRecordHeader({ title, subtitle, src, alt }: JobRecordHeaderProps): React.ReactElement {
  return (
    <div className="flex gap-4 flex-row mb-2">
      <div>
        <JobRecordIcon src={src} alt={alt} />
      </div>
      <div>
        <Heading3 className="m-0">{title}</Heading3>
        <JobRecordSubHeader>{subtitle}</JobRecordSubHeader>
      </div>
    </div>
  );
}
