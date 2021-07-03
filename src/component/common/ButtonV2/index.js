import React from 'react';
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    background: 'linear-gradient(45deg, var(--background-start) 30%, var(--background-end) 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: 'var(padding)',
    boxShadow: '0 3px 5px 2px var(--box-shadow)',
  },
});

const ButtonV2 = (props) => {
  const classes = useStyles();
  const {color, status, customStyle} = props;

  const getContent = (status) => {
    switch (status) {
      case 'submit':
        return 'Save';
      case 'warring':
        return 'Cancel';
      default:
        return 'Submit';
    }
  }
  return (
    <div>
      <Button
        className={classes.button}
        style={{
          '--background-start': '#2196F3',
          '--background-end': '#21CBF3',
          '--box-shadow': 'rgba(33, 203, 243, .3)',
          'padding': '20px'
        }}
      >
        {getContent(status)}
      </Button>
    </div>
  );
};

export default ButtonV2;