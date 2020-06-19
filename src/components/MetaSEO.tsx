import React from "react";
import { Helmet } from "react-helmet";

function MetaSEO(): JSX.Element {
  return (
    <Helmet>
      <meta name="description" content="GROZINGER & PARTNERS S.A. est une étude d'avocats au Luxembourg." />
      <meta
        name="keywords"
        content="GROZINGER & PARTNERS S.A., Grozinger, Law, Luxembourg, Droit, Avocats, Cour, titrisation, corporate, domiciliation"
      />
    </Helmet>
  );
}

export default MetaSEO;
