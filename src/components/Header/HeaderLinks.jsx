/*eslint-disable*/
import React from "react"
// react components for routing our app without refresh
import { Link } from "gatsby"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Tooltip from "@material-ui/core/Tooltip"

// @material-ui/icons
import EventIcon from "@material-ui/icons/Event"
import InfoIcon from "@material-ui/icons/Info"
// React icons
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.jsx"
import Button from "../CustomButtons/Button.jsx"

import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle"

function HeaderLinks({ ...props }) {
  const { classes } = props
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="About"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          // buttonIcon={Apps}
          dropdownList={[
            <Link to="/about#history" className={classes.dropdownLink}>
              History
            </Link>,
            <Link to="/about#mission" className={classes.dropdownLink}>
              Mission
            </Link>,
            <Link to="/about#leadership" className={classes.dropdownLink}>
              Leadership
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Programs"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          // buttonIcon={Apps}
          dropdownList={[
            <Link to="/education" className={classes.dropdownLink}>
              Education
            </Link>,
            <Link to="/housing" className={classes.dropdownLink}>
              Housing
            </Link>,
            <Link to="/seniors" className={classes.dropdownLink}>
              Seniors
            </Link>,
            <Link to="/community" className={classes.dropdownLink}>
              Community
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/news"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          News
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/events"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Events
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={
            typeof window !== "undefined" && window.innerWidth > 959
              ? "top"
              : "left"
          }
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/woodsidemoves/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <FaTwitter />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={
            typeof window !== "undefined" && window.innerWidth > 959
              ? "top"
              : "left"
          }
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/WoodsideontheMove"
            target="_blank"
            className={classes.navLink}
          >
            <FaFacebook />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={
            typeof window !== "undefined" && window.innerWidth > 959
              ? "top"
              : "left"
          }
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/woodsideonthemove/?hl=en"
            target="_blank"
            className={classes.navLink}
          >
            <FaInstagram />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
