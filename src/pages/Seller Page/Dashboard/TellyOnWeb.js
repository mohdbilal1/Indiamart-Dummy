import { AppBar, Box, Button, List, Typography, Divider, ListItemText } from '@mui/material'
import { NavLink } from "react-router-dom";
import imgeLogo from '../../../assets/mainlogo.png'
import '../../../stylecss/tellywebstyle.css'
import GetAppIcon from '@mui/icons-material/GetApp';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CheckIcon from '@mui/icons-material/Check';
import GppGoodIcon from '@mui/icons-material/GppGood';
import Features from '../../../Components/liveKeeping/Features';
import Price from '../../../Components/liveKeeping/Price';
import { FaTwitterSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { ImFacebook2 } from 'react-icons/im';




const TellyOnWeb = () => {
    return (
        <>
            <AppBar sx={{
                textAlign: 'center', p: 1, bgcolor: 'white',
                position: 'sticky', top: 0, boxShadow: 'none'
            }}
            >

                <Box sx={{ display: 'flex' }}>
                    <div className='logo-img-div pt-2 pb-2'>
                        <a href="/">
                            <img className='logo-img img-fluid' style={{ width: '100%', height: '35px', borderRadius: '8px', objectFit: 'contain' }} src={imgeLogo} alt="logo-img" />
                        </a>
                    </div>
                    <Box className="header-right-box" sx={{ position: 'absolute', right: 30 }}>
                        <List sx={{ display: 'flex', textAlign: 'center' }}>

                            <li className='nav-list-telly'>

                                <NavLink to='/'>Features</NavLink>
                            </li>
                            <li className='nav-list-telly'>
                                <NavLink to='/'>Pricing</NavLink>
                            </li>
                            <li className='nav-list-telly'>
                                <NavLink to='/'>Testimonial</NavLink>
                            </li>
                            <li className='nav-list-telly'>
                                <NavLink to='/'>FAQs</NavLink>
                            </li>
                            <li className='nav-list-telly'>
                                <NavLink to='/'> <Button variant='outlined'
                                    sx={{ bgcolor: '#4caf50', color: 'white', p: '6px 20px', ":hover": { color: 'white', bgcolor: 'green' } }}>LogIn</Button>
                                </NavLink>
                            </li>


                        </List>
                    </Box>

                </Box>


            </AppBar>

            <Box sx={{ mt: 3 }}>
                <h4 className=' fw-bolder' style={{ fontSize: '32px', textAlign: 'center' }}> <img style={{ width: '120px' }} src="https://www.livekeeping.com/assets/web_images/Tally_logo.png" alt="rgrgg" /> on Mobile and Web for FREE</h4>
                <Typography sx={{ textAlign: 'center', fontSize: '16px', color: 'green', ml: 3 }}>3 Easy Steps to view your Tally data</Typography>
            </Box>

            <Box sx={{ display: 'flex', m: '50px 0', justifyContent: 'center' }}>
                <div className='boxx1'>
                    <h4>1</h4>
                    <p style={{ m: '0 0 20px 0', fontWeight: 'bold' }}>Install Tally Connector</p>
                    <img src="https://www.livekeeping.com/assets/web_images/home/install-tally-connector-step-1.png" alt="img" /> <br />
                    <Button sx={{ bgcolor: 'black', color: 'white' }}>free download <GetAppIcon sx={{ ml: 1 }} /></Button>
                </div>
                <div className='boxx23'>
                    <h4>2</h4>
                    <p style={{ m: '0 0 20px 0', fontWeight: 'bold' }}>Sync your Tally Company</p>
                    <img src="https://www.livekeeping.com/assets/web_images/home/install-tally-connector-step-2.png" alt="img" /> <br />
                    <Button variant='outlined' sx={{ color: 'grey', border: '1px solid grey' }}>Watch Video <OndemandVideoIcon sx={{ ml: 1 }} /></Button>
                </div>
                <div className='boxx23'>
                    <h4>3</h4>
                    <p style={{ m: '0 0 20px 0', fontWeight: 'bold' }}>Access your Tally Data</p>
                    <img src="https://www.livekeeping.com/assets/web_images/home/install-tally-connector-step-3.png" alt="img" /> <br />
                    <Button variant='outlined' sx={{ color: 'grey', border: '1px solid grey' }}>Login to view<OpenInNewIcon sx={{ ml: 1 }} /></Button>
                </div>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <div className='div11'>
                    <Typography><CheckIcon sx={{ fontSize: 'large', color: 'green' }} /> View Tally Data Anywhere</Typography>

                </div>
                <div className='div11'>
                    <Typography><CheckIcon sx={{ fontSize: 'large', color: 'green' }} /> Payment Reminder</Typography>
                </div>
                <div className='div11'>
                    <Typography><CheckIcon sx={{ fontSize: 'large', color: 'green' }} /> Analyze Business</Typography>
                </div>
                <div className='div11'>
                    <Typography><CheckIcon sx={{ fontSize: 'large', color: 'green' }} /> 100% Data Safety & Back-up</Typography>
                </div>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'green', p: 2, mt: 4 }}>
                <Typography sx={{ color: 'white' }}><GppGoodIcon /> We are Trusted by 20,000+ Businesses</Typography>
            </Box>

            <Features />
            <Price />

            <Box>
                <Box sx={{ display: 'flex', pt: 2, bgcolor: 'black' }}>
                    <Box className=' col-sm-4'>
                        <List sx={{ ml: 5, mr: 5 }}>
                            <ListItemText><span style={{ color: '#00c853', fontWeight: 'bolder', fontSize: '24px', height: '40px' }}>Grow Your Business</span></ListItemText>
                            <ListItemText sx={{ color: 'white', m: '10px 0' }}>Stay organized and stay ahead, with Livekeeping</ListItemText>
                            <ListItemText sx={{ color: 'white', m: '10px 0' }}>Business made simpler for Tally users. </ListItemText>
                            <ListItemText sx={{ color: 'white' }}>Ready to get started? </ListItemText>
                        </List>
                    </Box>
                    <Box className=' col-sm-2'>
                        <List sx={{ ml: 5, mr: 5 }}>
                            <ListItemText><span style={{ color: '#00c853', fontWeight: 'bolder', fontSize: '24px', height: '40px' }}>Services</span></ListItemText>
                            <ListItemText sx={{ color: 'white' }}>Partner Login</ListItemText>
                            <ListItemText sx={{ color: 'white' }}>Contact us</ListItemText>
                        </List>
                    </Box>
                    <Box className=' col-sm-2'>
                        <List sx={{ ml: 5, mr: 5 }}>
                            <ListItemText><span style={{ color: '#00c853', fontWeight: 'bolder', fontSize: '24px', height: '40px' }}>About</span> </ListItemText>
                            <ListItemText sx={{ color: 'white' }}>Our Story</ListItemText>
                            <ListItemText sx={{ color: 'white' }}>Documentation</ListItemText>
                        </List>
                    </Box>
                    <Box className=' col-sm-4'>
                        <List sx={{ ml: 5, mr: 5 }}>
                            <ListItemText><span style={{ color: '#00c853', fontWeight: 'bolder', fontSize: '24px', height: '40px' }}>Contact Us</span></ListItemText>
                            <ListItemText sx={{ color: 'white' }}>Livekeeping Technologies Pvt. Ltd.</ListItemText>
                            <ListItemText sx={{ color: 'white' }}><span style={{ fontSize: '14px' }}>(Formerly known as Finlite Technologies Pvt. Ltd.)</span></ListItemText>
                            <ListItemText sx={{ color: 'white' }}>Plot No.22, 11th floor, Tower 2, Assotech Business Cresterra, Sector 135, Noida,Uttar Pradesh 201305, India.</ListItemText>
                            <ListItemText sx={{ color: 'white' }}>Email Us: info@livekeeping.com</ListItemText>
                            <ListItemText sx={{ color: 'white' }}>Mobile: +91 8588 004 004</ListItemText>

                        </List>
                    </Box>
                </Box>
                <Divider sx={{ boxShadow: '1px 2px 2px blue' }} />
                <Box sx={{ display: 'flex', bgcolor: 'black', p: '30px 0' }}>
                    <p style={{ fontSize: '14px', paddingLeft: '20px', color: 'white' }}>© 2023 Livekeeping Technologies Pvt Ltd. All Right Reserved</p>

                    <Box sx={{ml:'150px'}}>
                        <FaTwitterSquare style={{ color:'white',marginLeft: '8px',borderRadius:'50%',fontSize:'30px' }} />
                        <AiFillInstagram style={{ color:'white',marginLeft: '8px',borderRadius:'50%',fontSize:'30px'  }} />
                        <ImFacebook2 style={{ color:'white',marginLeft: '8px',borderRadius:'50%',fontSize:'30px'  }} />                   
                    </Box>

                    <div className=' d-flex' style={{ fontSize: '14px', position: 'absolute', right: 60 }}>
                        <p style={{ color: 'white', marginLeft: '20px' }}>Privacy Policy</p>
                        <p style={{ color: 'white', marginLeft: '20px' }}>Refund Policy </p>
                        <p style={{ color: 'white', marginLeft: '20px' }}>Terms & Conditions</p>

                    </div>
                </Box>
            </Box>

        </>
    )
}

export default TellyOnWeb
