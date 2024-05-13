import Image from "next/image";

export function Avatar() {
  const size = 200;

  return (
    <div className="overflow-hidden rounded-full w-[200px] h-[200px]">
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
