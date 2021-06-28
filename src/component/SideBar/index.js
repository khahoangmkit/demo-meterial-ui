import React from 'react';
import { Box, Grid, Typography } from "@material-ui/core";

const SideBar = (props) => {
  const itemsMenu = ['menu1', 'menu2', 'menu3', 'menu4'];

  return (
    <Grid
      container
      direction={'column'}
      spacing={1}
      maxWidth={'xs'}
    >
      {
        itemsMenu.map((item) => (
          <Grid
            item
            padding={'1em'}
          >
            <Typography variant={'h4'} color={'inherit'}>{item}</Typography>
          </Grid>
        ))
      }
    </Grid>
  )
};

export default SideBar;