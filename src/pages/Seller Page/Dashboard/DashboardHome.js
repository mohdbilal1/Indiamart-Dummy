import { Box, Button, FormControlLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material"
import Navbar from "../../../Components/Navbar"

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DashboardSideBar from "../../../Components/DashboardSideBar";
import DoneIcon from '@mui/icons-material/Done';
import { Tab, TabPanel, Tabs, TabsList } from "@mui/base";
import { useState } from "react";
import ExpiredSubscriptionModel from "../../../Components/ExpiredSubscriptionModel";



const Dashboard = () => {
    const [openSub ,setOpenSub]=useState(false)
    const openFileInput = () => {
        const fileInput = document.getElementById('fileInput');
        fileInput.click();
    };

    const openAddGstmodel=()=>{
        setOpenSub(true)
    }


    return (
        <>
            <Navbar />
            <Box sx={{ display: 'flex', bgcolor: 'rgb(232, 232, 242)' }}>
                <div className=" col-sm-2 position-sticky start-0" style={{ width: '120px' }}>
                    <DashboardSideBar />
                </div>

                <div className=" col-sm-8">
                    <Box sx={{ bgcolor: 'white', m: 2, width: '1120px',p:3 }}>
                        <Box sx={{ textAlign: 'center', mt: 3, ml: '30px', p: '40px' }}>
                            <Typography sx={{ fontSize: '18px' }}><i>Hi Bilal! view your free catalog: <span style={{ color: 'green' }}>ggggg</span></i></Typography>
                            <Typography sx={{ fontSize: '20px', mt: 2, fontWeight: 'bold' }}>One more step to become a <CheckCircleOutlineIcon sx={{ color: 'green' }} />  Verified Seller and get</Typography>
                            <Typography sx={{ fontSize: '18px', mt: 2 }}><DoneIcon sx={{ color: 'green' }} /> Higher Listing on IndiaMART <DoneIcon sx={{ color: 'green' }} /> More Buyer Enquiries <DoneIcon sx={{ color: 'green' }} /> Preferred Number Service</Typography>
                        </Box>
                        <Tabs>
                            <TabsList>
                                <Tab style={{ border: 'none', marginLeft: '150px', fontWeight: 'bold',color:'#0d47a1' }} value={0}>Basic details</Tab>
                                <Tab style={{ border: 'none', marginLeft: '150px', fontWeight: 'bold',color:'#0d47a1' }} value={1}>Add GST/PAN</Tab>
                                <Tab style={{ border: 'none', marginLeft: '150px', fontWeight: 'bold',color:'#0d47a1' }} value={2}>Add product photos</Tab>
                            </TabsList>
                            <TabPanel value={0} style={{ paddingBottom: '30px' }}>
                                <Box sx={{ border: '1px solid lightgrey', m: 4 }}>
                                    <Typography sx={{ fontWeight: 'bold', m: '20px', ml: 5, fontSize: '20px' }}> Details</Typography>
                                    <div className=" d-flex flex-wrap" style={{ padding: '10px 10px 10px 30px' }}>
                                        <div style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                            <Typography sx={{ color: 'grey' }}>Seller Name</Typography>
                                            <TextField sx={{ width: '300px' }} size="small" />
                                        </div>
                                        <div style={{ marginLeft: '20px', marginBottom: '20px' }}><Typography sx={{ color: 'grey' }}>Company Name</Typography>
                                            <TextField sx={{ width: '300px' }} size="small" />
                                        </div>
                                        <div style={{ marginLeft: '20px', marginBottom: '20px' }}><Typography sx={{ color: 'grey' }}>Primary Mobile No.</Typography>
                                            <TextField sx={{ width: '300px' }} size="small" />
                                        </div>
                                        <div style={{ marginLeft: '20px', marginBottom: '20px' }}><Typography sx={{ color: 'grey' }}>Business Address</Typography>
                                            <TextField sx={{ width: '300px' }} size="small" />
                                        </div>
                                        <div style={{ marginLeft: '20px', marginBottom: '20px' }}><Typography sx={{ color: 'grey' }}>Locality</Typography>
                                            <TextField sx={{ width: '300px' }} size="small" />
                                        </div>
                                        <div style={{ marginLeft: '20px', marginBottom: '20px' }}><Typography sx={{ color: 'grey' }}>Primary E-mail</Typography>
                                            <TextField sx={{ width: '300px' }} size="small" />
                                        </div>
                                        <div style={{ marginLeft: '20px', marginBottom: '20px' }}><Typography sx={{ color: 'grey' }}>City</Typography>
                                            <TextField sx={{ width: '300px' }} size="small" />
                                        </div>
                                        <div style={{ marginLeft: '20px', marginBottom: '20px' }}><Typography sx={{ color: 'grey' }}>State</Typography>
                                            <TextField sx={{ width: '300px' }} size="small" />
                                        </div>
                                        <div style={{ marginLeft: '20px', marginBottom: '20px' }}><Typography sx={{ color: 'grey' }}>Alternate Mobile No.</Typography>
                                            <TextField sx={{ width: '300px' }} size="small" />
                                        </div>
                                        <div style={{ marginLeft: '20px', marginBottom: '20px' }}><Typography sx={{ color: 'grey' }}>Pin code</Typography>
                                            <TextField sx={{ width: '300px' }} size="small" />
                                        </div>
                                        <div style={{ marginLeft: '20px', marginBottom: '20px' }}><Typography sx={{ color: 'grey' }}>Country</Typography>
                                            <TextField sx={{ width: '300px' }} size="small" />
                                        </div>
                                        <div style={{ marginLeft: '20px', marginBottom: '20px' }}><Typography sx={{ color: 'grey' }}>Alternate Email</Typography>
                                            <TextField sx={{ width: '300px' }} size="small" />
                                        </div>

                                    </div>
                                </Box>
                            </TabPanel>
                            <TabPanel value={1} style={{ paddingBottom: '30px' }}>
                                <div className="p-4 m-5" style={{ border: '1px solid lightgrey' }}>
                                    <Typography sx={{ fontSize: '22px', mb: 2, ml: 2 }}><strong>Add GST </strong>to double your business </Typography>
                                    <TextField sx={{ width: '600px', ml: '10px', mb: 2 }} size="small" placeholder="Add GST" />
                                    <Button variant="contained" sx={{ ml: 3 }}>Submit</Button>
                                    <RadioGroup defaultValue="I don’t remember">
                                        <div className=" d-flex ms-2">
                                            <FormControlLabel value="I don’t remember" control={<Radio />} label="I don’t remember" />
                                            <FormControlLabel value="I don’t have it" control={<Radio />} label="I don’t have it" />
                                            <FormControlLabel value="I am exempted" control={<Radio />} label="I am exempted" />
                                        </div>
                                    </RadioGroup>
                                </div>
                            </TabPanel>
                            <TabPanel value={2} style={{ paddingBottom: '30px' }}>
                                <Box sx={{border:'1px solid lightgrey',m:5}}>
                                    <div className=" d-flex p-5">
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>Add product photos</Typography>
                                        <Typography sx={{ ml: '70px', pl: '45px', fontSize: '18px' }}>Minimum 3 products with photos needed for a verified company page</Typography>
                                    </div>

                                    <Box sx={{ display: 'flex', ml: '40px' }}>
                                        <Box sx={{ ml: '80px',mb:3 }}>
                                            <div style={{ width: '200px', textAlign: 'center', backgroundColor: 'white', padding: '8px', borderStyle: 'dashed', borderColor: 'grey' }}>
                                                <input
                                                    type="file"
                                                    id="fileInput"
                                                    style={{ display: 'none' }}
                                                />
                                                <img style={{ cursor: 'pointer', width: '150px' }} onClick={openFileInput} src="https://seller.indiamart.com/img/addproduct.png" alt="img" />
                                            </div>
                                            <p style={{ color: 'grey', fontSize: '18px', padding: '5px 0 0 10px' }}>Corporate Logo Design</p>
                                        </Box>

                                        <Box sx={{ ml: '80px',mb:3 }}>
                                            <div style={{ width: '200px', textAlign: 'center', backgroundColor: 'white', padding: '8px', borderStyle: 'dashed', borderColor: 'grey' }}>
                                                <input
                                                    type="file"
                                                    id="fileInput"
                                                    style={{ display: 'none' }}
                                                />
                                                <img style={{ cursor: 'pointer', width: '150px' }} onClick={openFileInput} src="https://seller.indiamart.com/img/addproduct.png" alt="img" />
                                            </div>
                                            <p style={{ color: 'grey', fontSize: '18px', padding: '5px 0 0 40px' }}>Pipe Fittings</p>
                                        </Box>

                                        <Box sx={{ ml: '80px',mb:3 }}>
                                            <div style={{ width: '200px', textAlign: 'center', backgroundColor: 'white', padding: '8px', borderStyle: 'dashed', borderColor: 'grey' }}>
                                                <input
                                                    type="file"
                                                    id="fileInput"
                                                    style={{ display: 'none' }}
                                                />
                                                <img style={{ cursor: 'pointer', width: '150px' }} onClick={openFileInput} src="https://seller.indiamart.com/img/addproduct.png" alt="img" />
                                            </div>
                                            <p style={{ color: 'grey', fontSize: '18px', padding: '5px 0 0 30px' }}>Pneumatic Fittings</p>
                                        </Box>
                                    </Box>
                                </Box>
                            </TabPanel>
                        </Tabs>
                         
                         <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',mt:'100px'}}>
                            <Button  onClick={openAddGstmodel} variant="contained" sx={{padding:'10px 60px'}}>Buy now</Button>
                            <ExpiredSubscriptionModel openSub={openSub} setOpenSub={setOpenSub} />
                         </Box>

                    </Box>

                </div >
            </Box >

        </>
    )
}

export default Dashboard
