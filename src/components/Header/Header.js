import { Container, Divider,IconButton, Toolbar,Typography, Badge,
} from "@material-ui/core";
import { Notifications, AccountCircle } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import classes from './Header.module.css'
import SideDrawer from "../SideBarDrawer/SideDrawer";
function Header() {
 
  return (
    <>
      <Container>
        <Toolbar>
        <SideDrawer>

          <IconButton color='inherit'>
            <MenuIcon></MenuIcon>
          </IconButton>
        </SideDrawer>
          <Typography className={classes.Title}>Bloging Website</Typography>
          <IconButton color='inherit'> 
            <Badge badgeContent={4} color="secondary">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton color='inherit'>
            <AccountCircle />
          </IconButton>
        </Toolbar>
        <Divider />

        <Toolbar variant="h6" className={classes.tagline}>
    express your motions through world
        </Toolbar>
      </Container>
    </>
  );
}

export default Header;
