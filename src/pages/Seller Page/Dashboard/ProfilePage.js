import { Box, Button, Checkbox, FormControlLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material"
import '../../../stylecss/profileStyle.css'
import Navbar from "../../../Components/Navbar"
import DashboardSideBar from "../../../Components/DashboardSideBar"
import { Tabs,Tab, TabPanel, TabsList } from "@mui/base"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';
import uploadImg from '../../../assets/uploadImg.jpg'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import cmpanyImg from '../../../assets/cmpanyImg.jpg'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis } from "recharts";
import apiData from "../../../Components/BarChartApi";


const ProfilePage = () => {



    return (
        <>
            <Navbar />
            <Box sx={{ display: 'flex', bgcolor: 'rgb(232, 232, 232)' }}>
                <div className=" col-sm-2" style={{ width: '120px', position: 'sticky', left: 0 }}>
                    <DashboardSideBar />
                </div>

                <div className=" col-sm-11">
                    <Box sx={{ m: 3 }}>

                        <Tabs defaultValue={0}>
                            <TabsList>
                                <Tab style={{ fontWeight: 'bold', borderRadius: '10px 10px 0 0', border: 'none', padding: '8px 12px', marginRight: '5px', backgroundColor: 'white' }} value={0}>Contact Details</Tab>
                                <Tab style={{ fontWeight: 'bold', borderRadius: '10px 10px 0 0', border: 'none', padding: '8px 12px', marginRight: '5px', backgroundColor: 'white' }} value={1}> Business Profile</Tab>
                                <Tab style={{ fontWeight: 'bold', borderRadius: '10px 10px 0 0', border: 'none', padding: '8px 12px', marginRight: '5px', backgroundColor: 'white' }} value={2}>Website Pages</Tab>
                                <Tab style={{ fontWeight: 'bold', borderRadius: '10px 10px 0 0', border: 'none', padding: '8px 12px', marginRight: '5px', backgroundColor: 'white' }} value={3}>Create Catalog URL</Tab>
                                <Tab style={{ fontWeight: 'bold', borderRadius: '10px 10px 0 0', border: 'none', padding: '8px 12px', marginRight: '5px', backgroundColor: 'white' }} value={4}>Websitges</Tab>
                            </TabsList>

                            <TabPanel value={0}>
                                <h6 style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 40px' }}>Contact Information</h6>

                                <div style={{ backgroundColor: 'white' }} className=" d-flex">
                                    <div className=" col-sm-6 p-1" style={{ padding: '0 0 0 40px' }}>

                                        <div style={{ margin: '10px' }}><label style={{ fontSize: '14px', color: 'grey' }}>Contact Person Name</label>
                                            <TextField size="small" placeholder="Name" sx={{ width: '320px', marginLeft: '50px' }} /></div>
                                        <div style={{ margin: '10px' }}><label style={{ fontSize: '14px', color: 'grey' }}>Designation</label>
                                            <TextField size="small" placeholder="" sx={{ width: '320px', marginLeft: '110px' }} /></div>
                                        <div style={{ margin: '10px' }}> <label style={{ fontSize: '14px', color: 'grey' }}>Mobile Number</label>
                                            <TextField size="small" placeholder="Number" sx={{ width: '320px', marginLeft: '85px' }} /></div>
                                        <div style={{ margin: '10px' }}><label style={{ fontSize: '14px', color: 'grey' }}>Alternate Mobile Number</label>
                                            <TextField size="small" placeholder="" sx={{ width: '320px', marginLeft: '26px' }} /></div>
                                        <div style={{ margin: '10px' }}><label style={{ fontSize: '14px', color: 'grey' }}>Email</label>
                                            <TextField size="small" placeholder="Email" sx={{ width: '320px', marginLeft: '150px' }} /></div>
                                        <div style={{ margin: '10px' }}> <label style={{ fontSize: '14px', color: 'grey' }}>Alternate Email</label>
                                            <TextField size="small" placeholder="Alternate Email" sx={{ width: '320px', marginLeft: '90px' }} /></div>
                                        <div style={{ margin: '10px' }}><label style={{ fontSize: '14px', color: 'grey' }}>Landline Number</label>
                                            <TextField size="small" placeholder="Landline No" sx={{ width: '320px', marginLeft: '80px' }} /></div>
                                        <div style={{ margin: '10px' }}><label style={{ fontSize: '14px', color: 'grey' }}>Alternate Landline Number</label>
                                            <TextField size="small" placeholder="Alternate Landline No" sx={{ width: '320px', marginLeft: '20px' }} /></div>

                                    </div>
                                    <div className="col-sm-6" style={{ padding: '40px 100px' }}>
                                        <AccountCircleIcon sx={{ fontSize: '122px' }} />
                                        <Typography sx={{ ml: 2 }}>Profile Photo</Typography>

                                        <Button sx={{ margin: '150px 0  0 300px' }} variant="contained">Save</Button>

                                    </div>
                                </div>


                                <div style={{ padding: '20px', backgroundColor: 'white', marginTop: '20px' }}>

                                    <div style={{ margin: '10px', display: 'flex', paddingLeft: '12px' }}>
                                        <div>
                                            <label style={{ fontSize: '14px', color: 'grey' }}>Division:</label><br />
                                            <select style={{ width: '350px', borderStyle: 'groove', padding: '10px 30px', borderRadius: '6px', marginRight: '100px' }}>
                                                <option>select Division</option>
                                                <option>Stroe</option>
                                                <option>Showroom</option>
                                                <option>Branch office</option>
                                            </select>

                                        </div>
                                        <div>
                                            <label style={{ fontSize: '14px', color: 'grey' }}>Contact Person Name:</label> <br />
                                            <TextField size="small" placeholder="Name" sx={{ p: '5px 0', width: '350px' }} />
                                        </div>

                                    </div>
                                    <div className=" d-flex ms-4">
                                        <div>
                                            <label style={{ fontSize: '14px', color: 'grey' }}>Address:</label> <br />
                                            <TextField size="small" placeholder="Address" sx={{ p: '5px 0', width: '550px' }} />
                                        </div>
                                        <div className=" ms-4">
                                            <label style={{ fontSize: '14px', color: 'grey' }}>Country:</label> <br />
                                            <TextField size="small" placeholder="Country" sx={{ p: '5px 0', width: '350px' }} />
                                        </div>
                                    </div>
                                    <div className=" d-flex mt-2 ms-4">
                                        <div>
                                            <label style={{ fontSize: '14px', color: 'grey' }}>Mobile Number:</label> <br />
                                            <TextField size="small" placeholder="Mobile Number" sx={{ p: '5px 0', width: '300px' }} />
                                        </div>
                                        <div className=" ms-4">
                                            <label style={{ fontSize: '14px', color: 'grey' }}>Landline Number:</label> <br />
                                            <TextField size="small" placeholder="Landline Number" sx={{ p: '5px 0', width: '300px' }} />
                                        </div>
                                        <div className=" ms-4">
                                            <label style={{ fontSize: '14px', color: 'grey' }}>Toll Free Number:</label> <br />
                                            <TextField size="small" placeholder="Toll Free Number" sx={{ p: '5px 0', width: '300px' }} />
                                        </div>
                                    </div>
                                    <div className=" d-flex mt-2">

                                        <div className=" ms-4">
                                            <label style={{ fontSize: '14px', color: 'grey' }}>E-mail:</label> <br />
                                            <TextField size="small" placeholder="E-mail" sx={{ p: '5px 0', width: '300px' }} />
                                        </div>
                                        <div className=" ms-4">
                                            <label style={{ fontSize: '14px', color: 'grey' }}>Fax Number:</label> <br />
                                            <TextField size="small" placeholder="Fax Number" sx={{ p: '5px 0', width: '300px' }} />
                                        </div>
                                        <div className="mt-4" style={{ marginLeft: '140px' }}>
                                            <Button sx={{ mr: 2 }}>cancel</Button>
                                            <Button variant="contained">Save</Button>
                                        </div>
                                    </div>

                                </div>

                            </TabPanel>


                            <TabPanel value={1}>
                                <h6 style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 40px' }}>Company Details</h6>

                                <div style={{ backgroundColor: 'white' }} className=" d-flex">
                                    <div className=" col-sm-8 p-1" style={{ padding: '0 0 0 40px' }}>

                                        <div style={{ margin: '10px' }}><label style={{ fontSize: '14px', color: 'grey' }}>Company Name</label>
                                            <TextField size="small" placeholder="Company Name" sx={{ width: '320px', marginLeft: '60px' }} /></div>
                                        <div style={{ margin: '10px' }}><label style={{ fontSize: '14px', color: 'grey' }}>Year of Establishment</label>
                                            <TextField size="small" placeholder="" sx={{ width: '320px', marginLeft: '30px' }} /></div>
                                        <div style={{ margin: '10px' }}> <label style={{ fontSize: '14px', color: 'grey' }}>CEO Name</label>
                                            <TextField size="small" placeholder="CEO Name" sx={{ width: '320px', marginLeft: '95px' }} /></div>
                                        <div style={{ margin: '10px' }}><label style={{ fontSize: '14px', color: 'grey' }}>Website URL</label>
                                            <TextField size="small" placeholder="" sx={{ width: '320px', marginLeft: '86px' }} /></div>
                                        <div style={{ margin: '10px' }}><label style={{ fontSize: '14px', color: 'grey' }}>Google Business URL</label>
                                            <TextField size="small" placeholder="" sx={{ width: '320px', marginLeft: '34px' }} /></div>
                                        <div style={{ margin: '10px' }}> <label style={{ fontSize: '14px', color: 'grey' }}>Facebook Business URL</label>
                                            <TextField size="small" placeholder="" sx={{ width: '320px', marginLeft: '21px' }} /></div>
                                        <div style={{ margin: '10px' }}><label style={{ fontSize: '14px', color: 'grey' }}>Instagram Business URL</label>
                                            <TextField size="small" placeholder="" sx={{ width: '320px', marginLeft: '19px' }} /></div>
                                        <div style={{ margin: '10px' }}><label style={{ fontSize: '14px', color: 'grey' }}>Abaris Catalog URL</label>
                                            <TextField size="small" placeholder="" sx={{ width: '320px', marginLeft: '47px' }} /></div>

                                    </div>
                                    <div className="col-sm-4" style={{ padding: '40px 3px' }}>
                                        <BusinessIcon sx={{ fontSize: '122px', borderRadius: '50%' }} />
                                        <Typography>Company Logo</Typography>

                                        <Button sx={{ margin: '150px 0  0 240px' }} variant="contained">Save</Button>

                                    </div>
                                </div>


                                <div style={{ padding: '10px', backgroundColor: 'white', marginTop: '20px' }}>
                                    <h6 style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 40px' }}>Address </h6>

                                    <div style={{ margin: '10px', display: 'flex', paddingLeft: '12px' }}>
                                        <div>
                                            <label style={{ fontSize: '14px', color: 'grey' }}>PIN Code:</label>
                                            <TextField size="small" placeholder="Pin Code" sx={{ ml: 2, width: '350px' }} />

                                        </div>
                                        <div style={{ marginLeft: '40px' }}>
                                            <label style={{ fontSize: '14px', color: 'grey' }}>City:</label>
                                            <TextField size="small" placeholder="city" sx={{ ml: 2, width: '350px' }} />
                                        </div>

                                    </div>
                                    <div className=" d-flex ms-4">
                                        <div>
                                            <label style={{ fontSize: '14px', color: 'grey' }}>State:</label>
                                            <TextField size="small" placeholder="State" sx={{ ml: 2, width: '350px' }} />
                                        </div>
                                        <div className=" ms-5">
                                            <label style={{ fontSize: '14px', color: 'grey' }}>Country:</label>
                                            <TextField size="small" placeholder="Country" sx={{ ml: 2, width: '350px' }} />
                                        </div>
                                    </div>
                                    <div className=" d-flex mt-2 ms-4">
                                        <div>
                                            <label style={{ fontSize: '14px', color: 'grey' }}>Address (Building No/floor):</label>
                                            <TextField size="small" placeholder="" sx={{ ml: 2, width: '300px' }} />
                                        </div>
                                        <div className=" ms-5">
                                            <label style={{ fontSize: '14px', color: 'grey' }}>Address (Area/Street):</label>
                                            <TextField size="small" placeholder="" sx={{ ml: 2, width: '300px' }} />
                                        </div>

                                    </div>
                                    <div className=" d-flex mt-2">

                                        <div className=" ms-4">
                                            <label style={{ fontSize: '14px', color: 'grey' }}>Locality:</label>
                                            <TextField size="small" placeholder="" sx={{ ml: 2, width: '350px' }} />
                                        </div>
                                        <div className=" ms-5">
                                            <label style={{ fontSize: '14px', color: 'grey' }}>Landmark:</label>
                                            <TextField size="small" placeholder="" sx={{ ml: 2, width: '350px' }} />
                                        </div>

                                    </div>
                                    <div className="mt-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                        <Button variant="contained">Save</Button>
                                    </div>


                                </div>

                                <div style={{ padding: '10px', backgroundColor: 'white', marginTop: '20px' }}>
                                    <h6 style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 40px' }}>Statutory Details </h6>

                                    <div style={{ margin: '10px', display: 'flex', paddingLeft: '12px' }}>
                                        <div>
                                            <label style={{ fontSize: '14px', color: 'grey' }}>GSTIN:</label>
                                            <TextField size="small" placeholder="GSTIN" sx={{ ml: 2, width: '350px' }} />

                                        </div>
                                        <div style={{ marginLeft: '40px' }}>
                                            <label style={{ fontSize: '14px', color: 'grey' }}>PAN:</label>
                                            <TextField size="small" placeholder="PAN" sx={{ ml: 2, width: '350px' }} />
                                        </div>

                                    </div>
                                    <div className=" d-flex ms-4">
                                        <div>
                                            <label style={{ fontSize: '14px', color: 'grey' }}>TAN:</label>
                                            <TextField size="small" placeholder="TAN" sx={{ ml: 2, width: '350px' }} />
                                        </div>
                                        <div className=" ms-5">
                                            <label style={{ fontSize: '14px', color: 'grey' }}>CIN/LLPIN:</label>
                                            <TextField size="small" placeholder="CIN/LLPIN" sx={{ ml: 2, width: '350px' }} />
                                        </div>
                                    </div>
                                    <div className=" d-flex mt-2 ms-4">
                                        <div>
                                            <label style={{ fontSize: '14px', color: 'grey' }}>Import Export Code(IEC):</label>
                                            <TextField size="small" placeholder="" sx={{ ml: 2, width: '300px' }} />
                                        </div>

                                    </div>
                                    <div className="mt-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Button variant="contained">Save</Button>
                                    </div>

                                </div>

                                <div style={{ padding: '10px', backgroundColor: 'white', marginTop: '20px' }}>
                                    <h6 style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 40px' }}>Bank Account Details </h6>

                                    <div style={{ margin: '10px', display: 'flex', paddingLeft: '12px' }}>
                                        <div>
                                            <label style={{ fontSize: '14px', color: 'grey' }}>Account Number:</label>
                                            <TextField size="small" placeholder="Account Number" sx={{ ml: 2, width: '350px' }} />

                                        </div>
                                        <div style={{ marginLeft: '40px' }}>
                                            <label style={{ fontSize: '14px', color: 'grey' }}>Re-enter Account Number:</label>
                                            <TextField size="small" placeholder=" Re-enter Number" sx={{ ml: 2, width: '350px' }} />
                                        </div>

                                    </div>
                                    <div className=" d-flex ms-4">
                                        <div>
                                            <label style={{ fontSize: '14px', color: 'grey' }}>A/c Holder Name:</label>
                                            <TextField size="small" placeholder="Name" sx={{ ml: 2, width: '350px' }} />
                                        </div>
                                        <div className=" ms-5">
                                            <label style={{ fontSize: '14px', color: 'grey' }}>IFSC Code:</label>
                                            <TextField size="small" placeholder="IFSC Code" sx={{ ml: 2, width: '350px' }} />
                                        </div>
                                    </div>
                                    <div className=" d-flex mt-2 ms-4">
                                        <div>
                                            <label style={{ fontSize: '14px', color: 'grey' }}>BankName(As Per IFSCCode):</label>
                                            <TextField size="small" placeholder="" sx={{ ml: 2, width: '300px' }} />
                                        </div>
                                        <div className=" ms-3">
                                            <label style={{ fontSize: '14px', color: 'grey' }}>Branch Name(As Per IFSC Code):</label>
                                            <TextField size="small" placeholder="" sx={{ ml: 2, width: '300px' }} />
                                        </div>
                                    </div>
                                    <div className="mt-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Button variant="contained">Save</Button>
                                    </div>

                                </div>

                                <div style={{ padding: '10px', backgroundColor: 'white', marginTop: '20px' }}>
                                    <h6 style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 40px' }}>Bank Account Details </h6>

                                    <div style={{ margin: '10px', display: 'flex', paddingLeft: '12px' }}>
                                        <div>
                                            <label style={{ fontSize: '14px', color: 'grey' }}>Primary Business Type:</label>
                                            <select style={{ width: '350px', borderStyle: 'groove', padding: '10px 30px', borderRadius: '6px', marginRight: '100px' }}>
                                                <option>select Division</option>
                                                <option>Stroe</option>
                                                <option>Showroom</option>
                                                <option>Branch office</option>
                                            </select>

                                        </div>
                                        <div style={{ marginLeft: '40px' }}>
                                            <label style={{ fontSize: '14px', color: 'grey' }}>Ownership Type:</label>
                                            <select style={{ width: '350px', borderStyle: 'groove', padding: '10px 30px', borderRadius: '6px', marginRight: '100px' }}>
                                                <option>select Division</option>
                                                <option>Stroe</option>
                                                <option>Showroom</option>
                                                <option>Branch office</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div className=" d-flex ms-4">
                                        <div>
                                            <label style={{ fontSize: '14px', color: 'grey' }}>Number Of Employees:</label>
                                            <select style={{ width: '350px', borderStyle: 'groove', padding: '10px 30px', borderRadius: '6px', marginRight: '100px' }}>
                                                <option>select Division</option>
                                                <option>Stroe</option>
                                                <option>Showroom</option>
                                                <option>Branch office</option>
                                            </select>
                                        </div>
                                        <div className=" ms-5">
                                            <label style={{ fontSize: '14px', color: 'grey' }}>Annual Turnover :</label>
                                            <select style={{ width: '350px', borderStyle: 'groove', padding: '10px 30px', borderRadius: '6px', marginRight: '100px' }}>
                                                <option>select Division</option>
                                                <option>Stroe</option>
                                                <option>Showroom</option>
                                                <option>Branch office</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className=" mt-2 ms-4">
                                        <h6 style={{ fontSize: '14px', color: 'grey', margin: '30px 0 10px 0' }}>Secondary Business</h6>
                                        <div className=" d-flex">
                                            <div className=" col-sm-4">
                                                <Checkbox /> <span>Importer</span> <br />
                                                <Checkbox /> <span>Manufacturer</span><br />
                                                <Checkbox /> <span>Retailer</span><br />
                                                <Checkbox /> <span>Buyer-Company</span><br />
                                                <Checkbox /> <span>Trader</span>

                                            </div>
                                            <div className=" col-sm-4">
                                                <Checkbox /> <span>supplier</span><br />
                                                <Checkbox /> <span>Exporter</span><br />
                                                <Checkbox /> <span>Service Provider</span><br />
                                                <Checkbox /> <span>Non Profit Organisation</span><br />
                                                <Checkbox /> <span>Association</span>

                                            </div>
                                            <div className=" col-sm-4">
                                                <Checkbox /> <span>Distributor</span><br />
                                                <Checkbox /> <span>Wholesaler</span><br />
                                                <Checkbox /> <span>Buyer-Individual</span><br />
                                                <Checkbox /> <span>Buying House</span><br />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Button variant="contained">Save</Button>
                                    </div>

                                </div>

                                <div style={{ padding: '10px', backgroundColor: 'white', marginTop: '20px' }}>

                                    <h6 style={{ fontSize: '18px', margin: '30px 0 10px 30px' }}>Business Card</h6>
                                    <div className=" d-flex">
                                        <div className=" p-4">
                                            <p style={{ paddingLeft: '40px' }}>Front View</p>
                                            <img style={{ width: '150px', height: 'auto' }} src={uploadImg} alt="uploadImg" />
                                            <input type="file" />
                                        </div>
                                        <div className="p-4" style={{ boder: " 1px solid black " }}>
                                            <p style={{ paddingLeft: '40px' }}> Back View</p>
                                            <img style={{ width: '150px', height: 'auto' }} src={uploadImg} alt="uploadImg"></img>
                                            <input type="file" />
                                        </div>
                                        
                                    </div>


                                </div>
                            </TabPanel>


                            <TabPanel value={2}>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', bgcolor: 'white', pl: 3, mt: 0.3 }}>
                                    <div className="webPgCard">
                                        <HomeOutlinedIcon sx={{ fontSize: '90px' }} />
                                        <p>HOME PAGE</p>
                                    </div>
                                    <div className="webPgCard">
                                        <GroupsOutlinedIcon sx={{ fontSize: '90px' }} />
                                        <p>ABOUT US</p>
                                    </div>
                                    <div className="webPgCard">
                                        <WorkspacePremiumOutlinedIcon sx={{ fontSize: '90px' }} />
                                        <p>AWARDS & MEMBERSHIPS</p>
                                    </div>
                                    <div className="webPgCard">
                                        <BeenhereOutlinedIcon sx={{ fontSize: '90px' }} />
                                        <p>QUALITY & COMPLIANCE</p>
                                    </div>
                                    <div className="webPgCard">
                                        <BusinessOutlinedIcon sx={{ fontSize: '90px' }} />
                                        <p>INFRASTRUCTURE & FACILITIES</p>
                                    </div>
                                    <div className="webPgCard">
                                        <QuestionAnswerOutlinedIcon sx={{ fontSize: '90px' }} />
                                        <p>TESTIMONIALS</p>
                                    </div>
                                    <div className="webPgCard">
                                        <FeedOutlinedIcon sx={{ fontSize: '90px' }} />
                                        <p>NEWS</p>
                                    </div>
                                    <div className="webPgCard">
                                        <WorkOutlineOutlinedIcon sx={{ fontSize: '90px' }} />
                                        <p>JOBS</p>
                                    </div>
                                    <div className="webPgCard">
                                        <AccountBoxOutlinedIcon sx={{ fontSize: '90px' }} />
                                        <p>CUSTOM PROFILE</p>
                                    </div>

                                </Box>
                            </TabPanel>

                            <TabPanel value={3}>
                                <Box sx={{ display: 'flex', bgcolor: 'white', mt: 0.3 }}>
                                    <div className=" col-sm-8">
                                        <p style={{ backgroundColor: 'chocolate', color: 'white', padding: '20px', margin: '30px' }}> Your Abaris catalog URL is <b>not activated</b>. Call +91-9696969696 for help</p>
                                    </div>
                                    <div className=" col-sm-3">
                                        <img style={{ width: '300px' }} src={cmpanyImg} alt="cmpanyImg" />
                                    </div>
                                </Box>
                            </TabPanel>

                            <TabPanel value={4}>
                                <Box>
                                    <div className=" d-flex  bg-white p-2" style={{ textAlign: 'center', marginTop: '2px', borderBottom: '1px solid green' }}>
                                        <div className=" d-flex ">
                                            <SignalCellularAltIcon sx={{ color: 'deepskyblue', fontSize: '40px', mr: 1 }} />
                                            <h5 style={{ marginTop: '7px', fontWeight: 'bold' }}>Performance Reports</h5>
                                        </div>
                                        <div className=" d-flex" style={{ position: 'absolute', right: '40px' }}>
                                            <h6 style={{ backgroundColor: 'rgb(237, 234, 234)', marginTop: '8px' }}>August 2023</h6>
                                            <Button sx={{ ml: 3 }} size="small" variant="contained">Download</Button>
                                        </div>
                                    </div>

                                    <Box sx={{ m: 1 }}>
                                        <Tabs defaultValue={0}>
                                            <TabsList>
                                                <Tab style={{ fontSize: '13px', border: 'none', padding: '8px 12px', marginRight: '5px', backgroundColor: 'white' }} value={0}>All Enquiries</Tab>
                                                <Tab style={{ fontSize: '13px', border: 'none', padding: '8px 12px', marginRight: '5px', backgroundColor: 'white' }} value={1}>BuyLeads</Tab>
                                                <Tab style={{ fontSize: '13px', border: 'none', padding: '8px 12px', marginRight: '5px', backgroundColor: 'white' }} value={2}>Calls</Tab>
                                                <Tab style={{ fontSize: '13px', border: 'none', padding: '8px 12px', marginRight: '5px', backgroundColor: 'white' }} value={3}>Lead Manager Follow Up</Tab>
                                                <Tab style={{ fontSize: '13px', border: 'none', padding: '8px 12px', marginRight: '5px', backgroundColor: 'white' }} value={4}>Advance Filters</Tab>
                                                <Tab style={{ fontSize: '13px', border: 'none', padding: '8px 12px', marginRight: '5px', backgroundColor: 'white' }} value={5}>Price Insights</Tab>
                                                <Tab style={{ fontSize: '13px', border: 'none', padding: '8px 12px', marginRight: '5px', backgroundColor: 'white' }} value={6}>Payments Collected</Tab>
                                                <Tab style={{ fontSize: '13px', border: 'none', padding: '8px 12px', marginRight: '5px', backgroundColor: 'white' }} value={7}> Catalog Quality</Tab>
                                                <Tab style={{ fontSize: '13px', border: 'none', padding: '8px 12px', marginRight: '5px', backgroundColor: 'white' }} value={8}>Buying Activity</Tab>
                                                <Tab style={{ fontSize: '13px', border: 'none', padding: '8px 12px', marginRight: '5px', backgroundColor: 'white' }} value={9}>My Reviews</Tab>

                                            </TabsList>

                                            <TabPanel value={0}>
                                                <div style={{ backgroundColor: 'white', margin: '4px 1px', padding: '30px 0 10px 10px' }}>
                                                    <Tabs>
                                                        <TabsList style={{ display: 'flex' }}>
                                                            <div>
                                                                <Tab style={{ fontSize: '16px', border: 'none', padding: '12px 30px', marginRight: '5px' }} value={0}>All</Tab>
                                                                <Tab style={{ fontSize: '16px', border: 'none', padding: '12px 30px', marginRight: '5px' }} value={1}>Top Categories</Tab>
                                                                <Tab style={{ fontSize: '16px', border: 'none', padding: '12px 30px', marginRight: '5px' }} value={2}>Top Locations</Tab>
                                                            </div>
                                                            <div style={{ position: 'absolute', right: '40px' }}>
                                                                <Tab style={{ fontSize: '16px', border: 'none', padding: '12px 30px', marginRight: '5px' }} value={3}> Month</Tab>
                                                                <Tab style={{ fontSize: '16px', border: 'none', padding: '12px 30px', marginRight: '5px' }} value={4}>Week</Tab>
                                                                <Tab style={{ fontSize: '16px', border: 'none', padding: '12px 30px', marginRight: '5px' }} value={5}>Day</Tab>
                                                            </div>


                                                        </TabsList>

                                                        <TabPanel style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 40px' }} value={0}>All Tab Content</TabPanel>
                                                        <TabPanel style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 40px' }} value={1}>Categories tab Content</TabPanel>
                                                        <TabPanel style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 40px' }} value={2}>Location tab Content</TabPanel>
                                                        <TabPanel style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 40px' }} value={3}>months tab</TabPanel>
                                                        <TabPanel style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 40px' }} value={4}>week tab</TabPanel>
                                                        <TabPanel style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 40px' }} value={5}>day tab</TabPanel>
                                                    </Tabs>
                                                </div>
                                            </TabPanel>

                                            <TabPanel value={1}>
                                                <div style={{ backgroundColor: 'white', margin: '4px 1px', padding: '30px 0 10px 10px' }}>
                                                    <Tabs>
                                                        <TabsList style={{ display: 'flex' }}>
                                                            <div>
                                                                <Tab style={{ fontSize: '16px', border: 'none', padding: '12px 30px', marginRight: '5px' }} value={0}>Active</Tab>
                                                                <Tab style={{ fontSize: '16px', border: 'none', padding: '12px 30px', marginRight: '5px' }} value={1}>DaysConsumed</Tab>
                                                            </div>
                                                            <div style={{ position: 'absolute', right: '40px' }}>
                                                                <Tab style={{ fontSize: '16px', border: 'none', padding: '12px 30px', marginRight: '5px' }} value={3}> Month</Tab>
                                                                <Tab style={{ fontSize: '16px', border: 'none', padding: '12px 30px', marginRight: '5px' }} value={4}>Week</Tab>
                                                                <Tab style={{ fontSize: '16px', border: 'none', padding: '12px 30px', marginRight: '5px' }} value={5}>Day</Tab>
                                                            </div>


                                                        </TabsList>

                                                        <TabPanel style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 40px' }} value={0}>
                                                            <ResponsiveContainer width='100%' aspect={3}>
                                                                <BarChart data={apiData}
                                                                    margin={{ top: 20, right: 80, bottom: 20, left: 30, }}
                                                                >
                                                                    <CartesianGrid strokeDasharray='3 3' />
                                                                    <XAxis dataKey='month' interval='preserveStartEnd' />
                                                                    <Bar type='monotone' dataKey='days' fill='green' maxBarSize={30} />

                                                                </BarChart>

                                                            </ResponsiveContainer>
                                                        </TabPanel>

                                                        <TabPanel style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 5px' }} value={1}>
                                                            <Tabs>
                                                                <TabsList>
                                                                    <Tab style={{ fontSize: '16px', border: 'none', padding: '12px 30px', marginRight: '5px' }} value={0}>Count</Tab>
                                                                    <Tab style={{ fontSize: '16px', border: 'none', padding: '12px 30px', marginRight: '5px' }} value={1}>Time Distribution</Tab>
                                                                </TabsList>
                                                                <TabPanel value={0} style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 10px' }}>
                                                                    <RadioGroup row >

                                                                        <FormControlLabel value="Both" control={<Radio />} label="Both" />
                                                                        <FormControlLabel value="India" control={<Radio />} label="India" />
                                                                        <FormControlLabel value="Foreign" control={<Radio />} label="Foreign" />

                                                                    </RadioGroup>
                                                                </TabPanel>
                                                                <TabPanel value={1} style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 40px' }}>

                                                                    <p>0-24 hr</p>
                                                                    <p>4-24 hr</p>
                                                                    <p>more than 24 hr</p>

                                                                </TabPanel>

                                                            </Tabs>
                                                        </TabPanel>

                                                        <TabPanel style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 40px' }} value={3}>months tab</TabPanel>
                                                        <TabPanel style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 40px' }} value={4}>week tab</TabPanel>
                                                        <TabPanel style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 40px' }} value={5}>day tab</TabPanel>
                                                    </Tabs>
                                                </div>
                                            </TabPanel>

                                            <TabPanel value={2}>
                                                <div style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 30px' }}>
                                                    <Tabs defaultValue={0}>
                                                        <TabsList style={{ display: 'flex' }}>
                                                            <div>
                                                                <Tab style={{ fontSize: '14px', border: 'none', padding: '8px 12px', marginRight: '5px' }} value={0}>All</Tab>
                                                                <Tab style={{ fontSize: '14px', border: 'none', padding: '8px 12px', marginRight: '5px' }} value={1}>Missed Calls</Tab>
                                                                <Tab style={{ fontSize: '14px', border: 'none', padding: '8px 12px', marginRight: '5px' }} value={2}>Answered Calls</Tab>
                                                                <Tab style={{ fontSize: '14px', border: 'none', padding: '8px 12px', marginRight: '5px' }} value={3}>Average Talktime</Tab>
                                                            </div>
                                                            <div style={{ position: 'absolute', right: 30 }}>
                                                                <Tab style={{ fontSize: '14px', border: 'none', padding: '8px 12px', marginRight: '5px' }} value={4}>Month</Tab>
                                                                <Tab style={{ fontSize: '14px', border: 'none', padding: '8px 12px', marginRight: '5px' }} value={5}>week</Tab>
                                                                <Tab style={{ fontSize: '14px', border: 'none', padding: '8px 12px', marginRight: '5px' }} value={6}>day</Tab>
                                                            </div>

                                                        </TabsList>

                                                        <TabPanel style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 10px' }} value={0}>All</TabPanel>
                                                        <TabPanel style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 10px' }} value={1}>Missed Calls</TabPanel>
                                                        <TabPanel style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 10px' }} value={2}>Answered Calls</TabPanel>
                                                        <TabPanel style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 10px' }} value={3}>Average Talktime</TabPanel>
                                                        <TabPanel style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 10px' }} value={4}>Month</TabPanel>
                                                        <TabPanel style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 10px' }} value={5}>week</TabPanel>
                                                        <TabPanel style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 10px' }} value={6}>day</TabPanel>

                                                    </Tabs>
                                                </div>
                                            </TabPanel>

                                            <TabPanel value={3}>
                                                <div style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 30px' }}>
                                                    <Tabs defaultValue={0}>
                                                        <TabsList style={{ display: 'flex' }}>
                                                            <div>
                                                                <Tab style={{ fontSize: '14px', border: 'none', padding: '8px 12px', marginRight: '5px' }} value={0}>Unique Follow Up</Tab>
                                                                <Tab style={{ fontSize: '14px', border: 'none', padding: '8px 12px', marginRight: '5px' }} value={1}>Follow Up Replies</Tab>
                                                                <Tab style={{ fontSize: '14px', border: 'none', padding: '8px 12px', marginRight: '5px' }} value={2}>Follow Up Calls</Tab>
                                                            </div>
                                                            <div style={{ position: 'absolute', right: 30 }}>
                                                                <Tab style={{ fontSize: '14px', border: 'none', padding: '8px 12px', marginRight: '5px' }} value={4}>Month</Tab>
                                                                <Tab style={{ fontSize: '14px', border: 'none', padding: '8px 12px', marginRight: '5px' }} value={5}>week</Tab>
                                                                <Tab style={{ fontSize: '14px', border: 'none', padding: '8px 12px', marginRight: '5px' }} value={6}>day</Tab>
                                                            </div>

                                                        </TabsList>

                                                        <TabPanel style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 10px' }} value={0}>Unique Follow Up</TabPanel>
                                                        <TabPanel style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 10px' }} value={1}>Follow Up Replies</TabPanel>
                                                        <TabPanel style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 10px' }} value={2}>Follow Up Calls</TabPanel>
                                                        <TabPanel style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 10px' }} value={4}>Month</TabPanel>
                                                        <TabPanel style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 10px' }} value={5}>week</TabPanel>
                                                        <TabPanel style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 10px' }} value={6}>day</TabPanel>

                                                    </Tabs>
                                                </div>
                                            </TabPanel>

                                            <TabPanel value={4}>
                                                <p style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 40px' }}> Advanced </p>
                                            </TabPanel>

                                            <TabPanel value={5}>
                                                <p style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 40px' }}>Price </p>
                                            </TabPanel>

                                            <TabPanel value={6}>
                                                <p style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 40px' }}>payment</p>
                                            </TabPanel>

                                            <TabPanel value={7}>
                                                <div style={{ display:'flex',flexWrap:'wrap', backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 40px' }}>
                                                    <div className="qualityPgCard">
                                                        <h1>3</h1>
                                                        <p>HOME PAGE</p>
                                                    </div>
                                                    <div className="qualityPgCard">
                                                        <h1>0</h1>
                                                        <p>With Price</p>
                                                    </div>
                                                    <div className="qualityPgCard">
                                                        <h1>0</h1>
                                                        <p>With Photo</p>
                                                    </div>
                                                    <div className="qualityPgCard">
                                                        <h1>0</h1>
                                                        <p>With Video</p>
                                                    </div>
                                                    <div className="qualityPgCard">
                                                        <h1>0</h1>
                                                        <p>With PDF</p>
                                                    </div>
                                                    
                                                   <div>
                                                   <Button  sx={{p:'40px 60px',m:3,bgcolor:'rgb(217, 255, 145)',color:'black'}}>Manage products</Button>
                                                   </div>
                                                    
                                                </div>
                                            </TabPanel>

                                            <TabPanel value={8}>
                                                <p style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 40px' }}>Buying</p>
                                            </TabPanel>

                                            <TabPanel value={9}>
                                                <p style={{ backgroundColor: 'white', margin: '2px 1px', padding: '30px 0 10px 40px' }}> Reviews</p>
                                            </TabPanel>
                                        </Tabs>
                                    </Box>
                                </Box>
                            </TabPanel>


                        </Tabs>
                    </Box>
                </div>
            </Box>

        </>
    )
}

export default ProfilePage