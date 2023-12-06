import { Box, Button, FormControlLabel, Link, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import Navbar from "../../../Components/Navbar"
import DashboardSideBar from "../../../Components/DashboardSideBar";
import { Tab, TabPanel, Tabs, TabsList } from "@mui/base";
import '../../../stylecss/buyertoolstyle.css'
import img23 from '../../../assets/plumbingPipe.jpg'
import img11 from '../../../assets/cpvcPipeImg.jpg'
import img31 from '../../../assets/gas-pipeline.jpg'
import img21 from '../../../assets/gas-pipeline-fitting.jpg'
import imgg4 from '../../../assets/leftpharmaimg.jpg'
import imgg5 from '../../../assets/lefthospitalimg.jpg'
import imgg6 from '../../../assets/leftindustrailMachine.jpg'
import hospitalMedicalEquipData from '../../../data/hospitalMedicalEquipmntData';
import idustrialMachineEquipData from '../../../data/machineryAndPlantsEquipData';
import pharmaMedicineData from '../../../data/PharmaMedicine'
import maskImg from '../../../assets/mask.jpg'
import HospitalImg from '../../../assets/HospitalConsumele.jpg'
import { IoIosArrowDropright } from 'react-icons/io';
import SearchIcon from '@mui/icons-material/Search';
import imgvayapar from '../../../assets/vyapar-1.png'
import liveKeepingImg from '../../../assets/livekeeping-indiamart.png'
import busyImg from '../../../assets/busy-Logo-2.png'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import truckImg from '../../../assets/truck.png'
import minitruckImg from '../../../assets/minitruck.png'
import courierImg from '../../../assets/delivery-service.png'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import NoBackpackOutlinedIcon from '@mui/icons-material/NoBackpackOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';


const BuyerToolPge = () => {


    return (
        <>
            <Navbar />
            <Box sx={{ display: 'flex', bgcolor: 'rgb(232, 232, 242)' }}>
                <div className=" col-sm-2 position-sticky start-0" style={{ width: '120px' }}>
                    <DashboardSideBar />
                </div>

                <div className=" col-sm-8">
                    <Box sx={{ m: 2, width: '1120px' }}>
                        <Tabs defaultValue={0}>
                            <TabsList>
                                <Tab style={{ fontWeight: 'bold', fontSize: '12px', borderRadius: '10px 10px 0 0', border: 'none', padding: '8px 10px', marginRight: '7px', backgroundColor: 'white' }} value={0}>Post Buy Requirement</Tab>
                                <Tab style={{ fontWeight: 'bold', fontSize: '12px', borderRadius: '10px 10px 0 0', border: 'none', padding: '8px 10px', marginRight: '7px', backgroundColor: 'white' }} value={1}>Services For Business Growth</Tab>
                                <Tab style={{ fontWeight: 'bold', fontSize: '12px', borderRadius: '10px 10px 0 0', border: 'none', padding: '8px 10px', marginRight: '7px', backgroundColor: 'white' }} value={2}>Manage Requirements</Tab>
                                <Tab style={{ fontWeight: 'bold', fontSize: '12px', borderRadius: '10px 10px 0 0', border: 'none', padding: '8px 10px', marginRight: '7px', backgroundColor: 'white' }} value={3}>Products Of Interest</Tab>
                                <Tab style={{ fontWeight: 'bold', fontSize: '12px', borderRadius: '10px 10px 0 0', border: 'none', padding: '8px 10px', marginRight: '7px', backgroundColor: 'white' }} value={4}>Recommended Categories</Tab>
                                <Tab style={{ fontWeight: 'bold', fontSize: '12px', borderRadius: '10px 10px 0 0', border: 'none', padding: '8px 10px', marginRight: '7px', backgroundColor: 'white' }} value={5}>Past Searches</Tab>
                                <Tab style={{ fontWeight: 'bold', fontSize: '12px', borderRadius: '10px 10px 0 0', border: 'none', padding: '8px 10px', marginRight: '7px', backgroundColor: 'white' }} value={6}>Ship With IM</Tab>
                                <Tab style={{ fontWeight: 'bold', fontSize: '12px', borderRadius: '10px 10px 0 0', border: 'none', padding: '8px 10px', marginRight: '7px', backgroundColor: 'white' }} value={7}>Loans</Tab>
                            </TabsList>

                            <TabPanel value={0}>
                                <div className="div-serch mt-1">
                                    <div className="inside-div-search">
                                        <h4>Tell us what you Need</h4>
                                        <TextField size="small" placeholder="Enter Your Product / Service Name" fullWidth />
                                        <Button variant="contained" sx={{ mt: 3 }}>submit your Requirement</Button>
                                    </div>
                                </div>

                                <div className=" d-flex mt-2">
                                    <div>
                                        <h4 style={{ margin: '10px', fontWeight: 'bold' }}>Recommended Categories</h4>
                                        <div className="" style={{ display: 'flex', padding: '10px', margin: '10px', width: '320px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                            <div style={{ paddingTop: '4px' }}>
                                                <img style={{ height: 'auto', width: '150px', borderRadius: '6px' }} src={img23} alt="img23" />
                                            </div>
                                            <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                <div style={{ padding: '20px 0 20px 20px' }}>
                                                    <Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Pneumatic Fittings</Link>
                                                    <Button sx={{ fontWeight: 'bold' }}>Get Quotes</Button>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="" style={{ display: 'flex', padding: '10px', margin: '10px', width: '320px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                            <div style={{ paddingTop: '4px' }}>
                                                <img style={{ height: 'auto', width: '150px', borderRadius: '6px' }} src={img23} alt="img23" />
                                            </div>
                                            <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                <div style={{ padding: '20px 0 20px 20px' }}>
                                                    <Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Pneumatic Fittings</Link>
                                                    <Button sx={{ fontWeight: 'bold' }}>Get Quotes</Button>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="" style={{ display: 'flex', padding: '10px', margin: '10px', width: '320px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                            <div style={{ paddingTop: '4px' }}>
                                                <img style={{ height: 'auto', width: '150px', borderRadius: '6px' }} src={img23} alt="img23" />
                                            </div>
                                            <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                <div style={{ padding: '20px 0 20px 20px' }}>
                                                    <Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Pneumatic Fittings</Link>
                                                    <Button sx={{ fontWeight: 'bold' }}>Get Quotes</Button>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="" style={{ display: 'flex', padding: '10px', margin: '10px', width: '320px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                            <div style={{ paddingTop: '4px' }}>
                                                <img style={{ height: 'auto', width: '150px', borderRadius: '6px' }} src={img23} alt="img23" />
                                            </div>
                                            <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                <div style={{ padding: '20px 0 20px 20px' }}>
                                                    <Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Pneumatic Fittings</Link>
                                                    <Button sx={{ fontWeight: 'bold' }}>Get Quotes</Button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 style={{ margin: '10px', fontWeight: 'bold' }}>Product of Interest</h4>
                                        <div className=" d-flex">
                                            <div className=" text-center" style={{ padding: '10px', margin: '0  0 0 10px', width: '230px', height: '300px', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                                <div style={{ paddingTop: '4px' }}>
                                                    <img style={{ height: 'auto', width: '180px', borderRadius: '6px' }} src={img11} alt="img11" />
                                                </div>
                                                <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                    <div style={{ padding: '10px 0 20px 0' }}>
                                                        <Typography sx={{ m: '5px', color: 'black', fontWeight: 'bold' }}>Pneumatic Fittings</Typography>
                                                        <Typography sx={{ m: '5px', color: 'grey', }}><i>By: Kelvin Plastic Pvt Lmtd</i></Typography>
                                                        <Typography sx={{ m: '5px', color: 'black' }}>Rs 48.70 / Piece</Typography>
                                                        <Button sx={{ fontWeight: 'bold', mt: 1 }} fullWidth variant="outlined" size="small">contact supplier</Button>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="text-center" style={{ padding: '10px', margin: '0  0 0 10px', width: '230px', height: '300px', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                                <div style={{ paddingTop: '4px' }}>
                                                    <img style={{ height: 'auto', width: '180px', borderRadius: '6px' }} src={img21} alt="img21" />
                                                </div>
                                                <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                    <div style={{ padding: '10px 0 20px 0' }}>
                                                        <Typography sx={{ m: '5px', color: 'black', fontWeight: 'bold' }}>Pneumatic Fittings</Typography>
                                                        <Typography sx={{ m: '5px', color: 'grey' }}><i>By: V T Export</i></Typography>
                                                        <Typography sx={{ m: '5px', color: 'black' }}>Rs 680 / Piece</Typography>
                                                        <Button sx={{ fontWeight: 'bold', mt: 1 }} fullWidth variant="outlined" size="small">contact supplier</Button>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="text-center" style={{ padding: '10px', margin: '0  0 0 10px', width: '230px', height: '300px', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                                <div style={{ paddingTop: '4px' }}>
                                                    <img style={{ height: 'auto', width: '180px', borderRadius: '6px' }} src={img31} alt="img31" />
                                                </div>
                                                <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                    <div style={{ padding: '10px 0 20px 0' }}>
                                                        <Typography sx={{ m: '5px', color: 'black', fontWeight: 'bold' }}>Pipe Fittings</Typography>
                                                        <Typography sx={{ m: '5px', color: 'grey', }}><i>By: Rama Softway</i></Typography>
                                                        <Typography sx={{ m: '5px', color: 'black', }}>Rs 5,000 / Qty</Typography>
                                                        <Button sx={{ fontWeight: 'bold', mt: 1 }} fullWidth variant="outlined" size="small">contact supplier</Button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Box sx={{ mt: 3 }}>
                                    <Typography sx={{ fontSize: '28px', fontWeight: 'bold', ml: 1 }}>Pharmaceutical Drug, Medicine, Medical Care & Consultation</Typography>
                                    <Box sx={{ display: 'flex' }}>
                                        <Box>
                                            <div style={{ borderRadius: '6px', mb: 3, paddingTop: '18px', marginLeft: '3px' }}>
                                                <img style={{ height: 'auto', width: '300px' }} src={imgg4} alt="construction-img" />
                                                <Button sx={{ p: '20px 0', top: 50 }} variant='contained' fullWidth>View All</Button>
                                            </div>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', m: 1 }}>
                                            {pharmaMedicineData.map((item, i) => {
                                                return (
                                                    <div className="pharma-card" style={{ display: 'flex', padding: '2px', margin: '10px', width: '370px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray' }}>
                                                        <div style={{ paddingTop: '20px' }}>
                                                            <img style={{ height: 'auto', width: '150px', borderRadius: '6px' }} src={item.image} alt="construction-img" />
                                                        </div>
                                                        <div style={{ paddingLeft: '25px', fontSize: '14px' }}>
                                                            <div style={{ paddingBottom: '5px' }}><Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>{item.name1}</Link></div>
                                                            <div style={{ paddingBottom: '5px' }}><Link sx={{ textDecoration: 'none', color: 'black' }}>{item.name2}</Link></div>
                                                            <div style={{ paddingBottom: '5px' }}><Link sx={{ textDecoration: 'none', color: 'black' }}>{item.name3}</Link></div>
                                                            <div style={{ textDecoration: 'none' }}><Link sx={{ textDecoration: 'none', color: 'black' }}>{item.name4}</Link></div>
                                                            <div style={{ textDecoration: 'none' }}><Link sx={{ textDecoration: 'none', color: 'black' }}>{item.name5}</Link></div>
                                                        </div>
                                                    </div>

                                                )
                                            })}

                                        </Box>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', bgcolor: 'rgb(147, 189, 245)', p: 2, borderRadius: '5px', mr: 1, mt: 1 }}>
                                    <h5 className='col-sm-3 pt-4 fw-bold'>CORONA COVID-19 Prevention & Care Supplies</h5>
                                    <div className='col-sm-4 bg-white d-flex p-2 ms-5 rounded-1'>
                                        <img style={{ width: '90px', height: 'auto' }} src={maskImg} alt="mask-Img" />
                                        <h6 style={{ paddingTop: '25px', paddingLeft: '15px' }}>Mask, Sanitizer & Other Hygiene Supplies</h6>
                                        <IoIosArrowDropright size={'48px'} style={{ marginTop: '20px', marginLeft: '10px' }} />
                                    </div>
                                    <div className='col-sm-4 bg-white ms-4 d-flex p-2 rounded-1'>
                                        <img style={{ width: '90px', height: 'auto', borderRadius: '4px' }} src={HospitalImg} alt="Hospital-Img" />
                                        <h6 style={{ paddingTop: '25px', paddingLeft: '15px' }}>Hospital Consumables & Diagnostics</h6>
                                        <IoIosArrowDropright size={'48px'} style={{ marginTop: '20px', marginLeft: '10px' }} />
                                    </div>
                                </Box>

                                <Box sx={{ mt: 3 }}>
                                    <Typography sx={{ fontSize: '28px', fontWeight: 'bold', ml: 1 }}>Hospital and Medical Equipment</Typography>
                                    <Box sx={{ display: 'flex' }}>
                                        <Box>
                                            <div style={{ borderRadius: '6px', mb: 3, paddingTop: '18px', marginLeft: '3px' }}>
                                                <img style={{ height: 'auto', width: '300px' }} src={imgg5} alt="construction-img" />
                                                <Button sx={{ p: '16px 0', top: 50 }} variant='contained' fullWidth>View All</Button>
                                            </div>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', m: 1 }}>
                                            {hospitalMedicalEquipData.map((item, i) => {
                                                return (
                                                    <div style={{ display: 'flex', padding: '2px', margin: '10px', width: '370px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray' }}>
                                                        <div style={{ paddingTop: '20px' }}>
                                                            <img style={{ height: 'auto', width: '150px', borderRadius: '6px' }} src={item.image} alt="construction-img" />
                                                        </div>
                                                        <div style={{ paddingLeft: '25px', fontSize: '14px' }}>
                                                            <div style={{ paddingBottom: '5px' }}><Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>{item.name1}</Link></div>
                                                            <div style={{ paddingBottom: '5px' }}><Link sx={{ textDecoration: 'none', color: 'black' }}>{item.name2}</Link></div>
                                                            <div style={{ paddingBottom: '5px' }}><Link sx={{ textDecoration: 'none', color: 'black' }}>{item.name3}</Link></div>
                                                            <div style={{ textDecoration: 'none' }}><Link sx={{ textDecoration: 'none', color: 'black' }}>{item.name4}</Link></div>
                                                            <div style={{ textDecoration: 'none' }}><Link sx={{ textDecoration: 'none', color: 'black' }}>{item.name5}</Link></div>
                                                        </div>
                                                    </div>

                                                )
                                            })}

                                        </Box>
                                    </Box>
                                </Box>

                                <Box sx={{ mt: 3 }}>
                                    <Typography sx={{ fontSize: '28px', fontWeight: 'bold', ml: 1 }}>Industrial Plants, Machinery & Equipment</Typography>
                                    <Box sx={{ display: 'flex' }}>
                                        <Box>
                                            <div style={{ borderRadius: '6px', mb: 3, paddingTop: '18px', marginLeft: '3px' }}>
                                                <img style={{ height: 'auto', width: '300px' }} src={imgg6} alt="construction-img" />
                                                <Button sx={{ p: '10px 0', top: 10 }} variant='contained' fullWidth>View All</Button>
                                            </div>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', m: 1 }}>
                                            {idustrialMachineEquipData.map((item, i) => {
                                                return (
                                                    <div style={{ display: 'flex', padding: '2px', margin: '10px', width: '370px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray' }}>
                                                        <div style={{ paddingTop: '4px' }}>
                                                            <img style={{ height: 'auto', width: '150px', borderRadius: '6px' }} src={item.image} alt="construction-img" />
                                                        </div>
                                                        <div style={{ paddingLeft: '25px', fontSize: '14px' }}>
                                                            <div style={{ paddingBottom: '5px' }}><Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>{item.name1}</Link></div>
                                                            <div style={{ paddingBottom: '5px' }}><Link sx={{ textDecoration: 'none', color: 'black' }}>{item.name2}</Link></div>
                                                            <div style={{ paddingBottom: '5px' }}><Link sx={{ textDecoration: 'none', color: 'black' }}>{item.name3}</Link></div>
                                                            <div style={{ textDecoration: 'none' }}><Link sx={{ textDecoration: 'none', color: 'black' }}>{item.name4}</Link></div>
                                                        </div>
                                                    </div>

                                                )
                                            })}

                                        </Box>
                                    </Box>
                                </Box>

                            </TabPanel>

                            <TabPanel value={1}>
                                <Box sx={{ mt: 2, bgcolor: 'white', p: 2 }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '20px', mb: 1 }}>Services for Business Growth</Typography>
                                    <Typography>Take advantage of these trusted quality service providers to manage your day to day operations.<br />Find the best service providers in your own city, preferrgb(255, 150, 150) location or across India and grow your business with ease.</Typography>
                                </Box>

                                <Box sx={{ display: 'flex', mt: 2, bgcolor: 'rgb(215, 247, 193)' }}>
                                    <div style={{ display: 'flex', margin: '15px 10px' }}>
                                        <Typography sx={{ fontSize: '16px' }}>Commonly Used Services:</Typography>
                                        <Typography sx={{ fontSize: '16px', ml: 2, mr: 2, fontWeight: 'bold' }}>Accounting Software</Typography>
                                        <Typography sx={{ fontSize: '16px' }}>Logistic Services</Typography>
                                        <Typography sx={{ fontSize: '16px', ml: 2, mr: 2 }}>Business Loan</Typography>
                                    </div>
                                    <div style={{ position: 'absolute', right: 45, paddingTop: '8px' }}>
                                        <TextField size='small' placeholder="Search for more service" sx={{ bgcolor: 'white' }} />
                                        <SearchIcon sx={{ bgcolor: 'green', color: 'white', fontSize: '40px', p: '3px 2px', ml: '-2px', borderRadius: '2px' }} />
                                    </div>

                                </Box>

                                <Box sx={{ mt: 2, bgcolor: 'white', p: 2 }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '16px', mb: 1 }}>Accounting Software</Typography>
                                    <Typography sx={{ fontSize: '14px' }}>Manage your day-to-day inventory, accounting, CRM, financial reports and much more with these software solutions.</Typography>
                                </Box>

                                <Box sx={{ display: 'flex', bgcolor: 'rgb(215, 247, 193)', p: 2, borderRadius: '5px' }}>
                                    <div className='col-sm-4 ms-3 bg-white d-flex p-2  rounded-1'>
                                        <img style={{ width: '90px', height: 'auto', objectFit: 'contain' }} src={busyImg} alt="busyImg-Img" />
                                        <h6 style={{ marginTop: '15px', paddingLeft: '15px' }}>Busy Accounting Software</h6>

                                    </div>
                                    <div className='col-sm-3 bg-white d-flex p-2 ms-4 rounded-1'>
                                        <img style={{ width: '90px', height: 'auto', objectFit: 'contain' }} src={liveKeepingImg} alt="liveKeepingImg-Img" />
                                        <h6 style={{ marginTop: '10px', paddingLeft: '15px' }}>Live Keeping Tally on Mobile</h6>

                                    </div>
                                    <div className='col-sm-4 bg-white ms-4 me-4 d-flex p-2 rounded-1'>
                                        <img style={{ width: '90px', height: 'auto', borderRadius: '4px', objectFit: 'contain' }} src={imgvayapar} alt="imgvayapar-Img" />
                                        <h6 style={{ marginTop: '15px', paddingLeft: '15px' }}>Vyapar Accounting Software</h6>

                                    </div>
                                </Box>

                                <Box>
                                    <div className=" d-flex">
                                        <div className=" col-sm-3 bg-white">
                                            <img style={{ width: '240px', height: '300px', paddingLeft: '10px', objectFit: 'contain', marginTop: '30px' }} src="http://3.imimg.com/data3/TI/NQ/GLADMIN-43592/accounting-software-500x500.jpg" alt="sideIng" />
                                        </div>
                                        <div className=" col-sm-9 bg-white pt-2">
                                            <div className="d-flex flex-wrap">

                                                <div className="" style={{ display: 'flex', padding: '10px', margin: '10px', width: '240px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                                    <div style={{ paddingTop: '4px' }}>
                                                        <img style={{ height: '130px', width: '120px', borderRadius: '6px', objectFit: 'contain' }} src={'http://3.imimg.com/data3/TT/KX/GLADMIN-44232/online-billing-solution-250x250.jpg'} alt="img23" />
                                                    </div>
                                                    <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                        <div style={{ padding: '20px 0 20px 10px' }}>
                                                            <Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Online Billing Solution</Link>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="" style={{ display: 'flex', padding: '10px', margin: '10px', width: '240px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                                    <div style={{ paddingTop: '4px' }}>
                                                        <img style={{ height: '130px', width: '120px', borderRadius: '6px', objectFit: 'contain' }} src={'http://5.imimg.com/data5/GLADMIN/Default/2022/7/FX/NQ/WN/84520/barcode-billing-softwares-125x125.jpg'} alt="img23" />
                                                    </div>
                                                    <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                        <div style={{ padding: '20px 0 20px 10px' }}>
                                                            <Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Barcode Billing Software </Link>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="" style={{ display: 'flex', padding: '10px', margin: '10px', width: '240px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                                    <div style={{ paddingTop: '4px' }}>
                                                        <img style={{ height: '130px', width: '120px', borderRadius: '6px', objectFit: 'contain' }} src={'http://5.imimg.com/data5/GLADMIN/Default/2022/4/ME/DR/WV/81953/payment-reconciliation-software-250x250.png'} alt="img23" />
                                                    </div>
                                                    <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                        <div style={{ padding: '20px 0 20px 10px' }}>
                                                            <Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Payment Reconciliation Software</Link>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="" style={{ display: 'flex', padding: '10px', margin: '10px', width: '240px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                                    <div style={{ paddingTop: '4px' }}>
                                                        <img style={{ height: '130px', width: '120px', borderRadius: '6px', objectFit: 'contain' }} src={'http://5.imimg.com/data5/GLADMIN/Default/2022/4/VW/HH/RH/90596/tally-prime-250x250.jpg'} alt="img23" />
                                                    </div>
                                                    <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                        <div style={{ padding: '20px 0 20px 10px' }}>
                                                            <Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Tally Prime Software </Link>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="" style={{ display: 'flex', padding: '10px', margin: '10px', width: '240px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                                    <div style={{ paddingTop: '4px' }}>
                                                        <img style={{ height: '130px', width: '120px', borderRadius: '6px', objectFit: 'contain' }} src={'http://5.imimg.com/data5/GLADMIN/Default/2022/4/TA/AV/DT/90596/excel-to-tally-software-250x250.jpg'} alt="img23" />
                                                    </div>
                                                    <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                        <div style={{ padding: '20px 0 20px 10px' }}>
                                                            <Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Excel to Tally Software</Link>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="" style={{ display: 'flex', padding: '10px', margin: '10px', width: '240px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                                    <div style={{ paddingTop: '4px' }}>
                                                        <img style={{ height: '130px', width: '120px', borderRadius: '6px', objectFit: 'contain' }} src={'http://5.imimg.com/data5/GLADMIN/Default/2022/5/IR/MJ/SH/89350/tally-on-mobile-250x250.png'} alt="img23" />
                                                    </div>
                                                    <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                        <div style={{ padding: '20px 0 20px 10px' }}>
                                                            <Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Tally on Mobile</Link>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Box>

                                <Box sx={{ mt: 2 }}>
                                    <Box sx={{ mt: 2, bgcolor: 'white', p: 2 }}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '16px', mb: 1 }}>Logistics Services</Typography>
                                        <Typography sx={{ fontSize: '14px' }}>These trusted service providers will enable you to send your products from your location to the buyer’s location hassle free.</Typography>
                                    </Box>
                                    <div className=" d-flex">
                                        <div className=" col-sm-3 bg-white">
                                            <img style={{ width: '240px', paddingLeft: '10px', objectFit: 'contain', marginTop: '40px' }} src="https://3.imimg.com/data3/BC/LO/GLADMIN-69544/logistics-service-500x500.jpg" alt="img" />
                                        </div>
                                        <div className=" col-sm-9 bg-white pt-2">
                                            <div className="d-flex flex-wrap">

                                                <div className="" style={{ display: 'flex', padding: '10px', margin: '10px', width: '240px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                                    <div style={{ paddingTop: '4px' }}>
                                                        <img style={{ height: '130px', width: '120px', borderRadius: '6px', objectFit: 'contain' }} src={'https://3.imimg.com/data3/NB/KC/GLADMIN-69543/goods-transport-services-125x125.jpg'} alt="img23" />
                                                    </div>
                                                    <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                        <div style={{ padding: '20px 0 20px 10px' }}>
                                                            <Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Goods Transport Services</Link>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="" style={{ display: 'flex', padding: '10px', margin: '10px', width: '240px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                                    <div style={{ paddingTop: '4px' }}>
                                                        <img style={{ height: '130px', width: '120px', borderRadius: '6px', objectFit: 'contain' }} src={'https://5.imimg.com/data5/GLADMIN/Default/2020/11/OK/QX/VQ/75768/transportation-services-125x125.jpg'} alt="img23" />
                                                    </div>
                                                    <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                        <div style={{ padding: '20px 0 20px 10px' }}>
                                                            <Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Transportation Services </Link>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="" style={{ display: 'flex', padding: '10px', margin: '10px', width: '240px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                                    <div style={{ paddingTop: '4px' }}>
                                                        <img style={{ height: '130px', width: '120px', borderRadius: '6px', objectFit: 'contain' }} src={'https://3.imimg.com/data3/XM/YR/GLADMIN-174817/parcel-delivery-services-125x125.jpg'} alt="img23" />
                                                    </div>
                                                    <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                        <div style={{ padding: '20px 0 20px 10px' }}>
                                                            <Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Parcel Delivery Services</Link>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="" style={{ display: 'flex', padding: '10px', margin: '10px', width: '240px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                                    <div style={{ paddingTop: '4px' }}>
                                                        <img style={{ height: '130px', width: '120px', borderRadius: '6px', objectFit: 'contain' }} src={'https://3.imimg.com/data3/TN/DU/GLADMIN-84153/courier-service-125x125.jpg'} alt="img23" />
                                                    </div>
                                                    <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                        <div style={{ padding: '20px 0 20px 10px' }}>
                                                            <Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Courier Service </Link>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="" style={{ display: 'flex', padding: '10px', margin: '10px', width: '240px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                                    <div style={{ paddingTop: '4px' }}>
                                                        <img style={{ height: '130px', width: '120px', borderRadius: '6px', objectFit: 'contain' }} src={'https://3.imimg.com/data3/FO/VK/GLADMIN-84088/air-cargo-service-125x125.jpg'} alt="img23" />
                                                    </div>
                                                    <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                        <div style={{ padding: '20px 0 20px 10px' }}>
                                                            <Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Air Cargo Service</Link>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="" style={{ display: 'flex', padding: '10px', margin: '10px', width: '240px', height: 'auto' }}>
                                                    <Button sx={{ fontWeight: 'bold', pl: 4 }}>View Other Services</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Box>

                                <Box sx={{ mt: 2 }}>
                                    <Box sx={{ mt: 2, bgcolor: 'white', p: 2 }}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '16px', mb: 1 }}>Business Loan</Typography>
                                        <Typography sx={{ fontSize: '14px' }}>You can leverage these loan providers to rebuild and scale your crgb(255, 150, 150)it operations and thrive in the economy.</Typography>
                                    </Box>
                                    <div className=" d-flex">
                                        <div className=" col-sm-3 bg-white">
                                            <img style={{ width: '240px', paddingLeft: '10px', objectFit: 'contain', marginTop: '40px' }} src="http://3.imimg.com/data3/KR/KY/GLADMIN-23928/business-loan-500x500.jpg" alt="img" />
                                        </div>
                                        <div className=" col-sm-9 bg-white pt-2">
                                            <div className="d-flex flex-wrap">

                                                <div className="" style={{ display: 'flex', padding: '10px', margin: '10px', width: '240px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                                    <div style={{ paddingTop: '4px' }}>
                                                        <img style={{ height: '130px', width: '120px', borderRadius: '6px', objectFit: 'contain' }} src={'http://3.imimg.com/data3/FJ/VE/GLADMIN-106853/agricultural-finance-250x250.jpg'} alt="img23" />
                                                    </div>
                                                    <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                        <div style={{ padding: '20px 0 20px 10px' }}>
                                                            <Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Agricultural Finance</Link>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="" style={{ display: 'flex', padding: '10px', margin: '10px', width: '240px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                                    <div style={{ paddingTop: '4px' }}>
                                                        <img style={{ height: '130px', width: '120px', borderRadius: '6px', objectFit: 'contain' }} src={'http://3.imimg.com/data3/OT/EJ/GLADMIN-23393/bill-discounting-250x250.jpg'} alt="img23" />
                                                    </div>
                                                    <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                        <div style={{ padding: '20px 0 20px 10px' }}>
                                                            <Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Bill Discounting</Link>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="" style={{ display: 'flex', padding: '10px', margin: '10px', width: '240px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                                    <div style={{ paddingTop: '4px' }}>
                                                        <img style={{ height: '130px', width: '120px', borderRadius: '6px', objectFit: 'contain' }} src={'http://3.imimg.com/data3/RP/YL/GLADMIN-167882/letter-of-crgb(255, 150, 150)it-service-250x250.jpg'} alt="img23" />
                                                    </div>
                                                    <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                        <div style={{ padding: '20px 0 20px 10px' }}>
                                                            <Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Letter Of Crgb(255, 150, 150)it Service </Link>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="" style={{ display: 'flex', padding: '10px', margin: '10px', width: '240px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                                    <div style={{ paddingTop: '4px' }}>
                                                        <img style={{ height: '130px', width: '120px', borderRadius: '6px', objectFit: 'contain' }} src={'http://3.imimg.com/data3/EB/HA/GLADMIN-171365/cash-crgb(255, 150, 150)it-services-250x250.jpg'} alt="img23" />
                                                    </div>
                                                    <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                        <div style={{ padding: '20px 0 20px 10px' }}>
                                                            <Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Cash Crgb(255, 150, 150)it Loan </Link>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="" style={{ display: 'flex', padding: '10px', margin: '10px', width: '240px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                                    <div style={{ paddingTop: '4px' }}>
                                                        <img style={{ height: '130px', width: '120px', borderRadius: '6px', objectFit: 'contain' }} src={'http://3.imimg.com/data3/TX/KW/GLADMIN-172893/working-capital-loans-250x250.jpg'} alt="img23" />
                                                    </div>
                                                    <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                        <div style={{ padding: '20px 0 20px 10px' }}>
                                                            <Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Working Capital Loans</Link>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="" style={{ display: 'flex', padding: '10px', margin: '10px', width: '240px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                                    <div style={{ paddingTop: '4px' }}>
                                                        <img style={{ height: '130px', width: '120px', borderRadius: '6px', objectFit: 'contain' }} src={'http://5.imimg.com/data5/GLADMIN/Default/2023/9/340728798/YX/YB/NP/100035/trade-finance-250x250.png'} alt="img23" />
                                                    </div>
                                                    <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                        <div style={{ padding: '20px 0 20px 10px' }}>
                                                            <Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Trade Finance</Link>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Box>

                                <Box sx={{ bgcolor: 'white', mt: 3, boxShadow: '0.2px 0.2px 6px gray', borderRadius: '6px' }}>
                                    <Typography sx={{
                                        borderRadius: "6px 6px 0 0", color: 'white', fontSize: '20px', textAlign: 'center', backgroundColor: 'rgb(63,94,251)', background: ' radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
                                        p: '12px', fontWeight: 'bolder'
                                    }}><LocalGroceryStoreIcon sx={{ mr: 2 }} />Tell us what you need & Get verified suppliers instantly</Typography>
                                    <Typography sx={{ fontWeight: 'bold', pl: 5, fontSize: '20px', p: '20px' }}>Requirement Information</Typography>
                                    <div className=" d-flex mt-4 ms-5">
                                        <Typography>Product/Service name</Typography>
                                        <TextField placeholder="Enter Product / Service Name" sx={{ width: '600px', ml: '120px' }} size="small" />
                                    </div>

                                    <div className=" d-flex mt-4 ms-5">
                                        <Typography>Requirement Details</Typography>
                                        <TextField sx={{ width: '600px', ml: '135px' }} />
                                    </div>
                                    <div className=" d-flex mt-4 ms-5">
                                        <Typography>GST Number</Typography>
                                        <TextField sx={{ width: '600px', ml: '190px' }} size="small" placeholder="Please Enter GST Number to reac more seller" />
                                    </div>
                                    <div className=" d-flex mt-4 ms-5">
                                        <Typography>Attach Files</Typography>
                                        <TextField size="small" type="file" sx={{ width: '118px', ml: '200px' }} />
                                    </div>

                                    <div className=" d-flex mt-4 ms-5 pb-3">
                                        <Typography sx={{ pt: 1 }}>Looking for Suppliers </Typography>
                                        <RadioGroup defaultValue="Anywhere in India">
                                            <div className=" d-flex ms-5">
                                                <FormControlLabel value="Anywhere in India" control={<Radio />} label="Anywhere in India" />
                                                <FormControlLabel value="Local Only" control={<Radio />} label="Local Only" />
                                                <FormControlLabel value="Specific City" control={<Radio />} label="Specific City" />
                                            </div>
                                        </RadioGroup>
                                    </div>


                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1, bgcolor: 'white', p: 5 }}>
                                    <Button variant="contained" sx={{ p: '10px 30px' }}><PlayArrowIcon sx={{ mr: 2 }} />get quotes from sellers</Button>
                                </Box>


                            </TabPanel>

                            <TabPanel value={2}>Manage Requirment</TabPanel>

                            <TabPanel value={3}>
                                <div className="mt-1 bg-white p-5">
                                    <div className=" d-flex">
                                        <div className=" text-center" style={{ padding: '10px', margin: '0  0 0 10px', width: '230px', height: '300px', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                            <div style={{ paddingTop: '4px' }}>
                                                <img style={{ height: 'auto', width: '180px', borderRadius: '6px' }} src={img11} alt="img11" />
                                            </div>
                                            <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                <div style={{ padding: '10px 0 20px 0' }}>
                                                    <Typography sx={{ m: '5px', color: 'black', fontWeight: 'bold' }}>Pneumatic Fittings</Typography>
                                                    <Typography sx={{ m: '5px', color: 'grey', }}><i>By: Kelvin Plastic Pvt Lmtd</i></Typography>
                                                    <Typography sx={{ m: '5px', color: 'black' }}>Rs 48.70 / Piece</Typography>
                                                    <Button sx={{ fontWeight: 'bold', mt: 1 }} fullWidth variant="outlined" size="small">Get Quotes</Button>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="text-center" style={{ padding: '10px', margin: '0  0 0 10px', width: '230px', height: '300px', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                            <div style={{ paddingTop: '4px' }}>
                                                <img style={{ height: 'auto', width: '180px', borderRadius: '6px' }} src={img21} alt="img21" />
                                            </div>
                                            <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                <div style={{ padding: '10px 0 20px 0' }}>
                                                    <Typography sx={{ m: '5px', color: 'black', fontWeight: 'bold' }}>Pneumatic Fittings</Typography>
                                                    <Typography sx={{ m: '5px', color: 'grey' }}><i>By: V T Export</i></Typography>
                                                    <Typography sx={{ m: '5px', color: 'black' }}>Rs 680 / Piece</Typography>
                                                    <Button sx={{ fontWeight: 'bold', mt: 1 }} fullWidth variant="outlined" size="small">Get Quotes</Button>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="text-center" style={{ padding: '10px', margin: '0  0 0 10px', width: '230px', height: '300px', boxShadow: '0.2px 0.2px 2px gray', backgroundColor: 'white', borderRadius: '6px' }}>
                                            <div style={{ paddingTop: '4px' }}>
                                                <img style={{ height: 'auto', width: '180px', borderRadius: '6px' }} src={img31} alt="img31" />
                                            </div>
                                            <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                                <div style={{ padding: '10px 0 20px 0' }}>
                                                    <Typography sx={{ m: '5px', color: 'black', fontWeight: 'bold' }}>Pipe Fittings</Typography>
                                                    <Typography sx={{ m: '5px', color: 'grey', }}><i>By: Rama Softway</i></Typography>
                                                    <Typography sx={{ m: '5px', color: 'black', }}>Rs 5,000 / Qty</Typography>
                                                    <Button sx={{ fontWeight: 'bold', mt: 1 }} fullWidth variant="outlined" size="small">Get Quotes</Button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel value={4}>
                                <div className=" d-flex flex-wrap mt-2 ">
                                    <div className="div-carrdd text-center mt-2 ms-4 mb-3"
                                        style={{
                                            padding: '10px', margin: '0  0 0 10px', width: '240px', height: '320px',
                                            backgroundColor: 'white', borderRadius: '6px'
                                        }}>
                                        <div style={{ paddingTop: '4px' }}>
                                            <img style={{ height: '200px', width: '180px', borderRadius: '6px', objectFit: 'cover' }} src={img11} alt="img11" />
                                        </div>
                                        <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                            <div style={{ padding: '10px 0 20px 0' }}>
                                                <Typography sx={{ m: '5px', color: 'black', fontWeight: 'bold' }}>Pneumatic Fittings</Typography>
                                                <Button sx={{ fontWeight: 'bold', mt: 1 }} fullWidth variant="contained" size="small">Get Quotes</Button>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="div-carrdd text-center mt-2 ms-4 mb-3"
                                        style={{
                                            padding: '10px', margin: '0  0 0 10px', width: '240px', height: '320px',
                                            backgroundColor: 'white', borderRadius: '6px'
                                        }}>
                                        <div style={{ paddingTop: '4px' }}>
                                            <img style={{ height: '200px', width: '180px', borderRadius: '6px', objectFit: 'cover' }} src={'https://3.imimg.com/data3/TI/NQ/GLADMIN-43592/accounting-software-250x250.jpg'} alt="img11" />
                                        </div>
                                        <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                            <div style={{ padding: '10px 0 20px 0' }}>
                                                <Typography sx={{ m: '5px', color: 'black', fontWeight: 'bold' }}>Accounting & Billing Software</Typography>
                                                <Button sx={{ fontWeight: 'bold', mt: 1 }} fullWidth variant="contained" size="small">Get Quotes</Button>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="div-carrdd text-center mt-2 ms-4 mb-3"
                                        style={{
                                            padding: '10px', margin: '0  0 0 10px', width: '240px', height: '320px',
                                            backgroundColor: 'white', borderRadius: '6px'
                                        }}>
                                        <div style={{ paddingTop: '4px' }}>
                                            <img style={{ height: '200px', width: '180px', borderRadius: '6px', objectFit: 'cover' }} src={'https://4.imimg.com/data4/HH/HH/GLADMIN-/wedding-light-250x250.jpg'} alt="img11" />
                                        </div>
                                        <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                            <div style={{ padding: '10px 0 20px 0' }}>
                                                <Typography sx={{ m: '5px', color: 'black', fontWeight: 'bold' }}> Wedding Light</Typography>
                                                <Button sx={{ fontWeight: 'bold', mt: 1 }} fullWidth variant="contained" size="small">Get Quotes</Button>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="div-carrdd text-center mt-2 ms-4 mb-3"
                                        style={{
                                            padding: '10px', margin: '0  0 0 10px', width: '240px', height: '320px',
                                            backgroundColor: 'white', borderRadius: '6px'
                                        }}>
                                        <div style={{ paddingTop: '4px' }}>
                                            <img style={{ height: '200px', width: '180px', borderRadius: '6px', objectFit: 'cover' }} src={'https://4.imimg.com/data4/JW/YU/GLADMIN-180662/wooden-study-table-250x250.jpg'} alt="img11" />
                                        </div>
                                        <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                            <div style={{ padding: '10px 0 20px 0' }}>
                                                <Typography sx={{ m: '5px', color: 'black', fontWeight: 'bold' }}>Wooden Study Table</Typography>
                                                <Button sx={{ fontWeight: 'bold', mt: 1 }} fullWidth variant="contained" size="small">Get Quotes</Button>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="div-carrdd text-center mt-2 ms-4 mb-3"
                                        style={{
                                            padding: '10px', margin: '0  0 0 10px', width: '240px', height: '320px',
                                            backgroundColor: 'white', borderRadius: '6px'
                                        }}>
                                        <div style={{ paddingTop: '4px' }}>
                                            <img style={{ height: '200px', width: '180px', borderRadius: '6px', objectFit: 'cover' }} src={'https://3.imimg.com/data3/MQ/VQ/GLADMIN-25559/decorative-light-250x250.jpg'} alt="img11" />
                                        </div>
                                        <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                            <div style={{ padding: '10px 0 20px 0' }}>
                                                <Typography sx={{ m: '5px', color: 'black', fontWeight: 'bold' }}>decorative Light</Typography>
                                                <Button sx={{ fontWeight: 'bold', mt: 1 }} fullWidth variant="contained" size="small">Get Quotes</Button>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="div-carrdd text-center mt-2 ms-4 mb-3"
                                        style={{
                                            padding: '10px', margin: '0  0 0 10px', width: '240px', height: '320px',
                                            backgroundColor: 'white', borderRadius: '6px'
                                        }}>
                                        <div style={{ paddingTop: '4px' }}>
                                            <img style={{ height: '200px', width: '180px', borderRadius: '6px', objectFit: 'cover' }} src={'https://3.imimg.com/data3/JC/AI/GLADMIN-12599/beech-furniture-250x250.jpg'} alt="img11" />
                                        </div>
                                        <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                            <div style={{ padding: '10px 0 20px 0' }}>
                                                <Typography sx={{ m: '5px', color: 'black', fontWeight: 'bold' }}>Beech Furniture</Typography>
                                                <Button sx={{ fontWeight: 'bold', mt: 1 }} fullWidth variant="contained" size="small">Get Quotes</Button>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="div-carrdd text-center mt-2 ms-4 mb-3"
                                        style={{
                                            padding: '10px', margin: '0  0 0 10px', width: '240px', height: '320px',
                                            backgroundColor: 'white', borderRadius: '6px'
                                        }}>
                                        <div style={{ paddingTop: '4px' }}>
                                            <img style={{ height: '200px', width: '180px', borderRadius: '6px', objectFit: 'cover' }} src={'https://5.imimg.com/data5/UP/RC/GLADMIN-2/nilkamal-wooden-table-250x250.jpg'} alt="img11" />
                                        </div>
                                        <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                            <div style={{ padding: '10px 0 20px 0' }}>
                                                <Typography sx={{ m: '5px', color: 'black', fontWeight: 'bold' }}>Nilkamal Wooden Table</Typography>
                                                <Button sx={{ fontWeight: 'bold', mt: 1 }} fullWidth variant="contained" size="small">Get Quotes</Button>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="div-carrdd text-center mt-2 ms-4 mb-3"
                                        style={{
                                            padding: '10px', margin: '0  0 0 10px', width: '240px', height: '320px',
                                            backgroundColor: 'white', borderRadius: '6px'
                                        }}>
                                        <div style={{ paddingTop: '4px' }}>
                                            <img style={{ height: '200px', width: '180px', borderRadius: '6px', objectFit: 'cover' }} src={'https://3.imimg.com/data3/DK/RU/GLADMIN-140808/tally-accounting-software-250x250.jpg'} alt="img11" />
                                        </div>
                                        <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                            <div style={{ padding: '10px 0 20px 0' }}>
                                                <Typography sx={{ m: '5px', color: 'black', fontWeight: 'bold' }}>Tally Accounting Software</Typography>
                                                <Button sx={{ fontWeight: 'bold', mt: 1 }} fullWidth variant="contained" size="small">Get Quotes</Button>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="div-carrdd text-center mt-2 ms-4 mb-3"
                                        style={{
                                            padding: '10px', margin: '0  0 0 10px', width: '240px', height: '320px',
                                            backgroundColor: 'white', borderRadius: '6px'
                                        }}>
                                        <div style={{ paddingTop: '4px' }}>
                                            <img style={{ height: '200px', width: '180px', borderRadius: '6px', objectFit: 'cover' }} src={'https://5.imimg.com/data5/NS/RQ/GLADMIN-2/gst-software-250x250.jpg'} alt="img11" />
                                        </div>
                                        <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                            <div style={{ padding: '10px 0 20px 0' }}>
                                                <Typography sx={{ m: '5px', color: 'black', fontWeight: 'bold' }}>GST Software</Typography>
                                                <Button sx={{ fontWeight: 'bold', mt: 1 }} fullWidth variant="contained" size="small">Get Quotes</Button>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="div-carrdd text-center mt-2 ms-4 mb-3"
                                        style={{
                                            padding: '10px', margin: '0  0 0 10px', width: '240px', height: '320px',
                                            backgroundColor: 'white', borderRadius: '6px'
                                        }}>
                                        <div style={{ paddingTop: '4px' }}>
                                            <img style={{ height: '200px', width: '180px', borderRadius: '6px', objectFit: 'cover' }} src={'https://3.imimg.com/data3/MC/SP/GLADMIN-39080/study-table-250x250.jpg'} alt="img11" />
                                        </div>
                                        <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                            <div style={{ padding: '10px 0 20px 0' }}>
                                                <Typography sx={{ m: '5px', color: 'black', fontWeight: 'bold' }}>Study Table </Typography>
                                                <Button sx={{ fontWeight: 'bold', mt: 1 }} fullWidth variant="contained" size="small">Get Quotes</Button>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="div-carrdd text-center mt-2 ms-4 mb-3"
                                        style={{
                                            padding: '10px', margin: '0  0 0 10px', width: '240px', height: '320px',
                                            backgroundColor: 'white', borderRadius: '6px'
                                        }}>
                                        <div style={{ paddingTop: '4px' }}>
                                            <img style={{ height: '200px', width: '180px', borderRadius: '6px', objectFit: 'cover' }} src={'https://3.imimg.com/data3/LF/ID/MY-2/kids-table-250x250.jpg'} alt="img11" />
                                        </div>
                                        <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                            <div style={{ padding: '10px 0 20px 0' }}>
                                                <Typography sx={{ m: '5px', color: 'black', fontWeight: 'bold' }}>Kids Table </Typography>
                                                <Button sx={{ fontWeight: 'bold', mt: 1 }} fullWidth variant="contained" size="small">Get Quotes</Button>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="div-carrdd text-center mt-2 ms-4 mb-3"
                                        style={{
                                            padding: '10px', margin: '0  0 0 10px', width: '240px', height: '320px',
                                            backgroundColor: 'white', borderRadius: '6px'
                                        }}>
                                        <div style={{ paddingTop: '4px' }}>
                                            <img style={{ height: '200px', width: '180px', borderRadius: '6px', objectFit: 'cover' }} src={'https://3.imimg.com/data3/BD/OX/GLADMIN-13018/wooden-dressing-table-250x250.jpg'} alt="img11" />
                                        </div>
                                        <div style={{ paddingLeft: '2px', fontSize: '14px' }}>
                                            <div style={{ padding: '10px 0 20px 0' }}>
                                                <Typography sx={{ m: '5px', color: 'black', fontWeight: 'bold' }}>Wooden Dressing Table </Typography>
                                                <Button sx={{ fontWeight: 'bold', mt: 1 }} fullWidth variant="contained" size="small">Get Quotes</Button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel value={5}>Past Searches</TabPanel>

                            <TabPanel value={6} className="div-ship mt-1">
                                <Tabs defaultValue={0} style={{ marginTop: '35%' }}>
                                    <TabsList style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Tab style={{ fontWeight: 'bold', fontSize: '12px', border: 'none', padding: '8px 10px', borderRadius: '10px 0 0 10px' }} value={0}>
                                            <div>
                                                <img style={{ width: '50px' }} src={truckImg} alt="truckImg" />
                                                <h6>Full Truck</h6>
                                                <p style={{ fontSize: '12px', color: 'grey' }} >More than 2.5 Tons</p>
                                            </div>
                                        </Tab>
                                        <Tab style={{ fontWeight: 'bold', fontSize: '12px', border: 'none', padding: '8px 10px' }} value={1}>
                                            <div>
                                                <img style={{ width: '50px' }} src={minitruckImg} alt="minitruckImg" />
                                                <h6>Part Truck</h6>
                                                <p style={{ fontSize: '12px', color: 'grey' }} >30 Kg to 2500 Kg</p>

                                            </div>
                                        </Tab>
                                        <Tab style={{ fontWeight: 'bold', fontSize: '12px', border: 'none', padding: '8px 10px', borderRadius: '0 10px 10px 0' }} value={2}>
                                            <div>
                                                <img style={{ width: '50px' }} src={courierImg} alt="courierImg" />
                                                <h6>Courier</h6>
                                                <p style={{ fontSize: '12px', color: 'grey' }} >Less than 30 Kg</p>

                                            </div>
                                        </Tab>
                                    </TabsList>
                                    <TabPanel value={0}>
                                        <Box sx={{ bgcolor: 'white', mt: 5, mb: 5, padding: '20px 30px', borderRadius: '10px', boxShadow: '0.2px 0.2px 6px gray' }}>
                                            <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>Enter Your Shipment Details</Typography>
                                            <TextField sx={{ mt: 2, mb: 2, width: '400px' }} placeholder="Enter Pickup City" label="Enter Pickup City" />
                                            <TextField sx={{ mt: 2, mb: 2, width: '400px', ml: 5 }} placeholder="Enter Drop City" label="Enter Drop City" />
                                            <div className="ms-1 pb-3">
                                                <Typography sx={{ pt: 1, fontWeight: 'bold' }}>Material Weight  </Typography>
                                                <RadioGroup defaultValue=" Upto 3 Ton">
                                                    <div className=" d-flex ms-5">
                                                        <FormControlLabel value=" Upto 3 Ton" control={<Radio />} label=" Upto 3 Ton" />
                                                        <FormControlLabel value="Local Only" control={<Radio />} label="Local Only" />
                                                        <FormControlLabel value="9 to 18 Ton" control={<Radio />} label="9 to 18 Ton" />
                                                        <FormControlLabel value="More than 18 Ton" control={<Radio />} label="More than 18 Ton" />
                                                    </div>
                                                </RadioGroup>
                                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Button variant="contained" sx={{ p: '10px 20px', borderRadius: '20px', mt: 5 }}>Find Transporters</Button>

                                                </div>
                                            </div>

                                        </Box>
                                    </TabPanel>
                                    <TabPanel value={1}>
                                        <Box sx={{ bgcolor: 'white', mt: 5, mb: 5, padding: '20px 30px', borderRadius: '10px', boxShadow: '0.2px 0.2px 6px gray' }}>
                                            <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>Enter Your Shipment Details</Typography>
                                            <TextField sx={{ mt: 2, mb: 2 }} placeholder="Enter Pickup City" label="Enter Pickup City" />
                                            <TextField sx={{ mt: 2, mb: 2, ml: 5 }} placeholder="Enter Drop City" label="Enter Drop City" />
                                            <div className="ms-1 pb-3">
                                                <Typography sx={{ pt: 1, fontWeight: 'bold', mb: 2 }}>Material Weight  </Typography>
                                                <TextField label='Material Weight ' fullWidth />

                                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Button variant="contained" sx={{ p: '10px 20px', borderRadius: '20px', mt: 5 }}>Find Transporters</Button>

                                                </div>
                                            </div>

                                        </Box>
                                    </TabPanel>
                                    <TabPanel value={2}>
                                        <Box sx={{ bgcolor: 'white', mt: 5, mb: 5, padding: '20px 30px', borderRadius: '10px', boxShadow: '0.2px 0.2px 6px gray' }}>
                                            <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>Enter Your Shipment Details</Typography>
                                            <TextField sx={{ mt: 2, mb: 2 }} placeholder="Pickup Pincode" label="Pickup Pincode" />
                                            <TextField sx={{ mt: 2, mb: 2, ml: 5 }} placeholder="Drop Pincode" label="Drop Pincode" />
                                            <div className="ms-1 pb-3">
                                                <Typography sx={{ pt: 1, fontWeight: 'bold', mb: 2 }}>Material Weight  </Typography>
                                                <TextField label='Material Weight ' fullWidth />

                                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Button variant="contained" sx={{ p: '10px 20px', borderRadius: '20px', mt: 5 }}>Find Transporters</Button>

                                                </div>
                                            </div>

                                        </Box>
                                    </TabPanel>
                                </Tabs>


                            </TabPanel>

                            <TabPanel value={7}>

                                <Box>
                                    <Typography sx={{ fontWeight: 'bold', m: 4, textAlign: 'center', fontSize: '22px' }}>Choose The Loan Offer That Suits You Best</Typography>
                                    <Box sx={{ display: 'flex', mt: 2, bgcolor: 'rgb(179, 193, 249)', p: 2, pb: 4, borderRadius: '10px' }}>

                                        <div style={{ marginLeft: '5px', marginTop: '20px' }} className=" d-flex">
                                            <FilterAltOutlinedIcon sx={{ mr: 1, color: 'blue' }} />
                                            <Typography sx={{ color: 'grey' }}>  Filter</Typography>
                                        </div>
                                        <div style={{ marginLeft: '20px' }}>
                                            <p style={{ margin: 0, fontSize: '12px', color: 'grey' }}>PinCode</p>
                                            <TextField size="small" placeholder="Enter Pincode" sx={{ bgcolor: 'white' }} />
                                        </div>
                                        <div style={{ marginLeft: '20px', marginTop: '18px' }}>
                                            <select style={{ padding: '8px', borderRadius: '4px', color: 'grey', width: '250px' }} placeholder="Business vintage">
                                                <option selected>Business vintage</option>
                                                <option >0-3 months</option>
                                                <option>3-6 months</option>
                                                <option>6-12 months</option>
                                                <option>12-24 months</option>
                                                <option>24-36 months</option>
                                            </select>
                                        </div>
                                        <div style={{ marginLeft: '20px' }}>
                                            <p style={{ margin: 0, fontSize: '12px', color: 'grey' }}>Annual turnover</p>
                                            <select style={{ padding: '8px', borderRadius: '4px', color: 'grey', width: '250px' }} placeholder="Annual turnover">
                                                <option selected>Annual turnover</option>
                                                <option>Less than 10L</option>
                                                <option>10L-25L</option>
                                                <option>25L-40L</option>
                                                <option>40L-1.5Cr</option>
                                                <option>1.5Cr-5Cr</option>
                                                <option>more than 5Cr</option>

                                            </select>
                                        </div>
                                        <div style={{ marginLeft: '20px', marginTop: '18px' }}>
                                            <select style={{ padding: '8px', borderRadius: '4px', color: 'grey', width: '250px' }} placeholder="Load Amount Requirgb(255, 150, 150)">
                                                <option selected>Load Amount Requirgb(255, 150, 150)</option>
                                                <option>Less than 5L</option>
                                                <option>5L-10L</option>
                                                <option>10L-20L</option>
                                                <option>20L-40L</option>
                                                <option>more than 40L</option>

                                            </select>
                                        </div>
                                    </Box>
                                </Box>

                                <Box sx={{ mt: 3, bgcolor: 'white' }}>
                                    <TableContainer>
                                        <Table sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                            <TableHead sx={{ bgcolor: 'rgb(229, 193, 249)' }}>
                                                <TableRow>
                                                    <TableCell sx={{ fontWeight: 'bolder', border: '1px solid rgb(255, 150, 150)' }}>Partner</TableCell>
                                                    <TableCell sx={{ fontWeight: 'bolder', border: '1px solid rgb(255, 150, 150)' }}>Loan Type</TableCell>
                                                    <TableCell sx={{ fontWeight: 'bolder', border: '1px solid rgb(255, 150, 150)' }}>Amount</TableCell>
                                                    <TableCell sx={{ fontWeight: 'bolder', border: '1px solid rgb(255, 150, 150)' }}>Interest Rate</TableCell>
                                                    <TableCell sx={{ fontWeight: 'bolder', border: '1px solid rgb(255, 150, 150)' }}>Processing Fees</TableCell>
                                                    <TableCell sx={{ fontWeight: 'bolder', border: '1px solid rgb(255, 150, 150)' }}>Features</TableCell>
                                                    <TableCell sx={{ fontWeight: 'bolder', border: '1px solid rgb(255, 150, 150)' }}></TableCell>

                                                </TableRow>
                                            </TableHead>

                                            <TableBody>
                                                <TableRow>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <img style={{ width: '100px' }} src="https://loans.indiamart.com/images/Indifi_logo-01.png" alt="img-l" />
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>Collateral-free</TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '10px', color: 'grey' }}>upto</Typography>
                                                        <Typography>₹20 Lakhs</Typography>
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '10px', color: 'grey' }}>Starts @</Typography>
                                                        <Typography>18% p.a.*</Typography>
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '10px', color: 'grey' }}>Starts @</Typography>
                                                        <Typography>0%</Typography>
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '14px' }}><CheckCircleOutlineIcon sx={{ fontSize: '12px' }} /> No Collateral</Typography>
                                                        <Typography sx={{ fontSize: '14px' }}><CheckCircleOutlineIcon sx={{ fontSize: '12px' }} />Minimal Documents</Typography>
                                                        <Typography sx={{ fontSize: '14px' }}><CheckCircleOutlineIcon sx={{ fontSize: '12px' }} />Dedicated RM</Typography>

                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Button variant="contained">APPLY NOW</Button>
                                                    </TableCell>

                                                </TableRow>

                                                <TableRow>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <img style={{ width: '100px' }} src="https://loans.indiamart.com/images/ICICI_Bank_Logo-01.jpg" alt="img-l" />
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>Collateral-free</TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '10px', color: 'grey' }}>upto</Typography>
                                                        <Typography>₹25 Lakhs</Typography>
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '10px', color: 'grey' }}>Starts @</Typography>
                                                        <Typography>14% p.a.*</Typography>
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '10px', color: 'grey' }}>Starts @</Typography>
                                                        <Typography>1%</Typography>
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '14px' }}><CheckCircleOutlineIcon sx={{ fontSize: '12px' }} /> Instant Approval</Typography>
                                                        <Typography sx={{ fontSize: '14px' }} ><CheckCircleOutlineIcon sx={{ fontSize: '12px' }} /> Quick Disbursement </Typography>
                                                        <Typography sx={{ fontSize: '14px' }} ><CheckCircleOutlineIcon sx={{ fontSize: '12px' }} />No Financials Needed </Typography>

                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Button variant="contained">APPLY NOW</Button>
                                                    </TableCell>

                                                </TableRow>

                                                <TableRow>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <img style={{ width: '100px' }} src="https://loans.indiamart.com/images/lendingkartlogo-.svg" alt="img-l" />
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>Collateral-free</TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '10px', color: 'grey' }}>upto</Typography>
                                                        <Typography>₹15 Lakhs</Typography>
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '10px', color: 'grey' }}>Starts @</Typography>
                                                        <Typography>22% p.a.*</Typography>
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '10px', color: 'grey' }}>Starts @</Typography>
                                                        <Typography>3%</Typography>
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '14px' }}><CheckCircleOutlineIcon sx={{ fontSize: '12px' }} /> No Collateral </Typography>
                                                        <Typography sx={{ fontSize: '14px' }} ><CheckCircleOutlineIcon sx={{ fontSize: '12px' }} />  100% Paperless  </Typography>
                                                        <Typography sx={{ fontSize: '14px' }} ><CheckCircleOutlineIcon sx={{ fontSize: '12px' }} />No Pre-Closure Fee   </Typography>

                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Button variant="contained">APPLY NOW</Button>
                                                    </TableCell>

                                                </TableRow>


                                                <TableRow>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <img style={{ width: '100px' }} src="https://loans.indiamart.com/images/IIFL-New-Common-logo.png" alt="img-l" />
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>Collateral-free</TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '10px', color: 'grey' }}>upto</Typography>
                                                        <Typography>₹15 Lakhs</Typography>
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '10px', color: 'grey' }}>Starts @</Typography>
                                                        <Typography>16% p.a.*</Typography>
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '10px', color: 'grey' }}>Starts @</Typography>
                                                        <Typography>2%</Typography>
                                                    </TableCell>


                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '14px' }}><CheckCircleOutlineIcon sx={{ fontSize: '12px' }} />  No Collateral </Typography>
                                                        <Typography sx={{ fontSize: '14px' }} ><CheckCircleOutlineIcon sx={{ fontSize: '12px' }} /> 100% Paperless </Typography>
                                                        <Typography sx={{ fontSize: '14px' }} ><CheckCircleOutlineIcon sx={{ fontSize: '12px' }} /> Quick Loan Approval</Typography>

                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Button variant="contained">APPLY NOW</Button>
                                                    </TableCell>

                                                </TableRow>



                                                <TableRow>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <img style={{ width: '100px' }} src="https://loans.indiamart.com/images/Crgb(255, 150, 150)itEnable_Logo_Dark_Blue.png" alt="img-l" />
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>Collateral-free</TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '10px', color: 'grey' }}>upto</Typography>
                                                        <Typography>₹20 Lakhs</Typography>
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '10px', color: 'grey' }}>Starts @</Typography>
                                                        <Typography>14% p.a.*</Typography>
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '10px', color: 'grey' }}>Starts @</Typography>
                                                        <Typography>1.5%</Typography>
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '14px' }}><CheckCircleOutlineIcon sx={{ fontSize: '12px' }} /> No Collateral </Typography>
                                                        <Typography sx={{ fontSize: '14px' }} ><CheckCircleOutlineIcon sx={{ fontSize: '12px' }} /> 30+ Lenders  </Typography>
                                                        <Typography sx={{ fontSize: '14px' }} ><CheckCircleOutlineIcon sx={{ fontSize: '12px' }} />Zero Service Charges </Typography>

                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Button variant="contained">APPLY NOW</Button>
                                                    </TableCell>

                                                </TableRow>


                                                <TableRow>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <img style={{ width: '100px' }} src="https://loans.indiamart.com/images/CM-Logo-1920.png" alt="img-l" />
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>Collateral-free</TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '10px', color: 'grey' }}>upto</Typography>
                                                        <Typography>₹25 Lakhs</Typography>
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '10px', color: 'grey' }}>Starts @</Typography>
                                                        <Typography>16% p.a.*</Typography>
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '10px', color: 'grey' }}>Starts @</Typography>
                                                        <Typography>3%</Typography>
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '14px' }}><CheckCircleOutlineIcon sx={{ fontSize: '12px' }} />20k+ Pincodes Serviceable</Typography>
                                                        <Typography sx={{ fontSize: '14px' }} ><CheckCircleOutlineIcon sx={{ fontSize: '12px' }} /> Quick Disbursement</Typography>
                                                        <Typography sx={{ fontSize: '14px' }} ><CheckCircleOutlineIcon sx={{ fontSize: '12px' }} /> No Collateral</Typography>

                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Button variant="contained">APPLY NOW</Button>
                                                    </TableCell>

                                                </TableRow>

                                                <TableRow>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <img style={{ width: '100px' }} src="https://loans.indiamart.com/images/Andromeda.jpeg(2)(1).jpg" alt="img-l" />
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>Collateral-free</TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '10px', color: 'grey' }}>upto</Typography>
                                                        <Typography>₹40 Lakhs</Typography>
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '10px', color: 'grey' }}>Starts @</Typography>
                                                        <Typography>9.5% p.a.*</Typography>
                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '10px', color: 'grey' }}>Starts @</Typography>
                                                        <Typography>1%</Typography>
                                                    </TableCell>

                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Typography sx={{ fontSize: '14px' }}><CheckCircleOutlineIcon sx={{ fontSize: '12px' }} />Minimum Charges </Typography>
                                                        <Typography sx={{ fontSize: '14px' }} ><CheckCircleOutlineIcon sx={{ fontSize: '12px' }} /> Interest Against Usage </Typography>
                                                        <Typography sx={{ fontSize: '14px' }} ><CheckCircleOutlineIcon sx={{ fontSize: '12px' }} />  Flexible Withdrawals  </Typography>

                                                    </TableCell>
                                                    <TableCell sx={{ border: '1px solid rgb(255, 150, 150)' }}>
                                                        <Button variant="contained">APPLY NOW</Button>
                                                    </TableCell>

                                                </TableRow>

                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Box>

                                <Box>
                                    <Typography sx={{ fontWeight: 'bold', m: 4, textAlign: 'center', fontSize: '22px' }}>Know More About Your Loan</Typography>
                                    <Tabs className=" d-flex">
                                        <TabsList>
                                            <div className=" col-sm-3 bg-white p-5 rounded-3" style={{ width: '300px' }}>
                                                <Tab value={0} style={{ borderRadius: '10px', border: 'none' }}>Collateral-free Loans</Tab>
                                                <Tab value={1} style={{ margin: '20px 0', borderRadius: '10px', border: 'none' }}>Secured Business Loan / Loan Against Property</Tab>
                                                <Tab value={2} style={{ borderRadius: '10px', border: 'none' }}>Compare loans</Tab>
                                            </div>
                                        </TabsList>
                                        <div className=" col-sm-8">
                                            <TabPanel value={0}>
                                                <Box sx={{ bgcolor: 'white', ml: 2, p: 2, borderRadius: '10px' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 40px' }}>
                                                        <Typography sx={{ fontWeight: 'bold' }}>Simplify tedious loan process with us</Typography>
                                                        <Button variant="contained">explore</Button>
                                                    </div>
                                                    <div>
                                                        <Typography sx={{ fontWeight: 'bold', fontSize: '20px', ml: 4 }}>Features</Typography>
                                                    </div>
                                                    <div className=" d-flex flex-wrap" >
                                                        <div className=" d-flex m-4">
                                                            <CurrencyRupeeOutlinedIcon sx={{ mr: 1, color: '#388e3c' }} />
                                                            <p>Upto ₹20 Lakhs</p>
                                                        </div>
                                                        <div className=" d-flex m-4">
                                                            <NoBackpackOutlinedIcon sx={{ mr: 1, color: '#0d47a1' }} />
                                                            <p>100% Paperless</p>
                                                        </div>
                                                        <div className=" d-flex m-4">
                                                            <TimerOutlinedIcon sx={{ mr: 1, color: '#e65100' }} />
                                                            <p>Superfast</p>
                                                        </div>
                                                        <div className=" d-flex m-4">
                                                            <CalendarMonthOutlinedIcon sx={{ mr: 1, color: '#0d47a1' }} />
                                                            <p>Upto 5 Years</p>
                                                        </div>
                                                        <div className=" d-flex m-4">
                                                            <PercentOutlinedIcon sx={{ mr: 1, color: '#f57f17' }} />
                                                            <p>18 % p.a.* Onwards</p>
                                                        </div>
                                                        <div className=" d-flex m-4">
                                                            <EditCalendarOutlinedIcon sx={{ mr: 1, color: '#64b5f6' }} />
                                                            <p>No Collateral Required</p>
                                                        </div>

                                                    </div>
                                                </Box>

                                                <Box sx={{ bgcolor: 'white', borderRadius: '10px', mt: 0.5 }}>
                                                    <Typography sx={{ fontWeight: 'bold', ml: 3, p: 2, fontSize: '22px' }}>How it works ?</Typography>
                                                    <div className=" d-flex">
                                                        <div className=" text-center">
                                                            <ScreenSearchDesktopIcon sx={{ fontSize: '42px', color: '#ff1744' }} />
                                                            <p>Apply for loan & upload the documents</p>
                                                        </div>
                                                        <div className=" text-center">
                                                            <TrendingFlatIcon sx={{ mt: 3, color: 'grey' }} />
                                                        </div>
                                                        <div className=" text-center">
                                                            <TaskOutlinedIcon sx={{ fontSize: '42px', color: '#ff1744' }} />
                                                            <p>Get the loan approval</p>
                                                        </div>
                                                        <div className=" text-center">
                                                            <TrendingFlatIcon sx={{ mt: 3, color: 'grey' }} />
                                                        </div>
                                                        <div className=" text-center">
                                                            <NoteAltOutlinedIcon sx={{ fontSize: '42px', color: '#ff1744' }} />
                                                            <p>Complete the verification process</p>
                                                        </div>
                                                        <div className=" text-center">
                                                            <TrendingFlatIcon sx={{ mt: 3, color: 'grey' }} />
                                                        </div>
                                                        <div className=" text-center">
                                                            <MonetizationOnOutlinedIcon sx={{ fontSize: '42px', color: '#ff1744' }} />
                                                            <p>Get the loan disbursal</p>
                                                        </div>


                                                    </div>

                                                    <div>
                                                        <Typography sx={{ fontWeight: 'bold', ml: 3, p: 2, fontSize: '22px' }}>Eligibility</Typography>
                                                        <div className=" d-flex flex-wrap">
                                                            <div className=" d-flex ms-5 mb-4">
                                                                <CheckCircleIcon sx={{ mr: 1, color: 'green' }} />
                                                                <Typography>Age Between <strong>23 - 60 </strong>Years</Typography>
                                                            </div>
                                                            <div className=" d-flex ms-4 mb-4 ps-1">
                                                                <CheckCircleIcon sx={{ mr: 1, color: 'green' }} />
                                                                <Typography>Annual Turnover - Above <strong>₹ 20 Lakhs</strong> yearly</Typography>
                                                            </div>
                                                            <div className=" d-flex ms-5 mb-4">
                                                                <CheckCircleIcon sx={{ mr: 1, color: 'green' }} />
                                                                <Typography>CIBIL Score - Above <strong>700</strong></Typography>
                                                            </div>
                                                            <div className=" d-flex ms-5 mb-4">
                                                                <CheckCircleIcon sx={{ mr: 1, color: 'green' }} />
                                                                <Typography> Business Vintage - Above<strong>2 Years</strong></Typography>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div>
                                                        <Typography sx={{ fontWeight: 'bold', ml: 3, p: 2, fontSize: '22px' }}>Documents</Typography>
                                                        <div className=" d-flex">
                                                            <div>
                                                                <div className=" d-flex ms-5 mb-4">
                                                                    <DescriptionOutlinedIcon sx={{ mr: 1, color: '#82b1ff' }} />
                                                                    <Typography><strong>KYC</strong> information of Business</Typography>
                                                                </div>

                                                                <div className=" d-flex ms-5 mb-4">
                                                                    <DescriptionOutlinedIcon sx={{ mr: 1, color: '#82b1ff' }} />
                                                                    <Typography>6-12 Months <strong>Bank Statements</strong></Typography>
                                                                </div>
                                                            </div>

                                                            <div className=" d-flex ms-4 ps-1 w-50">
                                                                <ErrorOutlineOutlinedIcon sx={{ mr: 1, color: 'grey', fontSize: '32px' }} />
                                                                <Typography>Please note that the above list of documents is indicative. During Loan processing further documents may be required.</Typography>
                                                            </div>

                                                        </div>

                                                    </div>

                                                </Box>
                                            </TabPanel>

                                            <TabPanel value={1}>
                                                <Box sx={{ bgcolor: 'white', ml: 2, p: 2, borderRadius: '10px' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 40px' }}>
                                                        <Typography sx={{ fontWeight: 'bold' }}>Simplify tedious loan process with us</Typography>
                                                        <Button variant="contained">explore</Button>
                                                    </div>
                                                    <div>
                                                        <Typography sx={{ fontWeight: 'bold', fontSize: '20px', ml: 4 }}>Features</Typography>
                                                    </div>
                                                    <div className=" d-flex flex-wrap" >
                                                        <div className=" d-flex m-4">
                                                            <CurrencyRupeeOutlinedIcon sx={{ mr: 1, color: '#388e3c' }} />
                                                            <p>Upto ₹1 Crore</p>
                                                        </div>
                                                        <div className=" d-flex m-4">
                                                            <NoBackpackOutlinedIcon sx={{ mr: 1, color: '#0d47a1' }} />
                                                            <p>100% Paperless</p>
                                                        </div>
                                                        <div className=" d-flex m-4">
                                                            <TimerOutlinedIcon sx={{ mr: 1, color: '#e65100' }} />
                                                            <p>End to End Assistance</p>
                                                        </div>
                                                        <div className=" d-flex m-4">
                                                            <CalendarMonthOutlinedIcon sx={{ mr: 1, color: '#0d47a1' }} />
                                                            <p>CC/OD Available</p>
                                                        </div>
                                                        <div className=" d-flex m-4">
                                                            <PercentOutlinedIcon sx={{ mr: 1, color: '#f57f17' }} />
                                                            <p>8.5 % p.a.* Onwards</p>
                                                        </div>
                                                        <div className=" d-flex m-4">
                                                            <EditCalendarOutlinedIcon sx={{ mr: 1, color: '#64b5f6' }} />
                                                            <p> Collateral Required</p>
                                                        </div>

                                                    </div>
                                                </Box>

                                                <Box sx={{ bgcolor: 'white', borderRadius: '10px', mt: 0.5 }}>
                                                    <Typography sx={{ fontWeight: 'bold', ml: 3, p: 2, fontSize: '22px' }}>How it works ?</Typography>
                                                    <div className=" d-flex">
                                                        <div className=" text-center">
                                                            <DocumentScannerOutlinedIcon sx={{ fontSize: '42px', color: 'orange' }} />
                                                            <p>Provide your information & business documents</p>
                                                        </div>
                                                        <div className=" text-center">
                                                            <TrendingFlatIcon sx={{ mt: 3, color: 'grey' }} />
                                                        </div>
                                                        <div className=" text-center">
                                                            <CreditScoreOutlinedIcon sx={{ fontSize: '42px', color: 'orange' }} />
                                                            <p>Get the loan approval</p>
                                                        </div>
                                                        <div className=" text-center">
                                                            <TrendingFlatIcon sx={{ mt: 3, color: 'grey' }} />
                                                        </div>
                                                        <div className=" text-center">
                                                            <ScreenSearchDesktopIcon sx={{ fontSize: '42px', color: 'orange' }} />
                                                            <p>Sign the loan Agreement & Repayment instrument</p>
                                                        </div>
                                                        <div className=" text-center">
                                                            <TrendingFlatIcon sx={{ mt: 3, color: 'grey' }} />
                                                        </div>
                                                        <div className=" text-center">
                                                            <AccountBalanceOutlinedIcon sx={{ fontSize: '42px', color: 'orange' }} />
                                                            <p>Get the Money in your bank</p>
                                                        </div>


                                                    </div>

                                                    <div>
                                                        <Typography sx={{ fontWeight: 'bold', ml: 3, p: 2, fontSize: '22px' }}>Eligibility</Typography>
                                                        <div className=" d-flex flex-wrap">
                                                            <div className=" d-flex ms-5 mb-4">
                                                                <CheckCircleIcon sx={{ mr: 1, color: 'green' }} />
                                                                <Typography>Age Between <strong>23 - 60 </strong>Years</Typography>
                                                            </div>
                                                            <div className=" d-flex ms-4 mb-4 ps-1">
                                                                <CheckCircleIcon sx={{ mr: 1, color: 'green' }} />
                                                                <Typography>Annual Turnover - Min <strong>₹ 50 Lakhs</strong> yearly</Typography>
                                                            </div>
                                                            <div className=" d-flex ms-5 mb-4">
                                                                <CheckCircleIcon sx={{ mr: 1, color: 'green' }} />
                                                                <Typography>CIBIL Score - Above <strong>700</strong></Typography>
                                                            </div>
                                                            <div className=" d-flex ms-5 mb-4">
                                                                <CheckCircleIcon sx={{ mr: 1, color: 'green' }} />
                                                                <Typography> Business Vintage - Above<strong> 2 Years</strong></Typography>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div>
                                                        <Typography sx={{ fontWeight: 'bold', ml: 3, p: 2, fontSize: '22px' }}>Documents</Typography>
                                                        <div className=" d-flex">
                                                            <div>
                                                                <div className=" d-flex ms-5 mb-4">
                                                                    <DescriptionOutlinedIcon sx={{ mr: 1, color: '#82b1ff' }} />
                                                                    <Typography><strong>KYC</strong> information of Business</Typography>
                                                                </div>

                                                                <div className=" d-flex ms-5 mb-4">
                                                                    <DescriptionOutlinedIcon sx={{ mr: 1, color: '#82b1ff' }} />
                                                                    <Typography>6-12 Months <strong>Bank Statements</strong></Typography>
                                                                </div>
                                                                <div className=" d-flex ms-5 mb-4">
                                                                    <DescriptionOutlinedIcon sx={{ mr: 1, color: '#82b1ff' }} />
                                                                    <Typography>Min. 2 year ITR Statements</Typography>
                                                                </div>
                                                                <div className=" d-flex ms-5 mb-4">
                                                                    <DescriptionOutlinedIcon sx={{ mr: 1, color: '#82b1ff' }} />
                                                                    <Typography> Proof of Business Ownership</Typography>
                                                                </div>
                                                                <div className=" d-flex ms-5 mb-4">
                                                                    <DescriptionOutlinedIcon sx={{ mr: 1, color: '#82b1ff' }} />
                                                                    <Typography>Property Documents to be Mortgaged</Typography>
                                                                </div>
                                                                <div className=" d-flex ms-5 mb-4">
                                                                    <DescriptionOutlinedIcon sx={{ mr: 1, color: '#82b1ff' }} />
                                                                    <Typography>GST Details of Business</Typography>
                                                                </div>

                                                            </div>

                                                            <div className=" d-flex ms-3 ps-1 w-50">
                                                                <ErrorOutlineOutlinedIcon sx={{ mr: 1, color: 'grey', fontSize: '32px' }} />
                                                                <Typography>Please note that the above list of documents is indicative. During Loan processing further documents may be required.</Typography>
                                                            </div>

                                                        </div>

                                                    </div>

                                                </Box>
                                            </TabPanel>

                                            <TabPanel value={2}>
                                                <Box>
                                                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '22px' }}>Find The Perfect Business Loan For Your Specific Needs</Typography>
                                                    <Box sx={{ display: 'flex', mt: 3, border: '1px solid lightgrey', ml: 2 }}>
                                                        <TableContainer sx={{ width: '200px' }}>
                                                            <Table>
                                                                <TableHead>
                                                                    <TableRow>
                                                                        <TableCell sx={{ height: '80px' }}></TableCell>
                                                                    </TableRow>
                                                                </TableHead>
                                                                <TableBody>
                                                                    <TableRow>
                                                                        <TableCell sx={{ fontWeight: 'bold' }}>Loan Amount</TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell sx={{ fontWeight: 'bold' }}>Loan Type</TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell sx={{ fontWeight: 'bold' }}>Tenure </TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell sx={{ fontWeight: 'bold' }}>Rate of Interest </TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell sx={{ fontWeight: 'bold' }}>Journey Type </TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell sx={{ fontWeight: 'bold' }}>Timeline</TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell sx={{ fontWeight: 'bold' }}>Collateral</TableCell>
                                                                    </TableRow>
                                                                </TableBody>
                                                            </Table>
                                                        </TableContainer>

                                                        <TableContainer sx={{ width: '300px', mr: 4 }}>
                                                            <Table sx={{ bgcolor: 'white' }}>
                                                                <TableHead>
                                                                    <TableRow>
                                                                        <TableCell sx={{ bgcolor: '#0d47a1', color: 'white', borderRadius: '20px 20px 0 0', fontSize: '20px' }}>Collateral-free Business Loans</TableCell>
                                                                    </TableRow>
                                                                </TableHead>
                                                                <TableBody>
                                                                    <TableRow>
                                                                        <TableCell> Upto ₹20 Lakhs</TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell>Term Loan </TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell>Upto 5 Years </TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell>18% p.a.* Onwards </TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell>100% Paperless  </TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell>Superfast</TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell>Not Required</TableCell>
                                                                    </TableRow>
                                                                </TableBody>
                                                            </Table>
                                                        </TableContainer>

                                                        <TableContainer sx={{ width: '300px' }}>
                                                            <Table sx={{ bgcolor: "white" }}>
                                                                <TableHead>
                                                                    <TableRow>
                                                                        <TableCell sx={{ bgcolor: '#0d47a1', color: 'white', borderRadius: '20px 20px 0 0', fontSize: '20px' }}>Secured Business Loan / Loan Against Property</TableCell>
                                                                    </TableRow>
                                                                </TableHead>
                                                                <TableBody>
                                                                    <TableRow>
                                                                        <TableCell> Upto ₹1 Crore</TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell>CC/OD </TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell>Not Applicable </TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell>8.5% p.a.* onwards </TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell>Assisted </TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell>Fast</TableCell>
                                                                    </TableRow>
                                                                    <TableRow>
                                                                        <TableCell>Required</TableCell>
                                                                    </TableRow>
                                                                </TableBody>
                                                            </Table>
                                                        </TableContainer>
                                                    </Box>

                                                </Box>
                                            </TabPanel>
                                        </div>
                                    </Tabs>
                                </Box>

                                <Box sx={{ bgcolor: '#bbdefb', textAlign: 'center', mt: 2, borderRadius: '10px', pb: 4 }}>
                                    <Typography sx={{ fontSize: '24px', p: 3, fontWeight: 'bolder' }}>Fees & Charges</Typography>
                                    <Typography sx={{ p: '0 80px', letterSpacing: 1 }}>
                                        The business loan fees and charges may differ depending upon the lender and a particular case.
                                        Generally, the fees and charges depend on the applicant's profile, creditworthiness, type of business,
                                        desired loan amount, interest rate, repayment tenure, existing loans and several other factors.
                                    </Typography>

                                </Box>

                                <Box sx={{display:'flex',bgcolor:'#2962ff',color:'white',p:'20px',justifyContent:'center',alignItems:'center'}}>
                                  <Typography sx={{fontWeight:'bold',ml:5}}>About us</Typography>
                                  <Typography sx={{fontWeight:'bold',ml:5}}>Customer Care</Typography>
                                  <Typography sx={{fontWeight:'bold',ml:5}}>Abaris Home</Typography>
                                </Box>
                            </TabPanel>

                        </Tabs>

                    </Box>

                </div>
            </Box>

        </>
    )
}

export default BuyerToolPge
