import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Card from "../Card/Card.js";
import CardBody from "../Card/CardBody.js";
//import CardFooter from "../Card/CardFooter.js";

//import Button from "../CustomButtons/Button.js";
import styles from "./teamStyles.js";

import team1 from "../../img/bruce.jpeg";
import team2 from "../../img/filler.png";
import team3 from "../../img/yiqin.jpg";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function Description() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <Typography variant = 'h5' className={classes.title}>Here is our team</Typography>
      <div>
        <GridContainer className={classes.justifyCenter}>
          <GridItem xs={8} sm={8} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={5} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <Typography className={classes.cardTitle}>Bruce Qin</Typography>
              <CardBody>
                  <Typography className={classes.description}>
                    I am an undergraduate Electrical Engineering student at Georgia Institute of Technology with a minor in Computer Science. 
                  <br></br><a href="https://www.linkedin.com/in/bruce-qin">LinkedIn</a>.
                  </Typography>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={8} sm={8} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={5} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <Typography className={classes.cardTitle}>Tiantong Li</Typography>
              <CardBody>
                  <Typography className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                  </Typography>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={8} sm={8} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={5} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <Typography className={classes.cardTitle}>Yi Qin</Typography>
              <CardBody>
                  <Typography className={classes.description}>
                  I am an undergraduate Computer Science student at Georgia Institute of Technology. Look at my profile on <a href="https://www.linkedin.com/in/yiqin1227/">LinkedIn.</a>
                  </Typography>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        </div>
    </div>
  );
}
