import React from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { Box, Container, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background: '#33bfff',
    padding: '5px'
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: '10px',
    height: '50px',
  },
  icon: {
    display: "flex",
    marginRight: '10px',
    alignItems: "center",
    cursor: "pointer"
  },
  title: {
    fontSize: '21px',
    fontWeight: 'bold',
    cursor: "pointer",
    padding: "5rem",
    boxSizing: 'border-box'
  }
}));

const TopBar = (props) => {

  const classes = useStyles();

  const { showSideBar } = props;
  return (
    <Grid
      container
      maxWidth={'lg'}
      className={classes.root}
    >
      <Container className={classes.container} fixed>
        <Box className={classes.icon}>
          <DehazeIcon onClick={showSideBar}/>
        </Box>
        <Box className={classes.title}>Home page</Box>
      </Container>
    </Grid>
  );
};

export default TopBar;