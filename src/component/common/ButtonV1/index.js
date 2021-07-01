import React from 'react';
import clsx from "clsx";
import { Button, makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  buttonBlue: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  },
  buttonRed: {
    background: 'linear-gradient(45deg, #e74c3c 30%, #c0392b 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  }
});

const ButtonV1 = (props) => {
  const classes = useStyles();
  const {color, content} = props;

  return (
    <Button
      className={clsx(classes.button, {
        [classes.buttonBlue]: color === 'blue',
        [classes.buttonRed]: color === 'red',
      })}
    >
      {content}
    </Button>
  );
};

export default ButtonV1;