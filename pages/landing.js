import React, { useEffect, useState } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";
import Products from '../components/products';
import Herbs from '../components/Herbs';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';




const useStyles2 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));


const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [isMobile, setMobile] = useState(null);
  const [fixed, setFixed] = useState(true);
  const classes2 = useStyles2();
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    const isMobile = document.documentElement.clientWidth < 768;
    setMobile(isMobile);
}, []);

const handleMenu=()=>{
  setFixed(false);
}
  return (
    <div>
      <Header
        color="transparent"
        brand="AyurveGa"
        rightLinks={<HeaderLinks />}
        fixed={fixed}
        changeColorOnScroll={{
          height: 400,
          color: "black"
        }}
        {...rest}
      />
      <Parallax responsive image={isMobile?require("assets/img/solid_hori.jpg"):require("assets/img/solid.jpg")}>
        <div className={classes.container2}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>We Got You Covered</h1>
              <h4>
                Below is Ayruvedic Medicine you can take and Yoga Regime that you can follow to keep yourself healthy
              </h4>
              <br />
              
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      
      <div className={isMobile?classNames(classes.main, classes.mainRaised2):classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        <div className={classes2.root}>
      <TabContext value={value}>
        <AppBar position="static">
          {isMobile?
          <TabList onChange={handleChange} aria-label="simple tabs example" variant="scrollable"
          scrollButtons="auto">
            <Tab label="Yoga and Excercises" value="1" />
            <Tab label="Ayruvedic Medicines" value="2" />
            <Tab label="Raw Herbs(Jhadi Boothi)" value="3" />
            <Tab label="Consult Vaidya" value="4" />
          </TabList>:<TabList onChange={handleChange} aria-label="simple tabs example" variant="fullWidth">
            <Tab label="Yoga and Excercises" value="1" />
            <Tab label="Ayruvedic Medicines" value="2" />
            <Tab label="Raw Herbs(Jadi Buti)" value="3" />
            <Tab label="Consult Vaidya" value="4" />
          </TabList>}
        </AppBar>
        <TabPanel value="1">

        <div className={classes.container3}>
          
              <h2>Way to live healthy life</h2>
              <h4>
                Below is the Yoga asanas that can help you get started: 
              </h4>
      <h5>1) Tadasana(Mountain Pose):</h5>
      <p>In Sanskrit language, Tada – Mountain and Asana – Pose, so it is called as Tadasana (Mountain Pose). Tadasana yoga pose is effective to increase height and stretching your body from feet to your arms.</p>
      <h3>Benefits</h3>
    <ul>
      <li>Increase height</li>
     <li>Treat sciatica</li>
     <li>Enhance concentration</li>
     <li>Relieve back pain</li>
     </ul>         
      <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src={`https://www.youtube.com/embed/9eNMoDT2I-k`}
        frameBorder="0"
      />
    </div>

    <h5>2) Trikonasana(Triangle Pose)</h5>
    <p>The Trikonasana is the building block of your yoga practice. It is very easy to do it but at the same time is it also very easy to get it wrong.  It involves all your joints and the primary purpose is to align all your joints.</p>  
    <h3>Benefits</h3>
    <ul>
      <li>Strengthens the legs, knees, ankles, arms and chest</li>
     <li>Stretches and opens the hips, groins, hamstrings, calves, shoulders, chest and spine</li>
     <li>Increases mental and physical equilibrium</li>
     <li>Helps improve digestion</li>
     <li>Reduces anxiety, stress, back pain and sciatica</li>
     </ul>  
     <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src={`https://www.youtube.com/embed/9iaEp4RHYEE`}
        frameBorder="0"
      />
    </div>        
              <br />
              
           
        </div>



        </TabPanel>
        <TabPanel value="2"><Products /></TabPanel>
        <TabPanel value="3"><Herbs /></TabPanel>
        <TabPanel value="4"><h1 className={classes.container3}>Comming Soon....</h1></TabPanel>
      </TabContext>
    </div> 
        
        </div>
      </div>
      <Footer />
    </div>
  );
}


