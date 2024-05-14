import { AchivementsList } from "@/components//Achivements/AchivementsList";
import { AchivementsListItem } from "@/components/Achivements/AchivementsListItem";
import { JobRecord } from "@/components/JobRecord/JobRecord";
import { JobRecordContent } from "@/components/JobRecord/JobRecordContent";
import { JobRecordHeader } from "@/components/JobRecord/JobRecordHeader";
import { JobRecordTechStack } from "@/components/JobRecord/JobRecordTechStack";

export function WebbylabJobRecord() {
  return (
    <JobRecord>
      <JobRecordHeader
        title="Fullstack developer, Webbylab, Kyiv"
        subtitle="August 2018 - December 2018"
        src={"/webbylab-logo.png"}
        alt="webbylab-logo"
      />
      <JobRecordContent>
        <AchivementsList>
          <AchivementsListItem>Adding new features and making E0E tests for a biology project.</AchivementsListItem>
        </AchivementsList>
        <JobRecordTechStack>React, Redux, Puppeteer, GitLab CI</JobRecordTechStack>
        <AchivementsList>
          <AchivementsListItem>Adding new features for cryptocurrency projects.</AchivementsListItem>
        </AchivementsList>
        <JobRecordTechStack>Express, Binance API, React, Redux</JobRecordTechStack>
        <AchivementsList>
          <AchivementsListItem>Writing tests and adding new features for a healthcare project.</AchivementsListItem>
        </AchivementsList>
        <JobRecordTechStack>Express, Sequelize, MySql, Mocha, Chai</JobRecordTechStack>
      </JobRecordContent>
    </JobRecord>
  );
}
