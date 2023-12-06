import { Box, Button, List, TextField } from "@mui/material"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BallotIcon from '@mui/icons-material/Ballot';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import Navbar from "../../Components/Navbar";
import SimpleImageSlider from "react-simple-image-slider";
import SliderImagesSample from "../../data/imageSampleData";
import Footer from "../../Components/Footer";
import {useNavigate } from "react-router-dom";


const SellerProductPage = () => {

    const navigate=useNavigate();


    const goToAddressDetail=()=>{
        navigate('/sellerAddress')
    }
    return (
        <>
            <Navbar />
            <Box sx={{ display: 'flex', bgcolor: '#eeeeee', pt: 2, pb: 3 }}>
                <div className=" col-sm-6 bg-white ms-5">
                    <Box sx={{ display: 'flex', p: 1}}>
                        <List sx={{ display: 'flex', fontSize: '14px' }}>
                            <div className=" text-center pb-2" style={{ color: '#4caf50', borderBottom: '2px solid #4caf50' }}>
                                <CheckCircleOutlineIcon />
                                <li style={{ padding: '0 10px' }}>Create Account </li>
                            </div>
                            <div className=" text-center pb-2" style={{ color: '#4caf50', borderBottom: '2px solid #4caf50' }}>
                                <DescriptionOutlinedIcon />
                                <li style={{ padding: '0 10px' }}>Business Details</li>
                            </div>
                            <div className=" text-center pb-2" style={{ borderBottom: '2px solid #0d47a1', color: '#0d47a1' }}>
                                <Inventory2OutlinedIcon />
                                <li style={{ padding: '0 10px' }}>Product Details</li>
                            </div>

                            <div className=" text-center pb-2">
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
                        <h3 style={{ color: '#0d47a1' }}>Product Details</h3>
                        <p style={{ color: 'grey' }}>Add 3 products/services you wish to sell, you can add more later :</p>
                        <Box sx={{ display: 'flex', pl: 3, pt: 3 }}>
                            <TextField type="file" sx={{ width: '160px' }} />
                            <TextField type="file" sx={{ ml: 3, mr: 3, width: '160px' }} />
                            <TextField type="file" sx={{ width: '160px' }} />
                        </Box>
                        <Box sx={{ display: 'flex', pl: 3, pt: 3 }}>
                            <TextField label='Product/Service Name' sx={{ width: '160px' }} />
                            <TextField label='Product/Service Name' sx={{ ml: 3, mr: 3, width: '160px' }} />
                            <TextField label='Product/Service Name' sx={{ width: '160px' }} />
                        </Box>
                        <Button onClick={goToAddressDetail} variant="contained" sx={{ marginLeft: '450px', marginTop: '30px' }}>Continue</Button>

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

                    </Box>
                    <Box className=' d-flex' style={{ marginTop: '50px'}}>
                        <SimpleImageSlider
                            width={260}
                            height={180}
                            images={SliderImagesSample.map((item) => item.image)}
                            showBullets={true}
                            showNavs={true}
                            style={{marginLeft:'40px'}}
                        />
                        <button style={{ width: '100px', border: 'none', color: '#388e3c', fontWeight: 'bold', margin: '5px',marginLeft:'60px' }}><CallRoundedIcon sx={{ color: '#388e3c' }} />Request call back</button>
                    </Box>
                </div>
            </Box>
            <Footer/>
        </>
    )
}

export default SellerProductPage