import { AchivementsList } from "@/components/AchivementsList";
import { AchivementsListItem } from "@/components/AchivementsListItem";
import { JobRecord } from "@/components/JobRecord";
import { JobRecordContent } from "@/components/JobRecordContent";
import { JobRecordHeader } from "@/components/JobRecordHeader";
import { JobRecordSubHeader } from "@/components/JobRecordSubHeader";
import { JobRecordTechStack } from "@/components/JobRecordTechStack";


export function CodefinityJobRecord() {
  return (
    <JobRecord>
      <JobRecordHeader>Frontend engineer, Codefinity (Genesis), Kyiv/Remote</JobRecordHeader>
      <JobRecordSubHeader>December 2023 - April 2024</JobRecordSubHeader>
      <JobRecordContent>
        <AchivementsList>
          <AchivementsListItem>Migration of a large project with a large amount of legacy code from React 16 to React 18, and from Next 12 to Next 14.</AchivementsListItem>
          <AchivementsListItem>Automation of lint checking for pull requests, with a passing criterion</AchivementsListItem>
          <AchivementsListItem>Writing features for A/B tests</AchivementsListItem>
          <AchivementsListItem>Refactoring of the functionality related to the launch of the code (of various programming languages) in the courses</AchivementsListItem>
          <AchivementsListItem>Work on implementation of state management using RxJs</AchivementsListItem>
        </AchivementsList>
      </JobRecordContent>
      <JobRecordTechStack>TS, React, NextJs, Rx.js</JobRecordTechStack>
    </JobRecord>
  );
}
