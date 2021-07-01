import React from 'react';
import { makeStyles } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Profile from "../Profile";
import Notification from "../Notification";
import Order from "../Order";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  button: {
    color: "#fff",
    background: "#00FF88",
    '&:hover': {
      background: "#000",
      color: "#fff"
    }
  }
}));

const Content = (props) => {
  return (
      <Switch>
        <Router exact path={'/profile'}>
          <Profile />
        </Router>
        <Router exact path={'/notification'}>
          <Notification />
        </Router>
        <Router exact path={'/order'}>
          <Order />
        </Router>
        <Router exact path={'/'}>
          <div>Hello, This is home page</div>
        </Router>
      </Switch>
  );
};

export default Content;