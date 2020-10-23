import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles(theme => ({
  root: {
    background: "#700000",
    padding: theme.spacing(3, 0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  link: {
    margin: theme.spacing(3, 0),
    color: "white",
    textDecoration: "none",
    transition: "0.6s all",
    "&:hover": {
      color: "#f2d8db",
      paddingLeft: theme.spacing(1),
    },
    fontSize: 15,
    [theme.breakpoints.up("md")]: {
      fontSize: 22,
    },
  },
  map: {
    left: "5%",
    width: "90%",
    height: 400,
  },
}));

function Contact(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root} id="contact">
      <a href={"tel:+35220601313"} className={classes.link}>
        Tel: +352 20 60 13 13
      </a>
      <a href={"fax:+35224489896"} className={classes.link}>
        Fax: +352 24 48 98 96
      </a>
      <a href={"mailto:office@grozinger-partner.com?Subject=Enquiry"} className={classes.link}>
        Email: office@grozinger-partner.com
      </a>
      <a href="https://goo.gl/maps/XoYXRsEcx1s" className={classes.link} target="_blank" rel="noopener noreferrer">
        57, Boulevard Grande-Duchesse Charlotte L-1331 Luxembourg
      </a>
      <iframe
        title="maps"
        className={classes.map}
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5170.64603233835!2d6.1141311!3d49.6105147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795492b39411f3b%3A0xde724dd278698d62!2s57+Boulevard+Grande-Duchesse+Charlotte%2C+1331+Luxembourg!5e0!3m2!1sen!2slu!4v1533037152235"
        allowFullScreen
      />
      <a href="http://www.avencor.lu" className={classes.link} target="_blank" rel="noopener noreferrer">
        <FormattedMessage id="contact.avencor" />
      </a>
    </div>
  );
}

export default Contact;
