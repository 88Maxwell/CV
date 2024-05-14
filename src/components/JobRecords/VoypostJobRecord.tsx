import { AchivementsList } from "@/components//Achivements/AchivementsList";
import { AchivementsListItem } from "@/components/Achivements/AchivementsListItem";
import { JobRecord } from "@/components/JobRecord/JobRecord";
import { JobRecordContent } from "@/components/JobRecord/JobRecordContent";
import { JobRecordHeader } from "@/components/JobRecord/JobRecordHeader";
import { JobRecordTechStack } from "@/components/JobRecord/JobRecordTechStack";

export function VoypostJobRecord() {
  return (
    <JobRecord>
      <JobRecordHeader
        title="Fullstack developer, Voypost, Remote"
        subtitle="September 2019 - June 2020"
        src={"/cv/jobLogos/voypost-logo.jpeg"}
        alt="voypost-logo"
      />
      <JobRecordContent>
        <AchivementsList>
          <AchivementsListItem>Writing tests, and documentation for projects with legacy codebase (till 2017).</AchivementsListItem>
        </AchivementsList>
        <JobRecordTechStack>Jest, Microservices, Azure Pipelines, MongoDB, Koa</JobRecordTechStack>

        <AchivementsList>
          <AchivementsListItem>
            Adding new features and redesigning a project helps managers measure the job satisfaction of their subordinates.
          </AchivementsListItem>
        </AchivementsList>
        <JobRecordTechStack>React, Apollo Client, Microservices, RabitMQ, MariaDB, Express, Apollo Server, Sequelize.js</JobRecordTechStack>

        <AchivementsList>
          <AchivementsListItem>Building react native application for IoT project used BLE.</AchivementsListItem>
        </AchivementsList>
        <JobRecordTechStack>RN, Redux, Redux-thunk, Reselect</JobRecordTechStack>
      </JobRecordContent>
    </JobRecord>
  );
}
