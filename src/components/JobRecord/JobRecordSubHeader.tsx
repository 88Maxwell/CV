import { Subtitile } from "../Typography/Subtitile";

interface JobRecordSubHeaderProps {
    children: React.ReactNode;
  }
  
  export function JobRecordSubHeader({ children }: JobRecordSubHeaderProps): React.ReactElement {
    return <Subtitile className="text-gray-300">{children}</Subtitile>;
  }
  
  