import { Box, List } from "@mui/material"


const ShoppingPageFooter = () => {
  return (
    <>
      <Box sx={{ display: 'flex',bgcolor:'black',color:'white',p:2 }}>
        <p style={{marginLeft:'20px',paddingTop:'10px',fontSize:'14px'}}>Copyright © 1996-2023 Abaris. All rights reserved.</p>
        <Box sx={{ position: 'absolute', right: 50}}>
          <List sx={{display: 'flex',fontSize:'14px'}}>
            <li style={{padding:'0 10px'}}>Home</li>
            <li>Sell on Abaris</li>
            <li style={{padding:'0 10px'}}>FAQ </li>
            <li>Terms of Use </li>
            <li style={{padding:'0 10px'}}>Privacy Policy </li>
          </List>
        </Box>
      </Box>
      
    </>
  )
}

export default ShoppingPageFooter
