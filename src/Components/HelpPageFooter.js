import { Box, List, ListItemText } from "@mui/material";

const HelpPageFooter = () => {
  return (
    <>
      <Box sx={{ display: 'flex',mt:5, pt: 5,pb:5,bgcolor:'lightgrey'}}>
        <Box sx={{p:'0 100px 0 50px'}}> 
          <List>
            <ListItemText>About Us</ListItemText>
            <ListItemText>Join Sales</ListItemText>
            <ListItemText>Help</ListItemText>
            <ListItemText>Feedback</ListItemText>
            <ListItemText>Complaints</ListItemText>
            <ListItemText>Contact Us</ListItemText>
            <ListItemText>Customer Care</ListItemText>
            <ListItemText>Security Tips for Buyers</ListItemText>
          </List>
        </Box>
        <Box sx={{p:'0 100px 0 120px'}}>
          <List>
            <ListItemText>Sell on Abaris</ListItemText>
            <ListItemText>Learning Center</ListItemText>
            <ListItemText>Enterprise Solutions</ListItemText>
            <ListItemText>Success Stories</ListItemText>
            <ListItemText>Press Section</ListItemText>
            <ListItemText>Advertise with Us</ListItemText>
            <ListItemText>Security Tips for Sellers</ListItemText>
          </List>
        </Box>
        <Box sx={{p:'0 100px 0 120px'}}>
          <div style={{backgroundColor:'burlywood', borderRadius:'10px',padding:'10px',marginBottom:'10px'}}>
            <p style={{margin:'2px'}}>WhatsApp:</p>
            <p>+91-9696969696</p>
          </div>
          <div style={{backgroundColor:'burlywood', borderRadius:'10px',padding:'10px',marginBottom:'10px'}}>
            <p style={{margin:'2px'}}>Email us:</p>
            <p>customercare@Abaris.com</p>
          </div>
          <div style={{backgroundColor:'burlywood', borderRadius:'10px',padding:'10px',marginBottom:'10px'}}>
            <p style={{margin:'2px'}}>Call us:</p>
            <p>096-9696-9696</p>
          </div>
        </Box>
      </Box>
      <Box sx={{bgcolor:'lightgrey'}}>
        <p style={{textAlign:'center',padding:'20px'}}>Copyright © 1996-2023 Abaris InterMESH Ltd. All rights reserved.</p>
      </Box>

    </>
  )
}

export default HelpPageFooter;
