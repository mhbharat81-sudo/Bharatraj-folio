import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;
const navItems = [['About', 'about'], ['Skills', 'expertise'], ['Experience', 'history'], ['Projects', 'projects'], ['Achievements', 'achievements'], ['Contact', 'contact']];

function Navigation({parentToChild, modeChange}: any) {

  const {mode} = parentToChild;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };



  const scrollToSection = (section: string) => {
    console.log(section)
    const expertiseElement = document.getElementById(section);
    if (expertiseElement) {
      expertiseElement.scrollIntoView({ behavior: 'smooth' });
      console.log('Scrolling to:', expertiseElement);  // Debugging: Ensure the element is found
    } else {
      console.error('Element with id "expertise" not found');  // Debugging: Log error if element is not found
    }
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <p className="mobile-menu-top"><ListIcon/>Menu</p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => scrollToSection(item[1])}>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" id="navigation" sx={{ background: 'transparent', boxShadow: 'none', mt: 3, position: 'fixed', zIndex: 1100 }}>
        <Toolbar className='navigation-bar' sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          backgroundColor: mode === 'dark' ? '#1e1e1e' : '#fff',
          borderRadius: '50px',
          margin: '0 auto',
          width: { xs: '95%', md: '1000px' },
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          padding: '5px 20px',
          border: mode === 'dark' ? '1px solid #333' : '1px solid #eee'
        }}>
          {/* Avatar and Name */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' }, color: mode === 'dark' ? '#fff' : '#333' }}
            >
              <MenuIcon />
            </IconButton>
            <img src="/profile.png" alt="Avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
            <Box sx={{ fontWeight: 'bold', color: mode === 'dark' ? '#fff' : '#333', fontSize: '1.1rem', display: { xs: 'none', sm: 'block' } }}>Bharatraj</Box>
          </Box>

          {/* Links */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '15px' }}>
            {navItems.map((item) => (
              <Button key={item[0]} onClick={() => scrollToSection(item[1])} sx={{ color: mode === 'dark' ? '#aaa' : '#555', textTransform: 'none', fontWeight: 'bold', fontSize: '0.95rem', '&:hover': { color: mode === 'dark' ? '#fff' : '#000' } }}>
                {item[0]}
              </Button>
            ))}
          </Box>

          {/* Dark Mode Toggle */}
          <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: mode === 'dark' ? '#333' : '#e9ecef', borderRadius: '30px', padding: '4px', cursor: 'pointer' }} onClick={() => modeChange()}>
             <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30px', height: '30px', borderRadius: '50%', backgroundColor: mode === 'light' ? '#fff' : 'transparent', boxShadow: mode === 'light' ? '0 2px 5px rgba(0,0,0,0.2)' : 'none' }}>
                <LightModeIcon sx={{ color: '#f39c12', fontSize: '1.2rem' }}/>
             </Box>
             <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30px', height: '30px', borderRadius: '50%', backgroundColor: mode === 'dark' ? '#2962ff' : 'transparent', boxShadow: mode === 'dark' ? '0 2px 5px rgba(0,0,0,0.2)' : 'none' }}>
                <DarkModeIcon sx={{ color: mode === 'dark' ? '#fff' : '#888', fontSize: '1.2rem' }}/>
             </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;