import { AchivementsList } from "@/components/AchivementsList";
import { AchivementsListItem } from "@/components/AchivementsListItem";
import { JobRecord } from "@/components/JobRecord";
import { JobRecordContent } from "@/components/JobRecordContent";
import { JobRecordHeader } from "@/components/JobRecordHeader";
import { JobRecordSubHeader } from "@/components/JobRecordSubHeader";
import { JobRecordTechStack } from "@/components/JobRecordTechStack";

export function WebbylabJobRecord() {
  return (
    <JobRecord>
      <JobRecordHeader>Fullstack developer, Webbylab, Kyiv</JobRecordHeader>
      <JobRecordSubHeader>August 2018 - December 2018</JobRecordSubHeader>
      <JobRecordContent>
        <AchivementsList>
          <AchivementsListItem>Adding new features and making E0E tests for a biology project.</AchivementsListItem>
        </AchivementsList>
      </JobRecordContent>
      <JobRecordTechStack>React, Redux, Puppeteer, GitLab CI</JobRecordTechStack>

      <AchivementsList>
        <AchivementsListItem>Adding new features for cryptocurrency projects.</AchivementsListItem>
      </AchivementsList>
      <JobRecordTechStack>Express, Binance API, React, Redux</JobRecordTechStack>

      <AchivementsList>
        <AchivementsListItem>Writing tests and adding new features for a healthcare project.</AchivementsListItem>
      </AchivementsList>
      <JobRecordTechStack>Express, SequeliYe, MySql, Mocha, Chai</JobRecordTechStack>
    </JobRecord>
  );
}
