import React from "react";
import SectionTitle from "./parts/section-title";
import SubTitle from "./parts/sub-title";
import Image from "next/image";
import nextConfig, { basePath } from "../next.config";
const BASE_PATH = nextConfig.basePath || "";

const InfoSection: React.FC = () => {
  return (
    <div
      id="info"
      className="box-border flex max-w-full flex-col items-start justify-start self-stretch border-y-[1px] border-dashed border-dimgray-200 pb-16 pt-4"
    >
      <SectionTitle titleENG={"INFO"} titleJP={"制作者について"} />
      <div className="box-border flex max-w-full flex-row flex-wrap content-start items-start justify-start gap-8 self-stretch px-2.5 text-5xl mq750:box-border mq750:flex-col mq750:gap-4 mq750:pb-[42px]">
        <div className="flex max-w-full flex-1 flex-col items-start justify-start gap-[7px]">
          <SubTitle subTitleENG={"Career"} subTitleJP={"経歴"} />

          <div className="box-border flex w-[550px] flex-col items-start justify-center pr-6 font-noto-sans-jp text-smi">
            <div className="relative flex shrink-0 flex-row items-start justify-start gap-3 whitespace-pre-line text-smi">
              <p className="whitespace-pre-wrap">
                2021{`  `}/{`   `}3
              </p>
              <div className="relative ml-[2px] border-l-[1px] border-solid border-white pb-3 pl-3 font-light">
                <p className="">かつらぎ町立妙寺中学校 卒業</p>
              </div>
            </div>
            <div className="relative flex shrink-0 flex-row items-start justify-start gap-3 whitespace-pre-line text-smi">
              <p className="whitespace-pre-wrap">
                2021{`  `}/{`   `}4
              </p>
              <div className="relative ml-[2px] border-l-[1px] border-solid border-white pb-3 pl-3 font-light">
                <p className="">和歌山工業高等専門学校 電気情報工学科 入学</p>
              </div>
            </div>
            <div className="relative flex shrink-0 flex-row items-start justify-start gap-3 text-smi">
              <p className="whitespace-pre-wrap">
                2022{`  `}/{` `}11
              </p>
              <div className="relative border-l-[1px] border-solid border-white pb-3 pl-3 font-light">
                <p className="">
                  2022年度ゆめくじらプログラミングコンテスト 入賞
                </p>
                <p className=""> 提出作品：kelp Survival</p>
              </div>
            </div>
            <div className="relative flex shrink-0 flex-row items-start justify-start gap-3 text-smi">
              <p className="whitespace-pre-wrap">
                2024{`  `}/{` `}11
              </p>
              <div className="relative border-l-[1px] border-solid border-white pb-3 pl-3 font-light">
                <p className="">2024年度ゆめくじらプログラミングコンテスト</p>
                <p className=""> Respawn賞 受賞</p>
                <p className=""> 提出作品：memoria</p>
              </div>
            </div>
            <div className="relative flex shrink-0 flex-row items-start justify-start gap-3 text-smi">
              <p className="whitespace-pre-wrap">
                2025{`  `}/{`   `}1
              </p>
              <div className="relative ml-[2px] border-l-[1px] border-solid border-white pb-3 pl-3 font-light">
                <p className="white-space-no-wrap">
                  第二回和歌山イノベーションプログラミングコンテスト
                </p>
                <p className=""> Link-U technologies賞 受賞</p>
                <p className=""> 提出作品：memoria</p>
              </div>
            </div>
            <div className="relative flex shrink-0 flex-row items-start justify-start gap-3 whitespace-pre-line text-smi">
              <p className="whitespace-pre-wrap">
                2026{`  `}/{`   `}3
              </p>
              <div className="relative ml-[2px] border-l-[1px] border-solid border-white pb-3 pl-3 font-light">
                <p className="">
                  和歌山工業高等専門学校 電気情報工学科 卒業予定
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-w-[184px] max-w-full flex-1 flex-col items-start justify-start">
          <SubTitle subTitleENG={"Self-introduction"} subTitleJP={"自己紹介"} />
          <div className="flex flex-row items-end justify-start gap-2 font-noto-sans-jp text-[8px]">
            <div className="flex flex-col items-center justify-center">
              <div className="relative inline-block min-w-[63px] whitespace-pre-wrap">
                いとう 　こうすけ
              </div>
              <div className="relative mt-[-4px] text-base">伊藤 康介</div>
            </div>
            <div className="relative inline-block shrink-0 font-poppins text-base">
              <span className="whitespace-pre-wrap">{` |  `}</span>
              <span className="font-noto-sans-jp">19</span>
              <span className="font-noto-sans-jp font-light">歳 </span>
              <span className="whitespace-pre-wrap"> | 2005</span>
              <span className="font-noto-sans-jp">/</span>
              <span>4</span>
              <span className="font-noto-sans-jp">/</span>
              <span>{`23 `}</span>
              <span className="font-noto-sans-jp font-light">生</span>
              <span className="whitespace-pre-wrap">{`  `}</span>
            </div>
          </div>
          <div className="relative font-noto-sans-jp text-smi font-light">
            <p className="m-0">
              情報技術全般に興味を持ち、その場のノリで和高専に入学。実際、お勉強よりスマホアプリやサイトを作るほうが楽しいので後悔はしていない。
            </p>
            <p className="m-0">
              MBTIで言うと、INTJとINTPが半年周期で入れ替わる。
            </p>
            <p className="m-0">
              とある先輩曰く、モブではない潤滑油、中間管理職向き、とのこと。
            </p>
            <p className="m-0">
              人生の判断基準は合理性・妥当性・面白さ の合議制で、
              計画性の無さと凝り性により常時納期に追われるタイプ。
            </p>
            <p className="m-0">ここ数年はVR関連技術に執心中。</p>
          </div>
          <SubTitle subTitleENG={"Contacts"} subTitleJP={"連絡先"} />
          <div className="flex flex-row flex-wrap content-start items-start justify-start gap-4 self-stretch pr-8 font-roboto text-3xs mq1100:flex-col">
            <a
              href="https://github.com/Kousuke222"
              target="_blank"
              rel="noreferrer"
              className="box-border flex min-w-[82px] flex-[0.7255] flex-row items-center justify-start gap-2.5 px-3 py-2 transition duration-500 hover:bg-gray-100 hover:shadow-[4px_4px_6px_rgba(0,_0,_20,_0.6)] mq450:flex-1"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center rounded-[30px] bg-white p-0.5">
                  <Image
                    className="relative flex h-6 w-6 object-cover"
                    width={24}
                    height={24}
                    alt="Github icon"
                    src={`${basePath}/image-1@2x.png`}
                  />
                </div>
                <div className="relative inline-block min-w-[33px] font-semibold">
                  GitHub
                </div>
              </div>
              <div className="relative inline-block min-w-[106px] text-base">
                <span className="whitespace-pre-wrap transition duration-500 hover:text-indigo-400">
                  {" "}
                  | Kousuke222
                </span>
                <span className="font-semibold">{` `}</span>
              </div>
            </a>
            <div className="box-border flex min-w-[82px] flex-1 flex-row items-center justify-start gap-2 px-0 py-0 text-smi">
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="relative inline-block min-w-[24px] font-semibold">{`TEL `}</div>
                <div className="relative font-semibold">{`Gmail `}</div>
              </div>
              <div className="flex flex-col items-start justify-center gap-2 text-xs">
                <div className="relative inline-block min-w-[94px] whitespace-pre-wrap">
                  {" "}
                  | 090 3197 0423
                </div>
                <div className="relative inline-block h-3.5 shrink-0 whitespace-pre-wrap">
                  {" "}
                  | Kousuke222015@ gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoSection;
