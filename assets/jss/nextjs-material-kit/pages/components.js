import { container2 } from "assets/jss/nextjs-material-kit.js";

const componentsStyle = {
  container2,
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    color:"black",
    fontSize: "1.5rem",
    fontWeight: "600",
    display: "contents",
    position: "relative"
  },
  title2:{
    color:"black",
    fontSize: "1.0rem",
    fontWeight: "300",
    display: "contents",
    position: "relative"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "510px",
    margin: "10px 0 0"
  },
  main: {
    padding:"0px 0px !important",
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    padding:"0px 0px !important",
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px"
    }
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  }
};

export default componentsStyle;
