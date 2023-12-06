import { Box, Button, Card, CardMedia, Link, List, ListItemText, TextField, Typography } from "@mui/material"
import Navbar from '../Components/Navbar'
import '../stylecss/homeStyle.css'
import CardData from "../data/CardApi"
import productData from "../data/productData"
import { BsBuildingsFill } from 'react-icons/bs';
import { GiDrill } from 'react-icons/gi';
import { AiFillMedicineBox } from 'react-icons/ai';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import industrialSup from '../assets/industrial-sup.png'
import { GiPlantSeed } from 'react-icons/gi';
import Footer from '../Components/Footer'
import ImageSlider from '../Components/Slider';
import { MdStars } from 'react-icons/md';
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
import { BiSolidMessageDetail } from 'react-icons/bi';
import SendTimeExtensionIcon from '@mui/icons-material/SendTimeExtension';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { FaHandshake } from 'react-icons/fa';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import buildingConstructionData from '../data/buildingConstructionData';
import imggg2 from '../assets/leftsideimg.png';
import pharmaMedicineData from '../data/PharmaMedicine'
import imgg4 from '../assets/leftpharmaimg.jpg'
import hospitalMedicalEquipData from '../data/hospitalMedicalEquipmntData';
import imgg5 from '../assets/lefthospitalimg.jpg'
import idustrialMachineEquipData from '../data/machineryAndPlantsEquipData';
import imgg6 from '../assets/leftindustrailMachine.jpg'
import idustrialProductsSparesData from '../data/industrialProductsSparesData';
import imgg7 from '../assets/leftIndustrialSpares.jpg'
import foodFarmingData from '../data/foodAgriFarmingData';
import imgg8 from '../assets/leftpapaya.jpg'
import packageMaterialData from '../data/packageMaterial';
import imggg9 from '../assets/leftimggg3.jpg';
import delhiImg from '../assets/india-gate-svgrepo-com.svg'
import bangloreImg from '../assets/bangalore-svgrepo-com.svg'
import ChennaiImg from '../assets/chennai-central.png'
import mumbaimg from '../assets/gate-of-india-mumbai-svgrepo-com.svg'
import ahmedabadImg from '../assets/Ahmedabad.webp'
import kolkattaImg from '../assets/Howrah-bridge-kolkatta.jpg'
import puneiImg from '../assets/pune.png'
import suratImg from '../assets/surat.webp'
import jaipurImg from '../assets/jaipur.png'
import hydImg from '../assets/hyd-images.png'
import maskImg from '../assets/mask.jpg'
import HospitalImg from '../assets/HospitalConsumele.jpg'
import { IoIosArrowDropright } from 'react-icons/io';
import ABBlogo from '../assets/ABB_logo.png'
import airtellogo from '../assets/airtel_logo.jpg'
import boschlogo from '../assets/bosch.png'
import canonlogo from '../assets/canon_logo.png'
import hyundailogo from '../assets/hyundai.png'
import tataPravishlogo from '../assets/tataPravish_logo.png'
import jaqurelogo from '../assets/jaqure.png'
import reliencelogo from '../assets/relience_logo.png'
import tataMotorslogo from '../assets/tataMotors_logo.png'
import mahindra_logo from '../assets/mahindra_logo.png'
import zebralogo from '../assets/zebra_logo.png'
import indianoillogo from '../assets/indianoil_logo.jpg'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="search-area-div">
        <h4>Search for products & find verified sellers near you</h4>
        <div className="select-div d-flex" style={{ paddingLeft: '250px' }}>
          <select class="form-control" style={{
            backgroundColor: 'rgb(232, 232, 232)', borderRadius: '10px 0 0 10px'
            , width: '160px', fontWeight: 'bold', border: 'none',
          }}>
            <option selected="" value="select city">select city</option>
            <option value="indonesia">Indonesia</option>
          </select>
          <TextField sx={{ bgcolor: 'white', width: '400px', borderRadius: 'none', border: 'none' }} placeholder="Enter product/service name" />
          <Button variant="contained" sx={{ padding: '15px 50px', borderRadius: '0 10px 10px 0', fontWeight: 'bold', fonts: '22px', ml: '-4px' }}>Search</Button>
        </div>
      </div>

      <Box className="mega-menu-box d-flex shadow " sx={{ padding: '20px 40px' }}>
         
        <div className="mainDiv d-flex">
          <div>
            <BsBuildingsFill size='35px' style={{ marginTop: '5px' }} />
          </div>
          <div style={{ paddingLeft: '10px' }}>
            <span>Building & Construction</span>
          </div>
          <Box className="hiding-box" sx={{ display: 'flex' }}>
            <Box>
              <List sx={{ ml: 5, mr: 5 }}>
                <ListItemText><b style={{ fontSize: '18px' }}>Wood, Plywood, Veneer & Laminates</b></ListItemText>
                <ListItemText>Plywoods</ListItemText>
                <ListItemText>Laminate Sheets</ListItemText>
                <ListItemText>Wood Boards</ListItemText>
                <ListItemText>Wall Panels</ListItemText>
                <ListItemText>Hardwood</ListItemText>
                <ListItemText>Particle Board</ListItemText>
                <ListItemText>MDF Board</ListItemText>
                <ListItemText>Wooden Planks</ListItemText>
                <ListItemText>WPC Board</ListItemText>
                <ListItemText>Wood Veneer</ListItemText>
                <ListItemText>View more</ListItemText>

              </List>
            </Box>

            <Box>
              <List sx={{ ml: 5, mr: 5 }}>
                <ListItemText><b style={{ fontSize: '18px' }}>Steel Bars, Rods, Plates & Sheets</b></ListItemText>
                <ListItemText>TMT Bars</ListItemText>
                <ListItemText>Steel Plates</ListItemText>
                <ListItemText>Stainless Steel Sheet</ListItemText>
                <ListItemText>Steel Rods</ListItemText>
                <ListItemText>Mild Steel Bars</ListItemText>
                <ListItemText>Steel Bars</ListItemText>
                <ListItemText>Steel Round Bars</ListItemText>
                <ListItemText>Stainless Steel Bars</ListItemText>
                <ListItemText>View More</ListItemText>
              </List>
            </Box>

            <Box>
              <List sx={{ ml: 5, mr: 5 }}>
                <ListItemText><b style={{ fontSize: '18px' }}>Roofing and False ceiling</b></ListItemText>
                <ListItemText>Roofing Sheets</ListItemText>
                <ListItemText>False Ceiling</ListItemText>
                <ListItemText>Metal Roofing Sheet</ListItemText>
                <ListItemText> GI Sheets</ListItemText>
                <ListItemText>Polycarbonate Sheet</ListItemText>
                <ListItemText>Roof Tiles </ListItemText>
                <ListItemText>Ceiling Panels </ListItemText>
                <ListItemText>Profile Sheets</ListItemText>
                <ListItemText>Ceiling Accessories</ListItemText>
                <ListItemText>Ceiling Board</ListItemText>
                <ListItemText>View More</ListItemText>
              </List>
            </Box>

            <Box>
              <List sx={{ ml: 5, mr: 5 }}>
                <ListItemText><b style={{ fontSize: '18px' }}>PVC, FRP, HDPE & Other Plastic Pipes</b></ListItemText>
                <ListItemText>PVC Pipes</ListItemText>
                <ListItemText>Plumbing Pipe</ListItemText>
                <ListItemText>Borewell Pipes</ListItemText>
                <ListItemText>Industrial Plastic Pipes</ListItemText>
                <ListItemText>CPVC Pipe</ListItemText>
                <ListItemText>Drainage Pipe</ListItemText>
                <ListItemText>UPVC Water Pipes</ListItemText>
                <ListItemText>Sanitary Pipes</ListItemText>
                <ListItemText>Drip Irrigation Pipes</ListItemText>
                <ListItemText>Underground HDPE Pipes</ListItemText>
                <ListItemText>View More</ListItemText>

              </List>
            </Box>
          </Box>
        </div>
        <div className="mainDiv d-flex">
          <div>
            <GiDrill size='35px' style={{ marginTop: '5px' }} />
          </div>
          <div style={{ paddingLeft: '10px' }}>
            <span> Electronics & Electrical</span>
          </div>
          <Box className="hiding-box hid2-box2" sx={{ display: 'flex' }}>
            <Box>
              <List sx={{ ml: 5, mr: 5 }}>
                <ListItemText><b style={{ fontSize: '18px' }}>Office Automation Products & Devices</b></ListItemText>
                <ListItemText>Xerox Machines</ListItemText>
                <ListItemText>Billing Machines</ListItemText>
                <ListItemText>Projector</ListItemText>
                <ListItemText>Computer Printers</ListItemText>
                <ListItemText>Laser Printer</ListItemText>
                <ListItemText>Multifunction Printer</ListItemText>
                <ListItemText>Inkjet Printer</ListItemText>
                <ListItemText>Counting Machines</ListItemText>
                <ListItemText>View more</ListItemText>

              </List>
            </Box>

            <Box>
              <List sx={{ ml: 5, mr: 5 }}>
                <ListItemText><b style={{ fontSize: '18px' }}>Solar & Renewable Energy Products</b></ListItemText>
                <ListItemText>Solar Panels</ListItemText>
                <ListItemText>Solar Power Plants</ListItemText>
                <ListItemText>Solar Lighting</ListItemText>
                <ListItemText>Solar Water Heater</ListItemText>
                <ListItemText>Water Pumps</ListItemText>
                <ListItemText>Water Heater & Geyser</ListItemText>
                <ListItemText>Solar Inverter</ListItemText>
                <ListItemText>Solar Lamps</ListItemText>
                <ListItemText>View More</ListItemText>
              </List>
            </Box>

            <Box>
              <List sx={{ ml: 5, mr: 5 }}>
                <ListItemText><b style={{ fontSize: '18px' }}>Indoor Lights & Lighting Accessories</b></ListItemText>
                <ListItemText>Light Bulb</ListItemText>
                <ListItemText>Bulb Raw Material</ListItemText>
                <ListItemText>LED Bulb</ListItemText>
                <ListItemText>Tube Light</ListItemText>
                <ListItemText>Lighting Component</ListItemText>
                <ListItemText>Ceiling Lights</ListItemText>
                <ListItemText>Lamp Holders</ListItemText>
                <ListItemText>Panel Light</ListItemText>
                <ListItemText>View More</ListItemText>
              </List>
            </Box>

            <Box>
              <List sx={{ ml: 5, mr: 5 }}>
                <ListItemText><b style={{ fontSize: '18px' }}>Batteries & Charge Storage Devices</b></ListItemText>
                <ListItemText>Inverter Batteries</ListItemText>
                <ListItemText>Lithium Battery</ListItemText>
                <ListItemText>Automotive Batteries</ListItemText>
                <ListItemText>Electric Vehicle Battery</ListItemText>
                <ListItemText>Battery Chargers</ListItemText>
                <ListItemText>Two Wheeler Battery</ListItemText>
                <ListItemText>Car Batteries</ListItemText>
                <ListItemText>Mobile Charger</ListItemText>
              </List>
            </Box>
          </Box>
        </div>

        <div className="mainDiv d-flex">
          <div>
            <AiFillMedicineBox size='35px' style={{ marginTop: '5px' }} />
          </div>
          <div style={{ paddingLeft: '10px' }}>
            <span>Drugs & Pharma</span>
          </div>

        </div>

        <div className="mainDiv d-flex">
          <div>
            <PrecisionManufacturingIcon style={{ marginTop: '4px', fontSize: '40px' }} />
          </div>
          <div style={{ paddingLeft: '10px' }}>
            <span>Industrial Machinery</span>
          </div>

        </div>

        <div className="mainDiv d-flex">
          <div>
            <img style={{ width: '30px', height: 'auto', marginTop: '5px' }} src={industrialSup} alt='industrial-supplies' />
          </div>
          <div style={{ paddingLeft: '10px' }}>
            <span>Industrial Supplies</span>
          </div>
        </div>

        <div className="mainDiv d-flex">
          <div>
            <GiPlantSeed size='35px' style={{ marginTop: '5px' }} />
          </div>
          <div style={{ paddingLeft: '10px' }}>
            <span>Food & Agriculture</span>
          </div>
        </div>

        <div style={{ margin: 0 }}>
          <span>View All Categories</span>
          <KeyboardArrowRightIcon />
        </div>
      </Box>

      <Box sx={{ m: 2, mt: 4 }}>
        <Typography sx={{ fontSize: '24px', fontWeight: 'bolder', ml: 2 }}>Featured Categories</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {CardData.map((item, i) => {
            return (
              <Card className="feature-cardd" key={i} sx={{ width: '230px', p: 2, m: 1 }}>
                <CardMedia
                  sx={{ height: '155px', width: '195px', objectFit: 'cover', borderRadius: '4px', mb: 3 }}
                  image={item.image}
                  title="logo-design"
                />

                <a href="/" className="cardd-link fw-bold" size="small">{item.name}</a>
                <Button variant="contained" sx={{ display: 'block', mt: 3 }} fullWidth>{item.link}</Button>

              </Card>
            )
          })}

        </Box>
      </Box>

      <Box sx={{ ml: 2 }}>
        <Typography sx={{ fontSize: '24px', fontWeight: 'bolder', m: 2 }}>Products You May Like</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {productData.map((item, i) => {
            return (
              <Card className="product-cardd" key={i} sx={{ width: '230px', height: 'auto', padding: '20px', m: 1 }}>
                <CardMedia
                  sx={{ height: '145px', width: '190px', borderRadius: '6px', mb: 2 }}
                  image={item.image}
                  title="logo-design"
                />

                <a href="/" style={{ paddingBottom: '5px', textDecoration: 'none', paddingTop: '10px' }} size="small">{item.name}</a><br />
                <a href="/" style={{ textDecoration: 'none', fontSize: '14px', color: 'black' }}>{item.companyName}</a>
                <p style={{ marginTop: '10px', color: 'gray' }}>{item.address}</p>
                <Button sx={{ display: 'block', mt: 3, bgcolor: 'lightcyan' }} size="small" fullWidth>{item.contactNo}</Button>
                <Button variant="contained" sx={{ display: 'block', mt: 2 }} fullWidth>{item.link}</Button>

              </Card>
            )
          })}

        </Box>
      </Box>

      <Box sx={{ display: 'flex',flexWrap:'wrap', p: 2 }}>
        <div className='slidr-div col-sm-4 p-3 pt-4'>
          <h2 style={{ letterSpacing: 1 }}>We connect <b>Buyers</b> & <b>Sellers</b></h2>
          <p style={{ letterSpacing: 1 }}>Abaris soft tech is India's largest online B2B marketplace, connecting buyers with suppliers.</p>
          <div className='d-flex mt-5 pt-4'>
            <div className='text-center'>
              <MdStars fontSize={'35px'} />
              <p style={{ fontSize: '14px', paddingTop: '15px' }}>Trusted Platform</p>
            </div>
            <div className=' text-center' style={{ paddingLeft: '30px' }}>
              <SafetyCheckIcon sx={{ fontSize: '35px' }} />
              <p style={{ fontSize: '14px', paddingTop: '15px' }}>Safe & Secure</p>
            </div>
            <div className=' text-center' style={{ paddingLeft: '30px' }}>
              <BiSolidMessageDetail fontSize={'35px'} />
              <p style={{ fontSize: '14px', paddingTop: '15px' }}>Quick Assistance</p>
            </div>
          </div>
        </div>
        <div className='col-sm-6'>
          <ImageSlider className='slidrr-comp' />
        </div>
      </Box>

      <Box sx={{ mt: 5 }}>
        <Typography sx={{ fontSize: '28px', fontWeight: 'bold', ml: 5 }}>Building Construction Material & Equipment</Typography>
        <Box sx={{ display: 'flex'}}>
          <Box>
            <div style={{ borderRadius: '6px', mb: 3, paddingTop: '25px', marginLeft: '40px' }}>
              <a href="/buildingConstructionFullPage"> <img className="building-img" style={{ height: 'auto', width: '350px' }} src={imggg2} alt="construction-img" /></a>
              <a href="/buildingConstructionFullPage"><Button sx={{ p: '20px 0', top: 30 }} variant='contained' fullWidth>View All</Button></a>
            </div>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', m: 2, pl: 2 }}>
            {buildingConstructionData.map((item, i) => {
              return (
                <div className="building-construction" style={{ display: 'flex', padding: '20px', margin: '10px', width: '370px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray' }}>
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

      <Box sx={{ mt: 5 }}>
        <Typography sx={{ fontSize: '28px', fontWeight: 'bold', ml: 5 }}>Pharmaceutical Drug, Medicine, Medical Care & Consultation</Typography>
        <Box sx={{ display: 'flex' }}>
          <Box>
            <div style={{ borderRadius: '6px', mb: 3, paddingTop: '25px', marginLeft: '40px' }}>
              <img style={{ height: 'auto', width: '350px' }} src={imgg4} alt="construction-img" />
              <Button sx={{ p: '20px 0', top: 50 }} variant='contained' fullWidth>View All</Button>
            </div>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', m: 2, pl: 2 }}>
            {pharmaMedicineData.map((item, i) => {
              return (
                <div className="pharma-card" style={{ display: 'flex', padding: '20px', margin: '10px', width: '370px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray' }}>
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

      <Box sx={{ mt: 5 }}>
        <Typography sx={{ fontSize: '28px', fontWeight: 'bold', ml: 5 }}>Hospital and Medical Equipment</Typography>
        <Box sx={{ display: 'flex' }}>
          <Box>
            <div style={{ borderRadius: '6px', mb: 3, paddingTop: '25px', marginLeft: '40px' }}>
              <img style={{ height: 'auto', width: '350px' }} src={imgg5} alt="construction-img" />
              <Button sx={{ p: '16px 0', top: 50 }} variant='contained' fullWidth>View All</Button>
            </div>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', m: 2, pl: 2 }}>
            {hospitalMedicalEquipData.map((item, i) => {
              return (
                <div style={{ display: 'flex', padding: '20px', margin: '10px', width: '370px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray' }}>
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

      <Box>
        <Typography sx={{ fontSize: '28px', fontWeight: 'bold', ml: 5 }}>Industrial Plants, Machinery & Equipment</Typography>
        <Box sx={{ display: 'flex' }}>
          <Box>
            <div style={{ borderRadius: '6px', mb: 3, paddingTop: '25px', marginLeft: '40px' }}>
              <img style={{ height: 'auto', width: '350px' }} src={imgg6} alt="construction-img" />
              <Button sx={{ p: '10px 0', top: 10 }} variant='contained' fullWidth>View All</Button>
            </div>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', m: 2, pl: 2 }}>
            {idustrialMachineEquipData.map((item, i) => {
              return (
                <div style={{ display: 'flex', padding: '20px', margin: '10px', width: '370px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray' }}>
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

      <Box sx={{ mt: 5, mb: 5 }}>
        <Typography sx={{ fontSize: '28px', fontWeight: 'bold', ml: 5 }}>Industrial & Engineering Products, Spares and Supplies</Typography>
        <Box sx={{ display: 'flex' }}>
          <Box>
            <div style={{ borderRadius: '6px', mb: 3, paddingTop: '25px', marginLeft: '40px' }}>
              <img style={{ height: 'auto', width: '350px' }} src={imgg7} alt="construction-img" />
              <Button sx={{ p: '10px 0', top: 10 }} variant='contained' fullWidth>View All</Button>
            </div>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', m: 2, pl: 2 }}>
            {idustrialProductsSparesData.map((item, i) => {
              return (
                <div style={{ display: 'flex', padding: '20px', margin: '10px', width: '370px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray' }}>
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


      <Box sx={{ mt: 5, mb: 5 }}>
        <Typography sx={{ fontSize: '28px', fontWeight: 'bold', ml: 5 }}>Food, Agriculture & Farming</Typography>
        <Box sx={{ display: 'flex' }}>
          <Box>
            <div style={{ borderRadius: '6px', mb: 3, paddingTop: '25px', marginLeft: '40px' }}>
              <img style={{ height: 'auto', width: '350px' }} src={imgg8} alt="construction-img" />
              <Button sx={{ p: '10px 0', top: 10 }} variant='contained' fullWidth>View All</Button>
            </div>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', m: 2, pl: 2 }}>
            {foodFarmingData.map((item, i) => {
              return (
                <div style={{ display: 'flex', padding: '20px', margin: '10px', width: '370px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray' }}>
                  <div style={{ paddingTop: '4px' }}>
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

      <Box sx={{ display: 'flex', mt: 3, mb: 3, pb: 1 }}>
        <div className='col-sm-4 ps-5 pt-5'>
          <h2 style={{ letterSpacing: 1 }}>Get <b>free</b> quotes from multiple sellers</h2>
          <div className='d-flex mt-5'>
            <div className=' text-center'>
              <SendTimeExtensionIcon sx={{ fontSize: '35px' }} />
              <p style={{ fontSize: '14px', paddingTop: '5px' }}>Tell us what <b>You Need</b> </p>
            </div>
            <div className=' text-center' style={{ paddingLeft: '30px' }}>
              <FormatQuoteIcon sx={{ fontSize: '40px' }} />
              <p style={{ fontSize: '14px', paddingTop: '5px' }}>Receive free quotes from <b>sellers</b></p>
            </div>
            <div className=' text-center' style={{ paddingLeft: '30px' }}>
              <FaHandshake style={{ fontSize: '38px' }} />
              <p style={{ fontSize: '14px', paddingTop: '5px' }}>Seal the <b>Deal</b></p>
            </div>
          </div>
        </div>
        <Box className='col-sm-6 pt-5 ps-5 ms-5'>
          <Typography sx={{ fontWeight: 'bold', fontSize: '20px', pb: 2 }}>Tell us your Requirement</Typography>
          <TextField placeholder='Enter product/service name' fullWidth />
          <TextField placeholder='Enter your mobile' sx={{ minWidth: '500px', mt: 3, mb: 3 }} />
          <TextField placeholder='Enter your name' sx={{ minWidth: '200px', mb: 3 }} /><br />
          <Box className='text-center '>
            <Button variant='contained' sx={{ p: '15px' }}>submit requirement</Button>
          </Box>
        </Box>
      </Box>

      <Box>
        <Typography sx={{ fontSize: '28px', fontWeight: 'bold', ml: 5 }}>Packaging Material, Supplies & Machines</Typography>
        <Box sx={{ display: 'flex' }}>
          <Box>
            <div style={{ borderRadius: '6px', mb: 3, paddingTop: '25px', marginLeft: '40px' }}>
              <img style={{ height: 'auto', width: '350px' }} src={imggg9} alt="construction-img" />
              <Button sx={{ p: '16px 0', top: 10 }} variant='contained' fullWidth>View All</Button>
            </div>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', m: 2, pl: 2 }}>
            {packageMaterialData.map((item, i) => {
              return (
                <div style={{ display: 'flex', padding: '20px', margin: '10px', width: '370px', height: 'auto', boxShadow: '0.2px 0.2px 2px gray' }}>
                  <div style={{ paddingTop: '20px' }}>
                    <img style={{ height: 'auto', width: '150px', borderRadius: '6px' }} src={item.image} alt="construction-img" />
                  </div>
                  <div style={{ paddingLeft: '25px', fontSize: '14px' }}>
                    <div style={{ paddingBottom: '5px' }}><Link sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>{item.name1}</Link></div>
                    <div style={{ paddingBottom: '5px' }}><Link sx={{ textDecoration: 'none', color: 'black' }}>{item.name2}</Link></div>
                    <div style={{ paddingBottom: '5px' }}><Link sx={{ textDecoration: 'none', color: 'black' }}>{item.name3}</Link></div>
                    <div style={{ textDecoration: 'none' }}><Link sx={{ textDecoration: 'none', color: 'black' }}>{item.name4}</Link></div>
                    <div style={{ textDecoration: 'none' }}><Link sx={{ textDecoration: 'none', color: 'black' }}>{item.name5}</Link></div>
                    <div style={{ textDecoration: 'none' }}><Link sx={{ textDecoration: 'none', color: 'black' }}>{item.name6}</Link></div>
                  </div>
                </div>

              )
            })}

          </Box>
        </Box>
      </Box>


      <Box>
        <h3 style={{ marginLeft: '40px' }}><b>Find Suppliers from Top Cities</b></h3>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', pl: 5, mt: 4 }}>
          <div className='city-div' style={{ margin: '20px 50px 50px 100px', textAlign: 'center' }}>
            <img style={{ width: '60px', height: '60px', borderRadius: '50%' }} src={delhiImg} alt="delhi-Img" />
            <p style={{ fontSize: '18px', padding: '10px 0 0 5px' }}>Delhi</p>
          </div>
          <div className='city-div' style={{ margin: '20px 50px 50px 100px', textAlign: 'center' }}>
            <img style={{ width: '60px', height: '60px', borderRadius: '50%' }} src={bangloreImg} alt="delhi-Img" />
            <p style={{ fontSize: '18px', padding: '10px 0 0 5px' }}>Banglore</p>
          </div>
          <div className='city-div' style={{ margin: '20px 50px 50px 100px', textAlign: 'center' }}>
            <img style={{ width: '60px', height: '60px', borderRadius: '50%' }} src={ChennaiImg} alt="delhi-Img" />
            <p style={{ fontSize: '18px', padding: '10px 0 0 5px' }}>Chennai</p>
          </div>
          <div className='city-div' style={{ margin: '20px 50px 50px 100px', textAlign: 'center' }}>
            <img style={{ width: '60px', height: '60px', borderRadius: '50%' }} src={mumbaimg} alt="delhi-Img" />
            <p style={{ fontSize: '18px', padding: '10px 0 0 5px' }}>Mumbai</p>
          </div>
          <div className='city-div' style={{ margin: '20px 50px 50px 100px', textAlign: 'center' }}>
            <img style={{ width: '60px', height: '60px', borderRadius: '50%' }} src={ahmedabadImg} alt="delhi-Img" />
            <p style={{ fontSize: '18px', padding: '10px 0 0 5px' }}>Ahmadabad</p>
          </div>
          <div className='city-div' style={{ margin: '20px 50px 50px 100px', textAlign: 'center' }}>
            <img style={{ width: '60px', height: '60px', borderRadius: '50%' }} src={kolkattaImg} alt="delhi-Img" />
            <p style={{ fontSize: '18px', padding: '10px 0 0 5px' }}>Kolkatta</p>
          </div>
          <div className='city-div' style={{ margin: '20px 50px 50px 100px', textAlign: 'center' }}>
            <img style={{ width: '60px', height: '60px', borderRadius: '50%' }} src={puneiImg} alt="delhi-Img" />
            <p style={{ fontSize: '18px', padding: '10px 0 0 5px' }}>Pune</p>
          </div>
          <div className='city-div' style={{ margin: '20px 50px 50px 100px', textAlign: 'center' }}>
            <img style={{ width: '60px', height: '60px', borderRadius: '50%' }} src={suratImg} alt="delhi-Img" />
            <p style={{ fontSize: '18px', padding: '10px 0 0 5px' }}>Surat</p>
          </div>
          <div className='city-div' style={{ margin: '20px 50px 50px 110px', textAlign: 'center' }}>
            <img style={{ width: '60px', height: '60px', borderRadius: '50%' }} src={jaipurImg} alt="delhi-Img" />
            <p style={{ fontSize: '18px', padding: '10px 0 0 5px' }}>Jaipur</p>
          </div>
          <div className='city-div' style={{ margin: '20px 50px 50px 120px', textAlign: 'center' }}>
            <img style={{ width: '60px', height: '60px', borderRadius: '50%' }} src={hydImg} alt="delhi-Img" />
            <p style={{ fontSize: '18px', padding: '10px 0 0 5px' }}>Hyderabad</p>
          </div>

        </Box>
      </Box>

      <Box sx={{ display: 'flex', bgcolor: 'rgb(147, 189, 245)', p: 2, borderRadius: '8px', ml: 5, mr: 5 }}>
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
        <h3 style={{ marginLeft: '40px' }}><b>Explore products from Premium Brands</b></h3>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 4 }}>
          <div className='city-div' style={{ margin: '20px 50px 50px 100px', textAlign: 'center' }}>
            <img style={{ width: '100px', height: 'auto' }} src={ABBlogo} alt="ABBlogo-Img" />
          </div>
          <div className='city-div' style={{ margin: '20px 50px 50px 100px', textAlign: 'center' }}>
            <img style={{ width: 'auto', height: '80px' }} src={airtellogo} alt="airtellogo-Img" />
          </div>
          <div className='city-div' style={{ margin: '20px 50px 50px 100px', textAlign: 'center' }}>
            <img style={{ width: 'auto', height: '80px' }} src={boschlogo} alt="boschlogo-Img" />
          </div>
          <div className='city-div' style={{ margin: '20px 50px 50px 100px', textAlign: 'center' }}>
            <img style={{ width: 'auto', height: '100px' }} src={indianoillogo} alt="indianoillogo-Img" />
          </div>
          <div className='city-div' style={{ margin: '20px 50px 50px 100px', textAlign: 'center' }}>
            <img style={{ width: 'auto', height: '80px' }} src={hyundailogo} alt="hyundailogo-Img" />

          </div>
          <div className='city-div' style={{ margin: '20px 50px 50px 100px', textAlign: 'center' }}>
            <img style={{ width: 'auto', height: '80px' }} src={tataPravishlogo} alt="tataPravishlogo-Img" />
          </div>
          <div className='city-div' style={{ margin: '20px 50px 50px 100px', textAlign: 'center' }}>
            <img style={{ width: 'auto', height: '80px' }} src={jaqurelogo} alt="jaqurelogo-Img" />
          </div>
          <div className='city-div' style={{ margin: '35px 50px 50px 140px', textAlign: 'center' }}>
            <img style={{ width: 'auto', height: '40px' }} src={reliencelogo} alt="reliencelogo-Img" />
          </div>
          <div className='city-div' style={{ margin: '20px 50px 50px 110px', textAlign: 'center' }}>
            <img style={{ width: 'auto', height: '120px' }} src={tataMotorslogo} alt="tataMotorslogo-Img" />
          </div>
          <div className='city-div' style={{ margin: '20px 50px 50px 120px', textAlign: 'center' }}>
            <img style={{ width: 'auto', height: '80px' }} src={mahindra_logo} alt="mahindra_logo-Img" />
          </div>
          <div className='city-div' style={{ margin: '20px 50px 50px 120px', textAlign: 'center' }}>
            <img style={{ width: 'auto', height: '80px' }} src={zebralogo} alt="zebralogo-Img" />
          </div>
          <div className='city-div' style={{ margin: '20px 50px 50px 120px', textAlign: 'center' }}>
            <img style={{ width: 'auto', height: '80px' }} src={canonlogo} alt="canonlogo-Img" />
          </div>

        </Box>
      </Box>





      <Footer />
    </>
  )
}

export default HomePage
