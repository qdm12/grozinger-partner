import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1,
    display: "flex",
    background: "#474747",
    justifyContent: "space-around",
    padding: theme.spacing(1, 0),
    alignItems: "center",
    transition: "0.6s all",
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  button: {
    textDecoration: "none",
    color: "whitesmoke",
    background: "#161616",
    borderRadius: 5,
    transition: "0.6s all",
    "&:hover": {
      color: "#ffc2c2",
      background: "#332828",
    },
    fontSize: 12,
    padding: theme.spacing(1, 2),
    [theme.breakpoints.up("md")]: {
      fontSize: 18,
      padding: theme.spacing(1, 4),
    },
  },
}));

const buttonsData = [
  {
    formattedMessageId: "topbar.home",
    anchorTag: "#home",
  },
  {
    formattedMessageId: "topbar.activities",
    anchorTag: "#activities",
  },
  {
    formattedMessageId: "topbar.team",
    anchorTag: "#team",
  },
  {
    formattedMessageId: "topbar.contact",
    anchorTag: "#contact",
  },
];

function TopBar(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {buttonsData.map(data => (
        <a key={data.formattedMessageId} className={classes.button} href={data.anchorTag}>
          <FormattedMessage id={data.formattedMessageId} />
        </a>
      ))}
    </div>
  );
}

export default TopBar;
