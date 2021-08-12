import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Menu from "./Menu";
import EnglishContent from "./EnglishContent";
import Mobile from "./Mobile";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
      <Hidden mdDown>
          {/* <Grid item xs={3}>
            <Menu />
          </Grid> */}
          <Grid item xs={2}>
            {/* <Menu /> */}
          </Grid>
        </Hidden>
      <Grid item lg={8} xs={12}>
          <Menu />
        </Grid>
        <Hidden mdDown>
          {/* <Grid item xs={3}>
            <Menu />
          </Grid> */}
          <Grid item xs={2}>
            {/* <Menu /> */}
          </Grid>
        </Hidden>
      </Grid>
      <Hidden lgUp>
        <Mobile />
      </Hidden>
    </div>
  );
}
