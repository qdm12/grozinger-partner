import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import luxembourgImage from "../static/luxembourg.png";
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgb(255, 242, 242)",
    width: "100%",
    paddingTop: theme.spacing(15),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(15),
    },
  },
  logo: {
    width: "70%",
    height: 150,
    opacity: 0.85,
    transition: "all 1s ease",
    "&:hover": {
      opacity: 1,
      filter: "contrast(1.6)",
    },
  },
  background: {
    width: "100%",
    opacity: 0.5,
    transition: "all 1s ease",
    "&:hover": {
      opacity: 0.7,
    },
  },
}));

function HomeSection(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root} id="home">
      <Logo className={classes.logo} />
      <img className={classes.background} src={luxembourgImage} alt="Luxembourg" />
    </div>
  );
}

export default HomeSection;
