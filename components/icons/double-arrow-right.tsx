import React, { SVGProps } from "react";

export function DoubleArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M10.537 12L5.942 7.4l.708-.708L11.958 12L6.65 17.308l-.708-.708zm6.1 0l-4.595-4.6l.708-.708L18.058 12l-5.308 5.308l-.708-.708z"
      ></path>
    </svg>
  );
}
export default DoubleArrowRight;
