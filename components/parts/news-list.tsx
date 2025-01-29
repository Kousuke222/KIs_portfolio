"use client";
import React, { useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";
import PropTypes from "prop-types";
import DoubleArrowRight from "../icons/double-arrow-right";
import nextConfig, { basePath } from "../../next.config";
const BASE_PATH = nextConfig.basePath || "";

const NewsList: NextPage = () => {
  const contentMaps: Map<string, string | React.JSX.Element>[] = [
    new Map<string, string | React.JSX.Element>([
      ["date", "2025 年 1 月 19 日"],
      ["tag", "hobby"],
      [
        "content",
        <div className="relative flex h-[600px] max-w-[500px] flex-col gap-5 self-start font-noto-sans-jp font-light">
          <div className="relative self-start text-smi">
            <p className="ml-4 text-lgi">やべぇイヤホンを購入しました…。</p>
            <p className="ml-4">
              プログラミングコンテストの賞金を片手に大阪の「eイヤホン」へ打ち上げ？へ！
            </p>
            <p className="ml-4">
              長い長い視聴と思案の末、気がつけば財布から14万円が消滅していました……
            </p>
            <p className="ml-4">
              めっちゃいい音ですし、これはもう作業が捗りまくるに違いありません！
            </p>
            <Image
              className="max-h-[360px]py-2 max-w-[360px]"
              loading="lazy"
              width="3287"
              height="2730"
              layout="responsive"
              sizes="50vw"
              alt=""
              src={`${basePath}/images/IMG_4850.avif`}
            />
            <p className="ml-4">↑AFUL:cantor</p>
          </div>
        </div>,
      ],
    ]),
    new Map<string, string | React.JSX.Element>([
      ["date", "2025 年 1 月 17 日"],
      ["tag", "dev"],
      [
        "content",
        <div
          key="2"
          className="relative flex h-[600px] max-w-[500px] flex-col gap-5 self-start font-noto-sans-jp font-light"
        >
          <div className="relative self-start">
            <p>
              <a
                className="text-[inherit]"
                href="https://wakayama-innovation-lab.relic.co.jp/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-base transition [text-decoration:underline] hover:text-indigo-400">
                  第二回和歌山イノベーションプログラミングコンテスト
                </span>
              </a>
            </p>
            <p className="text-right text-smi">株式会社Relic 主催</p>
            <p className="text-right text-xs">
              株式会社Link-U technologies 協賛
            </p>
            <p className="text-right text-xs">和歌山県 後援</p>
          </div>
          <div className="relative self-start text-smi">
            <p className="ml-4">提出作品：memoriaが</p>
            <p className="ml-4">Link-U technologies 賞を受賞しました！</p>
            <p className="ml-4">よっしゃぁ！</p>
            <Image
              className=""
              width="4032"
              height="3024"
              layout="responsive"
              sizes="20vw"
              alt=""
              src={`${basePath}/images/IMG_4820.avif`}
            />
            <p className="ml-4">左：奥本和也↑　↑右：伊藤康介</p>
          </div>
        </div>,
      ],
    ]),
    new Map<string, string | React.JSX.Element>([
      ["date", "2024 年 12 月 23 日"],
      ["tag", "dev"],
      [
        "content",
        <div
          key="3"
          className="relative flex h-[600px] max-w-[500px] flex-col gap-5 self-start font-noto-sans-jp font-light"
        >
          <div className="relative self-start">
            <p>
              <a
                className="text-[inherit]"
                href="https://wakayama-innovation-lab.relic.co.jp/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-base transition [text-decoration:underline] hover:text-indigo-400">
                  第二回和歌山イノベーションプログラミングコンテスト
                </span>
              </a>
            </p>
            <p className="text-right text-smi">株式会社Relic 主催</p>
            <p className="text-right text-sm">
              株式会社Link-U technologies 協賛
            </p>
            <p className="text-right text-smi">和歌山県 後援</p>
          </div>
          <div className="relative self-start text-smi">
            <p className="ml-4">提出作品：memoriaが書類審査を通過！</p>
            <p className="ml-4">1/17の本選考に向けて発表準備中…</p>
          </div>
        </div>,
      ],
    ]),
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const handleNext = () => {
    setCurrentIndex((index) => (index + 1) % contentMaps.length);
  };
  const handlePrevious = () => {
    setCurrentIndex((index) =>
      index != 0 ? index - 1 : contentMaps.length - 1
    );
  };
  return (
    // <div>
    //   <div>
    //     {contentMaps[currentIndex].get("content")}
    //     <button onClick={handleNext}>次へ</button>
    //   </div>
    // </div>
    <div className="flex flex-col items-start justify-start gap-2 py-10">
      <div className="flex flex-row items-center justify-start gap-2.5">
        <div
          onClick={handleNext}
          className="rounded-3xl bg-dimgray-200 p-1 shadow-[4px_4px_4px_rgba(0,_0,_0,_1)] transition-all duration-500 hover:bg-dimgray-100 hover:shadow-[10px_20px_40px_rgba(0,_0,_20,_1)]"
        >
          <div className="rotate-180 transition duration-500 hover:scale-x-150">
            <DoubleArrowRight />
          </div>
        </div>

        <div className="w-[165px] rounded-2xl bg-dimgray-200 px-2.5 py-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          <div className="font-noto-sans-jp text-smi font-light">
            {contentMaps[currentIndex].get("date")}
          </div>
        </div>
        <div className="rounded-2xl bg-dimgray-200 px-2.5 py-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          <div className="font-noto-sans-jp text-smi font-light">
            {currentIndex + 1}/{contentMaps.length}
          </div>
        </div>
        <div
          onClick={handlePrevious}
          className="rounded-3xl bg-dimgray-200 p-1 shadow-[4px_4px_4px_rgba(0,_0,_0,_1)] transition-all duration-500 hover:bg-dimgray-100 hover:shadow-[10px_20px_40px_rgba(0,_0,_20,_1)]"
        >
          <div className="transition duration-500 hover:scale-x-150">
            <DoubleArrowRight />
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col justify-between gap-2.5 self-start rounded-md bg-dimgray-100 px-3 py-3 text-left font-roboto text-smi text-white shadow-[0px_101px_28px_rgba(0,_0,_0,_0),_0px_65px_26px_rgba(0,_0,_0,_0.03),_0px_37px_22px_rgba(0,_0,_0,_0.12),_0px_16px_16px_rgba(0,_0,_0,_0.2),_0px_4px_9px_rgba(0,_0,_0,_0.23)]`}
      >
        {/* contents */}
        {contentMaps[currentIndex].get("content")}
      </div>
    </div>
  );
};
NewsList.propTypes = {
  className: PropTypes.string,
  showNewsDate: PropTypes.bool,
};

export default NewsList;
