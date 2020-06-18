import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IntlProvider } from "react-intl";
import { detectBrowserLanguage } from "logic/language";
import translations, { activities } from "data/translations";
import TopBar from "components/TopBar";
import HomeSection from "components/HomeSection";
import Activities from "components/Activities";
import Team from "components/Team";
import Contact from "components/Contact";
import JsonLD from "components/JsonLD";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    fontFamily: 'Georgia, Times, "Times New Roman", serif',
  },
});

const language = detectBrowserLanguage();

function App(): JSX.Element {
  const classes = useStyles();
  return (
    <IntlProvider locale={language} messages={translations[language]} defaultLocale="en">
      <div className={classes.root}>
        <JsonLD />
        <TopBar />
        <HomeSection />
        <Activities activities={activities} />
        <Team />
        <Contact />
      </div>
    </IntlProvider>
  );
}

export default App;
