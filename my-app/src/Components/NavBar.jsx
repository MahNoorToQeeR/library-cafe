// src/components/NavBar.js
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import logo_image from "./img/logo-img.png";
import { Container, Grid } from "@mui/material";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerItems = (
    <List>
      <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="menu" onClick={toggleDrawer(false)}>
        <ListItemText primary="Menu" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="reviews"
        onClick={toggleDrawer(false)}
      >
        <ListItemText primary="Reviews" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/about"
        onClick={toggleDrawer(false)}
      >
        <ListItemText primary="About" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/contact"
        onClick={toggleDrawer(false)}
      >
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  );

  return (
    <AppBar position="static" style={{ backgroundColor: "#B5838C", padding: "1rem 0" }}>
    <Container>
      <Grid container alignItems="center">
        <Grid item>
          <img width="199" height="49" src={logo_image} alt="Logo" />
        </Grid>
        <Grid item xs>
          <Toolbar style={{ justifyContent: 'flex-end' }}>
            {isSmallScreen ? (
              <>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => toggleDrawer(true)}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="left"
                  open={drawerOpen}
                  onClose={() => toggleDrawer(false)}
                >
                  {drawerItems}
                </Drawer>
              </>
            ) : (
              <List sx={{ display: "flex", justifyContent: "end" }}>
                <ListItem button component={Link} to="/">
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="menu">
                  <ListItemText primary="Menu" />
                </ListItem>
                <ListItem button component={Link} to="reviews">
                  <ListItemText primary="Reviews" />
                </ListItem>
                <ListItem button component={Link} to="/about">
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem button component={Link} to="/contact">
                  <ListItemText primary="Contact" />
                </ListItem>
              </List>
            )}
          </Toolbar>
        </Grid>
      </Grid>
    </Container>
  </AppBar>
  );
};

export default NavBar;
