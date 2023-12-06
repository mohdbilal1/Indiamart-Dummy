import { Box, Button, Checkbox, Link, List, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import PipeFittingsData from "../../data/Building&Construction fullpage/PipeFittingPageData"
import Navbar from '../../Components/Navbar'
import '../../stylecss/pipeFittingStyle.css'
import plumbingPipeImg from '../../assets/plumbingPipe.jpg'
import { LiaCrownSolid } from 'react-icons/lia';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { FiYoutube } from 'react-icons/fi';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import hdpeImge from '../../assets/HDPE-end-cap.jpg'
import gasPipeImg from '../../assets/gas-pipeline.jpg'
import PlaceIcon from '@mui/icons-material/Place';
import ShareLocationOutlinedIcon from '@mui/icons-material/ShareLocationOutlined';
import clevisImg from '../../assets/clevis-Hanger.jpg'
import cpvcPipeImg from '../../assets/cpvcPipeImg.jpg'
import popularPipeFittingData from "../../data/Building&Construction fullpage/popularInPipeFitting"
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import gasPipeLineImg from '../../assets/gas-pipeline-fitting.jpg'
import hydrolicPipeImg from '../../assets/hydrolic-pipe.jpg'
import Footer from '../../Components/Footer'
import ImageClickModal from "../../Components/PipeFitting/ImageClickModal"
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import GetPriceModel from "../../Components/PipeFitting/GetPricePoductInfo"




const PipeFittings = () => {
    const [open, setOpen] = useState(false);
    const navigate=useNavigate()
    const imgClick = () => {
        setOpen(true);
    }
    const  contactSupplierBtn = () => {
        setOpen(true);
        navigate('/Pipe-fittings')
    }
   
    return (
        <>
            <Navbar />
            <Box sx={{ bgcolor: 'rgb(232, 242, 242)', p: 2 }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '25px', p: '0 0 15px 5px' }}>Pipe Fittings</Typography>
                <Box sx={{ display: 'flex', p: 1, bgcolor: 'white' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: '16px' }}><PlaceIcon sx={{ color: '#ff5252', mr: 1 }} />Location</Typography>
                        <TextField sx={{ p: '0 10px' }} size='small' placeholder="Enter city"></TextField>
                        <Typography sx={{ fontSize: '16px' }}><ShareLocationOutlinedIcon sx={{ color: '#82b1ff', mr: 1 }} />Near Me</Typography>
                    </Box>
                    <Box sx={{ pl: 3 }}>
                        <List sx={{ display: 'flex', fontSize: '16px' }}>
                            <li style={{ padding: '0 15px' }}>All India </li>
                            <li style={{ padding: '0 15px' }}> Mumbai</li>
                            <li style={{ padding: '0 15px' }}>Ahmedabad</li>
                            <li style={{ padding: '0 15px' }}> Bengaluru</li>
                            <li style={{ padding: '0 15px' }}>Chennai</li>
                            <li style={{ padding: '0 15px' }}>Pune</li>
                            <li style={{ padding: '0 15px' }}>Kolkata</li>
                            <li style={{ padding: '0 15px' }}>Delhi</li>
                            <li style={{ padding: '0 15px' }}></li>


                        </List>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex' }}>
                    <div className=" col-sm-2">

                        <Box sx={{ mt: 2 }}>

                            <TableContainer>
                                <Table sx={{ backgroundColor: 'white' }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>Related Category</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {PipeFittingsData.map((item, i) => (
                                            <TableRow sx={{ bgcolor: 'white' }}>
                                                <TableCell sx={{ display: 'flex' }}>
                                                    <img style={{ height: 'auto', width: '80px' }} src={item.image} alt="construction-img" />
                                                    <div style={{ padding: '15px 0 0 15px', fontSize: '13px' }}><Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>{item.name1}</Link></div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>

                        <Box sx={{ mt: 2 }}>

                            <TableContainer>
                                <Table sx={{ backgroundColor: 'white' }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>Filter Results</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow sx={{ bgcolor: 'white' }}>
                                            <TableCell>
                                                <Checkbox /><span>Your City</span><br />
                                                <Checkbox /><span>Video</span>
                                            </TableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>


                        <Box sx={{ mt: 2 }}>

                            <TableContainer>
                                <Table sx={{ backgroundColor: 'white' }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>Related Services</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow sx={{ bgcolor: 'white' }}>
                                            <TableCell>
                                                <span>Pipe Fitting Services</span>
                                            </TableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>

                        <Box sx={{ mt: 2 }}>

                            <TableContainer>
                                <Table sx={{ backgroundColor: 'white' }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>Related Brands</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow sx={{ bgcolor: 'white' }}>
                                            <TableCell sx={{ display: 'flex' }}>
                                                <img style={{ height: 'auto', width: '80px', borderRadius: '5px' }} src={gasPipeImg} alt="gasPipeImg-img" />
                                                <div style={{ padding: '3px 0 0 15px', fontSize: '13px' }}><Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>UNIK Pipe Fittings</Link></div>
                                            </TableCell>
                                            <TableCell sx={{ display: 'flex' }}>
                                                <img style={{ height: 'auto', width: '80px', borderRadius: '5px' }} src={hdpeImge} alt="hdpeImge-img" />
                                                <div style={{ padding: '3px 0 0 15px', fontSize: '13px' }}><Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Jindal Pipe Fittings</Link></div>
                                            </TableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>

                        <Box sx={{ mt: 2 }}>

                            <TableContainer>
                                <Table sx={{ backgroundColor: 'white' }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>Business Type</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow sx={{ bgcolor: 'white' }}>
                                            <TableCell>
                                                <p>Manufacturer</p>
                                                <p>Exporter</p>
                                                <p>Wholesaler</p>
                                                <p>Retailer</p>
                                            </TableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>

                        <Box sx={{ mt: 2 }}>

                            <TableContainer>
                                <Table sx={{ backgroundColor: 'white' }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 'bold', fontSize: '16px' }}>Featured Categories</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow sx={{ bgcolor: 'white' }}>
                                            <TableCell sx={{ display: 'flex' }}>
                                                <img style={{ height: 'auto', width: '80px', borderRadius: '5px' }} src={clevisImg} alt="clevisImg-img" />
                                                <div style={{ padding: '3px 0 0 15px', fontSize: '13px' }}><Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Clevis Hanger</Link></div>
                                            </TableCell>
                                            <TableCell sx={{ display: 'flex' }}>
                                                <img style={{ height: 'auto', width: '80px', borderRadius: '5px' }} src={cpvcPipeImg} alt="cpvcPipeImg-img" />
                                                <div style={{ padding: '3px 0 0 15px', fontSize: '13px' }}><Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>CPVC Pipe Fittings</Link></div>
                                            </TableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>


                    </div>

                    <div className=" col-sm-10">
                        <Typography sx={{ fontWeight: 'bold', fontSize: '18px', ml: 3, mt: 2, pl: 2 }}>Categories to explore</Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', m: 2, pl: 2 }}>

                            {PipeFittingsData.map((item, i) => {
                                return (
                                    <>
                                        <div className='box-bc' style={{ padding: '5px 2px 5px 4px', margin: '6px', width: '140px', height: 'auto', borderRadius: '6px', backgroundColor: 'white' }}>
                                            <img style={{ height: '140px', width: '130px', objectFit: 'cover' }} src={item.image} alt="construction-img" />
                                            <div style={{ padding: '25px 0 0 12px' }}><Link sx={{ fontSize: '13px', textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>{item.name1}</Link></div>
                                        </div>
                                    </>

                                )
                            })}

                        </Box>

                        <Box sx={{ display: 'flex', bgcolor: 'white', p: 2, boxShadow: '3px 3px 3px 3px rgba(89, 4, 168, 0.137)' }}>
                            <div className="col-sm-4">
                                <img onClick={imgClick} style={{ width: '250px', height: '200px', borderRadius: '5px' }} src={plumbingPipeImg} alt="plumbingPipeImg" />
                                
                                <ImageClickModal open={open} setOpen={setOpen}/>
                            </div>
                            <div className="col-sm-4">
                                <h6><NavLink to={'/Pipe-fittings/productdetail'} style={{textDecoration:'none'}}>PVC Pipe Fittings</NavLink></h6>
                                <span style={{ fontWeight: 'bold', fontSize: '18px' }}>₹ 48.7</span>
                                <Button size="small" sx={{ ml: 1, borderRadius: '15px' }} variant="outlined">Get Latest Price</Button><br />
                                <span><span style={{ color: 'grey' }}>Size:</span> 1/2 inch, 3/4 inch, 1 inch, 2 inch</span><br />
                                <span><span style={{ color: 'grey' }}>Material:</span> PVC</span><br />
                                <span><span style={{ color: 'grey' }}>Usage/Application:</span> Plumbing Pipe</span><br />
                                <span><span style={{ color: 'grey' }}>Brand:</span> Kelvin</span><br />
                                <span><span style={{ color: 'grey' }}>Material Grade:</span>Plastic</span><br />
                                <span><span style={{ color: 'grey' }}>Shape:</span> All</span><br />
                                <NavLink to={'/Pipe-fittings/productdetail'}>read more...</NavLink>
                            </div>
                            <div className="col-sm-4" style={{ backgroundColor: 'rgb(232, 242, 242)' }}>
                                <h6 style={{ marginBottom: '0' }}>Kelvin Plastic Private Limited</h6>
                                <span style={{ color: 'grey' }}>Rajkot</span><br />
                                <span><LiaCrownSolid style={{ color: 'green', fontSize: '24px', marginRight: '8px', marginTop: '8px' }} />Leading Supplier</span><br />
                                <span><VerifiedOutlinedIcon sx={{ color: 'burlywood', mr: 1 }} />TrustSEAL Verified</span><br />
                                <span><FiYoutube style={{ color: 'red', marginLeft: '3px', fontSize: '20px', marginRight: '8px' }} />Company Video</span><br />
                                <Button variant="outlined" sx={{ mt: 4 }}>View Mobile Number</Button>
                                <Button onClick={contactSupplierBtn} variant="contained" sx={{ mt: 2, width: '200px' }}>contact Supplier<PlayArrowOutlinedIcon sx={{ ml: 1 }} /></Button>
                                <GetPriceModel open={open} setOpen={setOpen} />
                            </div>

                        </Box>

                        <Box sx={{ display: 'flex', bgcolor: 'white', mt: 3, ml: 4, p: 2, boxShadow: '3px 3px 3px 3px rgba(89, 4, 168, 0.137)' }}>
                            <div className="col-sm-4">
                                <img style={{ width: '250px', height: '200px', borderRadius: '5px' }} src={hdpeImge} alt="hdpeImge" />
                            </div>
                            <div className="col-sm-4">
                                <h6>Black HDPE End Cap Pipe Fitting, Size: 20mm Od To 630mm Od</h6>
                                <span style={{ fontWeight: 'bold', fontSize: '18px' }}>₹ 50 </span>
                                <Button size="small" sx={{ ml: 1, borderRadius: '15px' }} variant="outlined">Get Latest Price</Button><br />
                                <span><span style={{ color: 'grey' }}>Size:</span> 20mm OD to 630mm OD</span><br />
                                <span><span style={{ color: 'grey' }}>Material:</span>HDPE</span><br />
                                <span><span style={{ color: 'grey' }}>Connection:</span>Welded</span><br />
                                <span><span style={{ color: 'grey' }}>Color:</span> Black</span><br />
                                <span><span style={{ color: 'grey' }}>Type: </span>Ferrule</span><br />
                                <span><span style={{ color: 'grey' }}>Connection Type:</span> Female</span><br />
                                <Button>read more...</Button>
                            </div>
                            <div className="col-sm-4" style={{ backgroundColor: 'rgb(232, 242, 242)' }}>
                                <h6 style={{ marginBottom: '0' }}>Jack Pipes Industries</h6>
                                <span style={{ color: 'grey' }}>New Delhi</span><br />
                                <span><LiaCrownSolid style={{ color: 'green', fontSize: '24px', marginRight: '8px', marginTop: '8px' }} />Leading Supplier</span><br />
                                <span><VerifiedOutlinedIcon sx={{ color: 'burlywood', mr: 1 }} />TrustSEAL Verified</span><br />
                                <span><FiYoutube style={{ color: 'red', marginLeft: '3px', fontSize: '20px', marginRight: '8px' }} />Company Video</span><br />
                                <Button variant="outlined" sx={{ mt: 4 }}>View Mobile Number</Button>
                                <Button variant="contained" sx={{ mt: 2, width: '200px' }}>contact Supplier<PlayArrowOutlinedIcon sx={{ ml: 1 }} /></Button>

                            </div>

                        </Box>
                        <Box sx={{ display: 'flex', bgcolor: 'white', mt: 3, ml: 4, p: 2, boxShadow: '3px 3px 3px 3px rgba(89, 4, 168, .137)' }}>
                            <div className="col-sm-4">
                                <img style={{ width: '250px', height: '200px', borderRadius: '5px' }} src={gasPipeImg} alt="gasPipeImg" />
                            </div>
                            <div className="col-sm-4">
                                <h6>Gas Pipe Fittings, Size: 3 inch</h6>
                                <span style={{ fontWeight: 'bold', fontSize: '18px' }}>₹ 80</span>
                                <Button size="small" sx={{ ml: 1, borderRadius: '15px' }} variant="outlined">Get Latest Price</Button><br />
                                <span><span style={{ color: 'grey' }}>Size:</span>  3 inch, 1/2 inch, 1 inch, 2 inch, 3/4 inch</span><br />
                                <span><span style={{ color: 'grey' }}>Material:</span> PVC</span><br />
                                <span><span style={{ color: 'grey' }}>Usage/Application:</span> Chemical Fertilizer Pipe, Gas Pipe, Hydraulic Pipe, Pneumatic Connections, Structure Pipe</span><br />
                                <span><span style={{ color: 'grey' }}>Type: </span> Steel</span><br />
                                <span><span style={{ color: 'grey' }}>Color:</span>Black</span><br />
                                <span><span style={{ color: 'grey' }}>Shape:</span> All</span><br />
                                <Button>read more...</Button>
                            </div>
                            <div className="col-sm-4" style={{ backgroundColor: 'rgb(232, 242, 242)' }}>
                                <h6 style={{ marginBottom: '0' }}> Tradewell Ferromet Private Limited</h6>
                                <span style={{ color: 'grey' }}>Grant Road, Mumbai</span><br />
                                <span><LiaCrownSolid style={{ color: 'green', fontSize: '24px', marginRight: '8px', marginTop: '8px' }} />Leading Supplier</span><br />
                                <span><VerifiedOutlinedIcon sx={{ color: 'burlywood', mr: 1 }} />TrustSEAL Verified</span><br />
                                <span><FiYoutube style={{ color: 'red', marginLeft: '3px', fontSize: '20px', marginRight: '8px' }} />Company Video</span><br />
                                <Button variant="outlined" sx={{ mt: 4 }}>View Mobile Number</Button>
                                <Button variant="contained" sx={{ mt: 2, width: '200px' }}>contact Supplier<PlayArrowOutlinedIcon sx={{ ml: 1 }} /></Button>

                            </div>

                        </Box>

                        <Box>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '18px', ml: 3, mt: 2, pl: 2 }}>Popular in Pipe Fittings</Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', m: 2, pl: 2 }}>

                                {popularPipeFittingData.map((item, i) => {
                                    return (
                                        <>
                                            <div className='box-bc' style={{ padding: '5px 2px 5px 4px', margin: '6px', width: '140px', height: 'auto', borderRadius: '6px', backgroundColor: 'white' }}>
                                                <img style={{ height: '120px', width: '130px', objectFit: 'cover' }} src={item.image} alt="construction-img" />
                                                <div style={{ padding: '2px 0 0 12px' }}><Link sx={{ fontSize: '13px', textDecoration: 'none' }}>{item.name}</Link></div>
                                                <div style={{ padding: '2px 0 0 12px' }}><Link sx={{ fontSize: '13px', textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>{item.price}</Link></div>
                                                <div style={{ padding: '2px 0 0 12px' }}><Link sx={{ fontSize: '11px', textDecoration: 'none', color: 'grey' }}>{item.companyName}</Link></div>
                                                <button style={{ border: 'none', backgroundColor: '#1e88e5', color: 'white', borderRadius: '5px', marginTop: '2px' }}>Contact Supplier</button>
                                            </div>
                                        </>

                                    )
                                })}

                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', bgcolor: 'white', mt: 3, ml: 4, p: 2, boxShadow: '3px 3px 3px 3px rgba(89, 4, 168, .137)' }}>
                            <div className="col-sm-4">
                                <img style={{ width: '250px', height: '200px', borderRadius: '5px', objectFit: 'contain' }} src={hydrolicPipeImg} alt="hydrolicPipeImg" />
                            </div>
                            <div className="col-sm-4">
                                <h6>SS KE Special Fittings, For Hydraulic Pipe</h6>
                                <span style={{ fontWeight: 'bold', fontSize: '18px' }}>₹ 350 </span>
                                <Button size="small" sx={{ ml: 1, borderRadius: '15px' }} variant="outlined">Get Latest Price</Button><br />
                                <span><span style={{ color: 'grey' }}>Application: </span> Hydraulic Pipe</span><br />
                                <span><span style={{ color: 'grey' }}>Brand:</span>KE</span><br />
                                <span><span style={{ color: 'grey' }}>Connection:</span>Male, Welded</span><br />
                                <span><span style={{ color: 'grey' }}>Usage/Application:</span>  hydraulic , gas , Pneumatic</span><br />
                                <span><span style={{ color: 'grey' }}>Material:</span>SS</span><br />
                                <span><span style={{ color: 'grey' }}>Size:</span> 1/2 inch, 3/4 inch, 1 inch, 2 inch</span><br />
                                <Button>read more...</Button>
                            </div>

                            <div className="col-sm-4" style={{ backgroundColor: 'rgb(232, 242, 242)' }}>
                                <h6 style={{ marginBottom: '0' }}>Kanti Enterprises</h6>
                                <span style={{ color: 'grey' }}>Girgaon, Mumbai</span><br />
                                <span><LiaCrownSolid style={{ color: 'green', fontSize: '24px', marginRight: '8px', marginTop: '8px' }} />Leading Supplier</span><br />
                                <span><VerifiedOutlinedIcon sx={{ color: 'burlywood', mr: 1 }} />TrustSEAL Verified</span><br />
                                <span><WorkspacePremiumOutlinedIcon sx={{ color: '#448aff', mr: 1 }} />Verified Exporter</span><br />
                                <span><FiYoutube style={{ color: 'red', marginLeft: '3px', fontSize: '20px', marginRight: '8px' }} />Company Video</span><br />
                                <Button variant="outlined" sx={{ mt: 4 }}>View Mobile Number</Button>
                                <Button variant="contained" sx={{ mt: 2, width: '200px' }}>contact Supplier<PlayArrowOutlinedIcon sx={{ ml: 1 }} /></Button>

                            </div>

                        </Box>

                        <Box sx={{ display: 'flex', bgcolor: 'white', mt: 3, ml: 4, p: 2, boxShadow: '3px 3px 3px 3px rgba(89, 4, 168, .137)' }}>
                            <div className="col-sm-4">
                                <img style={{ width: '250px', height: '200px', borderRadius: '5px' }} src={gasPipeLineImg} alt="gasPipeLineImg" />
                            </div>
                            <div className="col-sm-4">
                                <h6>Gas Pipe Fittings, Size: 3 inch</h6>
                                <span style={{ fontWeight: 'bold', fontSize: '18px' }}>₹ 150 </span>
                                <Button size="small" sx={{ ml: 1, borderRadius: '15px' }} variant="outlined">Get Latest Price</Button><br />
                                <span><span style={{ color: 'grey' }}>Size:</span> 3 inch, 1/2 inch, 1 inch, 2 inch, 3/4 inch</span><br />
                                <span><span style={{ color: 'grey' }}>Application: </span>Chemical Fertilizer Pipe, Gas Pipe</span><br />
                                <span><span style={{ color: 'grey' }}>Connection:</span>Welded</span><br />
                                <span><span style={{ color: 'grey' }}>Color:</span> Black</span><br />
                                <span><span style={{ color: 'grey' }}>Type: </span>Steel</span><br />
                                <span><span style={{ color: 'grey' }}>Connection Type:</span> Female</span><br />
                                <Button>read more...</Button>
                            </div>
                            <div className="col-sm-4" style={{ backgroundColor: 'rgb(232, 242, 242)' }}>
                                <h6 style={{ marginBottom: '0' }}> Tradewell Ferromet Private Limited</h6>
                                <span style={{ color: 'grey' }}>Grant Road, Mumbai</span><br />
                                <span><LiaCrownSolid style={{ color: 'green', fontSize: '24px', marginRight: '8px', marginTop: '8px' }} />Leading Supplier</span><br />
                                <span><VerifiedOutlinedIcon sx={{ color: 'burlywood', mr: 1 }} />TrustSEAL Verified</span><br />
                                <Button variant="outlined" sx={{ mt: 4 }}>View Mobile Number</Button>
                                <Button variant="contained" sx={{ mt: 2, width: '200px' }}>contact Supplier<PlayArrowOutlinedIcon sx={{ ml: 1 }} /></Button>

                            </div>

                        </Box>


                    </div>
                </Box>


            </Box>
            <Footer />
        </>
    )
}

export default PipeFittings

