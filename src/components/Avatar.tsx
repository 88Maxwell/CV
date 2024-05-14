import clsx from "clsx";
import { Image } from "./Image";

type AvatarProps = {
  className?: string;
};
export function Avatar({ className }: AvatarProps) {
  const size = 200;

  return (
    <div className={clsx(`overflow-hidden rounded-full w-[200px] h-[200px]`, className)}>
      <Image
        objectFit="cover"
        className=""
        style={{ objectPosition: "0px -50px" }}
        width={size}
        height={size}
        src={"/avatar.jpg"}
        alt="avatar Soltyk Maksym"
      />
    </div>
  );
}
