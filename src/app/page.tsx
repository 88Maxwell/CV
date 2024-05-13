import { ObrioJobRecord } from "@/components/JobRecords/ObrioJobRecord";
import { WebbylabJobRecord } from "@/components/JobRecords/WebbylabJobRecord";
import { VoypostJobRecord } from "@/components/JobRecords/VoypostJobRecord";
import { SProJobRecord } from "@/components/JobRecords/SProJobRecord";
import { CodefinityJobRecord } from "@/components/JobRecords/CodefinityJobRecord";
import { Motivation } from "@/components/Motivation";
import { ListItem } from "@/components/List/ListItem";
import { Header } from "@/components/Header";
import { List } from "@/components/List/List";
import { Heading3 } from "@/components/Typography/Heading3";

export default function Home() {
  return (
    <main className="p-2 min-h-screen grid grid-cols-4 gap-8">
      <Header className="col-span-4 grid grid-cols-4 gap-4 shadow-lg shadow-sky-500"/>
      <aside className="p-4  shadow-lg shadow-sky-500 col-span-1">
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
      <article className="p-4 shadow-lg shadow-sky-500 col-span-3 max-w-full">
        <Heading3 className="mb-4">Motivation</Heading3>
        <Motivation />
        <Heading3 className="mb-4">Employment History</Heading3>
        <div className="flex flex-col gap-4">
          <CodefinityJobRecord />
          <ObrioJobRecord />
          <SProJobRecord />
          <VoypostJobRecord />
          <WebbylabJobRecord />
        </div>
      </article>
    </main>
  );
}
