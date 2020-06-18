import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles(theme => ({
  root: {
    border: "1px solid black",
    margin: theme.spacing(4, 0),
    padding: theme.spacing(1),
    transition: "0.5s all ease",
    "&:hover": {
      background: "#e69eb1",
      opacity: 0.9,
      paddingLeft: theme.spacing(1.5),
    },
  },
  title: {
    fontSize: 18,
    [theme.breakpoints.up("md")]: {
      fontSize: 25,
    },
  },
  // description: {},
}));

interface Props {
  titleID: string;
  descriptionID: string;
}

function Activity(props: Props): JSX.Element {
  const classes = useStyles();
  // const [over, setOver] = useState(false);
  // const handleMouseOver = (): void => setOver(true);
  // const handleMouseOut = (): void => setOver(false);
  const title = <FormattedMessage id={props.titleID} />;
  // const description = <FormattedMessage id={props.descriptionID} />;
  return (
    <div
      className={classes.root}
      // onMouseOver={handleMouseOver}
      // onMouseEnter={handleMouseOver}
      // onMouseDown={handleMouseOver}
      // onMouseLeave={handleMouseOut}
    >
      <div className={classes.title}>{title}</div>
      {/* {over && <div className={classes.description}>{description}</div>} */}
    </div>
  );
}

export default Activity;
