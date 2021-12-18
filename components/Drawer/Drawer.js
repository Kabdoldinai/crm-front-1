import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import TopHeader from '../../components/TopHeader/TopHeader';
import RegisterCompany from '../../components/RegisterCompany/RegisterCompany';
import CEOpage from '../../components/CEOpage/CEOpage';
import Requisites from '../../components/Requisites/Requisites';
import Offices from '../../components/Offices/Offices';
import { LeftSideBar, ActiveIcon } from './Drawer.style';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <NavigationBar />
      </AppBar>
      <LeftSideBar>
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
                {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
            </IconButton>
            </DrawerHeader>
            <ActiveIcon>
                <List>
                    <ListItem>
                        <img src="/assets/icons/company.svg" alt="" width="30" height="30" />
                    </ListItem>
                </List>
            </ActiveIcon>
            <List>
                <ListItem>
                    <img src="/assets/icons/profile.svg" alt="" width="30" height="30" />
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <img src="/assets/icons/node.svg" alt="" width="30" height="30" />
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <img src="/assets/icons/time.svg" alt="" width="30" height="30" />
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <img src="/assets/icons/rent.svg" alt="" width="30" height="30" />
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <img src="/assets/icons/finance.svg" alt="" width="30" height="30" />
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <img src="/assets/icons/debtors.svg" alt="" width="30" height="30" />
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <img src="/assets/icons/controlobjects.svg" alt="" width="30" height="30" />
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <img src="/assets/icons/task.svg" alt="" width="30" height="30" />
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <img src="/assets/icons/contact.svg" alt="" width="30" height="30" />
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <img src="/assets/icons/notification.svg" alt="" width="30" height="30" />
                </ListItem>
            </List>
        </Drawer>
      </LeftSideBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <TopHeader />
        <RegisterCompany />
        <TopHeader />
        <CEOpage />
        <TopHeader />
        <Requisites />
        <TopHeader />
        <Offices />
      </Box>
    </Box>
  );
}