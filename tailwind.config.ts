import type { Config } from "tailwindcss";
import fluid, { extract, screens, fontSize } from "fluid-tailwind"; // Fluidプラグインと、抽出関数・スクリーンサイズ・フォントサイズをインポート
const config: Config = {
  content: {
    files: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    extract, // Fluidで必要なcontentファイルからデザインの要素を抽出するために使用
  },
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#29292d",
          "200": "#262628",
        },
        dimgray: {
          "100": "#6f6363",
          "200": "#5b5653",
        },
        white: "#fff",
        darkslategray: "rgba(69, 88, 85, 0.22)",
        gainsboro: "#d9d9d9",
      },
      backgroundImage: {
        "gradient-selected":
          "linear-gradient(to bottom right, #f43f5e, #6366f1, #10b981)",
        "gradient-gray": "linear-gradient(to right, #262628, #2a2a2d)",
        "gradient-gray-inv":
          "linear-gradient(to  right,  #2d2d30,#262628,#262628)",
      },
      spacing: {},
      fontFamily: {
        "noto-sans-jp": "'Noto Sans JP'",
        roboto: "Roboto",
        poppins: "Poppins",
      },
      fontSize: {
        smi: "17px",
        xs: "14px",
        base: "20px",
        "3xs": "14px",
        "5xl": "28px",
        lgi: "22px",
        "45xl": "70px",
        "19xl": "42px",
        "32xl": "56px",
        sm: "15px",
        xl: "26px",
        inherit: "inherit",
      },
      // fontSize: {
      //   smi: "13px",
      //   xs: "12px",
      //   base: "16px",
      //   "3xs": "10px",
      //   "5xl": "24px",
      //   lgi: "19px",
      //   "45xl": "64px",
      //   "19xl": "38px",
      //   "32xl": "51px",
      //   sm: "14px",
      //   xl: "20px",
      //   inherit: "inherit",
      // },
      screens: {
        lg: {
          max: "1200px",
        },
        mq1100: {
          raw: "screen and (max-width: 1100px)",
        },
        mq1050: {
          raw: "screen and (max-width: 1050px)",
        },
        mq750: {
          raw: "screen and (max-width: 750px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
        xs: "20rem",
      },
    },
    screens, // Fluidが提供するレスポンシブ対応のスクリーンサイズを追加
    fontSize, // Fluidによって拡張されたフォントサイズを使用可能にする
  },
  plugins: [fluid], // Tailwind CSSにFluidプラグインを追加して機能を適用
};
export default config;

/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
// theme: {
//   extend: {
//     colors: {
//       gray: {
//         "100": "#29292d",
//         "200": "#262628",
//       },
//       dimgray: {
//         "100": "#6f6363",
//         "200": "#5b5653",
//       },
//       white: "#fff",
//       darkslategray: "rgba(69, 88, 85, 0.22)",
//       gainsboro: "#d9d9d9",
//     },
//     spacing: {},
//     fontFamily: {
//       "noto-sans-jp": "'Noto Sans JP'",
//       roboto: "Roboto",
//       poppins: "Poppins",
//     },
//   },
//   fontSize: {
//     smi: "13px",
//     xs: "12px",
//     base: "16px",
//     "3xs": "10px",
//     "5xl": "24px",
//     lgi: "19px",
//     "45xl": "64px",
//     "19xl": "38px",
//     "32xl": "51px",
//     sm: "14px",
//     xl: "20px",
//     inherit: "inherit",
//   },
//   screens: {
//     lg: {
//       max: "1200px",
//     },
//     mq1050: {
//       raw: "screen and (max-width: 1050px)",
//     },
//     mq750: {
//       raw: "screen and (max-width: 750px)",
//     },
//     mq450: {
//       raw: "screen and (max-width: 450px)",
//     },
//   },
// },
//   corePlugins: {
//     preflight: false,
//   },
// };
