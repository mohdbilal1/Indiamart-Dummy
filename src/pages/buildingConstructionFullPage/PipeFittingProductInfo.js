import { Box, Button, Card, CardMedia, List, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material"
import plumbingPipeImg from '../../assets/plumbingPipe.jpg'
import { LiaCrownSolid } from 'react-icons/lia';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { FiYoutube } from 'react-icons/fi';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import findSellerInRajkotData from "../../data/Building&Construction fullpage/findSellerInRajkotData";
import Footer from "../../Components/Footer";
import GetPriceModel from "../../Components/PipeFitting/GetPricePoductInfo";
import { useState } from "react";


const PipeFittingProductInfo = () => {

    const [open, setOpen] = useState(false);
    const clickOnBtn = () => {
        setOpen(true);
    }
    return (
        <>
            <Navbar />
            <Box sx={{ display: 'flex', bgcolor: 'white', m: 3, p: 2, boxShadow: '3px 3px 3px 3px rgba(89, 4, 168, 0.137)' }}>
                <div className="col-sm-4">
                    <img style={{ width: '380px', height: '400px', borderRadius: '5px', objectFit: 'cover' }} src={plumbingPipeImg} alt="plumbingPipeImg" />
                    <div style={{ marginTop: '10px' }}>
                        <Button variant="outlined" sx={{ borderRadius: '10px', mr: '90px' }}>Get more photos</Button>
                        <Button variant="outlined" sx={{ borderRadius: '10px' }}>view similar</Button>
                    </div>

                </div>
                <div className="col-sm-5">
                    <h5 style={{ textDecoration: 'none', fontWeight: 'bold' }}>PVC Pipe Fittings</h5>
                    <span style={{ fontWeight: 'bold', fontSize: '26px' }}>₹ 48.7</span>
                    <Button size="small" sx={{ ml: 4, mb: 1, borderRadius: '15px' }} variant="outlined">Get Latest Price</Button><br />
                    <TableContainer >
                        <Table size="small">
                            <TableBody>

                                <TableRow>
                                    <TableCell sx={{ color: 'gray' }}>Size:</TableCell>
                                    <TableCell>1/2 inch, 3/4 inch, 1 inch, 2 inch</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ color: 'gray' }}>Material:</TableCell>
                                    <TableCell>PVC</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ color: 'gray' }}>Usage/Application:</TableCell>
                                    <TableCell>Plumbing Pipe</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ color: 'gray' }}>Brand:</TableCell>
                                    <TableCell>Kelvin</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ color: 'gray' }}>Material Grade:</TableCell>
                                    <TableCell>Plastic</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ color: 'gray' }}>Shape:</TableCell>
                                    <TableCell>All</TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography sx={{ p: 1, fontSize: '14px' }}>We Kelvin Plastic Pvt Ltd.m, are Leading Manufacturer and Supplier of PVC Pipes and Fittings. We obligated to meet the quality standards as per the industry norms.</Typography>
                    <NavLink>View Complelte Details</NavLink><br />
                    <Button onClick={clickOnBtn} variant="contained" sx={{ p: '20px 50px', m: '10px 0 0 90px' }}>Get Latest Price</Button>
                    <GetPriceModel open={open} setOpen={setOpen} />
                </div>
                <div className="col-sm-3 p-3" style={{ backgroundColor: 'rgb(232, 242, 242)' }}>
                    <NavLink to='/kelvin-pvt-ltd' style={{ marginBottom: '0', }}>Kelvin Plastic Private Limited</NavLink><br />
                    <LocationOnIcon sx={{ color: 'black', fontSize: '16px' }} /><span style={{ color: 'grey', fontSize: '14px' }}>Rajkot,Gujarat</span><br /><br />
                    <LiaCrownSolid style={{ color: 'green', fontSize: '24px', marginRight: '8px', marginTop: '8px' }} /><span style={{ fontSize: '12px', marginRight: '10px' }}>Leading Supplier</span>
                    <VerifiedOutlinedIcon sx={{ color: 'burlywood', mr: 1 }} /><span style={{ fontSize: '12px' }}>TrustSEAL Verified</span><br />
                    <VerifiedOutlinedIcon sx={{ color: 'burlywood', mr: 1 }} /><span style={{ fontSize: '12px', marginRight: '10px' }}>TrustSEAL Verified</span>
                    <FiYoutube style={{ color: 'red', marginLeft: '3px', fontSize: '20px', marginRight: '8px' }} /><span style={{ fontSize: '12px' }}>Company Video</span><br />
                    <Button variant="outlined" sx={{ mt: 4, bgcolor: 'white' }} fullWidth>View Mobile Number</Button>
                    <Button onClick={clickOnBtn} fullWidth sx={{ mt: 5, mb: 3, bgcolor: '#1b5e20', p: '16px 1px', color: 'white', ":hover": { color: 'white', bgcolor: 'Highlight' } }}>contact Supplier<PlayArrowOutlinedIcon sx={{ ml: 1 }} /></Button><br />
                    <NavLink style={{ marginLeft: '10px' }}>View More Seller</NavLink>
                </div>

            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', p: 3, bgcolor: '#b0bec5' }}>
                <div className='d-flex col-sm-3 ms-5 p-2' style={{ borderRadius: '6px', backgroundColor: 'white' }}>
                    <div>
                        <img style={{ height: 'auto', width: '100px', objectFit: 'cover' }} src='https://5.imimg.com/data5/SELLER/Default/2022/6/YX/UV/CX/714063/door-tee-500x500.jpg' alt="construction-img" />

                    </div>
                    <div className="ps-4">
                        <div><p style={{ fontSize: '13px', textDecoration: 'none' }}>PVC Kelvin SWR Self Fit Door Tee</p></div>
                        <div><p style={{ fontSize: '13px', textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>₹ 172/ Piece</p></div>
                        <NavLink>Get Quote</NavLink>
                    </div>
                </div>
                <div className='d-flex col-sm-3 ms-5 p-2' style={{ marginLeft: '10px', borderRadius: '6px', backgroundColor: 'white' }}>
                    <div>
                        <img style={{ height: 'auto', width: '100px', objectFit: 'cover' }} src='https://5.imimg.com/data5/SELLER/Default/2022/6/YX/UV/CX/714063/door-tee-500x500.jpg' alt="construction-img" />

                    </div>
                    <div className="ps-4">
                        <div><p style={{ fontSize: '13px', textDecoration: 'none' }}>PVC Kelvin SWR Self Fit Door Tee</p></div>
                        <div><p style={{ fontSize: '13px', textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>₹ 172/ Piece</p></div>
                        <NavLink>Get Quote</NavLink>
                    </div>
                </div>
                <div className='d-flex col-sm-3 ms-5 p-2' style={{ marginLeft: '10px', borderRadius: '6px', backgroundColor: 'white' }}>
                    <div>
                        <img style={{ height: 'auto', width: '100px', objectFit: 'cover' }} src='https://5.imimg.com/data5/SELLER/Default/2022/6/YX/UV/CX/714063/door-tee-500x500.jpg' alt="construction-img" />

                    </div>
                    <div className="ps-4">
                        <div><p style={{ fontSize: '13px', textDecoration: 'none' }}>PVC Kelvin SWR Self Fit Door Tee</p></div>
                        <div><p style={{ fontSize: '13px', textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>₹ 172/ Piece</p></div>
                        <NavLink>Get Quote</NavLink>
                    </div>
                </div>

            </Box>

            <Box>
                <List sx={{ display: 'flex',m:1,pl:3,pr:3 }}>
                    <h5>Find sellers dealing in <b>Pipe Fittings</b> in <b>Rajkot</b></h5>
                    <h5 style={{marginLeft:'10px'}}>View all products</h5>
                    <div style={{ display: 'flex', position: 'absolute', right: 5 }}>
                        <li><button style={{border:'0.3px solid grey',padding:'5px 15px',backgroundColor:'white',marginLeft:'10px',borderRadius:'15px'}}>New Delhi</button></li>
                        <li><button style={{border:'0.3px solid grey',padding:'5px 15px',backgroundColor:"#1565c0",color:'white',marginLeft:'10px',borderRadius:'15px'}}>Rajkot</button></li>
                        <li><button style={{border:'0.3px solid grey',padding:'5px 15px',backgroundColor:'white',marginLeft:'10px',borderRadius:'15px'}}>All India</button></li>
                    </div>
                </List>

                <Box sx={{ ml: 2 }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        {findSellerInRajkotData.map((item, i) => {
                            return (
                                <Card key={i} sx={{ width: '230px', height: 'auto', padding: '20px', m: 1 }}>
                                    <CardMedia
                                        sx={{ height: '145px', width: 'auto', borderRadius: '6px', mb: 3,objectFit:'' }}
                                        image={item.image}
                                        title="logo-design"
                                    />

                                   <p> <a href="/" style={{ paddingBottom: '5px', paddingTop: '10px',textDecoration:'none' }} size="small">{item.name}</a></p>
                                    <p style={{color: 'gray' }}>{item.address}</p>
                                    <p style={{fontWeight:'bold',fontSize:'18px'}}>{item.price}</p>
                                    <Button variant="outlined" sx={{ display: 'block', mt: 2 }} size="small" fullWidth>{item.contactNo}</Button>
                                    <Button variant="contained" sx={{ display: 'block', mt: 1 }}  fullWidth>{item.link}</Button>

                                </Card>
                            )
                        })}

                    </Box>
                </Box>

            </Box>
            <Footer/>
        </>
    )
}
export default PipeFittingProductInfo;
