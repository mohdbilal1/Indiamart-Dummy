import { Box, Button } from "@mui/material"
import Navbar from "../../../Components/Navbar"
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import DashboardSideBar from "../../../Components/DashboardSideBar";
import { Tab, TabPanel, Tabs, TabsList } from "@mui/base";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FolderZipIcon from '@mui/icons-material/FolderZip';


const PhotosAndDocs = () => {
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
                    <Box sx={{ m: 2, mt: 3 }}>
                        <div className=" d-flex">
                            <div>
                                <h4>Photos & Docs</h4>
                                <p style={{ color: 'grey', fontSize: '14px' }}>All your photos and documents at one place!</p>
                            </div>
                            <div style={{ position: 'absolute', right: 40 }}>
                                <Button onClick={openFileInput} variant="contained" sx={{ p: '15px 30px ' }}><CloudUploadOutlinedIcon sx={{ mr: 1 }} />Select Files</Button>
                                <input
                                    type="file"
                                    id="fileInput"
                                    style={{ display: 'none' }}
                                />
                                <p style={{ color: 'grey', fontSize: '12px', paddingTop: '5px' }}><i>or <b>Drag & Drop</b> files to upload</i></p>
                            </div>
                        </div>

                        <div>
                            <h6 style={{ margin: '10px' }}>Quick Filters</h6>
                            <Tabs defaultValue={0}>
                                <TabsList>
                                    <Tab style={{ borderRadius: '6px', border: 'none', padding: '18px 64px', marginRight: '5px', backgroundColor: 'white' }} value={0}>Photos </Tab>
                                    <Tab style={{ borderRadius: '6px', border: 'none', padding: '18px 64px', marginRight: '10px', backgroundColor: 'white' }} value={1}> PDF Files</Tab>
                                    <Tab style={{ borderRadius: '6px', border: 'none', padding: '18px 64px', marginRight: '10px', backgroundColor: 'white' }} value={2}>Excel Files</Tab>
                                    <Tab style={{ borderRadius: '6px', border: 'none', padding: '18px 64px', marginRight: '10px', backgroundColor: 'white' }} value={3}>Word Docs</Tab>
                                    <Tab style={{ borderRadius: '6px', border: 'none', padding: '18px 64px', marginRight: '10px', backgroundColor: 'white' }} value={4}>Zip Files</Tab>
                                </TabsList>
                                <TabPanel value={0} style={{ marginTop: '30px' }}>
                                    <h5 style={{ margin: '10px' }}>All Files <NavigateNextIcon /> <span>Photos</span></h5>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ backgroundColor: 'white', padding: '80px 120px', borderStyle: 'dashed', borderColor: 'grey' }}>
                                            <PhotoSizeSelectActualIcon sx={{ fontSize: '43px', color: 'grey' }} /><PictureAsPdfIcon sx={{ fontSize: '43px', color: 'grey' }} />
                                            <FolderZipIcon sx={{ fontSize: '43px', color: 'grey' }} /><PhotoSizeSelectActualIcon sx={{ fontSize: '43px', color: 'grey' }} /> <br />
                                            <Button onClick={openFileInput} variant="contained" sx={{ p: '15px 30px ', mt: 3, mb: 2 }}><CloudUploadOutlinedIcon sx={{ mr: 1 }} />Select Files</Button>
                                            <input
                                                type="file"
                                                id="fileInput"
                                                style={{ display: 'none' }}
                                            />

                                            <p style={{ color: 'grey', fontSize: '14px', paddingTop: '5px' }}><i>or <b>Drag & Drop</b> files to upload</i></p>
                                        </div>
                                    </Box>
                                </TabPanel>
                                <TabPanel value={1} style={{ marginTop: '30px' }}>
                                    <h5 style={{ margin: '10px' }}>All Files <NavigateNextIcon /> <span>PDF Files</span></h5>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ backgroundColor: 'white', padding: '80px 120px', borderStyle: 'dashed', borderColor: 'grey' }}>
                                            <PhotoSizeSelectActualIcon sx={{ fontSize: '43px', color: 'grey' }} /><PictureAsPdfIcon sx={{ fontSize: '43px', color: 'grey' }} />
                                            <FolderZipIcon sx={{ fontSize: '43px', color: 'grey' }} /><PhotoSizeSelectActualIcon sx={{ fontSize: '43px', color: 'grey' }} /> <br />
                                            <Button onClick={openFileInput} variant="contained" sx={{ p: '15px 30px ', mt: 3, mb: 2 }}><CloudUploadOutlinedIcon sx={{ mr: 1 }} />Select Files</Button>
                                            <input
                                                type="file"
                                                id="fileInput"
                                                style={{ display: 'none' }}
                                            />
                                            <p style={{ color: 'grey', fontSize: '14px', paddingTop: '5px' }}><i>or <b>Drag & Drop</b> files to upload</i></p>
                                        </div>
                                    </Box>
                                </TabPanel>
                                <TabPanel value={2} style={{ marginTop: '30px' }}>
                                    <h5 style={{ margin: '10px' }}>All Files <NavigateNextIcon /> <span>Excel Files</span></h5>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ backgroundColor: 'white', padding: '80px 120px', borderStyle: 'dashed', borderColor: 'grey' }}>
                                            <PhotoSizeSelectActualIcon sx={{ fontSize: '43px', color: 'grey' }} /><PictureAsPdfIcon sx={{ fontSize: '43px', color: 'grey' }} />
                                            <FolderZipIcon sx={{ fontSize: '43px', color: 'grey' }} /><PhotoSizeSelectActualIcon sx={{ fontSize: '43px', color: 'grey' }} /> <br />
                                            <Button onClick={openFileInput} variant="contained" sx={{ p: '15px 30px ', mt: 3, mb: 2 }}><CloudUploadOutlinedIcon sx={{ mr: 1 }} />Select Files</Button>
                                            <input
                                                type="file"
                                                id="fileInput"
                                                style={{ display: 'none' }}
                                            />
                                            <p style={{ color: 'grey', fontSize: '14px', paddingTop: '5px' }}><i>or <b>Drag & Drop</b> files to upload</i></p>
                                        </div>
                                    </Box>
                                </TabPanel>
                                <TabPanel value={3} style={{ marginTop: '30px' }}>
                                    <h5 style={{ margin: '10px' }}>All Files <NavigateNextIcon /> <span>Doc Files </span></h5>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ backgroundColor: 'white', padding: '80px 120px', borderStyle: 'dashed', borderColor: 'grey' }}>
                                            <PhotoSizeSelectActualIcon sx={{ fontSize: '43px', color: 'grey' }} /><PictureAsPdfIcon sx={{ fontSize: '43px', color: 'grey' }} />
                                            <FolderZipIcon sx={{ fontSize: '43px', color: 'grey' }} /><PhotoSizeSelectActualIcon sx={{ fontSize: '43px', color: 'grey' }} /> <br />
                                            <Button onClick={openFileInput} variant="contained" sx={{ p: '15px 30px ', mt: 3, mb: 2 }}><CloudUploadOutlinedIcon sx={{ mr: 1 }} />Select Files</Button>
                                            <input
                                                type="file"
                                                id="fileInput"
                                                style={{ display: 'none' }}
                                            />
                                            <p style={{ color: 'grey', fontSize: '14px', paddingTop: '5px' }}><i>or <b>Drag & Drop</b> files to upload</i></p>
                                        </div>
                                    </Box>
                                </TabPanel>
                                <TabPanel value={4} style={{ marginTop: '30px' }}>
                                    <h5 style={{ margin: '10px' }}>All Files <NavigateNextIcon /> <span>Zip Files </span></h5>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <div style={{ backgroundColor: 'white', padding: '80px 120px', borderStyle: 'dashed', borderColor: 'grey' }}>
                                            <PhotoSizeSelectActualIcon sx={{ fontSize: '43px', color: 'grey' }} /><PictureAsPdfIcon sx={{ fontSize: '43px', color: 'grey' }} />
                                            <FolderZipIcon sx={{ fontSize: '43px', color: 'grey' }} /><PhotoSizeSelectActualIcon sx={{ fontSize: '43px', color: 'grey' }} /> <br />
                                            <Button onClick={openFileInput} variant="contained" sx={{ p: '15px 30px ', mt: 3, mb: 2 }}><CloudUploadOutlinedIcon sx={{ mr: 1 }} />Select Files</Button>
                                            <input
                                                type="file"
                                                id="fileInput"
                                                style={{ display: 'none' }}
                                            />
                                            <p style={{ color: 'grey', fontSize: '14px', paddingTop: '5px' }}><i>or <b>Drag & Drop</b> files to upload</i></p>
                                        </div>
                                    </Box>
                                </TabPanel>

                            </Tabs>
                        </div>

                    </Box>

                </div>
            </Box>

        </>
    )
}

export default PhotosAndDocs
