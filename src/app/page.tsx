import { ObrioJobRecord } from "@/components/JobRecords/ObrioJobRecord";
import { WebbylabJobRecord } from "@/components/JobRecords/WebbylabJobRecord";
import { VoypostJobRecord } from "@/components/JobRecords/VoypostJobRecord";
import { SProJobRecord } from "@/components/JobRecords/SProJobRecord";
import { CodefinityJobRecord } from "@/components/JobRecords/CodefinityJobRecord";
import { Motivation } from "@/components/Motivation";
import { List } from "@/components/List";
import { ListItem } from "@/components/ListItem";
import { Avatar } from "@/components/Avatar";
import { SaveAsPDFButton } from "@/components/SaveAsPDFButton";

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-4 gap-8">
      <header className="p-8 border border-sky-500 col-span-4">
        <Avatar />
        <SaveAsPDFButton/>
      </header>
      <aside className="p-8 border border-sky-500 col-span-1">
        <List className="mb-8" title="Contacts">
          <ListItem>Ukraine, Kyiv</ListItem>
          <ListItem>maxwell88soltyk@gmail.com</ListItem>
        </List>
        <List className="mb-8" title="Skills">
          <ListItem>TypeScript</ListItem>
          <ListItem>React</ListItem>
          <ListItem>Redux</ListItem>
          <ListItem>HTML & CSS</ListItem>
          <ListItem>Node.js</ListItem>
          <ListItem>Unit</ListItem>
          <ListItem>tests</ListItem>
          <ListItem>Git</ListItem>
          <ListItem>MacOS/Linux</ListItem>
        </List>
        <List className="mb-8" title="Hobbies">
          <ListItem>Walk with dog</ListItem>
          <ListItem>Plants</ListItem>
          <ListItem>Sport</ListItem>
          <ListItem>Books</ListItem>
          <ListItem>Music</ListItem>
        </List>
        <List className="mb-8" title="Languages">
          <ListItem>Ukrainian</ListItem>
          <ListItem>English</ListItem>
        </List>
      </aside>
      <article className="p-8 border border-sky-500 col-span-3 prose prose-invert max-w-full">
        <h2>Motivation</h2>
        <Motivation />
        <h2>Employment History</h2>
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
