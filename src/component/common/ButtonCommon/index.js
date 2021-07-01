import React from 'react';
import { Button, withStyles } from "@material-ui/core";

const styledBy = (property, mapping) => (props) => mapping[props[property]];

const ButtonStyled = withStyles({
  root: {
    background: styledBy('color', {
      warring: 'linear-gradient(45deg, #e74c3c 30%, #c0392b 90%)',
      success: 'linear-gradient(45deg, #3498db 30%, #2980b9 90%)',
    }),
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: styledBy('color', {
      warring: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      success: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    }),
  },
})(Button);

const ButtonCommon = (props) => {
  const {type, content, onSubmit} = props;
  return (
    <ButtonStyled
      color={type}
      onClick={onSubmit}
    >
      {content}
    </ButtonStyled>
  )
};

export default ButtonCommon;