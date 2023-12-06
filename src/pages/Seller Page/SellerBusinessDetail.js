import { Box, Button, List, TextField } from "@mui/material"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BallotIcon from '@mui/icons-material/Ballot';
import sellerbgImg from '../../assets/sellerimgbd.png'
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import Navbar from "../../Components/Navbar";
import {useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";


const SellerBusinessPage = () => {
   const navigate=useNavigate();

    const goToProductDetail=()=>{
        navigate('/sellerProduct')
    }
    return (
        <>
          <Navbar/>  
            <Box sx={{display:'flex',bgcolor:'#eeeeee',pt:2,pb:3}}>
                <div className=" col-sm-6 bg-white ms-5">
                    <Box sx={{ display: 'flex', p: 1 }}>
                        <List sx={{ display: 'flex', fontSize: '14px' }}>
                            <div className=" text-center pb-2" style={{color:'#4caf50',borderBottom:'2px solid #4caf50'}}>
                                <CheckCircleOutlineIcon />
                              <li style={{ padding: '0 10px' }}>Create Account </li>
                            </div>
                            <div  className=" text-center pb-2" style={{color:'#0d47a1',borderBottom:'2px solid #0d47a1'}}> 
                                <DescriptionOutlinedIcon/>
                            <li style={{ padding: '0 10px' }}>Business Details</li>
                            </div>
                            <div  className=" text-center pb-2">
                                <Inventory2OutlinedIcon/>
                            <li style={{ padding: '0 10px' }}>Product Details</li>
                            </div>

                            <div  className=" text-center pb-2">
                            <PlaceOutlinedIcon/>
                            <li style={{ padding: '0 10px' }}>Address Details</li>
                            </div>

                            <div  className=" text-center pb-2">
                                <LocalAtmOutlinedIcon/>
                            <li style={{ padding: '0 10px' }}>Add GST</li>
                            </div>         
                        </List>
                    </Box>
                    <Box sx={{p:3}}>
                        <CheckCircleIcon sx={{color:'#388e3c',fontSize:'18px'}} /> <p style={{color:'grey',display:'inline-block'}}>Account created successfully</p>
                        <h3 style={{color:'#0d47a1'}}>Business Details</h3>
                        <p style={{color:'grey'}}>Start adding your business details:</p>
                        <TextField label='Your Name' fullWidth />
                        <TextField label='Company Business/Shop Name' sx={{mt:3,mb:3}} fullWidth />
                        <TextField label='Email Id' fullWidth />
                        <Button onClick={goToProductDetail} variant="contained" sx={{marginLeft:'450px',marginTop:'30px'}}>Verify Later</Button>
                    </Box>
                   
                </div>
                <div className=" col-sm-4">
                    <Box sx={{bgcolor:'white',p:2,m:5}}>
                       <div className=" d-flex">
                       <BallotIcon sx={{color:'#388e3c',mr:1}}/>
                        <p>Your Profile So Far</p>
                       </div>
                        <p><span style={{color:'grey',paddingRight:'10px',fontSize:'16px'}}>Mobile Number :</span> <b>9760786071</b><CheckCircleIcon sx={{color:'#388e3c',ml:1,mb:1}}/></p>
                    </Box>
                    <Box className=' d-flex' style={{marginTop:'140px'}}>
                        <img style={{width:'300px',marginLeft:'50px'}} src={sellerbgImg} alt="sellerbgImg" />
                       <button style={{width:'100px',border:'none',color:'#388e3c',fontWeight:'bold',margin:'30px'}}><CallRoundedIcon sx={{color:'#388e3c'}}/>Request call back</button>
                    </Box>
                </div>
            </Box>
            <Footer/>
        </>
    )
}

export default SellerBusinessPage
