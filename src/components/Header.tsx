import clsx from "clsx";
import { Avatar } from "./Avatar";
import { Heading1 } from "./Typography/Heading1";
import { Heading2 } from "./Typography/Heading2";

type HeaderProps = {
  className?: string;
};
export function Header({ className }: HeaderProps) {
  return (
    <header className={clsx("p-4 border border-sky-500 justify-center items-center", className)}>
      <div className="col-span-1 flex justify-center items-center">
        <Avatar />
      </div>
      <div className="flex flex-col col-span-3 gap-3">
        <Heading1>Soltyk Maksym</Heading1>
        <Heading2 className="text-gray-400">Frontend engineer</Heading2>
      </div>
      {/* <SaveAsPDFButton/> */}
    </header>
  );
}
