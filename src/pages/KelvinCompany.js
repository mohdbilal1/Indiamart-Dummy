import { Box, Button, Card, CardMedia, List, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, TextareaAutosize } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import kelvinImgLogo from '../assets/kelvin-plastic-private-limited-logo.jpg'
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../stylecss/kelvinStyle.css';
import { Navigation } from "swiper/modules";
import { GoLaw } from 'react-icons/go';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import findSellerInRajkotData from '../data/Building&Construction fullpage/findSellerInRajkotData'
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import DirectionsIcon from '@mui/icons-material/Directions';
import SmsIcon from '@mui/icons-material/Sms';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


const KelvinCompany = () => {
  return (
    <>
      <Box sx={{ display: 'flex', m: 3 }}>
        <div>
          <img style={{ marginTop: '5px' }} src={kelvinImgLogo} alt="kelvinImgLogo" />
        </div>

        <div style={{ marginLeft: '30px' }}>
          <h3>Kelvin Plastic Private Limited</h3>
          <LocationOnIcon sx={{ color: '#ff5252', mr: 1 }} /><span style={{ fontSize: '16px' }}>Rajkot,Gujarat</span>
          <VerifiedOutlinedIcon sx={{ color: '#ff9100', mr: 1, ml: 1 }} /><span style={{ fontSize: '16px' }}>TrustSEAL Verified</span>
          <CheckCircleIcon sx={{ color: 'green', mr: 1, ml: 1 }} /><span style={{ fontSize: '16px' }}>GST 24AAACK5608B2ZF</span>
          <Button variant="outlined" sx={{ fontWeight: 'bold', position: 'absolute', right: 26 }}>View Mobile Number</Button>
        </div>

      </Box>

      <Box sx={{ display: 'flex', bgcolor: 'rgb(207, 218, 252)', textAlign: 'center', position: 'sticky', top: 0, zIndex: 10 }}>
        <List sx={{ display: 'flex', fontSize: '16px' }}>
          <li style={{ padding: '2px 25px 0 40px' }}>Home</li>
          <li style={{ padding: '2px 25px 0 20px' }}>Our Products</li>
          <li style={{ padding: '2px 25px 0 20px' }}>About Us</li>
          <li style={{ padding: '2px 25px 0 20px', marginRight: '90px' }}>Contact Us</li>
          <li style={{ padding: '2px 25px 0 20px' }}><TextField size="small" sx={{ bgcolor: 'white', width: '400px' }} placeholder="Search Products/Services" /></li>
          <li style={{ padding: '2px 25px 0 20px', marginLeft: '18px' }}><Button variant="contained" size="small" sx={{ p: '8px 42px' }}><MailIcon sx={{ pr: 1 }} /> Send Email</Button></li>
        </List>
      </Box>

      <Box>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 1,
            depth: 0,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          pagination={{ clickable: true, }}
          modules={[EffectCoverflow, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://5.imimg.com/data5/SELLER/Default/2021/9/ZT/ZX/YQ/714063/hdpe-coil-pipe-500x500.jpg" alt='fff' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://5.imimg.com/data5/SELLER/Default/2022/5/ZQ/BQ/BD/714063/agricultural-pipes-500x500.jpg" alt='fff' />
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://5.imimg.com/data5/EB/DI/MY-714063/dhara-flex-500x500.jpg" alt='fff' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://5.imimg.com/data5/SELLER/Default/2022/7/CQ/XK/VJ/714063/cleansing-pipe-500x500.jpg" alt='fff' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://5.imimg.com/data5/XH/VF/MY-714063/colour-transparent-garden-pipe-500x500.jpg" alt='fff' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://5.imimg.com/data5/SELLER/Default/2022/5/FI/BT/RJ/714063/kelvin-cpvc-pipe-sdr-13-5-3-mtr--500x500.jpg" alt='fff' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://5.imimg.com/data5/SELLER/Default/2022/6/EV/MW/EE/714063/fta-500x500.JPG" alt='fff' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://5.imimg.com/data5/SELLER/Default/2022/6/SG/LH/WG/714063/compressjpeg-online-500x500-image-500x500.PNG" alt='fff' />
          </SwiperSlide>
        </Swiper>
      </Box>

      <Box sx={{ m: 3 }}>
        <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>About Us</h3>
        <p style={{ letterSpacing: 1, textAlign: 'justify' }}>Established in the <b>year 1994</b>, we, <b>'Kelvin Plastic Private Limited'</b> are recognized as a
          renowned firm engaged in manufacturing and supplying an extensive assortment of <b> Plastic
            Related Products</b>. Our range consist of <b>Polypropylene Pipes, PVC Garden Pipe, PVC Suction
              Hose Pipe, Pprc Pipe And HDPE Pipes</b>. These are manufactured in compliance with
          international quality standards. Being an <b>ISO 9001: 2008</b> certified firm, we focus on
          providing quality
        </p>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', m: 2 }}>
        <div className="about-company col-sm-3">
          <div>
            <VerifiedOutlinedIcon style={{ fontSize: '60px', color: 'skyblue' }} />
          </div>
          <div className="abt-compny-child">
            <span className="child-span">Nature of Business</span><br />
            <span>Exporter and Manufacturer</span>
          </div>
        </div>

        <div className="about-company col-sm-3">
          <div>
            <Groups2OutlinedIcon style={{ fontSize: '60px', color: 'skyblue' }} />
          </div>
          <div className="abt-compny-child">
            <span className="child-span">Total Number of Employees</span><br />
            <span>101 to 500 People</span>
          </div>
        </div>
        <div className="about-company col-sm-3">
          <div>
            <HiOutlineBuildingOffice2 style={{ fontSize: '60px', color: 'skyblue' }} />
          </div>
          <div className="abt-compny-child">
            <span className="child-span">Year of Establishment</span><br />
            <span>1994</span>
          </div>
        </div>
        <div className="about-company col-sm-3">
          <div>
            <GoLaw style={{ fontSize: '60px', color: 'skyblue' }} />
          </div>
          <div className="abt-compny-child">
            <span className="child-span">Legal Status of Firm</span><br />
            <span>Limited Company (Ltd./Pvt.Ltd.)</span>
          </div>
        </div>
        <div className="about-company col-sm-3">
          <div>
            <AnalyticsOutlinedIcon style={{ fontSize: '60px', color: 'skyblue' }} />
          </div>
          <div className="abt-compny-child">
            <span className="child-span">Annual Turnover</span><br />
            <span>Rs. 100 - 500 Crore</span>
          </div>
        </div>
        <div className="about-company col-sm-3">
          <div>
            <LanguageOutlinedIcon style={{ fontSize: '60px', color: 'skyblue' }} />
          </div>
          <div className="abt-compny-child">
            <span className="child-span">Import Export Code (IEC)</span><br />
            <span>24990*****</span>
          </div>
        </div>
        <div className="about-company col-sm-3">
          <div>
            <TaskOutlinedIcon style={{ fontSize: '60px', color: 'skyblue' }} />
          </div>
          <div className="abt-compny-child">
            <span className="child-span">GST Number</span><br />
            <span>24AAACK9008M1ZF</span>
          </div>
        </div>
        <div className="about-company col-sm-3">
          <div>
            <VerifiedOutlinedIcon style={{ fontSize: '60px', color: 'skyblue' }} />
          </div>
          <div className="abt-compny-child">
            <span className="child-span">Abaris Certification</span><br />
            <span>Trust Seal Verified</span>
          </div>
        </div>

      </Box>

      <Box>
        <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>Our Products</h3>
        <Box sx={{ ml: 2 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {findSellerInRajkotData.map((item, i) => {
              return (
                <Card key={i} sx={{ width: '230px', height: 'auto', padding: '20px', m: 1 }}>
                  <CardMedia
                    sx={{ height: '145px', width: 'auto', borderRadius: '6px', mb: 3, objectFit: '' }}
                    image={item.image}
                    title="logo-design"
                  />

                  <p> <a href="/" style={{ paddingBottom: '5px', paddingTop: '10px', textDecoration: 'none' }} size="small">{item.name}</a></p>
                  <p style={{ color: 'gray' }}>{item.address}</p>
                  <p style={{ fontWeight: 'bold', fontSize: '18px' }}>{item.price}</p>
                  <Button variant="outlined" sx={{ display: 'block', mt: 2 }} size="small" fullWidth>{item.contactNo}</Button>
                  <Button variant="contained" sx={{ display: 'block', mt: 1 }} fullWidth>{item.link}</Button>

                </Card>
              )
            })}

          </Box>
        </Box>
      </Box>

      <Box>
        <h3 style={{ textAlign: 'center', fontWeight: 'bold', padding: '20px' }}>Our Videos</h3>
        <iframe width="900"
          height="458"
          src="https://www.youtube.com/embed/IWSKt1lY7Zk"
          title="Kelvin Plastics Pvt. Ltd. - Corporate Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          style={{ marginLeft: '200px' }}
        >
        </iframe>

      </Box>

      <Box sx={{ m: 2 }}>
        <h3 style={{ textAlign: 'center', fontWeight: 'bold', padding: '20px' }}>Product Videos</h3>
        <iframe width="360"
          height="185"
          src="https://www.youtube.com/embed/bXraGMeBZ2c?si=ipHBVBkt4le1tm1j"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          style={{ marginLeft: '20px', borderRadius: '6px' }}
        >
        </iframe>

        <iframe width="360"
          height="185"
          src="https://www.youtube.com/embed/yhT-7w_KB3o?si=YCLJCqy4nG-SDIMF"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          style={{ marginLeft: '40px', borderRadius: '6px' }}
        >
        </iframe>

        <iframe width="360"
          height="185"
          src="https://www.youtube.com/embed/HdHjqEoVj-M?si=-ETmhX2rzYR9MQgS"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          style={{ marginLeft: '40px', borderRadius: '6px' }}
        >
        </iframe>
      </Box>

      <Box sx={{ mt: 2 }}>
        <h3 style={{ textAlign: 'center', fontWeight: 'bold', padding: '20px' }}>Deals in HSN Code</h3>
        <TableContainer>
          <Table sx={{ backgroundColor: 'white', width: '650px', position: 'relative', left: 300 }}>
            <TableHead sx={{ bgcolor: '#448aff' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', width: '100px', color: 'white' }}>HSN Code</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>HSN Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>39151000</TableCell>
                <TableCell>Waste, parings and scrap, of plastics - of polymers of ethylene</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>39153090</TableCell>
                <TableCell>Waste, parings and scrap, of plastics - of polymers of vinyl chloride:other</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>39172190</TableCell>
                <TableCell>Tubes, pipes and hoses, and fittings therefor (for example, joints, elbows, flanges), of plastics - tubes, pipes and hoses, rigid: of polymers of ethylene:other</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>39172390</TableCell>
                <TableCell>Tubes, pipes and hoses, and fittings therefor (for example, joints, elbows, flanges), of plastics - tubes, pipes and hoses, rigid: of polymers of vinyl chloride :other</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>39174000</TableCell>
                <TableCell>Tubes, pipes and hoses, and fittings therefor (for example, joints, elbows, flanges), of plastics - fittings</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

      </Box>

      {/* <Box>
        <h3 style={{ textAlign: 'center', fontWeight: 'bold', padding: '8px 10px' }}>Ratings & Reviews</h3>
        <div>
          <div className=" d-flex">
            <p>4.1/5</p>
            <Rating name="size-large" defaultValue={2} size="large" />
          </div>
          <p>Reviewed by 49 Users</p>
        </div>
        <div>
          <p>5 star</p>
          
          <p>61%</p>
        </div>
        <div></div>
      </Box> */}



      <Box sx={{ p: 2, mb: 3 }}>
        <h3 style={{ fontWeight: 'bold', padding: '8px 10px', color: 'white', backgroundColor: '#2979ff' }}>Get in touch with us</h3>

        <div style={{ display: 'flex' }}>
          <div className=" col-sm-2 mt-3 ms-2">
            <h4 style={{ fontWeight: 'bold' }}>Our Company</h4>
            <h6>About Us</h6>
            <h6>Our Products</h6>
            <h6>Contact Us</h6>
            <h6>Sitemap</h6>
            <h6>Download Brochure</h6>
          </div>
          <div className=" col-sm-6 mt-3">
            <h4 style={{ fontWeight: 'bold' }}>Reach Us</h4>
            <div className=" d-flex">
              <div><LocationOnIcon sx={{ color: 'grey', mr: 1 }} /></div>
              <div>
                <h4>Kelvin Plastic Private Limited</h4>
                <p style={{ marginBottom: '5px' }}>Survey No. 108- P Near Toll Plaza, Rajkot-360311, Gujarat, India</p>
                <DirectionsIcon sx={{ color: '#448aff', mr: 1, mt: 1 }} /><a href="/">Get Direction</a>
              </div>
            </div>
            <div className=" d-flex mt-3 ">
              <div>
                <AccountCircleIcon sx={{ color: 'grey', mr: 1 }} />
              </div>
              <div>
                <h4>Kelvin Dadhania (Director)</h4>
              </div>
            </div>
            <div className=" d-flex mb-3">
              <div><CallIcon sx={{ color: 'grey', mr: 1 }} /></div>
              <div>
                <a href="/" style={{ fontWeight: 'bold', fontSize: '18px', color: '#2e7d32', textDecoration: 'none' }}>View Mobile Number</a>
              </div>
            </div>
            <div>
              <Button sx={{ bgcolor: '#2e7d32', color: 'white', ml: 1 }}><SmsIcon sx={{ mr: 1 }} />Send SMS</Button>
              <Button variant="outlined" sx={{ color: '#2e7d32', ml: 1 }}><MailIcon sx={{ mr: 1 }} />Send Email</Button>
              <Button variant="outlined" sx={{ color: '#2e7d32', ml: 1 }}><CurrencyRupeeIcon />Send Payments</Button>

            </div>

          </div>
          <div className=" col-sm-3 mt-3 ">
            <h5><b>Leave a Message,</b> we will call you back!</h5>
            <TextField sx={{ mt: 2, mb: 3 }} label='Mobile Number' fullWidth />
            <TextareaAutosize placeholder='Requirement Details' minRows={'4'} style={{ width: '300px', resize: 'none' }} />
            <Button sx={{ mt: 2 }} variant="contained" fullWidth>Submit Requirment</Button>
          </div>
        </div>
      </Box>


      <Box sx={{ m: 1, p: 3, display: 'flex' }}>
        <p>All Rights Reserved (Terms of Use) Developed and Managed by Abaris softTech</p>
      </Box>


    </>
  )
}

export default KelvinCompany






