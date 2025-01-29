import React from "react";
import Image from "next/image";
import nextConfig from "../../../next.config";
const BASE_PATH = nextConfig.basePath || "";

const ArtsList: React.FC = () => {
  const artWorkMaps: Map<string, string | number>[] = [
    new Map<string, string | number>([
      ["src", "/images/イラスト_ミカ_aprilFool.avif"],
      ["w", 2400],
      ["h", 3200],
    ]),
    new Map<string, string | number>([
      ["src", "/images/ウイ2024birthday.avif"],
      ["w", 1875],
      ["h", 2708],
    ]),
    new Map<string, string | number>([
      ["src", "/images/立ち絵：イリカ.avif"],
      ["w", 3375],
      ["h", 4500],
    ]),
    new Map<string, string | number>([
      ["src", "/images/07119e1aee864228.avif"],
      ["w", 2507],
      ["h", 3541],
    ]),
    new Map<string, string | number>([
      ["src", "/images/86cce5a950d5fdcb.avif"],
      ["w", 826],
      ["h", 826],
    ]),
    new Map<string, string | number>([
      ["src", "/images/first_take.avif"],
      ["w", 2893],
      ["h", 4092],
    ]),
  ];

  return (
    <div className="flex w-full flex-row flex-wrap items-start justify-start gap-6 py-0 font-noto-sans-jp text-3xs">
      {artWorkMaps.map((artMap) => (
        <div className="flex max-w-full items-start justify-start py-0 font-noto-sans-jp text-3xs">
          <div className="flex flex-row items-center bg-gray-100 px-2 py-6 shadow-[63px_-207px_60px_rgba(0,_0,_0,_0),_40px_-132px_55px_rgba(0,_0,_0,_0.03),_23px_-74px_47px_rgba(0,_0,_0,_0.12),_10px_-33px_35px_rgba(0,_0,_0,_0.2),_3px_-8px_19px_rgba(0,_0,_0,_0.23)]">
            <div className="fles-row flex flex-wrap content-start items-start justify-start gap-4 border-y-2 border-y-rose-400 p-3">
              <Image
                className=""
                loading="lazy"
                width={artMap.get("w") as number}
                height={artMap.get("h") as number}
                layout="responsive"
                sizes="20vw"
                alt=""
                src={`${BASE_PATH}${artMap.get("src") as string}`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ArtsList;
