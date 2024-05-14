import NextImage, { ImageProps } from "next/image";

export const Image = ({ src, ...props }: ImageProps): React.ReactNode => {
  // const getSrc = () => {
  //   const isProd = process.env.NODE_ENV === "production";
  //   const isSrcString = typeof src === "string";
  //   if (!isSrcString) return src;
  //   if (!isProd) return src;
  //   return `/cv${src}`;
  // };

  return <NextImage src={src} {...props} alt={props.alt} />;
};
