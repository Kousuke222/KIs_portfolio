"use client";
import React from "react";
import SectionTitle from "./parts/section-title";
import SubTitle from "./parts/sub-title";
import ArtsList from "./parts/products/arts-list";
import ProductsList from "./parts/products/products-list";
const ProductsSection: React.FC = () => {
  return (
    <div
      id="products"
      className="border-dimgray-20 box-border flex max-w-full flex-col items-start justify-start self-stretch border-y-[1px] border-dashed pb-16 pt-16"
    >
      <SectionTitle titleENG={"PRODUCTS"} titleJP={"制作物"} />
      <div className="box-border flex max-w-full flex-row flex-wrap content-start items-start justify-start gap-8 self-stretch px-2.5 text-5xl mq750:box-border mq750:gap-4 mq750:pb-[42px]">
        <div className="flex min-w-[250px] max-w-full flex-1 flex-col items-start justify-start gap-[7px]">
          <SubTitle
            subTitleENG={"Software"}
            subTitleJP={"スマホアプリ・ゲーム"}
          />
          <ProductsList />

          <div className="pt-10"></div>
          <SubTitle subTitleENG={"Artwork"} subTitleJP={"イラスト"} />
          <ArtsList />
          <div className="pt-10"></div>
          <SubTitle subTitleENG={"Graduation Thesis"} subTitleJP={"卒業研究"} />
          <div className="flex items-start justify-start py-0 font-noto-sans-jp text-3xs">
            <div className="flex flex-row items-center bg-gray-100 px-2 py-4 shadow-[63px_-207px_60px_rgba(0,_0,_0,_0),_40px_-132px_55px_rgba(0,_0,_0,_0.03),_23px_-74px_47px_rgba(0,_0,_0,_0.12),_10px_-33px_35px_rgba(0,_0,_0,_0.2),_3px_-8px_19px_rgba(0,_0,_0,_0.23)]">
              <div className="fles-row flex flex-wrap content-start items-start justify-start gap-4 border-y-2 border-y-indigo-500 p-3">
                <div className="flex max-w-full flex-1 flex-col items-start justify-start gap-2.5 pb-[37px]">
                  {/* productTitle */}
                  <div className="flex flex-col items-start justify-end px-0 py-4">
                    <h3 className="relative py-5 font-poppins text-6xl font-medium text-indigo-400 mq450:text-3xl">
                      準備中…
                    </h3>
                    <h3 className="relative m-0 mt-[-10px] text-5xl font-medium mq450:text-lgi">
                      ハンドトラッキングを使用したロボットアーム制御に関する研究(仮)
                    </h3>
                    <div className="relative inline-block h-6 shrink-0 font-poppins text-base">
                      <span className="font-light">{` `}</span>
                      <span className="font-light">|</span>
                      <span className="whitespace-pre-wrap font-light">{`  mediaPipe  `}</span>
                      <span className="font-light">|</span>
                      <span className="whitespace-pre-wrap font-light">{`  Python/C++ ?  `}</span>
                      <span className="font-light">|</span>
                      <span className="whitespace-pre-wrap font-light">{`  xArm  `}</span>
                      <span className="font-light">|</span>
                      <span className="whitespace-pre-wrap font-light">{`  ros  `}</span>
                    </div>
                  </div>
                  <div className="relative pt-4 text-xl font-light mq450:text-base">
                    構想
                  </div>
                  <div className="relative inline-block max-w-[700px] text-sm font-light">
                    <span className="m-0">
                      一般的なWEBカメラを使用し、Google提供の画像処理ライブラリ「mediaPipe」によって、人間の手の３次元座標、ハンドジェスチャーなどを取得し、ロボットアームの制御を行う
                    </span>
                    <span className="m-0 font-semibold">予定</span>
                    <span className="m-0">
                      です。また、ロボットアームにはxArmを使用し、ROSを使用して通信を行う
                    </span>
                    <span className="m-0 font-semibold">予定</span>
                    です。
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10"></div>
        </div>
      </div>
    </div>
  );
};
export default ProductsSection;
