/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";
import SectionLogin from "pages-sections/Components-Sections/SectionLogin.js";
import { UserForm } from 'pages/UserForm';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClick=()=>{
    console.log(open)
    setOpen(true)
  }
  const handelFunction=()=>{
    console.log("dfsfsd")
    return(
      <SectionLogin/>
    )
  }
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Health & Yoga Plan"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={MenuOpenIcon}
          dropdownList={[
            <button  className={classes.dropdownLink2} onClick={handleClick}>
            Self Health Assessment
          </button> ,
            <a
             // href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Personilized Yoga Plan
            </a>
          ]}
        />
         {open?<UserForm setOpen={setOpen}></UserForm>:null}  
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
       //   href="https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmk-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
         Our Products
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link href="/login">
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <AccountBoxIcon className={classes.icons} /> Register/Login
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
        //    href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
         //   href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
         //   href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
