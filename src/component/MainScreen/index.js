import React, { useState } from 'react';
import { Grid } from "@material-ui/core";
import SideBar from "../SideBar";

const MainScreen = (props) => {

  const [showSideBar, setShowSideBar] = useState(false);


  return (
    <Grid
      container
      direction={'column'}
      spacing={1}
      justify={'space-between'}
      height={'100vh'}
    >
      {
        showSideBar
        &&
        <Grid
          container
          xs={1}
        >
          <SideBar/>
        </Grid>
      }

    </Grid>
  )
};

export default MainScreen;