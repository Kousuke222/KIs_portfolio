import Image from "next/image";
import React from "react";
import nextConfig, { basePath } from "../../next.config";
const BASE_PATH = nextConfig.basePath || "";

type ImageProps = {
  src: string;
  alt: string;
};

const NextImage: React.FC<ImageProps> = (props) => {
  return (
    <div
      style={{
        display: "block",
        position: "relative",
        width: "100%",
        height: "300%",
      }}
      className="flex items-end justify-end"
    >
      <Image
        alt={props.alt}
        src={`${basePath}/${props.src}`}
        sizes="100vw"
        fill
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};
export default NextImage;
