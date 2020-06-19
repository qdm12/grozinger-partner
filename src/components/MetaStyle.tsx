import React from "react";
import { Helmet } from "react-helmet";

function MetaStyle(): JSX.Element {
  return (
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>GROZINGER & PARTNER S.A. ⚖</title>
      <meta name="theme-color" content="#a5331f" />
      <meta name="msapplication-navbutton-color" content="#a5331f" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#a5331f" />
    </Helmet>
  );
}

export default MetaStyle;
