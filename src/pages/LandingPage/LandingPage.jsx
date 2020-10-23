import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import "../../assets/scss/material-kit-react.scss"
import "typeface-roboto"
import "typeface-roboto-slab"
// @material-ui/icons

// React icons
import { FaPlay } from "react-icons/fa"

// core components
import GridContainer from "../../components/Grid/GridContainer.jsx"
import GridItem from "../../components/Grid/GridItem.jsx"
import Button from "../../components/CustomButtons/Button.jsx"
import Parallax from "../../components/Parallax/Parallax"
import Layout from "../../components/layout"

import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage.jsx"
// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx"
import TeamSection from "./Sections/TeamSection.jsx"
import WorkSection from "./Sections/WorkSection.jsx"

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    return (
      <Layout>
        <Parallax filter image={require("../../assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>We are Woodside</h1>
                <h4>
                  Making Woodside and Western Queens a better place to live,
                  learn and do business.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPlay />
                  Watch video
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
      </Layout>
    )
  }
}

export default withStyles(landingPageStyle)(LandingPage)
