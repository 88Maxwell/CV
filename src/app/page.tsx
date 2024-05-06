import Image from "next/image";
import { ObrioJobRecord } from "@/components/JobRecords/ObrioJobRecord";
import { WebbylabJobRecord } from "@/components/JobRecords/WebbylabJobRecord";
import { VoypostJobRecord } from "@/components/JobRecords/VoypostJobRecord";
import { SProJobRecord } from "@/components/JobRecords/SProJobRecord";
import { CodefinityJobRecord } from "@/components/JobRecords/CodefinityJobRecord";

export default function Home() {
  return (
    <main className="min-h-screen px-24 py-12 grid grid-cols-4 gap-8">
      <header className="border border-sky-500 h-[200px] col-span-4"></header>
      <aside className="border border-sky-500 h-[200px] col-span-1">
        <p>Details Kyiv Ukraine maxwell88soltyk@gmail.com</p>
        <p>Skills TypeScript React Redux HTML & CSS Node.js Unit tests Git MacOS/Linux</p>
        <p>Hobbies Walk with dog Plants Sport Books Music</p>
        <p>Languages Ukrainian English</p>
      </aside>
      <article className="border border-sky-500 h-min-[200px] col-span-3">
        <div className="mb-8">
          I am a front-end engineer with more than four years of experience in the development of advanced interfaces that combine both
          functionality and aesthetics. My goal is to constantly improve the user experience, and provide high productivity and effective
          solutions to business problems, using modern technologies and best practices in the front-end industry.
          <br />
          My experience allows me not only to provide effective integration of design and functionality but also to understand well all the
          issues of the solution from the idea, design, and business goals, to the collection of analytics, development of frontend and
          backend parts, and QA process.
          <br />I am always open to challenges and ready to join a team that cares about high quality and innovation in the field of web
          application development.
        </div>
        <div className="flex flex-col gap-6">
          <CodefinityJobRecord />
          <ObrioJobRecord />
          <SProJobRecord />
          <VoypostJobRecord />
          <WebbylabJobRecord />
        </div>
      </article>
      <footer className="border border-sky-500 h-[200px] col-span-4"></footer>
    </main>
  );
}
