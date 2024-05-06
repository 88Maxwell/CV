import { AchivementsList } from "@/components/AchivementsList";
import { AchivementsListItem } from "@/components/AchivementsListItem";
import { JobRecord } from "@/components/JobRecord";
import { JobRecordContent } from "@/components/JobRecordContent";
import { JobRecordHeader } from "@/components/JobRecordHeader";
import { JobRecordSubHeader } from "@/components/JobRecordSubHeader";
import { JobRecordTechStack } from "@/components/JobRecordTechStack";


export function ObrioJobRecord() {
  return (
    <JobRecord>
      <JobRecordHeader>Frontend engineer, OBRIO (Genesis), Kyiv/Remote</JobRecordHeader>
      <JobRecordSubHeader>September 2021 - November 2023</JobRecordSubHeader>
      <JobRecordContent>
        <div className="mb-4">I was involved in the development of a CRM system that incorporated user management and chat functionality for experts.</div>
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
      </JobRecordContent>
      <JobRecordTechStack>Typescript, React, Redux-Tool-Kit, 9MUI, Emotion</JobRecordTechStack>
    </JobRecord>
  );
}
