import React, { useState } from 'react';
import { Grid } from "@material-ui/core";
import SideBar from "../SideBar";
import Content from "../Content";
import TopBar from "../TopBar";

const MainScreen = (props) => {

  const [showSideBar, setShowSideBar] = useState(false);


  return (
    <Grid
      container
      direction={'column'}
      justify={'space-between'}
      height={'100vh'}
    >
      <TopBar showSideBar={() => setShowSideBar(true)} />
      {
        showSideBar
        &&
        <Grid
          container
          xs={1}
        >
          <SideBar closeSideBar={setShowSideBar}/>
        </Grid>
      }

      <Content />

    </Grid>
  )
};

export default MainScreen;