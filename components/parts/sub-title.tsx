import React from "react";

type Props = {
  subTitleENG: string;
  subTitleJP: string;
};

const SubTitle: React.FC<Props> = (props) => {
  return (
    <div className="my-4 flex w-full flex-col items-start justify-end py-2">
      <div className="h-full w-[360px] bg-gradient-gray-inv py-0.5 pl-1.5">
        <h3 className="relative font-[inherit] text-inherit font-medium mq450:text-lgi">
          {props.subTitleENG}
        </h3>
        <div className="relative inline-block min-w-[80px] font-noto-sans-jp text-base">
          <span className="font-light">{` `}</span>
          <span className="font-poppins font-light">|</span>
          <span className="whitespace-pre-wrap font-light">
            {" "}
            {props.subTitleJP}
          </span>
        </div>
      </div>
    </div>
  );
};
export default SubTitle;
