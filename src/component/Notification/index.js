import React from 'react';
import { Button, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    flexGrow: 1,
  },
  container: {
    background: '#2ecc71',
  },
  title: {
    color: '#3498db',
  },
  button: {
    background: '#e74c3c',
    fontWeight: "bold",
    color: "#fff",
    '&:hover': {
      background: '#e67e22'
    }
  }

});

const Notification = (props) => {

  const classes = useStyle();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Notification</h1>
      <Button className={classes.button}>Noti</Button>
    </div>
  );
};

export default Notification;