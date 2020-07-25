import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionBasics from "pages-sections/Components-Sections/SectionBasics.js";
import SectionNavbars from "pages-sections/Components-Sections/SectionNavbars.js";
import SectionTabs from "pages-sections/Components-Sections/SectionTabs.js";
import SectionPills from "pages-sections/Components-Sections/SectionPills.js";
import SectionNotifications from "pages-sections/Components-Sections/SectionNotifications.js";
import SectionTypography from "pages-sections/Components-Sections/SectionTypography.js";
import SectionJavascript from "pages-sections/Components-Sections/SectionJavascript.js";
import SectionCarousel from "pages-sections/Components-Sections/SectionCarousel.js";
import SectionCompletedExamples from "pages-sections/Components-Sections/SectionCompletedExamples.js";
import SectionLogin from "pages-sections/Components-Sections/SectionLogin.js";
import SectionExamples from "pages-sections/Components-Sections/SectionExamples.js";
import SectionDownload from "pages-sections/Components-Sections/SectionDownload.js";
import { UserForm } from './UserForm';
import styles from "assets/jss/nextjs-material-kit/pages/components.js";


const useStyles = makeStyles(styles);

export default function Components(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const { ...rest } = props;
  const handleClick=()=>{
    console.log(open)
    setOpen(true)
  }
  return (
    <div>
      <Header
        brand="AyurveGa"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/solid.jpg")}>
       
        <div className={classes.container2}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h5 className={classes.title}>Improve Your Health with the Power<br/>of AYURVEDA & YOGA  </h5>
                <h5 className={classes.title2}> <br/>We Provide Personalized Ayruvedic Medicine & Yoga plan for individual</h5>
                
              </div>
            </GridItem>
          </GridContainer>
          <Button onClick={handleClick}>
                  Self Health Assessment
                </Button>
          {open?<UserForm setOpen={setOpen}></UserForm>:null}   
           
        </div>
      </Parallax>

     
      

      <div className={classNames(classes.main, classes.mainRaised)}>
        {/* <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript /> */}
        <SectionCarousel />
        <SectionDownload />
        
        {/* <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link href="/login">
            <a className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </a>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload /> */}
      </div>
      <Footer />
    </div>
  );
}
