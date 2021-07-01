import React from 'react';
import { Button, withStyles } from "@material-ui/core";

const style = {
  root: {
    background: 'red',
    color: '#fff',
    padding: '10px',
    '&:hover': {
      fontWeight: 'bold',
      background: 'gray',
    }
  },

}

const Profile = (props) => {
  const { classes } = props;

  return (
    <Button className={classes.root}>Profile</Button>
  );
};

export default withStyles(style)(Profile);