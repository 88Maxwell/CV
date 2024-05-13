import clsx from "clsx";
import { Avatar } from "./Avatar";

type HeaderProps = {
  className?: string;
};
export function Header({ className }: HeaderProps) {
  return (
    <header className={clsx("p-4 border border-sky-500 justify-center items-center", className)}>
      <div className="col-span-1 flex justify-center items-center">
        <Avatar />
      </div>
      <div className="col-span-3">
        <h1>Soltyk Maksym</h1>
        <h2>Frontend engineer</h2>
      </div>
      {/* <SaveAsPDFButton/> */}
    </header>
  );
}
