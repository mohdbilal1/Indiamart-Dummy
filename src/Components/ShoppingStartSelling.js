import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material"
import shopImgLogo from '../assets/mainlogo.png'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import ShoppingPageFooter from "./ShoppingPageFooter";



const ShoppingStartSelling = () => {
    return (
        <>
            <Box sx={{ display: 'flex', p: 3, position: 'sticky', top: 0, bgcolor: 'white', zIndex: 10 }}>
                <div className='pt-2 pb-2'>
                    <a href="/">
                        <img style={{ width: 'auto', height: '35px', objectFit: 'contain', borderRadius: '8px', marginLeft: '15px' }} src={shopImgLogo} alt="logo-img" />
                    </a>
                </div>
                <div style={{ position: 'absolute', right: 30 }}>
                    <TextField sx={{
                        bgcolor: 'white', width: '430px', pb: 0, ml: 3,
                        borderRadius: '5px 0 0 5px',
                        border: '1px solid black'
                    }}
                        size="small"
                        placeholder="Enter your mobile number"
                    />
                    <Button sx={{ borderRadius: '0 5px 5px 0', bgcolor: '#1b5e20', color: 'white', p: '8px', ":hover": { bgcolor: '#1b5e20', color: 'white', p: '8px' } }}>Get a Callback</Button>
                </div>

            </Box>

            <Box sx={{ display: 'flex', backgroundColor: 'rgb(106,159,240)', background: 'linear-gradient(90deg, rgba(106,159,240,1) 0%, rgba(70,187,252,1) 32%, rgba(106,159,240,1) 49%, rgba(63,94,251,1) 100%)' }}>
                <div className=" col-sm-6">
                    <Box sx={{ m: '80px 0 0 70px' }}>
                        <p style={{ fontSize: '32px', margin: '3px', color: '#0d47a1', fontWeight: 'bold' }}> List your products & increase</p>
                        <p style={{ fontSize: '32px', margin: '3px', backgroundColor: '#0d47a1', color: 'white', borderRadius: '5px', width: '300px', paddingLeft: '10px' }}>Traffic to your store</p>
                        <p style={{ fontSize: '32px', margin: '3px', color: '#0d47a1', fontWeight: 'bold' }}>by integrating with Abarish</p>
                    </Box>
                </div>
                <div className=" col-sm-6">
                    <img src="https://shopping.imimg.com/style/top-banner.png" alt=" img" />
                </div>
            </Box>

            <Box>
                <Typography sx={{ fontSize: '26px', fontWeight: 'bold', m: 4 }}>Choose from available integration below</Typography>
                <div className=" d-flex m-4">
                    <div style={{ border: '1px solid lightgrey', width: '400px', borderRadius: '10px', textAlign: 'center' }}>
                        <img style={{ margin: '30px 0 10px 0' }} src="https://shopping.imimg.com/style/shopify.png" alt="img" />
                        <p style={{ fontWeight: 'bold' }}>Shopify</p>
                        <Button sx={{ bgcolor: '#1b5e20', color: 'white', ":hover": { bgcolor: '#1b5e20', color: 'white' }, mb: 3 }}>Integrate Now <KeyboardArrowRightIcon /></Button>
                    </div>
                    <div style={{ border: '1px solid lightgrey', width: '400px', borderRadius: '10px', textAlign: 'center', marginLeft: '40px' }}>
                        <img style={{ margin: '30px 0 10px 0' }} src="https://shopping.imimg.com/style/shoopy.png" alt="img" />
                        <p style={{ fontWeight: 'bold' }}>Shoopy</p>
                        <Button sx={{ bgcolor: '#1b5e20', color: 'white', ":hover": { bgcolor: '#1b5e20', color: 'white' }, mb: 3 }}>Integrate Now <KeyboardArrowRightIcon /></Button>
                    </div>
                    <div style={{ border: '1px solid lightgrey', width: '400px', borderRadius: '10px', textAlign: 'center', marginLeft: '40px' }}>
                        <img style={{ margin: '30px 0 10px 0' }} src="https://shopping.imimg.com/style/others.png" alt="img" />
                        <p style={{ fontWeight: 'bold' }}>Others</p>
                        <Button sx={{ bgcolor: '#1b5e20', color: 'white', ":hover": { bgcolor: '#1b5e20', color: 'white' }, mb: 3 }}>Know More  <KeyboardArrowRightIcon /></Button>
                    </div>

                </div>
            </Box>

            <Box>
                <Typography sx={{ fontSize: '26px', fontWeight: 'bold', m: 4 }}>Subscription Plan </Typography>

                <Table sx={{ width: '900px', ml: '150px', border: '1px solid lightgrey' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '20px' }}>Key Features</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '20px' }}>Free</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '20px' }}>Premium *</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>
                                <div>
                                    <Button sx={{ bgcolor: '#1b5e20', color: 'white', width: '150px', ":hover": { bgcolor: '#1b5e20', color: 'white' } }}>Integrate Now</Button>
                                    <p style={{ color: 'grey' }}>(With limited visibility)</p>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div>
                                    <Button sx={{ bgcolor: '#1b5e20', color: 'white', width: '150px', ":hover": { bgcolor: '#1b5e20', color: 'white' } }}>Get in Touch </Button>
                                    <p style={{ color: 'grey' }}>(For Maximum visibility)</p>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Keywords Based Listing on shopping search</TableCell>
                            <TableCell><CloseIcon sx={{ color: 'red' }} /></TableCell>
                            <TableCell><CheckIcon sx={{ color: 'green' }} /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Priority listing on Product listing Ads (PLA)</TableCell>
                            <TableCell><CloseIcon sx={{ color: 'red' }} /></TableCell>
                            <TableCell><CheckIcon sx={{ color: 'green' }} /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Higher visibility on IndiaMART Directory page</TableCell>
                            <TableCell><CloseIcon sx={{ color: 'red' }} /></TableCell>
                            <TableCell><CheckIcon sx={{ color: 'green' }} /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Higher visibility on IndiaMART Shop Now Filter</TableCell>
                            <TableCell><CloseIcon sx={{ color: 'red' }} /></TableCell>
                            <TableCell><CheckIcon sx={{ color: 'green' }} /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Higher visibility on IndiaMart Shopping</TableCell>
                            <TableCell><CloseIcon sx={{ color: 'red' }} /></TableCell>
                            <TableCell><CheckIcon sx={{ color: 'green' }} /></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Box>

            <Box sx={{ display: 'flex',mt:5 ,mb:3}}>
                <div className=" col-sm-5 ms-3" style={{ backgroundColor: '#1b5e20', color: 'white',padding:'100px 10px 10px 50px' }}>
                    <h4>Contact Information</h4>
                    <p>Fill up the form & our team will get back to you shortly</p>
                    <div className=" d-flex">
                        <EmailIcon sx={{mr:1}} />
                        <p>Write to us at shopcare@indiamart.com</p>
                    </div>
                    <div className=" d-flex">
                        <CallIcon sx={{mr:1}} />
                        <p>Call us at 080-47246633</p>
                    </div>
                </div>
                <div className=" col-sm-6">
                    <h4 style={{marginLeft:'30px'}}>Contact Our Team</h4>

                    <div className=" d-flex">
                        <div style={{margin:'20px 40px'}}>
                            <label>Name</label><br />
                            <TextField sx={{width:'270px'}} variant="standard" placeholder="Enter Your Name" />
                        </div>
                        <div style={{margin:'20px 40px'}}>
                            <label>Store Name</label><br />
                            <TextField sx={{width:'270px'}} variant="standard" placeholder="Enter Your Store Name" />
                        </div>
                    </div>
                    <div className=" d-flex">
                        <div style={{margin:'20px 40px'}}>
                            <label>Mobile Number</label><br />
                            <TextField sx={{width:'270px'}} variant="standard" placeholder="Enter Your Mobile Number " />
                        </div>
                        <div style={{margin:'20px 40px'}}>
                            <label>Email Address</label><br />
                            <TextField sx={{width:'270px'}} variant="standard" placeholder="Enter Your Email Address" />
                        </div>
                    </div>
                    <div style={{margin:'20px 40px'}}>
                        <label>Message</label><br />
                        <TextField
                            multiline
                            sx={{width:'620px'}} variant="standard"
                            placeholder="Additional Details About Your Requirment"
                        />
                    </div>
                    <Button variant="contained" sx={{ml:5,p:'10px 50px'}}>Submit  <KeyboardArrowRightIcon /></Button>


                </div>
            </Box>

            <ShoppingPageFooter/>
        </>
    )
}

export default ShoppingStartSelling
