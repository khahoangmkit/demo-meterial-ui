import React from 'react';
import { Button, Container, makeStyles } from "@material-ui/core";
import { Box } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

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

  const classes = useStyles();
  return (
    <Router>
      <Switch>
        <Router path={'/profile'}>

        </Router>
      </Switch>
    </Router>
  );
};

export default Content;