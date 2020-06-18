import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TeamMember from "./TeamMember";
import DieterPhoto from "../static/dieter.png";
import SylviePhoto from "../static/sylvie.png";

const useStyles = makeStyles(theme => ({
  root: {
    background: "#ffeeee",
    padding: theme.spacing(8, 0),
  },
}));

function Team(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root} id="team">
      <TeamMember name="Dieter Grozinger de Rosnay" photo={DieterPhoto} descriptionID="team.dg" />
      <TeamMember name="Sylvie Portenseigne" photo={SylviePhoto} descriptionID="team.sp" />
    </div>
  );
}

export default Team;
