import React from "react";
import Image from "next/image";
import { Link as Scroll } from "react-scroll";

const Sidebar: React.FC = () => {
  return (
    <section className="relative h-full w-[274px] mq1050:hidden">
      <div className="relative flex flex-col items-start justify-start">
        <Image
          className="absolute left-[0px] top-[0px] h-[3555px] w-[274px]"
          loading="lazy"
          width={274}
          height={3555}
          alt=""
          src="/polygon-3.svg"
        />

        <Image
          className="absolute left-[0px] top-[3555px] h-[3555px] w-[274px]"
          loading="lazy"
          width={274}
          height={3555}
          alt=""
          src="/polygon-3.svg"
        />
        <Image
          className="absolute left-[0px] top-[7110px] h-[3555px] w-[274px]"
          loading="lazy"
          width={274}
          height={3555}
          alt=""
          src="/polygon-3.svg"
        />
      </div>
      <nav className="fixed left-[0px] top-[0px] z-[1] m-0 box-border flex h-screen w-[209px] flex-col items-start justify-between px-4 py-10 text-left font-poppins text-sm text-white">
        <div className="flex flex-col items-start justify-end px-0 py-4">
          <div className="relative font-light">owner</div>
          <div className="mt-[-5px] flex flex-col items-start justify-start text-xl">
            <div className="relative inline-block min-w-[101px] font-light mq450:text-base">
              Ito Kosuke
            </div>
            <div className="relative inline-block min-w-[106px] font-noto-sans-jp text-base">
              <span className="font-light">{` `}</span>
              <span className="font-poppins font-light">|</span>
              <span className="whitespace-pre-wrap font-light">
                {" "}
                PortfoiloSite
              </span>
            </div>
          </div>
        </div>
        <div className="box-border flex h-[279px] flex-col items-start justify-between gap-8 px-4 text-base">
          <Scroll to="top" smooth={true} duration={500}>
            <div className="flex cursor-pointer flex-col items-start justify-end gap-2.5 py-2 transition-all duration-500 hover:pl-4 hover:text-xl hover:text-emerald-400">
              <div className="relative font-light">TOP</div>
              <div className="relative inline-block min-w-[98px] font-noto-sans-jp text-sm">
                <span className="font-light">{` `}</span>
                <span className="font-poppins font-light">|</span>
                <span className="whitespace-pre-wrap font-light">
                  {" "}
                  サイトトップ
                </span>
              </div>
            </div>
          </Scroll>
          <Scroll to="products" smooth={true} duration={500}>
            <div className="box-border flex w-24 cursor-pointer flex-col items-start justify-end gap-2.5 py-2 transition-all duration-500 hover:pl-4 hover:text-xl hover:text-rose-400">
              <div className="relative font-light">PRODUCTS</div>
              <div className="relative self-stretch font-noto-sans-jp text-sm">
                <span className="font-light">{` `}</span>
                <span className="font-poppins font-light">|</span>
                <span className="whitespace-pre-wrap font-light"> 制作物</span>
              </div>
            </div>
          </Scroll>
          <Scroll to="info" smooth={true} duration={500}>
            <div className="flex cursor-pointer flex-col items-start justify-end gap-2.5 py-2 transition-all duration-500 hover:pl-4 hover:text-xl hover:text-indigo-400">
              <div className="relative inline-block min-w-[37px] font-light">
                INFO
              </div>
              <div className="relative inline-block min-w-[112px] font-noto-sans-jp text-sm">
                <span className="font-light">{` `}</span>
                <span className="font-poppins font-light">|</span>
                <span className="whitespace-pre-wrap font-light">
                  {" "}
                  制作者について
                </span>
              </div>
            </div>
          </Scroll>
        </div>
        <div className="flex flex-col items-start justify-end gap-0.5 px-0 py-4 font-poppins">
          <div className="relative font-noto-sans-jp text-xl font-normal mq450:text-base">
            伊藤康介
          </div>
          <div className="relative text-sm font-light">
            kousuke222015@gmail.com
          </div>
          <a
            className="relative inline-block min-w-[128px] font-light text-[inherit] transition duration-300 hover:text-indigo-400 hover:[text-decoration:underline]"
            href="https://github.com/Kousuke222"
            target="_blank"
            rel="noreferrer"
          >{`Github : Kousuke222 `}</a>
        </div>
      </nav>
    </section>
  );
};
export default Sidebar;
