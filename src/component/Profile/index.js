import React, { useState } from 'react';
import { Button, withStyles } from "@material-ui/core";
import ButtonV1 from "../common/ButtonV1";
import ButtonV2 from "../common/ButtonV2";

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

    const {classes} = props;

    return (
      <div>
        {
          open && <ButtonV1 content={content} color={'blue'}/>
        }
        <div>
          <Button onClick={() => setOpen(!open)} className={classes.root}>Profile</Button>
          <Button
            onClick={() => setContent(content === 'content' ? 'Submit' : 'content' )}
            className={classes.root}>Update</Button>
        </div>
      </div>
    )
  }
;

export default withStyles(style)(Profile);