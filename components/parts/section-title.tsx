import React from "react";
import NextImage from "./next-image";

type Props = {
  titleENG: string;
  titleJP: string;
};

const SectionTitle: React.FC<Props> = (props) => {
  return (
    <div className="my-4 flex-1 items-start">
      <div className="flex items-end gap-x-2.5 mq450:flex-col mq450:items-start">
        <a
          style={{ textShadow: "4px 6px 0 rgba(0, 0, 0, 0.3)" }}
          className="-mb-4 inline-block font-bold text-[inherit] mq1050:text-32xl mq450:text-19xl"
        >
          {props.titleENG}
        </a>
        <a className="inline-block min-w-[112px] font-noto-sans-jp text-base text-[inherit]">
          <span className="font-poppins font-light"> | </span>
          <span className="whitespace-pre-wrap font-light">
            {props.titleJP}
          </span>
        </a>
      </div>
      <div className="flex h-8 justify-start mq450:h-4">
        <NextImage
          src="divider-2.svg"
          alt="---------------------------------"
        />
      </div>
    </div>
  );
};
export default SectionTitle;
