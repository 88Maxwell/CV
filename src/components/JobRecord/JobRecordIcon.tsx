import { Image } from "../Image";
import { ImageProps } from "next/image";

type Props = {
  src: ImageProps["src"];
  alt: ImageProps["alt"];
};

export default function JobRecordIcon({ src, alt }: Props) {
  return <Image className="m-0" alt={alt} src={src} width={64} height={64} />;
}
