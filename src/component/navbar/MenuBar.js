
import logo from '../../images/logo2.png'


import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import './MenuBar.css'

const drawerWidth = "100%";

function DrawerAppBar(props) {

  const MenuList = [{ name: "Home", link: "/" }, { name: "About", link: "/about" }, { name: "Projects", link: "/project" }, { name: "Resume", link: "/resume" }]

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box className="main-drawer">
      <Box className="main-drawer-child1">
        <CloseIcon className='close-icon' onClick={handleDrawerToggle} />
      </Box>
      <Divider sx={{
        borderColor: "white",
      }} />
      <Box className='menu main-drawer-child2' sx={{
        width: "100%",
        marginTop: "60px",
      }}>
        <Box className="main-drawer-child2-subchild1">
          {
            MenuList.map((item) => {
              return (
                <Link to={item.link} style={{
                  textDecoration: "none",
                  color: "white",
                }} onClick={handleDrawerToggle}>
                  <Button className='btn-active' sx={{
                    color: "#FFFFFF",
                    "&:hover": {
                      color: "#03405B",
                      background: "#FFFFFF"
                    },
                  }}>
                    {item.name}
                  </Button>
                </Link>
              )
            })

          }
        </Box>
        <Box className="main-drawer-child2-subchild2">
          <a className='social-link' href="https://www.facebook.com/this.abdullah.8/" target="_black"><FacebookOutlinedIcon /></a>
          <a className='social-link' href="https://github.com/AbdullahTayyab894" target="_black"><GitHubIcon /></a>
          <a className='social-link' href="https://www.linkedin.com/in/abdullahtayyab894/" target="_black"><LinkedInIcon /></a>
          <a className='social-link' href="https://wa.me/+923184579618" target="_black"><WhatsAppIcon /></a>
        </Box>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', mb: "75px", }}
    // data-aos="fade-down"
    // data-aos-easing="linear"
    // data-aos-duration="1500"
    >
      <CssBaseline />
      <AppBar className='appbar' component="nav">
        <Toolbar>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexGrow: 1,
          }}>
            <Link to="/" style={{
              textDecoration: "none",
              color: "white",
            }}>
              <img src={logo} alt="Logo" style={{ marginRight: '10px', width: "150px" }} />
            </Link>
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{
              mr: 0, display: { sm: 'none' },
              lineHeight: "3em",
            }}
          >
            <MenuIcon className='menu-icon'
              onClick={handleDrawerToggle} />
          </IconButton>

          <Box sx={{
            display: { xs: 'none', sm: 'block' },
            justifyContent: "space-between",
          }}>

            {
              MenuList.map((item) => {
                return (
                  <Link to={item.link} style={{
                    textDecoration: "none",
                    color: "white",
                  }} >
                    <Button className='btn-active' sx={{
                      color: "#FFFFFF",
                      "&:hover": {
                        color: "#03405B",
                        background: "#FFFFFF"
                      },
                    }}>
                      {item.name}
                    </Button>
                  </Link>
                )
              })

            }
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;