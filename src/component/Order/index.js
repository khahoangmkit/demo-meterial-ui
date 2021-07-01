import React from 'react';
import { Button, withStyles } from "@material-ui/core";
import ButtonCommon from "../common/ButtonCommon";
import ButtonV1 from "../common/ButtonV1";

const CustomButton = withStyles({
  root: {
    background: '#0984e3',
    color: '#e84393',
    fontSize: '18px',
    padding: '0 20px',
    border: '2px solid #fd79a8',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
})(Button);

const Order = (props) => {

  return (
    <div>
      <h2>Order </h2>
      <CustomButton>Button</CustomButton>
      <div>
        <ButtonCommon
          type={"success"}
          content={'Submit'}
        />
        <ButtonCommon
          type={"warring"}
          content={'Cancel'}
        />
      </div>

      <div>
        <ButtonV1
          color={'red'}
          content={'Red Btn'}
        />
        <ButtonV1
          color={'blue'}
          content={'Blue Btn'}
        />
      </div>
    </div>
  );
};

export default Order;