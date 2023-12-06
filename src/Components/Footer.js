import { Box, Divider, List, ListItemText } from "@mui/material"
import { FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { ImFacebook2 } from 'react-icons/im';

const Footer = () => {
  return (
    <>
      <Box sx={{ display: 'flex',pt:2 }}>
        <h4 style={{marginLeft:'80px'}}>We are here to help you!</h4>
        <Box sx={{ position: 'absolute', right: 80, display: 'flex' }}>
          <p style={{ fontWeight: 'bold', paddingTop: '6px' }}>Follow Us On :</p>
          <FaTwitterSquare style={{ marginLeft: '8px', fontSize: '33px', marginTop: '3px' }} />
          <AiFillInstagram style={{ marginLeft: '8px', fontSize: '38px' }} />
          <ImFacebook2 style={{ marginLeft: '8px', fontSize: '30px', marginTop: '3px' }} />
          <FaLinkedin style={{ marginLeft: '8px', fontSize: '35px' }} />
        </Box>
      </Box>
      <Divider sx={{boxShadow:'1px 2px 2px blue',pt:2}}/>


      <Box sx={{display:'flex',ml:5,mr:5,pt:2}}>
        <Box>
          <List sx={{ml:5,mr:5}}>
            <ListItemText>About Us</ListItemText>
            <ListItemText>Join Sales</ListItemText>
            <ListItemText>Success Stories</ListItemText>
            <ListItemText>Press Section</ListItemText>
            <ListItemText>Advertise with Us</ListItemText>
            <ListItemText>Investor Section</ListItemText>
          </List>
        </Box>
        <Box>
          <List sx={{ml:5,mr:5}}>
            <ListItemText>Help</ListItemText>
            <ListItemText>Feedback</ListItemText>
            <ListItemText>Complaints</ListItemText>
            <ListItemText>Customer Care</ListItemText>
            <ListItemText>Jobs & Careers</ListItemText>
            <ListItemText>Contact Us</ListItemText>
          </List>
        </Box>
        <Box>
          <List sx={{ml:5,mr:5}}>
            <ListItemText><b  style={{fontSize:'18px'}}>Suppliers Tool Kit</b></ListItemText>
            <ListItemText>Sell on Abaris </ListItemText>
            <ListItemText>Latest BuyLead</ListItemText>
            <ListItemText>Learning Centre</ListItemText>
            <ListItemText>Ship With Abaris  </ListItemText>
          </List>
        </Box>
        <Box>
          <List sx={{ml:5,mr:5}}>
            <ListItemText><b  style={{fontSize:'18px'}}>Buyers Tool Kit</b></ListItemText>
            <ListItemText>Post Your Requirement</ListItemText>
            <ListItemText>Products You Buy</ListItemText>
            <ListItemText> Search Products & Suppliers</ListItemText>
            <ListItemText>Pay With Abaris </ListItemText>
          </List>
        </Box>
        <Box>
          <List sx={{ml:5,mr:5}}>
            <ListItemText><b style={{fontSize:'18px'}}>Accounting Solutions</b></ListItemText>
            <ListItemText>Accounting Software</ListItemText>
            <ListItemText>Tally on Mobile </ListItemText>
            <ListItemText>GST e-Invoice </ListItemText>

          </List>
        </Box>
      </Box>
      <Divider sx={{boxShadow:'1px 2px 2px blue',mb:2}}/>
      <Box sx={{display:'flex'}}>
        <p style={{fontSize:'14px',paddingLeft:'80px'}}>Copyright © 1996-2023 Abaris  InterMESH Ltd. All rights reserved.</p>
        <p style={{fontSize:'14px',position:'absolute',right:140}}>Terms of Use - Privacy Policy - Link to Us</p>
      </Box>

    </>
  )
}

export default Footer

