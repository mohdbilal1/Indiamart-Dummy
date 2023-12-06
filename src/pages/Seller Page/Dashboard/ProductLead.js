import { Box, Button, TextField } from "@mui/material"
import Navbar from "../../../Components/Navbar"
import DashboardSideBar from "../../../Components/DashboardSideBar";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Tab, TabPanel, Tabs, TabsList } from "@mui/base";
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import { NavLink } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


const ProductLead = () => {

    const openFileInput = () => {
        const fileInput = document.getElementById('fileInput');
        fileInput.click();
    };

    return (
        <>
            <Navbar />
            <Box sx={{ display: 'flex', bgcolor: 'rgb(232, 232, 242)' }}>
                <div className=" col-sm-2 position-sticky start-0" style={{ width: '120px' }}>
                    <DashboardSideBar />
                </div>

                <div className=" col-sm-10">

                    <Box>
                        <div style={{ margin: '20px 10px', justifyContent: 'center' }}>

                            <Button size="large" variant="contained" sx={{ m: '0 10px 0 20px' }}><AddOutlinedIcon sx={{ mr: 1 }} />Add product</Button>
                            <Button size="large" variant="outlined" sx={{ ml: 3, mr: 3, bgcolor: 'white' }}><AddOutlinedIcon sx={{ mr: 1 }} />Quick Add</Button>
                            <TextField size="small" sx={{ width: '300px', ml: 3, mr: 5, bgcolor: 'white' }} placeholder="Search by Name, Group and Category" />
                            <select style={{ padding: '8px', color: 'green', borderRadius: '4px' }}>
                                <option >More Options</option>
                                <option>QUick Price Update</option>
                                <option>Manage Groups</option>
                                <option>Category Report</option>
                            </select>
                        </div>

                        <div style={{ margin: '20px 0 20px 30px', display: 'flex' }}>
                            <span>Filter by:</span>
                            <select style={{ padding: '1px', color: 'green', borderRadius: '4px', marginLeft: '30px', marginRight: '30px', height: '30px' }}>
                                <option >More Options</option>
                                <option>Ten</option>
                                <option>Twenty</option>
                                <option>Thirty</option>
                            </select>
                            <Tabs defaultValue={0}>
                                <TabsList>
                                    <Tab style={{ border: 'none', padding: '2px 12px', marginRight: '5px', backgroundColor: 'white' }} value={0}>Active</Tab>
                                    <Tab style={{ border: 'none', padding: '2px 12px', marginRight: '5px', backgroundColor: 'white' }} value={1}>No Price</Tab>
                                    <Tab style={{ border: 'none', padding: '2px 12px', marginRight: '5px', backgroundColor: 'white' }} value={2}>No Photo</Tab>
                                    <Tab style={{ border: 'none', padding: '2px 12px', marginRight: '5px', backgroundColor: 'white' }} value={3}>Low Score</Tab>
                                    <Tab style={{ border: 'none', padding: '2px 12px', marginRight: '5px', backgroundColor: 'white' }} value={4}>No Specification</Tab>
                                </TabsList>
                                <TabPanel value={0} style={{ marginLeft: '-200px' }}>

                                    <Box sx={{ width: '900px', display: 'flex', bgcolor: 'white', m: 3, p: 2, borderRadius: '6px', boxShadow: '1px 1px 6px 1px rgba(89, 4, 168, 0.137)' }}>
                                        <div className="col-sm-4">
                                            <div style={{ paddingTop: '40px', paddingLeft: '40px' }}>
                                                <PhotoSizeSelectActualIcon sx={{ fontSize: '100px', color: 'grey' }} />
                                                <p style={{ paddingLeft: '10px' }}>Add Photo</p>
                                            </div>
                                            <div style={{ display: 'flex' }}>
                                                <div style={{ paddingTop: '40px', paddingLeft: '5px' }}>
                                                    <YouTubeIcon sx={{ fontSize: '40px', color: 'grey', ml: 2 }} />
                                                    <p style={{ paddingLeft: '3px' }}>Add Video</p>
                                                </div>
                                                <div style={{ paddingTop: '40px', paddingLeft: '20px' }}>
                                                    <PictureAsPdfIcon sx={{ fontSize: '40px', color: 'grey', ml: 2 }} />
                                                    <p style={{ paddingLeft: '3px' }}>Add Pdf</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-4">
                                            <span style={{ fontWeight: 'bold' }}>Pneumatic Fittings</span>
                                            <Button size="small" sx={{ ml: 2, borderRadius: '15px' }} variant="outlined"> Add Price</Button><br />
                                            <NavLink style={{ textDecoration: 'none' }}>Add Description</NavLink>
                                            <p style={{ marginTop: '20px', color: 'grey' }}>Category</p>
                                            <p style={{ marginLeft: '20px' }}>Pneumatic Fittings</p>
                                            <NavLink style={{ textDecoration: 'none' }}><AddIcon sx={{ mr: 1 }} />Add More</NavLink><br />
                                            <p style={{ marginTop: '20px', color: 'grey' }}>Group</p>
                                            <p style={{ marginLeft: '20px' }}>Pipe Fittings</p>

                                        </div>
                                        <div className="col-sm-4">
                                            <p style={{ color: 'grey' }}>Specification/Additional Details -</p>
                                            <p style={{ color: 'grey' }}>Material -</p>
                                            <p style={{ color: 'grey' }}>Fitting Type -</p>
                                            <p style={{ color: 'grey' }}>Usage/Application -</p>
                                            <p style={{ color: 'grey' }}>Size -</p>
                                            <p style={{ color: 'grey' }}>End Connection Type -</p>
                                            <p style={{ color: 'grey' }}>Type -</p>
                                        </div>

                                    </Box>

                                    <Box sx={{ width: '900px', display: 'flex', bgcolor: 'white', m: 3, p: 2, borderRadius: '6px', boxShadow: '1px 1px 6px 1px rgba(89, 4, 168, 0.137)' }}>
                                        <div className="col-sm-4">
                                            <div style={{ paddingTop: '40px', paddingLeft: '40px' }}>
                                                <PhotoSizeSelectActualIcon sx={{ fontSize: '100px', color: 'grey' }} />
                                                <p style={{ paddingLeft: '10px' }}>Add Photo</p>
                                            </div>
                                            <div style={{ display: 'flex' }}>
                                                <div style={{ paddingTop: '40px', paddingLeft: '5px' }}>
                                                    <YouTubeIcon sx={{ fontSize: '40px', color: 'grey', ml: 2 }} />
                                                    <p style={{ paddingLeft: '3px' }}>Add Video</p>
                                                </div>
                                                <div style={{ paddingTop: '40px', paddingLeft: '20px' }}>
                                                    <PictureAsPdfIcon sx={{ fontSize: '40px', color: 'grey', ml: 2 }} />
                                                    <p style={{ paddingLeft: '3px' }}>Add Pdf</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-4">
                                            <span style={{ fontWeight: 'bold' }}>Corporate Logo Design </span>
                                            <Button size="small" sx={{ ml: 2, borderRadius: '15px' }} variant="outlined"> Add Price</Button><br />
                                            <NavLink style={{ textDecoration: 'none' }}>Add Description</NavLink>
                                            <p style={{ marginTop: '20px', color: 'grey' }}>Category</p>
                                            <p style={{ marginLeft: '20px' }}>Logo Design</p>
                                            <NavLink style={{ textDecoration: 'none' }}><AddIcon sx={{ mr: 1 }} />Add More</NavLink><br />
                                            <p style={{ marginTop: '20px', color: 'grey' }}>Group</p>
                                            <p style={{ marginLeft: '20px' }}>Logo Designing </p>

                                        </div>
                                        <div className="col-sm-4">
                                            <p style={{ color: 'grey' }}>Specification/Additional Details -</p>
                                            <p style={{ color: 'grey' }}>Service Location -</p>

                                        </div>

                                    </Box>

                                    <Box sx={{ width: '900px', display: 'flex', bgcolor: 'white', m: 3, p: 2, borderRadius: '6px', boxShadow: '1px 1px 6px 1px rgba(89, 4, 168, 0.137)' }}>
                                        <div className="col-sm-4">
                                            <div style={{ paddingTop: '40px', paddingLeft: '40px' }}>
                                                <PhotoSizeSelectActualIcon sx={{ fontSize: '100px', color: 'grey' }} />
                                                <p style={{ paddingLeft: '10px' }}>Add Photo</p>
                                            </div>
                                            <div style={{ display: 'flex' }}>
                                                <div style={{ paddingTop: '40px', paddingLeft: '5px' }}>
                                                    <YouTubeIcon sx={{ fontSize: '40px', color: 'grey', ml: 2 }} />
                                                    <p style={{ paddingLeft: '3px' }}>Add Video</p>
                                                </div>
                                                <div style={{ paddingTop: '40px', paddingLeft: '20px' }}>
                                                    <PictureAsPdfIcon sx={{ fontSize: '40px', color: 'grey', ml: 2 }} />
                                                    <p style={{ paddingLeft: '3px' }}>Add Pdf</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-4">
                                            <span style={{ fontWeight: 'bold' }}>Pipe Fitting </span>
                                            <Button size="small" sx={{ ml: 2, borderRadius: '15px' }} variant="outlined"> Add Price</Button><br />
                                            <NavLink style={{ textDecoration: 'none' }}>Add Description</NavLink>
                                            <p style={{ marginTop: '20px', color: 'grey' }}>Category</p>
                                            <p style={{ marginLeft: '20px' }}>Pipe Fitting </p>
                                            <NavLink style={{ textDecoration: 'none' }}><AddIcon sx={{ mr: 1 }} />Add More</NavLink><br />
                                            <p style={{ marginTop: '20px', color: 'grey' }}>Group</p>
                                            <p style={{ marginLeft: '20px' }}>Pipe Fitting </p>

                                        </div>
                                        <div className="col-sm-4">
                                            <p style={{ color: 'grey' }}>Specification/Additional Details -</p>
                                            <p style={{ color: 'grey' }}>Material-</p>
                                            <p style={{ color: 'grey' }}>Fitting Type -</p>
                                            <p style={{ color: 'grey' }}>Usage/Application -</p>
                                            <p style={{ color: 'grey' }}>Size -</p>
                                            <p style={{ color: 'grey' }}>End Connection Type -</p>
                                            <p style={{ color: 'grey' }}>shape -</p>

                                        </div>

                                    </Box>

                                </TabPanel>

                                <TabPanel value={1} style={{ marginTop: '30px' }}>
                                    <h4 style={{ padding: '20px 0' }}>Add Price for following 3 products</h4>
                                    <div style={{ display: 'flex', backgroundColor: 'rgb(229, 235, 223)', marginLeft: '-100px', padding: '20px' }}>

                                        <div style={{ marginLeft: '10px', display: 'flex' }}>
                                            <PhotoSizeSelectActualIcon sx={{ fontSize: '62px', color: 'grey', mr: 2, mt: 1 }} />
                                            <p style={{ fontWeight: 'bold', marginTop: '25px', color: 'green' }}>Pneumatic Fittings</p>
                                        </div>
                                        <div style={{ marginLeft: '70px' }}>
                                            <p style={{ margin: 0, color: 'grey' }}>Price</p>
                                            <TextField size="small" sx={{ width: '160px', bgcolor: 'white', borderRadius: '6px' }} placeholder="Enter Price" />
                                        </div>
                                        <div style={{ marginLeft: '10px' }}>
                                            <p style={{ margin: 0, color: 'grey' }}>Unit</p>
                                            <TextField size="small" sx={{ width: '160px', bgcolor: 'white', borderRadius: '6px' }} placeholder="Eg-Piece" />
                                        </div>
                                        <div style={{ marginLeft: '20px', marginTop: '25px' }}>
                                            <Button variant="contained" sx={{ pl: 2, pr: 2 }}>Save</Button>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', backgroundColor: 'rgb(229, 235, 223)', marginLeft: '-100px', marginTop: '40px', padding: '20px' }}>

                                        <div style={{ marginLeft: '10px', display: 'flex' }}>
                                            <PhotoSizeSelectActualIcon sx={{ fontSize: '62px', color: 'grey', mr: 2, mt: 1 }} />
                                            <p style={{ fontWeight: 'bold', marginTop: '25px', color: 'green' }}>Corporate Logo Design</p>
                                        </div>
                                        <div style={{ marginLeft: '38px' }}>
                                            <p style={{ margin: 0, color: 'grey' }}>Price</p>
                                            <TextField size="small" sx={{ width: '160px', bgcolor: 'white', borderRadius: '6px' }} placeholder="Enter Price" />
                                        </div>
                                        <div style={{ marginLeft: '10px' }}>
                                            <p style={{ margin: 0, color: 'grey' }}>Unit</p>
                                            <TextField size="small" sx={{ width: '160px', bgcolor: 'white', borderRadius: '6px' }} placeholder="Eg-Piece" />
                                        </div>
                                        <div style={{ marginLeft: '20px', marginTop: '25px' }}>
                                            <Button variant="contained" sx={{ pl: 2, pr: 2 }}>Save</Button>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', backgroundColor: 'rgb(229, 235, 223)', marginLeft: '-100px', marginTop: '40px', padding: '20px' }}>

                                        <div style={{ marginLeft: '10px', display: 'flex' }}>
                                            <PhotoSizeSelectActualIcon sx={{ fontSize: '62px', color: 'grey', mr: 2, mt: 1 }} />
                                            <p style={{ fontWeight: 'bold', marginTop: '25px', color: 'green' }}>Pipe Fittings</p>
                                        </div>
                                        <div style={{ marginLeft: '118px' }}>
                                            <p style={{ margin: 0, color: 'grey' }}>Price</p>
                                            <TextField size="small" sx={{ width: '160px', bgcolor: 'white', borderRadius: '6px' }} placeholder="Enter Price" />
                                        </div>
                                        <div style={{ marginLeft: '10px' }}>
                                            <p style={{ margin: 0, color: 'grey' }}>Unit</p>
                                            <TextField size="small" sx={{ width: '160px', bgcolor: 'white', borderRadius: '6px' }} placeholder="Eg-Piece" />
                                        </div>
                                        <div style={{ marginLeft: '20px', marginTop: '25px' }}>
                                            <Button variant="contained" sx={{ pl: 2, pr: 2 }}>Save</Button>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value={2} style={{ marginTop: '30px' }}>
                                    <Box sx={{ bgcolor: 'white', p: 4 }}>
                                        <h4 style={{ marginBottom: '10px' }}>Add Photos Quickly</h4>
                                        <div>
                                            <div className=" d-flex mt-5">
                                                <p style={{ margin: '5px' }}><b>Corporate Logo Design</b></p>
                                                <AddAPhotoIcon onClick={openFileInput} sx={{ color: 'green',cursor:'pointer', fontSize: '52px', ml: 5 }} /></div>
                                            <div className=" d-flex mt-5">
                                                <p style={{ margin: '5px' }}><b>Pipe Fitting</b></p>
                                                <AddAPhotoIcon onClick={openFileInput} sx={{ color: 'green',cursor:'pointer', fontSize: '52px', ml: '130px' }} />
                                                <input
                                                    type="file"
                                                    id="fileInput"
                                                    style={{ display: 'none' }}
                                                />
                                            </div>

                                        </div>


                                        <Button variant="contained" sx={{ mt: 3, ml: 5 }}>Done</Button>

                                    </Box>
                                </TabPanel>
                                <TabPanel value={3}>fdd</TabPanel>
                                <TabPanel value={4}>vdvv</TabPanel>
                            </Tabs>
                        </div>
                    </Box>




                </div>
            </Box>

        </>
    )
}

export default ProductLead
