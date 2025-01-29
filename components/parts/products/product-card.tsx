import React from "react";

type ProductProps = {
  productTitle: string;
  productSubTitle?: string;
  tags: string[];
  repositoryLink?: string;
  description?: string;
  note?: string;
  devPeriod: string;
};

const ProductCard: React.FC<ProductProps> = (props) => {
  return (
    <div className="flex max-w-full flex-1 flex-col items-start justify-start gap-7 pb-[37px]">
      <div className="flex flex-col items-start justify-end py-4">
        <div className="flex flex-col items-start justify-start">
          <div className="relative font-light tracking-[0.24em]">
            {props.productSubTitle}
          </div>
          <h3 className="relative m-0 mt-[-10px] font-poppins text-5xl font-medium mq450:text-lgi">
            {props.productTitle}
          </h3>
        </div>
        <div className="relative inline-block h-6 shrink-0 text-base">
          {props.tags.map((tag) => (
            <>
              <span className="whitespace-pre-wrap font-poppins font-light">
                |{`  `}
              </span>
              <span className="whitespace-pre-wrap font-light">
                {tag}
                {`  `}
              </span>
            </>
          ))}
        </div>
      </div>
      {props.repositoryLink ? (
        <div className="flex flex-col">
          <div className="relative text-lgi font-medium mq450:text-base">
            Repository
          </div>
          <a
            className="relative text-xs font-light"
            href={props.repositoryLink}
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-base transition duration-500 hover:text-indigo-500 hover:[text-decoration:underline]">
              {props.repositoryLink}
            </span>
          </a>
        </div>
      ) : (
        <></>
      )}
      <div className="flex flex-col">
        <div className="relative text-lgi font-medium mq450:text-base">
          開発期間
        </div>
        <div className="relative whitespace-pre-wrap text-base font-light">
          <p className="m-0">{props.devPeriod}</p>
        </div>
      </div>
      {props.description ? (
        <div className="flex flex-col">
          <div className="relative text-lgi font-medium mq450:text-base">
            概要
          </div>
          <div className="relative text-base font-light">
            <p className="whitespace-pre-wrap break-words">
              {props.description}
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}
      {props.note ? (
        <div className="flex flex-col">
          <div className="relative text-base font-medium mq450:text-base">
            小話
          </div>
          <div className="relative text-base font-light">
            <p className="whitespace-pre-wrap break-words">{props.note}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default ProductCard;
