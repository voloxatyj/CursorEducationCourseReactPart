import React from 'react';
import { Link } from 'react-router-dom'
import clsx from 'clsx';
import { Card } from './components/Card'
/* Styles */
import { makeStyles, useTheme } from '@material-ui/core/styles';
/* Material-UI */
import { Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, IconButton, ListItem, ListItemText } from '@material-ui/core';
/* ICONS */
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

const drawerWidth = 240;

const myHomeworks = [
  { title: '15-hw-ReactJS.Основи', path: '/basics' },
  { title: '16-hw-ReactJS.Класові компоненти', path: '/contracts' },
  { title: '17-hw-ReactJS. Методи життєвого циклу. Хуки', path: '/timer' },
  { title: '18-hw-ReactJS.Підходи до стилізації. StyledComponents. Animations', path: '/authform' },
  { title: '20-hw-Redux', path: '/redux' }
]
	
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  icons: {
    textDecoration: 'none'
  },
  hide: {
    display: 'none',
    font: ''
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export const App = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState(false)
  const userInfo = {
    fullName: 'OstapMedynskyy',
    email: 'ostapmedunskij@gmail.com',
    repo: 'https://github.com/voloxatyj?tab=repositories',
    date: '2020-10-1',
    img: 'https://i.pinimg.com/originals/93/8b/91/938b91151f7e52e7ac09ddffa6f79a10.png',
    load: user
  }
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{justifyContent: 'space-between'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon style={{ fontSize: "2rem" }}/>
          </IconButton>
          <Typography variant="h6" noWrap>
            Introducing React
          </Typography>
          <div className="icons" 
          style={{ display: "inline-flex", justifyContent: "space-between",
          minWidth: "5rem", alignItems: "center"}}>
            <IconButton
              color="inherit"
              aria-label="open user"
              onClick={()=>setUser(!user)}
              edge="start"
            >
              <AccountCircleOutlinedIcon style={{ fontSize: "2rem" }} />
            </IconButton>
            <Link to='/authform'>
              <ExitToAppOutlinedIcon style={{ fontSize: "2rem", color: "white" }}/>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {myHomeworks.map((item,index) => 
            <Link key={index} to={item.path} className={classes.icons}>
              <ListItem button>
                <ListItemText primary={item.title} />
              </ListItem>
            </Link>
            )}
        </List>
        <Divider />
      </Drawer>
    </div>
    <Card props={userInfo} />
  </>
  );
}

