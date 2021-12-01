import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import { Link } from '@mui/material';



function NavBar(){
   

    const [anchorElNav, setAnchorElNav] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {

    setAnchorElNav(null);
  };

 
    return(
<AppBar position="sticky" sx={{backgroundColor:'#558b2f'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
              <Link href='/' style={{color:'white', textDecoration:'none'}}>
            Hidden Creek Lamb
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem   onClick={handleCloseNavMenu}>
                    <Link href='/pricelist'>
                  <Typography textAlign="center">Price List</Typography>
                  </Link>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                <Link href='/farmstore'>
                  <Typography textAlign="center">Farm Store</Typography>
                  </Link>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                <Link href='/contact'>
                  <Typography textAlign="center">Contact Us</Typography>
                  </Link>
                </MenuItem>
              
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
              <Link href='/' style={{color:'white', textDecoration:'none'}}>
            Hidden Creek Lamb
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'right' }}>
          <Link href='/pricelist'>
              <Button  
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Price List
              </Button>
              </Link>
              <Link href='/farmstore'>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Farm Store
              </Button>
              </Link>
              <Link href='/contact'>
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Contact Us
              </Button>
              </Link>
            
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
    )
}

export default NavBar;