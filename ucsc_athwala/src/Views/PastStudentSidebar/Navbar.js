import React from 'react';
import clsx from 'clsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import Logo from '../../image/project_logo.jpg';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import PersonPinOutlinedIcon from '@material-ui/icons/PersonPinOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import Side from './Sidedrawer';
import Dashboard from '../PastStudentDashboard/PastStudentDashboard';
import NewjobAdd from '../job/Create_job_post';
import JobOpertunity from '../job/jobPage';
import ViewJob from '../job/Viewjobs';
import MyJobOpertunity from '../job/MyjobOpp';
import EditPost from '../job/Update_job_post';
import DeletePost from '../job/Delete_job_post'
import { useHistory } from "react-router-dom";
import Land from '../LandingPage/home'  //Change the logout direction here
import Donation from '../Donation/Donation_page';
import NoteCause from '../Donation/View_Notecause';
import ClothCause from '../Donation/View_Clothcause';
import DeviceCause from '../Donation/View_Devicecause';
import MoneyCause from '../Donation/View_Moneycause';
import OtherCause from '../Donation/View_Othercause';
import MyDonation from '../Donation/My_donation';
import Helpstack from '../HelpStack/HelpStack';
import ViewProductEle from '../Product/Product_Page_View';
import ViewMyProductBuy from '../Product/View_My_Product_Buy';
import ViewProductDetails from '../Product/View_Product_Details';
import ViewProductDetailsNote from '../Product/View_Product_Details_note';
import ViewProductDetailsOther from '../Product/View_Product_Details_other';
import ViewQA from '../QA/View_QAform';
import Chat from '../chat/chat.jsx';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }, flex1: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);


  const [auth, setAuth] = React.useState(true);
  const [auth1, setAuth1] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const open2 = Boolean(anchorE2);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleChange1 = (event) => {
    setAuth1(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenu1 = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose1 = () => {
    setAnchorE2(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const history= useHistory();
  const logout=()=>{
    history.push("/land");
    localStorage.clear();
  }
  return (
    <div className={classes.root}> {/* devide to flex, start from here*/}
      <CssBaseline />
      {/*************************Start of the navigation bar from here**************************************/}
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >

        <Toolbar>

 {/*******************************Start of the Line Menu icon**********************/}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
 {/*******************************End of the Line Menu icon**********************/}


          {/*******************************Start of the UCSC Athwala icon**********************/}
          <Typography variant="h6">
            <Box mr={1}>
              <Avatar alt="Remy Sharp" src={Logo} className={classes.medium} fontSize="large" />
            </Box>
          </Typography>
          {/*******************************End of the UCSC Athwala icon**********************/}


          <Typography variant="h4" noWrap className={classes.flex1} ml={3}>
            UCSC අත්වැල
          </Typography>


          {/*******************************Start of the notification icon**********************/}
          {/************auth1, setAuth1, anchorE2, setAnchorE2,handleMenu1,handleClose1 and handleChange1 are for the Notification icon*****************/}
          {/* {auth1 && (<div>

            <Box mr={2}>

              <IconButton aria-label="show 5 new notifications" color="inherit" onClick={handleMenu1}>
                <Badge badgeContent={5} color="secondary">
                  <NotificationsIcon
                    fontSize="large"
                  >
                  </NotificationsIcon>
                </Badge>
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorE2}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open2}
                onClose={handleClose1}
              >
                <MenuItem onClick={handleClose1}>   Notification 1</MenuItem>
                <MenuItem onClick={handleClose1}>   Notification 2</MenuItem>
                <MenuItem onClick={handleClose1}>   Notification 3</MenuItem>
                <MenuItem onClick={handleClose1}><NotificationsActiveOutlinedIcon />View all</MenuItem>
              </Menu>

            </Box>

          </div>
          )} */}
          {/*******************************End of the notification icon**********************/}


 {/*******************************Start of the Avatar icon**********************/}
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle
                  fontSize="large">
                </AccountCircle>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open1}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><PersonPinOutlinedIcon /> My Profile</MenuItem>
                <MenuItem onClick={logout} ><ExitToAppOutlinedIcon /> Log out</MenuItem>
              </Menu>
            </div>
          )}


 {/*******************************End of the Avatar icon**********************/}
        </Toolbar>

      </AppBar>
      {/********************************End of the Navigation bar**************************************/}


      
      < Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })
        }
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
       <Side />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          lit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}

        <Switch>
          <Route path="/pst/PastDashboard" exact>
            <Dashboard/>
          </Route>
          <Route path="/pst/Job" exact>
            <NewjobAdd />
          </Route>
          <Route path="/pst/JobOpertunity" exact>
            <JobOpertunity />
          </Route>
          <Route path="/pst/jobview" exact>
            <ViewJob />
          </Route>
          <Route path="/pst/myJobOpertunity" exact>
            <MyJobOpertunity />
          </Route>
          <Route path="/pst/jobedit" exact>
            <EditPost />
          </Route>
          <Route path="/pst/jobdelete" exact>
            <DeletePost />
          </Route>
          <Route path="/land" exact>
            <Land/>
          </Route>

          <Route path="/pst/viewcauses" exact>
              <Donation />
            </Route>
            <Route path='/pst/viewNoteCause_details' exact>
              <NoteCause />
          </Route >
          <Route path="/pst/viewClothCause_details" exact>
            <ClothCause />
          </Route>
          <Route path="/pst/viewDeviceCause_details" exact>
            <DeviceCause />
          </Route>
          <Route path="/pst/viewMoneyCause_details" exact>
            <MoneyCause />
          </Route>
          <Route path="/pst/viewOtherCause_details" exact>
            <OtherCause />
          </Route> 
          <Route path="/pst/myDonation" exact>
            <MyDonation />
          </Route>
          <Route path="/pst/helpstack">
            <Helpstack />
          </Route>
          <Route path="/pst/ViewProductEle">
            <ViewProductEle/>
          </Route>
          <Route path="/pst/ViewMyProductBuy">
            <ViewMyProductBuy/>
          </Route>
          <Route path="/pst/ViewProductDetails">
            <ViewProductDetails/>
          </Route>
          <Route path="/pst/ViewProductDetailsNote">
            <ViewProductDetailsNote/>
          </Route>
          <Route path="/pst/ViewProductDetailsOther">
            <ViewProductDetailsOther/>
          </Route>
          <Route path="/pst/ViewQA">
            <ViewQA />
          </Route>
          <Route path="/pst/Chat" exact>
              <Chat/>
            </Route>
        </Switch>
        
      </main>
    </div >
  );
}
export default Navbar;