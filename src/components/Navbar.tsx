import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar: FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#2c3e50' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <span style={{ fontSize: '24px' }}>☰</span>
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ color: 'inherit', textDecoration: 'none', flexGrow: 1 }}
          >
            MiAplicación
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/project">
            Proyecto
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contacto
          </Button>
          <Button color="inherit" component={Link} to="/services">
            Servicios
          </Button>
        </Box>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem button component={Link} to="/">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={Link} to="/project">
                <ListItemText primary="Proyecto" />
              </ListItem>
              <ListItem button component={Link} to="/contact">
                <ListItemText primary="Contacto" />
              </ListItem>
              <ListItem button component={Link} to="/services">
                <ListItemText primary="Servicios" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
