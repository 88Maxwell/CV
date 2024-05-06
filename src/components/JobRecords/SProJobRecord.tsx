import { AchivementsList } from "@/components/AchivementsList";
import { AchivementsListItem } from "@/components/AchivementsListItem";
import { JobRecord } from "@/components/JobRecord";
import { JobRecordContent } from "@/components/JobRecordContent";
import { JobRecordHeader } from "@/components/JobRecordHeader";
import { JobRecordTechStack } from "@/components/JobRecordTechStack";
import sproLogoSrc from "@/assets/jobLogos/s-pro-logo.jpeg";

export function SProJobRecord() {
  return (
    <JobRecord>
      <JobRecordHeader
        title="Frontend develeper, S-PRO, Kyiv/remote"
        subtitle="August 2020 - August 2021"
        src={sproLogoSrc}
        alt="obrio-genesis-logo"
      />
      <JobRecordContent>
        <AchivementsList>
          <AchivementsListItem>Working on MVP of CRM for product managers and sales managers at warehouses</AchivementsListItem>
        </AchivementsList>
        <JobRecordTechStack>Typescript, React, Redux, Redux-saga, Jest</JobRecordTechStack>

        <AchivementsList>
          <AchivementsListItem>
            Working on a project that helps biologists look for strains of the molecule and perform operations.
          </AchivementsListItem>
        </AchivementsList>
        <JobRecordTechStack>Typescript, React, Redux, Redux-saga, Reselect, Jest, Elasticsearch API</JobRecordTechStack>

        <AchivementsList>
          <AchivementsListItem>Working on MVP for social sport networks.</AchivementsListItem>
        </AchivementsList>
        <JobRecordTechStack>Typescript, React, Apollo Client, React-intl</JobRecordTechStack>
      </JobRecordContent>
    </JobRecord>
  );
}
