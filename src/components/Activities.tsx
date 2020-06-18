import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Activity from "./Activity";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    padding: theme.spacing(8, 0),
    background: "#ffe6e6",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(8, 0),
    },
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    [theme.breakpoints.up("md")]: {
      fontSize: 40,
    },
  },
  activities: {
    width: "80%",
    margin: "0 10%",
    [theme.breakpoints.up("md")]: {
      width: "60%",
      margin: "0 20%",
    },
  },
}));

interface Props {
  activities: {
    titleID: string;
    descriptionID: string;
  }[];
}

function Activities(props: Props): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root} id="activities">
      <div className={classes.title}>
        <FormattedMessage id="activities.title" />
      </div>
      <div className={classes.activities}>
        {props.activities.map(a => (
          <Activity key={a.titleID} titleID={a.titleID} descriptionID={a.descriptionID} />
        ))}
      </div>
    </div>
  );
}

export default Activities;
