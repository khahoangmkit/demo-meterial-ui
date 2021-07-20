import React, { useEffect, useState } from 'react';
import { Button, withStyles } from "@material-ui/core";
import ButtonV1 from "../common/ButtonV1";
import ButtonV2 from "../common/ButtonV2";
import Counter from "../common/Counter";

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
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState('content');
    const [number, setNumber] = useState(1);

    const {classes} = props;

    useEffect(() => {
      console.log("component Did, Will update parent");
    });

    return (
      <div>
        {
          open && <ButtonV1 content={content} color={'blue'}/>
        }
        <div>
          {/*<Button onClick={() => setOpen(!open)} className={classes.root}>Profile</Button>*/}
          {/*<Button*/}
          {/*  onClick={() => setContent(content === 'content' ? 'Submit' : 'content' )}*/}
          {/*  className={classes.root}>Update</Button>*/}

          {/*<div*/}
          {/*  onClick={() => setNumber(number + 1)}*/}
          {/*  style={{height: '5rem', background: 'green'}}*/}
          {/*> Increate </div>*/}
          <Counter
            num={54}
            name={'thanh'}
            age={19}
          />
        </div>
      </div>
    )
  }
;

export default withStyles(style)(Profile);