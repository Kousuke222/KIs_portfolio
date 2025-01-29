import Image from "next/image";
import React from "react";

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
        src={props.src}
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
