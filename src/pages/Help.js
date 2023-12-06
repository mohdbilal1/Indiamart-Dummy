import React from 'react'
import Navbar from '../Components/Navbar'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import HelpPageFooter from '../Components/HelpPageFooter'
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import '../stylecss/helpStyle.css'

const Help = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex', m: 5, p: '20px 0 40px 60px' }}>
        <div className='help-div' style={{ display: 'flex', textAlign: 'center', marginLeft: '20px' }}>
          <div>
            <EmojiObjectsOutlinedIcon sx={{ fontSize: '42px', m: '10px 20px 0 0', color: 'rgb(84, 114, 235)' }} />
          </div>
          <div>
            <h4 className=' text-primary'>I'm a Buyer</h4>
            <p>85 Articles / 4 Categories</p>
          </div>
        </div>

        <div className='help-div' style={{ display: 'flex', textAlign: 'center', marginLeft: '40px' }}>
          <div>
            <EmojiObjectsOutlinedIcon sx={{ fontSize: '42px', m: '10px 20px 0 0', color: 'rgb(84, 114, 235)' }} />
          </div>
          <div>
            <h4 className=' text-primary'>I'm a Seller</h4>
            <p>308 Articles / 8 Categories</p>
          </div>
        </div>

        <div className='help-div' style={{ display: 'flex', textAlign: 'center', marginLeft: '40px' }}>
          <div>
            <EmojiObjectsOutlinedIcon sx={{ fontSize: '42px', m: '10px 20px 0 0', color: 'rgb(84, 114, 235)' }} />
          </div>
          <div>
            <h4 className=' text-primary'>Product Updates</h4>
            <p>13 Articles / 8 Categories</p>
          </div>
        </div>

      </Box>

      <Box sx={{ display: 'flex',ml:5,mr:5,mb:5 }}>

        <Box>

          <TableContainer>
            <Table sx={{ minWidth: 350 }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{fontWeight:'bold',fontSize:'18px',textAlign:'center'}}>Buyer Knowledge Base</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th">Where do I log Complaints and Trade Disputes?</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">What is Customer Care Number of Abaris SoftTech?</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">How to view/delete the Buy Requirements posted by me?</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">How to Stop calls from Abaris SoftTech? </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Does Abaris SoftTech take responsibility for any fraudulent nature of suppliers?</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">How does a buyer provide feedback/rating to a seller listed on Abaris SoftTech?</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">What security measures does Abaris SoftTech take?</TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box sx={{pl:2}}>

          <TableContainer>
            <Table sx={{ minWidth: 350 }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{fontWeight:'bold',fontSize:'18px',textAlign:'center'}}>Seller Knowledge Base</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                <TableRow>
                  <TableCell component="th">How do I register for paid services on Abaris SoftTech?</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">How to Create Free Seller account on Abaris SoftTech?</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">TrustSEAL Service</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Integration of Abaris SoftTech’s Lead Manager CRM API with Third Party CRMs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Mini Dynamic Catalog (MDC) Service</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Maximiser Service</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">How to Sell Items on Abaris SoftTech?</TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box sx={{pl:3}}>
          <TableContainer>
            <Table sx={{ minWidth: 350 }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{fontWeight:'bold',fontSize:'18px',textAlign:'center'}}>Announcements</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>

                  <TableCell component="th">Abaris SoftTech Bug Bounty Program</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">Careers in Abaris SoftTech</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">How to verify mobile number?</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">I am receiving OTP on my registered mobile number, but have access to email ID. How can I login to my account?</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">How do I swap my primary mobile number with secondary mobile number?</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">How to Update Primary Mobile Number?</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th">How do I update my alternate/secondary mobile number on seller panel?
                  </TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        </Box>

      </Box >

      <HelpPageFooter />
    </>
  )
}

export default Help
