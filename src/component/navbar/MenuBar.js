import React, { useState, useEffect } from 'react';
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
import useScrollTrigger from '@mui/material/useScrollTrigger';
import logo from '../../images/logo2.png'
import './MenuBar.css';

const drawerWidth = "100%";
function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function ScrollAwareAppBar({ window }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let handleScroll;

    if (typeof window !== 'undefined') {
      handleScroll = () => {
        const scrollTop = window.pageYOffset;

        if (scrollTop > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const MenuList = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/project" },
    { name: "Resume", link: "/resume" }
  ];

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
          <a onClick={handleDrawerToggle}
            href="#home"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <Button className='btn-active' sx={{
              color: "#97a6b4",
              fontWeight: "500",
              "&:hover": {
                color: "#FFFFFF",
                borderBottom: "1px solid #FFFFFF",
                background: "transparent"
              },
            }}>
              Home
            </Button>
          </a>
          <a onClick={handleDrawerToggle}
            href="#about"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <Button className='btn-active' sx={{
              color: "#97a6b4",
              fontWeight: "500",
              "&:hover": {
                color: "#FFFFFF",
                borderBottom: "1px solid #FFFFFF",
                background: "transparent"
              },
            }}>
              About
            </Button>
          </a>
          <a onClick={handleDrawerToggle}
            href="#skill"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <Button className='btn-active' sx={{
              color: "#97a6b4",
              fontWeight: "500",
              "&:hover": {
                color: "#FFFFFF",
                borderBottom: "1px solid #FFFFFF",
                background: "transparent"
              },
            }}>
              Skill
            </Button>
          </a>
          <a onClick={handleDrawerToggle}
            href="#project"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <Button className='btn-active' sx={{
              color: "#97a6b4",
              fontWeight: "500",
              "&:hover": {
                color: "#FFFFFF",
                borderBottom: "1px solid #FFFFFF",
                background: "transparent"
              },
            }}>
              Project
            </Button>
          </a>
          <a onClick={handleDrawerToggle}
            href="#resume"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <Button className='btn-active' sx={{
              color: "#97a6b4",
              fontWeight: "500",
              "&:hover": {
                color: "#FFFFFF",
                borderBottom: "1px solid #FFFFFF",
                background: "transparent"
              },
            }}>
              Resume
            </Button>
          </a>
          <a onClick={handleDrawerToggle}
            href="#faq"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <Button className='btn-active' sx={{
              color: "#97a6b4",
              fontWeight: "500",
              "&:hover": {
                color: "#FFFFFF",
                borderBottom: "1px solid #FFFFFF",
                background: "transparent"
              },
            }}>
              Faq
            </Button>
          </a>
          <a onClick={handleDrawerToggle}
            href="#contact"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <Button className='btn-active' sx={{
              color: "#97a6b4",
              fontWeight: "500",
              "&:hover": {
                color: "#FFFFFF",
                borderBottom: "1px solid #FFFFFF",
                background: "transparent"
              },
            }}>
              Contact
            </Button>
          </a>
        </Box>
        <Box className="main-drawer-child2-subchild2">
          <a className='social-link' href="https://www.facebook.com/this.abdullah.8/" target="_blank" rel="noopener noreferrer">
            <FacebookOutlinedIcon />
          </a>
          <a className='social-link' href="https://github.com/AbdullahTayyab894" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a className='social-link' href="https://www.linkedin.com/in/abdullahtayyab894/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a className='social-link' href="https://wa.me/+923184579618" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
          </a>
        </Box>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', mb: "75px" }}>
      <CssBaseline />
      <ElevationScroll>
        <AppBar
          className='appbar'
          component="nav"
          sx={{ boxShadow: isScrolled ? 'rgba(0, 0, 0, 0.12) 0px 3px 8px' : '' }}
        >
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
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 0,
                display: { sm: 'none' },
                lineHeight: "3em",
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon className='menu-icon' />
            </IconButton>

            <Box sx={{
              display: { xs: 'none', sm: 'block' },
              justifyContent: "space-between",
            }}>
              <a
                href="#home"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <Button className='btn-active' sx={{
                  color: "#97a6b4",
                  fontWeight: "500",
                  "&:hover": {
                    color: "#FFFFFF",
                    borderBottom: "1px solid #FFFFFF",
                    background: "transparent"
                  },
                }}>
                  Home
                </Button>
              </a>
              <a
                href="#about"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <Button className='btn-active' sx={{
                  color: "#97a6b4",
                  fontWeight: "500",
                  "&:hover": {
                    color: "#FFFFFF",
                    borderBottom: "1px solid #FFFFFF",
                    background: "transparent"
                  },
                }}>
                  About
                </Button>
              </a>
              <a
                href="#skill"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <Button className='btn-active' sx={{
                  color: "#97a6b4",
                  fontWeight: "500",
                  "&:hover": {
                    color: "#FFFFFF",
                    borderBottom: "1px solid #FFFFFF",
                    background: "transparent"
                  },
                }}>
                  Skill
                </Button>
              </a>
              <a
                href="#project"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <Button className='btn-active' sx={{
                  color: "#97a6b4",
                  fontWeight: "500",
                  "&:hover": {
                    color: "#FFFFFF",
                    borderBottom: "1px solid #FFFFFF",
                    background: "transparent"
                  },
                }}>
                  Project
                </Button>
              </a>
              <a
                href="#resume"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <Button className='btn-active' sx={{
                  color: "#97a6b4",
                  fontWeight: "500",
                  "&:hover": {
                    color: "#FFFFFF",
                    borderBottom: "1px solid #FFFFFF",
                    background: "transparent"
                  },
                }}>
                  Resume
                </Button>
              </a>
              <a
                href="#faq"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <Button className='btn-active' sx={{
                  color: "#97a6b4",
                  fontWeight: "500",
                  "&:hover": {
                    color: "#FFFFFF",
                    borderBottom: "1px solid #FFFFFF",
                    background: "transparent"
                  },
                }}>
                  Faq
                </Button>
              </a>
              <a
                href="#contact"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <Button className='btn-active' sx={{
                  color: "#97a6b4",
                  fontWeight: "500",
                  "&:hover": {
                    color: "#FFFFFF",
                    borderBottom: "1px solid #FFFFFF",
                    background: "transparent"
                  },
                }}>
                  Contact
                </Button>
              </a>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
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

ScrollAwareAppBar.propTypes = {
  window: PropTypes.func,
};

export default ScrollAwareAppBar;
