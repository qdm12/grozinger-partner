import React from "react";
import { Helmet } from "react-helmet";

function JsonLD(): JSX.Element {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
      {
        "@context": "http://schema.org",
        "@type": "Organization",
        "url": "https://grozinger-partner.com",
        "logo": "https://grozinger-partner.com/logo.png",
        "name": "GROZINGER & PARTNERS S.A.",
        "email": "office@grozinger-partners.com",
        "telephone": "+35220601313",
        "faxNumber": "+35224489896",
        "legalName": "Grozinger and Partner S.A.",
        "numberOfEmployees": "x",
        "founders": [
          {
            "@type": "Person",
            "familyName": "Grozinger",
            "givenName": "Dieter",
            "gender": "Male"
          },
          {
            "@type": "Person",
            "familyName": "Portenseigne",
            "givenName": "Sylvie",
            "gender": "Female"
          }
        ],
        "employees": [
          {
            "@type": "Person",
            "familyName": "Grozinger",
            "givenName": "Dieter",
            "gender": "Male"
          },
          {
            "@type": "Person",
            "familyName": "Portenseigne",
            "givenName": "Sylvie",
            "gender": "Female"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "LU",
          "addressLocality": "Luxembourg",
          "postalCode": "1331",
          "streetAddress": "57 Boulevard Grande-Duchesse Charlotte"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+352 20 60 13 13",
          "contactType": "customer service",
          "availableLanguage":["French","English","German","Luxembourgish"]
        }
      }
      `}
      </script>
    </Helmet>
  );
}

export default JsonLD;
