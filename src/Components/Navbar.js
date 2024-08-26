import React, { useState } from 'react';
import Logo from "../assets/Logo.svg";
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "About", icon: <InfoIcon /> },
    { text: "Testimonials", icon: <CommentRoundedIcon /> },
    { text: "Contact", icon: <PhoneRoundedIcon /> },
    { text: "Cart", icon: <ShoppingCartRoundedIcon /> },
  ];

  return (
    <nav>
      <div className='nav-logo-container'>
        <img src={Logo} alt="Company Logo"/>
      </div>
      <div className='navbar-links-container'>
        <a href="/home"> Home </a>
        <a href="/about"> About </a>
        <a href="/testimonials"> Testimonials </a>
        <a href="/contact"> Contact </a>
        <a href="/cart"> <BsCart2 className='navbar-cart-icon' /> </a> {/*Creates three lines where u click and  it appers iun phone mode*/}
        <button className='primary-button'> 
          Bookings
        </button>
      </div>
      <div className='navbar-menu-container'>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={()=>setOpenMenu(false)} anchor='right'>   {/*puts like a window to the sides that apper when u click the three lines   ,   anchor='right'  moves it to the right */}  
        <Box
        sx={{width:250}}  //makes the widht of the window 250
        role="presentation"
        onClick={() => setOpenMenu(false)}     // this is so when i add the   <ListItemText primary={item.text} /> when i click it it goes away from the menu 
        onKeyDown={()=>setOpenMenu(false)}
        > 
        <List> 
          {menuOptions.map((item)=>(
            <ListItem >             {/*this makes them go in order so it looks better there is more space  */}  
              <ListItemButton> 
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
               </ListItem>
          )
        )}
        </List>
        </Box>
        </Drawer>
    </nav>
  );
}

export default Navbar;
