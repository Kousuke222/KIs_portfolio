import React from "react";
import NewsDate from "./parts/news-list";
import SectionTitle from "./parts/section-title";
import SubTitle from "./parts/sub-title";
const TopSection: React.FC = () => {
  return (
    <div
      id="top"
      className="box-border flex max-w-full flex-col items-start justify-start self-stretch border-y-[1px] border-dashed border-dimgray-200 pb-16 pt-4"
    >
      <SectionTitle titleENG={"TOP"} titleJP={"サイトトップ"} />
      <div className="box-border flex max-w-full flex-row flex-wrap content-start items-start justify-start gap-8 self-stretch px-2.5 py-10 text-5xl mq750:box-border mq750:flex-col mq750:gap-4 mq750:pb-[42px]">
        <div className="flex min-w-[250px] max-w-full flex-1 flex-col items-start justify-start gap-[7px]">
          <SubTitle subTitleENG={"Introduction"} subTitleJP={"はじめに"} />
          <div className="relative self-stretch font-noto-sans-jp text-base">
            <p className="bg-gradient-to-br from-rose-500 via-indigo-500 to-emerald-500 bg-clip-text py-7 font-roboto font-semibold text-transparent ~text-[1.5rem]/[2.5rem]">
              Welcome to Ito Kosuke 's portfolio website!
            </p>
            <div className="relative inline-block">
              <span className="text-lgi font-medium">伊藤康介</span>
              <span className="font-light">
                のポートフォリオサイトへようこそ！
              </span>
            </div>
            <p className="font-light">ここでは、 </p>
            <div className="relative inline-block">
              <span className="font-light">・ 制作物</span>
              <span className="text-xs font-light">（&ちょっとした小話）</span>
            </div>
            <p className="font-light">・ 経歴</p>
            <p className="font-light">・ 趣味に関すること</p>
            <p className="font-light">などなどについて掲載しています。</p>
            <p className="font-light">有効にお役立てください！</p>
          </div>
          {/* <SubTitle subTitleENG={"News"} subTitleJP={"最近のトピック"} />
          <NewsDate showNewsDate /> */}
        </div>
        <div className="flex min-w-[184px] max-w-full flex-1 flex-col items-start justify-start">
          {/* <SubTitle subTitleENG={"Pick up"} subTitleJP={"ピックアップ"} />
          <div className="h-40 w-10 bg-gradient-to-r from-indigo-500 to-emerald-500"></div> */}
          <SubTitle subTitleENG={"News"} subTitleJP={"最近のトピック"} />
          <NewsDate />
        </div>
      </div>
    </div>
  );
};
export default TopSection;
