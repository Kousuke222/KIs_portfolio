"use client";
import React from "react";
import type { NextPage } from "next";
import Divider from "../components/parts/divider";
import SideBar from "../components/side-bar";
import TopSection from "../components/top-section";
import ProductsSection from "../components/products-section";
import InfoSection from "../components/info-section";

import "react-scroll";

const Root: NextPage = () => {
  return (
    <div className="relative box-border w-full items-start justify-start overflow-y-auto leading-[normal] tracking-[normal] mq450:h-auto">
      <div className="box-border flex max-w-full flex-1 flex-col items-end justify-start gap-[3px] overflow-hidden bg-gray-200 lg:box-border mq750:box-border">
        {/* <div className="box-border flex max-w-full flex-row items-start justify-start gap-[5px] self-stretch pb-[1324px] text-left font-poppins text-45xl text-white lg:box-border lg:pb-[861px] mq1050:box-border mq1050:pb-[560px] mq1050:pl-[5px] mq1050:pr-[5px] mq450:box-border mq450:pb-[364px]"> */}
        <div className="box-border flex max-w-full flex-row items-start justify-start gap-[5px] self-stretch text-left font-poppins text-45xl text-white lg:box-border mq1050:box-border mq450:box-border">
          {/* //サイドバー */}
          <SideBar />
          {/* メインコンテンツ */}
          <main className="box-border flex max-w-[calc(100%_-_279px)] flex-1 flex-col items-start justify-start pt-1 mq1050:max-w-full">
            <div className="flex max-w-full shrink-0 flex-col items-start justify-start gap-[2px] self-stretch pr-4">
              <Divider />
              <TopSection />
              <Divider />
              <ProductsSection />
              <Divider />
              <InfoSection />
              <Divider />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Root;
