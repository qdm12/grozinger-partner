import React from "react";
import clsx from "clsx";
import SvgIcon from "@material-ui/core/SvgIcon";

interface Props {
  className?: string;
}

export default function Logo(props: Props): JSX.Element {
  return (
    <SvgIcon viewBox="0 0 159.478 25.614" className={clsx(props.className)}>
      <g transform="translate(-7.514 -117.786)">
        <text
          x="6.26"
          y="134.118"
          fill="#b90101"
          strokeWidth=".608"
          fontFamily="sans-serif"
          fontSize="24.307"
          fontWeight="400"
          letterSpacing="0"
          transform="scale(.9855 1.01472)"
          wordSpacing="0"
        >
          <tspan x="6.26" y="134.118">
            GP
          </tspan>
        </text>
        <text
          x="44.604"
          y="124.361"
          strokeWidth=".235"
          fontFamily="sans-serif"
          fontSize="9.394"
          fontWeight="400"
          letterSpacing="0"
          transform="scale(.9931 1.00694)"
          wordSpacing="0"
        >
          <tspan x="44.604" y="124.361">
            GROZINGER PARTNER S.A.
          </tspan>
        </text>
        <text
          x="44.114"
          y="136.447"
          strokeWidth=".185"
          fontFamily="sans-serif"
          fontSize="7.405"
          fontWeight="400"
          letterSpacing="0"
          transform="scale(.99945 1.00055)"
          wordSpacing="0"
        >
          <tspan x="44.114" y="136.447">
            Etude d&apos;Avocats
          </tspan>
        </text>
        <rect
          width="122.192"
          height=".992"
          x="44.8"
          y="142.408"
          fill="#b90101"
          fillRule="evenodd"
          paintOrder="markers fill stroke"
          ry=".021"
        />
      </g>
    </SvgIcon>
  );
}
