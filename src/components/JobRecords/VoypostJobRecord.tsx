import { AchivementsList } from "@/components/AchivementsList";
import { AchivementsListItem } from "@/components/AchivementsListItem";
import { JobRecord } from "@/components/JobRecord";
import { JobRecordContent } from "@/components/JobRecordContent";
import { JobRecordHeader } from "@/components/JobRecordHeader";
import { JobRecordSubHeader } from "@/components/JobRecordSubHeader";
import { JobRecordTechStack } from "@/components/JobRecordTechStack";

export function VoypostJobRecord() {
  return (
    <JobRecord>
      <JobRecordHeader>Fullstack developer, Voypost, Remote</JobRecordHeader>
      <JobRecordSubHeader>September 2019 - June 2020</JobRecordSubHeader>
      <JobRecordContent>
        <AchivementsList>
          <AchivementsListItem>Writing tests, and documentation for projects with legacy codebase (till 2017).</AchivementsListItem>
        </AchivementsList>
      </JobRecordContent>
      <JobRecordTechStack>Jest, Microservices, Azure Pipelines, MongoDB, Koa</JobRecordTechStack>

      <AchivementsList>
        <AchivementsListItem>Adding new features and redesigning a project helps managers measure the job satisfaction of their subordinates.</AchivementsListItem>
      </AchivementsList>
      <JobRecordTechStack>React, Apollo Client, Microservices, RabitMQ, MariaDB, Express, Apollo Server, Sequelize.js</JobRecordTechStack>

      <AchivementsList>
        <AchivementsListItem>Building react native application for IoT project used BLE.</AchivementsListItem>
      </AchivementsList>
      <JobRecordTechStack>RN, Redux, Redux-thunk, Reselect</JobRecordTechStack>
    </JobRecord>
  );
}
