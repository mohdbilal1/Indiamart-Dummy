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
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import locationIconImg from '../../assets/location.png'
import { useNavigate } from "react-router-dom";

const SellerAddressPage = () => {

    const navigate=useNavigate();


    const goToAddGst=()=>{
        navigate('/sellerAddGst')
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

                            <div className=" text-center pb-2" style={{ borderBottom: '2px solid #0d47a1', color: '#0d47a1' }} >
                                <PlaceOutlinedIcon />
                                <li style={{ padding: '0 10px' }}>Address Details</li>
                            </div>

                            <div className=" text-center pb-2">
                                <LocalAtmOutlinedIcon />
                                <li style={{ padding: '0 10px' }}>Add GST</li>
                            </div>
                        </List>
                    </Box>
                    <Box sx={{ p: 3 }}>
                        <p style={{ color: 'red', fontWeight: 'bold', display: 'inline-block' }}>Add 3 more products to continue</p>
                        <h3 style={{ color: '#0d47a1' }}>Address Details</h3>
                        <p style={{ color: 'grey' }}>What is the business address for "ggggg"?</p>

                        <Box sx={{ pt: 3 }}>
                            <TextField

                                label="Pin Code"
                                placeholder="Pin Code"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PinDropOutlinedIcon sx={{color:'red', borderRight: '1px solid grey', pr: 2, fontSize: '38px' }} />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                                sx={{width:'545px'}}
                            />
                            <div className=" d-flex mt-5">
                                <TextField

                                    label="City"
                                    placeholder="City"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LocationCityOutlinedIcon sx={{ color:'blueviolet', borderRight: '1px solid grey', pr: 2, fontSize: '38px' }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="outlined"
                                    
                                />
                                <TextField

                                    label="State"
                                    placeholder="State"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LocationCityOutlinedIcon sx={{color:'blueviolet',  borderRight: '1px solid grey', pr: 2, fontSize: '38px' }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="outlined"
                                    sx={{ml:4}}
                                    
                                />

                            </div>
                        </Box>
                        <Button onClick={goToAddGst} variant="contained" sx={{ marginLeft: '450px', marginTop: '30px' }}>Continue</Button>

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

                    </Box>
                    <Box className=' d-flex' style={{ marginTop: '50px' }}>
                        <img style={{width:'170px',marginLeft:'60px'}} src={locationIconImg} alt="lcationIconImg" />
                        <button style={{ width: '100px', border: 'none', color: '#388e3c', fontWeight: 'bold', margin: '5px', marginLeft: '30px' }}><CallRoundedIcon sx={{ color: '#388e3c' }} />Request call back</button>
                    </Box>
                </div>
            </Box>
            <Footer />
        </>
    )
}

export default SellerAddressPage