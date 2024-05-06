import Image from "next/image";
import { ObrioJobRecord } from "@/components/JobRecords/ObrioJobRecord";
import { WebbylabJobRecord } from "@/components/JobRecords/WebbylabJobRecord";
import { VoypostJobRecord } from "@/components/JobRecords/VoypostJobRecord";
import { SProJobRecord } from "@/components/JobRecords/SProJobRecord";
import { CodefinityJobRecord } from "@/components/JobRecords/CodefinityJobRecord";
import { Motivation } from "@/components/Motivation";

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
      <article className="border p-8 border-sky-500 h-min-[200px] col-span-3">
        <Motivation />
        <div className="flex flex-col gap-12">
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
