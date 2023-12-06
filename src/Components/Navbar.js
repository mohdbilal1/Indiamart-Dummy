import { AppBar, Box, Button, List } from '@mui/material'
import { NavLink, useNavigate } from "react-router-dom";
import imgeLogo from '../assets/mainlogo.png'
import '../stylecss/headerstyle.css'
import '../stylecss/signinStyle.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ViewCompactOutlinedIcon from '@mui/icons-material/ViewCompactOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';




const Navbar = () => {
    const navigate =useNavigate()

    const signInBtn=()=>{
        navigate('/signin')
    }

    return (
        <>

            <AppBar sx={{
                textAlign: 'center', p: 1, bgcolor: 'white',
                position: 'sticky', top: 0
            }}
            >

                <Box sx={{ display: 'flex' }}>
                    <div className='logo-img-div pt-2 pb-2'>
                        <a href="/">
                            <img className='logo-img img-fluid' style={{ width: '100%', height: '35px', borderRadius: '8px',objectFit:'contain' }} src={imgeLogo} alt="logo-img" />
                        </a>
                    </div>
                    <Box className="header-right-box" sx={{ position: 'absolute', right: 30 }}>
                        <List sx={{ display: 'flex', textAlign: 'center' }}>

                            <li className='nav-list'>
                                
                                <NavLink to='/Shopping'><LocalOfferOutlinedIcon sx={{color:'rgb(0, 53, 168)',mr:1}}/>Shopping</NavLink>
                            </li>
                            <li className='nav-list'>
                                <NavLink to='/sell'><StorefrontOutlinedIcon sx={{color:'rgb(0, 53, 168)',mr:1}}/>Sell</NavLink>
                            </li>
                            <li className='nav-list'>
                                <NavLink to='/help'><HelpOutlineOutlinedIcon sx={{color:'rgb(0, 53, 168)',mr:1}}/>Help</NavLink>
                            </li>
                            <li className='nav-list'>
                                <NavLink to='/messages'><QuestionAnswerOutlinedIcon  sx={{color:'rgb(0, 53, 168)',mr:1}}/>Messages</NavLink>
                            </li>
                            <li className='nav-list'>
                                <NavLink to='/signin' className='signInHover'><AccountCircleOutlinedIcon  sx={{color:'rgb(0, 53, 168)',mr:1}}/>SignIn</NavLink>
                                
                                <Box className='signInHidden p-3 m-4' sx={{ width: '310px', height: '560px', boxShadow: '0.5px 0.5px 3px grey' }}>

                                    <Button onClick={signInBtn} variant='contained' sx={{ p: '10px 30px', m: '0 0 10px 3px' }}>Sign in</Button>
                                   
                                    <p style={{ textAlign: 'center' }}>New to Abaris? Join Now</p>
                                    <div className=' d-flex'>
                                        <HomeOutlinedIcon sx={{ mr: 1 }} />
                                        <p>Home</p>
                                    </div>
                                    <div className=' d-flex'>
                                        < ForwardToInboxOutlinedIcon sx={{ mr: 1 }} />
                                        <p>Post Your Requirement</p>
                                    </div>
                                    <div className=' d-flex'>
                                        <HowToRegOutlinedIcon sx={{ mr: 1 }} />
                                        <p>Verified Business Buyer</p>
                                    </div>
                                    <div className=' d-flex'>
                                        <PermMediaOutlinedIcon sx={{ mr: 1 }} />
                                        <p>Products/services Directory</p>
                                    </div>
                                    <div className=' d-flex'>
                                        <TextsmsOutlinedIcon sx={{ mr: 1 }} />
                                        <p>My Orders</p>
                                    </div>
                                    <div className=' d-flex'>
                                        <ViewCompactOutlinedIcon sx={{ mr: 1 }} />
                                        <p>Recent Activity</p>
                                    </div>
                                    <div className=' d-flex'>
                                        <SettingsOutlinedIcon sx={{ mr: 1 }} />
                                        <p>Setting</p>
                                    </div>
                                    <div>
                                        <p style={{ margin: '0',textAlign:'start'}}>Pay with Abaris</p>
                                        <p style={{ fontSize: '12px',textAlign:'start' }}>Secure & hassle free payments</p>
                                        <p style={{ margin: '0',textAlign:'start' }}>ship with Abaris</p>
                                        <p style={{ fontSize: '12px',textAlign:'start' }}>Easy booking of transport</p>
                                    </div>
                                    <div className=' d-flex'>
                                        <PhoneIphoneOutlinedIcon sx={{ mr: 1 }} />
                                        <p>Download App</p>
                                    </div>

                                </Box>
                            </li>


                        </List>
                    </Box>

                </Box>


            </AppBar>



        </>
    )
}
export default Navbar;