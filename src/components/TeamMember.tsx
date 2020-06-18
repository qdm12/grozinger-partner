import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(5),
  },
  name: {
    fontSize: 24,
    color: "#b90101",
  },
  photo: {
    width: 230,
    transition: "all 0.8s ease",
    filter: "contrast(0.5)",
    opacity: 0.8,
    "&:hover": {
      opacity: 1,
      filter: "contrast(1.5)",
    },
  },
  description: {
    fontSize: 16,
    marginTop: theme.spacing(1),
  },
}));

interface Props {
  name: string;
  photo: string;
  descriptionID: string;
}

function TeamMember(props: Props): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.name}>{props.name}</div>
      <img className={classes.photo} src={props.photo} alt={props.name} />
      <div className={classes.description}>
        <FormattedMessage id={props.descriptionID} />
      </div>
    </div>
  );
}

export default TeamMember;
