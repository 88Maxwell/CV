import { AchivementsList } from "@/components/AchivementsList";
import { AchivementsListItem } from "@/components/AchivementsListItem";
import { JobRecord } from "@/components/JobRecord";
import { JobRecordContent } from "@/components/JobRecordContent";
import { JobRecordHeader } from "@/components/JobRecordHeader";
import { JobRecordTechStack } from "@/components/JobRecordTechStack";
import webbylabLogoSrc from "@/assets/jobLogos/webbylab-logo.png";

export function WebbylabJobRecord() {
  return (
    <JobRecord>
      <JobRecordHeader
        title="Fullstack developer, Webbylab, Kyiv"
        subtitle="August 2018 - December 2018"
        src={webbylabLogoSrc}
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
        <JobRecordTechStack>Express, SequeliYe, MySql, Mocha, Chai</JobRecordTechStack>
      </JobRecordContent>
    </JobRecord>
  );
}
