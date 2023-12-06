
import { Box, Button, Checkbox, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material"
import BuyLeadNavbar from "../../../../Components/BuyLeadNavbar"
import Navbar from "../../../../Components/Navbar"
import DashboardSideBar from '../../../../Components/DashboardSideBar'
import { Tab, TabPanel, Tabs, TabsList } from "@mui/base"
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import indFlg from '../../../../assets/indiaflag.png'
import CameraIcon from '@mui/icons-material/Camera';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DeleteIcon from '@mui/icons-material/Delete';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import EmailIcon from '@mui/icons-material/Email';



const ExportLeadsPge = () => {

    return (
        <>
            <Navbar />
            <Box sx={{ display: 'flex', bgcolor: 'rgb(232, 232, 232)' }}>
                <div className=" col-sm-2 position-sticky start-0" style={{ width: '120px' }}>
                    <DashboardSideBar />
                </div>

                <div className=" col-sm-12">
                    <BuyLeadNavbar />

                    <Box sx={{ display: 'flex', m: 2 }}>
                        <div className="col-sm-2 bg-white m-2 p-4">
                            <Typography sx={{ fontWeight: 'bold' }}>Suggest Countries</Typography>
                            <RadioGroup row >

                                <FormControlLabel value="Recommended" control={<Radio />} label="Recommended" />
                                <FormControlLabel value="China" control={<Radio />} label="China" />
                                <FormControlLabel value="South Africa" control={<Radio />} label="South Africa" />
                                <FormControlLabel value="Sri Lanka" control={<Radio />} label="Sri Lanka" />
                                <FormControlLabel value="Pakistan" control={<Radio />} label="Pakistan" />
                            </RadioGroup>
                        </div>
                        <div className="col-sm-2 bg-white m-2 p-4">
                            <Typography sx={{ fontWeight: 'bold' }}>Categories/Products</Typography>
                            <FormControlLabel control={<Checkbox />} label="Pipe Fitting" />
                            <FormControlLabel control={<Checkbox />} label="Logo Design" />
                            <FormControlLabel control={<Checkbox />} label="Peneumatic" />
                        </div>
                        <div className="col-sm-2 bg-white m-2 p-4">
                            <Typography sx={{ fontWeight: 'bold' }}>Lead Type</Typography>
                            <FormControlLabel control={<Checkbox />} label=" Bulk" />
                            <FormControlLabel control={<Checkbox />} label="Business" />
                            <FormControlLabel control={<Checkbox />} label="Quantity" />
                        </div>

                        <div className="col-sm-2 bg-white m-2 p-4">
                            <Typography sx={{ fontWeight: 'bold' }}>Saved Filter</Typography>

                        </div>

                    </Box>

                    <Box sx={{ m: 2, mt: 4 }}>

                        <Tabs defaultValue={0}>

                            <TabsList>
                                <span style={{ margin: '10px' }}>Sort by: </span>
                                <Tab style={{ fontWeight: 'bold', borderRadius: '20px', border: 'none', padding: '4px 16px', marginRight: '5px', backgroundColor: 'white' }} value={0}>Relevant</Tab>
                                <Tab style={{ fontWeight: 'bold', borderRadius: '20px', border: 'none', padding: '4px 16px', marginRight: '5px', backgroundColor: 'white' }} value={1}>Recent</Tab>
                            </TabsList>

                            <TabPanel value={0} >
                                <Box sx={{ width: '1100px', mt: '10px', bgcolor: 'white', boxShadow: '1px 1px 5px 1px grey', borderRadius: '6px' }}>
                                    <div style={{ display: 'flex' }}>
                                        <div className=" col-sm-4 p-4">
                                            <h5 style={{ fontWeight: 'bold' }}>Kids Accesories with Customised Logo</h5>
                                            <p style={{margin:0}}><AccessTimeFilledIcon sx={{ color: 'orange', mr: 1 }} /><b>3 Days Old</b></p>
                                            <p style={{ fontWeight: 'bold', color: 'rgb(36, 117, 63)',margin:0 }}><img style={{ width: '20px', marginRight: '5px' }} src={indFlg} alt="indFlg" />Mohali, Punjab</p>
                                            <p><CameraIcon sx={{ color: 'orange', mr: 1 }} />Logo Design</p>
                                            <p><i>I want to buy Kids accesories with customised logo. Kindly send me price and other details.</i></p>
                                            <p style={{ margin: 0 }}>Source File Provided	: <b>Yes</b></p>
                                            <p style={{ margin: 0 }}>Logo Design Type	:<b>all</b></p>
                                            <p>Probable Requirement Type :<b>Business Use</b></p>
                                        </div>
                                        <div className=" col-sm-6 mt-4 ps-4">
                                            <div className=" d-flex">
                                                <p><ViewColumnIcon sx={{ mr: 1, color: 'grey' }} />View Similar</p>
                                                <p style={{ margin: '0 20px' }}><StarBorderIcon sx={{ mr: 1, color: 'grey' }} />Shortlist</p>
                                                <p style={{ margin: '0 20px 0 0' }}><VisibilityOffIcon sx={{ mr: 1, color: 'grey' }} />Hide</p>
                                                <p><DeleteIcon sx={{ mr: 1, color: 'grey' }} />Not Relevant</p>
                                            </div>
                                            <p style={{ fontWeight: 'bold' }}>Buyer Details</p>
                                            <p>Products of Interest : <b> Promotional Bags, Colored Pencil, A5 Notebook</b></p>
                                            <p>Member since :  <b>1 month</b></p>
                                            <p>
                                                Available:<SendToMobileIcon sx={{ color: 'green', m: '10px 20px' }} /><EmailIcon sx={{ color: 'green' }} />
                                            </p>
                                        </div>
                                    </div>

                                    <p style={{ margin: 0, paddingLeft: '30px' }}><b>Buyer also viewed:</b></p>
                                    <Box sx={{ display: 'flex' }}>

                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', p: 3, width: '900px', bgcolor: 'rgb(242, 242, 242)' }}>
                                            <div className='d-flex col-sm-3 ms-2 p-2' style={{ borderRadius: '6px', backgroundColor: 'white' }}>
                                                <div>
                                                    <img style={{ height: 'auto', width: '100px', objectFit: 'cover' }} src='https://5.imimg.com/data5/SELLER/Default/2022/6/YX/UV/CX/714063/door-tee-500x500.jpg' alt="construction-img" />

                                                </div>
                                                <div className="ps-4">
                                                    <div><p style={{ fontSize: '13px' }}>PVC Kelvin SWR Self Fit Door Tee</p></div>
                                                    <div><p style={{ fontSize: '13px', color: 'grey' }}>₹ 172/ Piece</p></div>

                                                </div>
                                            </div>
                                            <div className='d-flex col-sm-3 ms-2 p-2' style={{ marginLeft: '10px', borderRadius: '6px', backgroundColor: 'white' }}>
                                                <div>
                                                    <img style={{ height: 'auto', width: '100px', objectFit: 'cover' }} src='https://5.imimg.com/data5/SELLER/Default/2022/6/YX/UV/CX/714063/door-tee-500x500.jpg' alt="construction-img" />

                                                </div>
                                                <div className="ps-4">
                                                    <div><p style={{ fontSize: '13px' }}>PVC Kelvin SWR Self Fit Door Tee</p></div>
                                                    <div><p style={{ fontSize: '13px', color: 'grey' }}>₹ 172/ Piece</p></div>

                                                </div>
                                            </div>
                                            <div className='d-flex col-sm-3 ms-2 p-2' style={{ marginLeft: '10px', borderRadius: '6px', backgroundColor: 'white' }}>
                                                <div>
                                                    <img style={{ height: 'auto', width: '100px', objectFit: 'cover' }} src='https://5.imimg.com/data5/SELLER/Default/2022/6/YX/UV/CX/714063/door-tee-500x500.jpg' alt="construction-img" />

                                                </div>
                                                <div className="ps-4">
                                                    <div><p style={{ fontSize: '13px' }}>PVC Kelvin SWR Self Fit Door Tee</p></div>
                                                    <div><p style={{ fontSize: '13px', color: 'grey' }}>₹ 172/ Piece</p></div>

                                                </div>
                                            </div>

                                        </Box>
                                        <Box sx={{ pt: 5, ml: '-40px' }}>
                                            <Button variant="contained" sx={{ mt: 5, p: '20px 30px' }}>Contact Buyer now</Button>
                                        </Box>
                                    </Box>
                                </Box>

                                <Box sx={{ width: '1100px', mt: '10px', bgcolor: 'white', boxShadow: '1px 1px 5px 1px grey', borderRadius: '6px' }}>
                                    <div style={{ display: 'flex' }}>
                                        <div className=" col-sm-4 p-4">
                                            <h5 style={{ fontWeight: 'bold' }}>Apollo PVC Pipe Fitting</h5>
                                            <p style={{margin:0}}><AccessTimeFilledIcon sx={{ color: 'orange', mr: 1 }} /><b>13 hour ago</b></p>
                                            <p style={{ fontWeight: 'bold', color: 'rgb(36, 117, 63)',margin:0 }}><img style={{ width: '20px', marginRight: '5px' }} src={indFlg} alt="indFlg" />Moradabad, Uttar Pradesh</p>
                                            <p><CameraIcon sx={{ color: 'orange', mr: 1 }} />Pipe Fittings</p>
                                            <p><i>I want to buy Apollo PVC Pipe Fitting.Kindly send me price and other details.</i></p>
                                            <p style={{ margin: 0 }}>Quantity	: <b>100 Piece</b></p>
                                            <p style={{ margin: 0 }}>Fitting Type :<b>Elbow</b></p>
                                            <p>Probable Requirement Type :<b>Business Use</b></p>
                                        </div>
                                        <div className=" col-sm-6 mt-4 ps-4">
                                            <div className=" d-flex">
                                                <p><ViewColumnIcon sx={{ mr: 1, color: 'grey' }} />View Similar</p>
                                                <p style={{ margin: '0 20px' }}><StarBorderIcon sx={{ mr: 1, color: 'grey' }} />Shortlist</p>
                                                <p style={{ margin: '0 20px 0 0' }}><VisibilityOffIcon sx={{ mr: 1, color: 'grey' }} />Hide</p>
                                                <p><DeleteIcon sx={{ mr: 1, color: 'grey' }} />Not Relevant</p>
                                            </div>
                                            <p style={{ fontWeight: 'bold' }}>Buyer Details</p>
                                            <p>Products of Interest : <b> Ashirvad Cpvc Pipe Fittings, Cpvc Pipe Fittingsk</b></p>
                                            <p>Member since :  <b>1 month</b></p>
                                            <p>
                                                Available:<SendToMobileIcon sx={{ color: 'green', m: '10px 20px' }} /><EmailIcon sx={{ color: 'green' }} />
                                            </p>
                                        </div>
                                    </div>

                                    <p style={{ margin: 0, paddingLeft: '30px' }}><b>Buyer also viewed:</b></p>
                                    <Box sx={{ display: 'flex' }}>

                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', p: 3, width: '900px', bgcolor: 'rgb(242, 242, 242)' }}>
                                            <div className='d-flex col-sm-3 ms-2 p-2' style={{ borderRadius: '6px', backgroundColor: 'white' }}>
                                                <div>
                                                    <img style={{ height: 'auto', width: '100px', objectFit: 'cover' }} src='https://5.imimg.com/data5/SELLER/Default/2022/6/YX/UV/CX/714063/door-tee-500x500.jpg' alt="construction-img" />

                                                </div>
                                                <div className="ps-4">
                                                    <div><p style={{ fontSize: '13px' }}>PVC Kelvin SWR Self Fit Door Tee</p></div>
                                                    <div><p style={{ fontSize: '13px', color: 'grey' }}>₹ 172/ Piece</p></div>

                                                </div>
                                            </div>
                                            <div className='d-flex col-sm-3 ms-2 p-2' style={{ marginLeft: '10px', borderRadius: '6px', backgroundColor: 'white' }}>
                                                <div>
                                                    <img style={{ height: 'auto', width: '100px', objectFit: 'cover' }} src='https://5.imimg.com/data5/SELLER/Default/2022/6/YX/UV/CX/714063/door-tee-500x500.jpg' alt="construction-img" />

                                                </div>
                                                <div className="ps-4">
                                                    <div><p style={{ fontSize: '13px' }}>PVC Kelvin SWR Self Fit Door Tee</p></div>
                                                    <div><p style={{ fontSize: '13px', color: 'grey' }}>₹ 172/ Piece</p></div>

                                                </div>
                                            </div>
                                            <div className='d-flex col-sm-3 ms-2 p-2' style={{ marginLeft: '10px', borderRadius: '6px', backgroundColor: 'white' }}>
                                                <div>
                                                    <img style={{ height: 'auto', width: '100px', objectFit: 'cover' }} src='https://5.imimg.com/data5/SELLER/Default/2022/6/YX/UV/CX/714063/door-tee-500x500.jpg' alt="construction-img" />

                                                </div>
                                                <div className="ps-4">
                                                    <div><p style={{ fontSize: '13px' }}>PVC Kelvin SWR Self Fit Door Tee</p></div>
                                                    <div><p style={{ fontSize: '13px', color: 'grey' }}>₹ 172/ Piece</p></div>

                                                </div>
                                            </div>

                                        </Box>
                                        <Box sx={{ pt: 5, ml: '-40px' }}>
                                            <Button variant="contained" sx={{ mt: 5, p: '20px 30px' }}>Contact Buyer now</Button>
                                        </Box>
                                    </Box>
                                </Box>

                            </TabPanel>
                            <TabPanel value={1}>

                            </TabPanel>
                        </Tabs>
                    </Box>


                </div>
            </Box>




        </>
    )
}

export default ExportLeadsPge
