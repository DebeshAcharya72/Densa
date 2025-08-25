import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom"; // ✅ React Router Link
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElSolutions, setAnchorElSolutions] = useState(null);
  const [anchorElProducts, setAnchorElProducts] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Dropdown handlers
  const handleOpenSolutions = (event) =>
    setAnchorElSolutions(event.currentTarget);
  const handleCloseSolutions = () => setAnchorElSolutions(null);

  const handleOpenProducts = (event) =>
    setAnchorElProducts(event.currentTarget);
  const handleCloseProducts = () => setAnchorElProducts(null);

  // Mobile drawer content
  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <IconButton onClick={handleDrawerToggle} sx={{ mb: 2 }}>
        <CloseIcon />
      </IconButton>
      <List>
        <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/solutions"
          onClick={handleDrawerToggle}
        >
          <ListItemText primary="Solutions" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/products"
          onClick={handleDrawerToggle}
        >
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/support"
          onClick={handleDrawerToggle}
        >
          <ListItemText primary="Support" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/contact"
          onClick={handleDrawerToggle}
        >
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: "rgba(12, 124, 236, 0.37)", // translucent
          backdropFilter: "blur(10px)", // frosted glass effect
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar>
          {/* Logo */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              cursor: "pointer",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            MyBrand
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button component={Link} to="/" sx={{ color: "#fff", mx: 1 }}>
              Home
            </Button>

            {/* Solutions Dropdown */}
            <Button sx={{ color: "#fff", mx: 1 }} onClick={handleOpenSolutions}>
              Solutions
            </Button>
            <Menu
              anchorEl={anchorElSolutions}
              open={Boolean(anchorElSolutions)}
              onClose={handleCloseSolutions}
            >
              <MenuItem
                component={Link}
                to="/lighting-automation"
                onClick={handleCloseSolutions}
              >
                Lighting Automation
              </MenuItem>
              <MenuItem
                component={Link}
                to="/tablets-and-displays"
                onClick={handleCloseSolutions}
              >
                Tablets And Displays
              </MenuItem>
              <MenuItem
                component={Link}
                to="/case-studies"
                onClick={handleCloseSolutions}
              >
                Case Studies
              </MenuItem>
              <MenuItem
                component={Link}
                to="/dash-subscriptions"
                onClick={handleCloseSolutions}
              >
                Dash Subscriptions
              </MenuItem>
              <MenuItem
                component={Link}
                to="/denton-drawing-database"
                onClick={handleCloseSolutions}
              >
                Denton Drawing Database
              </MenuItem>
            </Menu>

            {/* Products Dropdown */}
            <Button sx={{ color: "#fff", mx: 1 }} onClick={handleOpenProducts}>
              Products
            </Button>
            <Menu
              anchorEl={anchorElProducts}
              open={Boolean(anchorElProducts)}
              onClose={handleCloseProducts}
            >
              <MenuItem
                component={Link}
                to="/commercial-solutions"
                onClick={handleCloseProducts}
              >
                Commercial Solutions
              </MenuItem>
            </Menu>

            <Button
              component={Link}
              to="/support"
              sx={{ color: "#fff", mx: 1 }}
            >
              Support
            </Button>
            <Button
              component={Link}
              to="/contact-us"
              sx={{ color: "#fff", mx: 1 }}
            >
              Contact
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { md: "none" } }}
      >
        <List>
          <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
            <ListItemText primary="Home" />
          </ListItem>

          {/* Solutions with sub-items */}
          <ListItem>
            <ListItemText primary="Solutions" />
          </ListItem>
          <Box sx={{ pl: 4 }}>
            <ListItem
              button
              component={Link}
              to="/lighting-automation"
              onClick={handleDrawerToggle}
            >
              <ListItemText primary="Lighting Automation" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/tablets-and-displays"
              onClick={handleDrawerToggle}
            >
              <ListItemText primary="Tablets And Displays" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/case-studies"
              onClick={handleDrawerToggle}
            >
              <ListItemText primary="Case Studies" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/dash-subscriptions"
              onClick={handleDrawerToggle}
            >
              <ListItemText primary="Dash Subscriptions" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/denton-drawing-database"
              onClick={handleDrawerToggle}
            >
              <ListItemText primary="Denton Drawing Database" />
            </ListItem>
          </Box>

          {/* Products with sub-items */}
          <ListItem>
            <ListItemText primary="Products" />
          </ListItem>
          <Box sx={{ pl: 4 }}>
            <ListItem
              button
              component={Link}
              to="/commercial-solutions"
              onClick={handleDrawerToggle}
            >
              <ListItemText primary="Commercial Solutions" />
            </ListItem>
          </Box>

          <ListItem
            button
            component={Link}
            to="/support"
            onClick={handleDrawerToggle}
          >
            <ListItemText primary="Support" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/contact"
            onClick={handleDrawerToggle}
          >
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
