"use client";
import React from "react";
import Image from "next/image";
import YouTube from "react-youtube";
import ProductCard from "./product-card";
import nextConfig from "../../../next.config";
const BASE_PATH = nextConfig.basePath || "";

const ProductsList: React.FC = () => {
  const memoria: string[] = [
    "「和歌山県の課題を解決する」ことを目標に、第二回和歌山イノベーションプログラミングコンテストに向けて開発したスマホアプリです。\nこのアプリは、AR（拡張現実）技術を用いて、和歌山県の観光地や名所を訪れるユーザーがIP等のキャラクターと写真撮影することを可能にします。\nまた、写真撮影に機能を特化させることで、SNS等を通して和歌山県の観光地や作品のIPをPRすることができます。\nARのコンテンツの管理にFlutterを、ARを実際に走らせる環境としてUnityを使用し、使用データの管理にfirebaseを使用しました。\n\n和歌山イノベーションプログラミングコンテスト本審査では、Link-U technologies賞を受賞しました。\n",
    "２人のチーム開発を行うにあたって、担当範囲としては主にFlutter側を担当し、プロジェクトリーダーとして進行管理などを行いました。\n今後の開発予定として、コンセプトの根本からデザインし直し、一般ユーザーファーストのARコンテンツプラットフォームとすることを構想中です。",
  ];
  const portfolio: string[] = [
    "あなたが現在閲覧されているこのポートフォリオサイトです！\nReactとNext.js等の技術スタックを使用して作成、Github Pagesを使用して公開しました。\nポイントとしては、短期間の開発を行うため、figmaでのデザインを「locofy」というAIツールを使用して直接ソースコードとして抽出し、概形の工程を短縮した点です。\n当初考案していた、タグによる絞り込みやfirebaseによるデータ管理などなどが未完成の状態なので、情報の更新ついでに継続して開発予定です。",
    "今（身内間で）話題のavif形式の画像ファイルを使用…してみたのですが、webp形式と比べ、圧縮率が上がる代わりに初回のロードが伸びるらしく、何度もリロードをするサイトでもないだろうし…という葛藤がありました。（結局avifですが…）\n\nまた、locofyについてですが、figmaの時点でHTMLの構造を意識したUIデザインを行う必要こそありましたが、かなりの精度で変換することができたので、当初は驚かされました…！もちろん、構造の解釈ミスやアニメーション、細かいレスポンシブ対応など丸々全てとは行きませんでしたが、デザインの概形6割程度は表現しきれていた気がします。今回はバックエンド方面は触れませんでしたが、バックエンド含むちゃんとしたプロジェクトでも使用してみたいと思えるツールでした。(有料ですが!)",
  ];
  const kelpSV: string[] = [
    "3年前（当時は2年次）にコンピューター部のグループで作成したゲームです。おもに敵の行動アルゴリズムを記述しました。",
  ];
  const kelpSTG: string[] = [
    "4年前（当時は1年次）にコンピューター部のグループで作成したゲームです。SF世界観の横スクロールシューティングゲームです。",
    "色々探したけど記録が残っておらず、今では記憶だけの存在に…",
  ];
  return (
    <div className="flex w-full flex-col items-start justify-start gap-10">
      <div className="flex w-full items-start justify-start font-noto-sans-jp text-3xs">
        <div className="flex w-full items-center bg-gray-100 px-2 py-4 shadow-[63px_-207px_60px_rgba(0,_0,_0,_0),_40px_-132px_55px_rgba(0,_0,_0,_0.03),_23px_-74px_47px_rgba(0,_0,_0,_0.12),_10px_-33px_35px_rgba(0,_0,_0,_0.2),_3px_-8px_19px_rgba(0,_0,_0,_0.23)]">
          <div className="fles-row flex w-full flex-wrap content-start items-start justify-start gap-10 border-y-2 border-y-emerald-300 p-5 mq750:flex-col mq450:flex-col">
            <ProductCard
              productTitle={"memoria"}
              productSubTitle={"メモリア"}
              repositoryLink={"https://github.com/Team-fromSystem/memoria"}
              devPeriod={"4ヶ月間 (2024 / 9 ~ 2024 / 12)"}
              tags={["スマホアプリ", "AR", "Flutter", "dart", "Unity", "C#"]}
              description={memoria[0]}
              note={memoria[1]}
            />
            <div className="flex max-w-[600px] flex-col items-start justify-start gap-5">
              <div className="w-full">
                <YouTube
                  videoId="LJxDqh1eHRM"
                  iframeClassName="w-full h-full"
                  className="aspect-[6400/3600] w-full"
                />
              </div>
              <div className="w-[500px]">
                <YouTube
                  videoId="4ZY4ym0Bs2w"
                  iframeClassName="w-full h-full"
                  className="aspect-[640/360] w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full items-start justify-start font-noto-sans-jp text-3xs">
        <div className="flex w-full items-center bg-gray-100 px-2 py-4 shadow-[63px_-207px_60px_rgba(0,_0,_0,_0),_40px_-132px_55px_rgba(0,_0,_0,_0.03),_23px_-74px_47px_rgba(0,_0,_0,_0.12),_10px_-33px_35px_rgba(0,_0,_0,_0.2),_3px_-8px_19px_rgba(0,_0,_0,_0.23)]">
          <div className="fles-row flex w-full flex-wrap content-start items-start justify-start gap-10 border-y-2 border-y-emerald-300 p-5 mq450:flex-col">
            <ProductCard
              productTitle={"KI's Portfolio"}
              productSubTitle={"伊藤康介のポートフォリオ"}
              repositoryLink={"https://github.com/Kousuke222/KIs_portfolio"}
              devPeriod={"1ヶ月間 (2024 / 12 ~ 2025 / 1)"}
              tags={[
                "web site",
                "React",
                "node.js",
                "next.js",
                "tailwind",
                "typeScript",
              ]}
              description={portfolio[0]}
              note={portfolio[1]}
            />

            <Image
              className=""
              loading="lazy"
              width={2560}
              height={1528}
              layout="responsive"
              sizes="80vw"
              alt=""
              src={`${BASE_PATH}/images/image (1).avif`}
            />
            <p>↑Lighthouseのスコア</p>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-row gap-10 mq750:flex-col">
        <div className="flex w-full items-start justify-start font-noto-sans-jp text-3xs">
          <div className="flex w-full items-center bg-gray-100 px-2 py-4 shadow-[63px_-207px_60px_rgba(0,_0,_0,_0),_40px_-132px_55px_rgba(0,_0,_0,_0.03),_23px_-74px_47px_rgba(0,_0,_0,_0.12),_10px_-33px_35px_rgba(0,_0,_0,_0.2),_3px_-8px_19px_rgba(0,_0,_0,_0.23)]">
            <div className="fles-row flex w-full flex-wrap content-start items-start justify-start gap-10 border-y-2 border-y-emerald-300 p-5 mq450:flex-col">
              <ProductCard
                productTitle={"Kelp Survival"}
                productSubTitle={"ケルプ サバイバル"}
                repositoryLink={
                  "https://github.com/jupeeze/KelpSurvival_Windows"
                }
                description={kelpSV[0]}
                devPeriod={"3ヶ月間 (2022 / 9 ~ 2022 / 11)"}
                tags={["game", "3D action", "Unity", "C#"]}
              />
              <Image
                className=""
                loading="lazy"
                width={2145}
                height={1207}
                layout="responsive"
                sizes="50vw"
                alt=""
                src={`${BASE_PATH}/images/スクリーンショット 2025-01-28 214211.avif`}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full items-start justify-start font-noto-sans-jp text-3xs">
          <div className="flex w-full items-center bg-gray-100 px-2 py-4 shadow-[63px_-207px_60px_rgba(0,_0,_0,_0),_40px_-132px_55px_rgba(0,_0,_0,_0.03),_23px_-74px_47px_rgba(0,_0,_0,_0.12),_10px_-33px_35px_rgba(0,_0,_0,_0.2),_3px_-8px_19px_rgba(0,_0,_0,_0.23)]">
            <div className="fles-row flex w-full flex-wrap content-start items-start justify-start gap-10 border-y-2 border-y-emerald-300 p-5 mq450:flex-col">
              <ProductCard
                productTitle={"Kelp Shooting"}
                productSubTitle={"ケルプ シューティング"}
                description={kelpSTG[0]}
                note={kelpSTG[1]}
                devPeriod={"2ヶ月間 (2021 / 9 ~ 2021 / 11)"}
                tags={["game", "2D Shooting", "Unity", "C#"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductsList;
