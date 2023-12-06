import { Box, Button, InputAdornment, List, TextField } from "@mui/material"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BallotIcon from '@mui/icons-material/Ballot';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import gstImg from '../../assets/gst.png'
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { useNavigate } from "react-router-dom";


const SellerAddGst = () => {
    const navigate=useNavigate()

    const goToRegistrComplte=()=>{
        navigate('/registrComplete')
    }
    
    return (
        <>
            <Navbar />
            <Box sx={{ display: 'flex', bgcolor: '#eeeeee', pt: 2, pb: 3 }}>
                <div className=" col-sm-6 bg-white ms-5">
                    <Box sx={{ display: 'flex', p: 1 }}>
                        <List sx={{ display: 'flex', fontSize: '14px' }}>
                            <div className=" text-center pb-2" style={{ color: '#4caf50', borderBottom: '2px solid #4caf50' }}>
                                <CheckCircleOutlineIcon />
                                <li style={{ padding: '0 10px' }}>Create Account </li>
                            </div>
                            <div className=" text-center pb-2" style={{ color: '#4caf50', borderBottom: '2px solid #4caf50' }}>
                                <DescriptionOutlinedIcon />
                                <li style={{ padding: '0 10px' }}>Business Details</li>
                            </div>
                            <div className=" text-center pb-2" style={{ color: '#4caf50', borderBottom: '2px solid #4caf50' }}>
                                <Inventory2OutlinedIcon />
                                <li style={{ padding: '0 10px' }}>Product Details</li>
                            </div>

                            <div className=" text-center pb-2" style={{ color: '#4caf50', borderBottom: '2px solid #4caf50' }} >
                                <PlaceOutlinedIcon />
                                <li style={{ padding: '0 10px' }}>Address Details</li>
                            </div>

                            <div className=" text-center pb-2" style={{ borderBottom: '2px solid #0d47a1', color: '#0d47a1' }}>
                                <LocalAtmOutlinedIcon />
                                <li style={{ padding: '0 10px' }}>Add GST</li>
                            </div>
                        </List>
                    </Box>
                    <Box sx={{ p: 3 }}>
                        <CheckCircleIcon sx={{color:'#388e3c',fontSize:'18px',mr:1}} /><p style={{ color: 'green',  display: 'inline-block' }}>Address details added successfully</p>
                        <h3 style={{ color: '#0d47a1' }}>GST Details</h3>
                        <p style={{ color: 'grey' }}>Add your statutory details</p>

                        <Box sx={{ pt: 3 }}>
                            <TextField

                                label="GST Number"
                                placeholder="GST Number"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LocalAtmIcon sx={{color:'brown', borderRight: '1px solid grey', pr: 2, fontSize: '38px' }} />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                                sx={{width:'545px'}}
                            />
                            
                        </Box>
                        <Button onClick={goToRegistrComplte} variant="contained" sx={{ marginLeft: '450px', marginTop: '30px' }}>Continue</Button>

                    </Box>
                </div>
                <div className=" col-sm-5">
                    <Box sx={{ bgcolor: 'white', p: 2, m: 5 }}>
                        <div className=" d-flex">
                            <BallotIcon sx={{ color: '#388e3c', mr: 1 }} />
                            <p><b>Your Profile So Far</b></p>
                        </div>
                        <p style={{ margin: '3px' }}><span style={{ color: 'grey', paddingRight: '10px', fontSize: '14px' }}> Your Name :</span> <b style={{ fontSize: '14px' }}>Mohd Bilal</b></p>
                        <p style={{ margin: '3px' }}><span style={{ color: 'grey', paddingRight: '10px', fontSize: '14px' }}>Mobile Number :</span> <b style={{ fontSize: '14px' }}>9760786071</b><CheckCircleIcon sx={{ color: '#388e3c', ml: 1, mb: 1 }} /></p>
                        <p style={{ margin: '3px' }}><span style={{ color: 'grey', paddingRight: '10px', fontSize: '14px' }}>Company Name :</span> <b style={{ fontSize: '14px' }}>AbcD</b></p>
                        <p style={{ margin: '3px' }}><span style={{ color: 'grey', paddingRight: '10px', fontSize: '14px' }}> Email :</span> <b style={{ fontSize: '14px' }}>dvdfv@gmail.com</b></p>
                        <p style={{ margin: '3px' }}><span style={{ color: 'grey', paddingRight: '10px', fontSize: '14px' }}> Product :</span> <b style={{ fontSize: '14px' }}>pipe fittings | logo design | pneumatic fittings</b></p>
                        <p style={{ margin: '3px' }}><span style={{ color: 'grey', paddingRight: '10px', fontSize: '14px' }}> Address :</span> <b style={{ fontSize: '14px' }}>New Delhi, Delhi, 110009</b></p>
                        
                    </Box>
                    <Box className=' d-flex' style={{ marginTop: '50px' }}>
                        <img style={{width:'220px',marginLeft:'60px'}} src={gstImg} alt="gstImg" />
                        <button style={{ width: '100px', border: 'none', color: '#388e3c', fontWeight: 'bold', margin: '5px', marginLeft: '30px' }}><CallRoundedIcon sx={{ color: '#388e3c' }} />Request call back</button>
                    </Box>
                </div>
            </Box>
            <Footer />
        </>
    )
}

export default SellerAddGst