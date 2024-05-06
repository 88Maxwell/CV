import Image, { ImageProps } from "next/image";
import React from "react";

type Props = {
  src: ImageProps["src"];
  alt: ImageProps["alt"];
};

export default function JobRecordIcon({ src, alt }: Props) {
  return <Image className="m-0" alt={alt} src={src} width={64} height={64} />;
}
