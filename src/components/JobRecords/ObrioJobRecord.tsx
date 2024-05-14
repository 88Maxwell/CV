import { AchivementsList } from "@/components//Achivements/AchivementsList";
import { AchivementsListItem } from "@/components/Achivements/AchivementsListItem";
import { JobRecord } from "@/components/JobRecord/JobRecord";
import { JobRecordContent } from "@/components/JobRecord/JobRecordContent";
import { JobRecordHeader } from "@/components/JobRecord/JobRecordHeader";
import { JobRecordTechStack } from "@/components/JobRecord/JobRecordTechStack";

export function ObrioJobRecord() {
  return (
    <JobRecord>
      <JobRecordHeader
        title="Frontend engineer, OBRIO (Genesis), Kyiv/Remote"
        subtitle="September 2021 - November 2023"
        src={"/jobLogos/obrio_genesis_logo.jpeg"}
        alt="obrio-genesis-logo"
      />
      <JobRecordContent>
        <div className="mb-4">
          I was involved in the development of a CRM system that incorporated user management and chat functionality for experts.
        </div>
        <AchivementsList>
          <AchivementsListItem>
            Code refactoring (formatting, linting, migrating class component to functional, services, DDD, architecture, etc.)
          </AchivementsListItem>
          <AchivementsListItem>
            Increasing the company`s revenue by 5% per month, due to the possession of metrics (rejection of chat)
          </AchivementsListItem>
          <AchivementsListItem>Improvement of processes daily, retro, grooming, documentation</AchivementsListItem>
          <AchivementsListItem>Active involvement and influence in project design</AchivementsListItem>
        </AchivementsList>
        <JobRecordTechStack>Typescript, React, Redux-Tool-Kit, 9MUI, Emotion</JobRecordTechStack>
      </JobRecordContent>
    </JobRecord>
  );
}
