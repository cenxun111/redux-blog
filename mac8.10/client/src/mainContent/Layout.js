import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Center from './mainCom/Center';
import Rightbar from './mainCom/Rightbar'
import Hidden from "@material-ui/core/Hidden";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));


export default function FullWidthGrid() {
  const classes = useStyles();

  return (

    <div className={classes.root}>

      <Grid container >
        {/* <Grid item xs={3} md={3} >
         <Leftside/>
        </Grid> */}

        <Grid item lg={9} xs={12}>
          <Center />
        </Grid>

        <Hidden mdDown>
        <Grid item xs={3} >
            <Rightbar />
        </Grid>
        </Hidden>

      </Grid>
        <Hidden xlUp>
          <h1>hello world</h1>
        </Hidden>
    </div>

  );
}

