import React from 'react';
import { Box, Divider, Grid, List, ListItem, ListItemText, makeStyles, Typography } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import ListAltIcon from '@material-ui/icons/ListAlt';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  sideBar: {
    minWidth: '250px',
    maxWidth: '400px',
    position: 'absolute',
    background: '#fff',
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 1
  },
  backGround: {
    background: '#000',
    opacity: 0.3,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0
  },
  item: {
    padding: '10px 20px',
  },
  icon: {
    paddingRight: '5px'
  }
}));

const listMenu = [
  {
    text: 'Thông tin tài khoản',
    icon: <PersonIcon />,
    router: '/profile'
  },
  {
    text: 'Đơn mua',
    icon: <ListAltIcon />,
    router: '/order'
  },
  {
    text: 'Thông báo',
    icon: <NotificationsIcon />,
    router: '/order'
  },
]

const SideBar = (props) => {
  const itemsMenu = ['menu1', 'menu2', 'menu3', 'menu4'];

  const classes = useStyles();
  const {closeSideBar} = props;

  return (
    <Grid
      container
      direction={'row'}
      justify={'flex-start'}
      spacing={0}
      maxWidth={'xs'}
      className={classes.root}
    >
      <List
        component={'nav'}
        className={classes.sideBar}
      >
        {
          listMenu.map((item) => (
            <ListItem
              className={classes.item}
              divider
              button
            >
              <Box component={'span'} className={classes.icon}>{item.icon}</Box>
              <ListItemText primary={item.text} />
              <Divider light />
            </ListItem>
          ))
        }
      </List>

      <Grid
        item
        className={classes.backGround}
        onClick={() => closeSideBar(false)}
      />
    </Grid>
  )
};

export default SideBar;