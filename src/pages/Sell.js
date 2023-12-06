import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { Box, Button, List, TextField, Typography } from '@mui/material'
import sellPgImg from '../assets/sellpageimg.jpg'
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PaidIcon from '@mui/icons-material/Paid';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import buyerImg from '../assets/buyer.png'
import supplierImg from '../assets/supplier.png'
import productServices from '../assets/productServices.png'
import createAccImg from '../assets/add-user.png'
import addBuisnesImg from '../assets/location.png'
import addProductImg from '../assets/add-item.png'
import arrowImg from '../assets/arrow.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import '../stylecss/sellStyle.css'
import sellpgeImg from '../assets/mapBgSell.png'

import Footer from '../Components/Footer'
import SellPageLoginModel from '../Components/SellPageLoginModel';

const Sell = () => {
  const [open, setOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = () => {
    if(phoneNumber===''){
      setError(true);
    }else if(phoneNumber.length===10){
      setOpen(true);
    }else{
      setError(true);
    }
  };


  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex', bgcolor: 'black', color: 'white', p: 1, position: 'sticky', top: 67, zIndex: 10 }}>
        <List sx={{ display: 'flex', fontSize: '14px' }}>
          <li style={{ padding: '0 30px' }}>Sell on Abaris SoftTech </li>
          <li style={{ padding: '0 30px' }}> How to Register</li>
          <li style={{ padding: '0 30px' }}>Success Stories</li>
          <li style={{ padding: '0 30px' }}> What can you sell</li>
          <li style={{ padding: '0 30px' }}>Abaris SoftTech Advantage</li>
        </List>
      </Box>

      <Box sx={{ display: 'flex', m: 2, mt: 5 }}>
        <div className=' col-sm-6'>
          <img style={{ width: '540px', paddingLeft: '20px' }} src={sellPgImg} alt="sellPg-Img" />
        </div>
        <div className=' col-sm-6'>
          <h3 style={{ padding: '10px 0' }}> <b>Sell for free</b> on India’s largest online B2B marketplace</h3>
          <h4 style={{ padding: '10px 0', fontWeight: 'bold' }}>Free Registration/Sign In</h4>
          <TextField
            placeholder='Enter 10 digit mobile number'
            sx={{
              minWidth: '420px', border: '1px solid skyblue',
              borderRadius: '10px'
            }}
            type='number'
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            error={error}
            helperText={error?'Please Enter Contact Number':''}
          />

          <Button
            variant='contained'
            sx={{ p: '16px 10px', borderRadius: '0 10px 10px 0', ml: '-5px' }}
            onClick={handleLogin}
          >
            Start selling<ArrowRightAltIcon sx={{ ml: '10px' }} />
          </Button>
          <SellPageLoginModel  open={open} setOpen={setOpen}/>

          <div style={{ display: 'flex', marginTop: '40px', padding: '10px  2px 10px 0' }}>
            <div style={{ marginLeft: '3px', textAlign: 'center' }}>
              <AnalyticsIcon sx={{ fontSize: '60px' }} />
              <h5> Grow your Business</h5>
              <p>Sell to buyers anytime, anywhere</p>
            </div>

            <div style={{ marginLeft: '3px', textAlign: 'center' }}>
              <PaidIcon sx={{ fontSize: '60px' }} />
              <h5> Zero Cost</h5>
              <p>No commission or transaction fee</p>
            </div>

            <div style={{ marginLeft: '3px', textAlign: 'center' }}>
              <DataThresholdingIcon sx={{ fontSize: '60px' }} />
              <h5>Manage Business Easily</h5>
              <p>Lead management system & other features</p>
            </div>

          </div>
        </div>
      </Box>

      <Box sx={{ m: 2 }}>
        <h3 style={{ margin: '30px 0', textAlign: 'center' }}><b>Sell on Abaris SoftTech</b></h3>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', pl: 5, mt: 5 }}>
          <div className=' col-sm-4' style={{ textAlign: 'center' }}>
            <img style={{ width: '60px', height: '60px', borderRadius: '10%' }} src={buyerImg} alt="buyerImg-Img" />
            <p style={{ padding: '8px 0', fontSize: '20px', marginBottom: '0' }}><b>15 crore+</b></p>
            <p style={{ fontSize: '18px' }}>Buyers</p>
          </div>
          <div className=' col-sm-4' style={{ textAlign: 'center' }}>
            <img style={{ width: '60px', height: '60px', borderRadius: '10%' }} src={supplierImg} alt="Supplier-Img" />
            <p style={{ padding: '8px 0', fontSize: '20px', marginBottom: '0' }}><b>72 lakh+</b></p>
            <p style={{ fontSize: '18px' }}>Supplier</p>
          </div>
          <div className=' col-sm-4' style={{ textAlign: 'center' }}>
            <img style={{ width: '60px', height: '60px', borderRadius: '10%' }} src={productServices} alt="productServices-Img" />
            <p style={{ padding: '8px 0', fontSize: '20px', marginBottom: '0' }}> <b>8 crore+</b></p>
            <p style={{ fontSize: '18px' }}>Products & Services</p>
          </div>

          <div className=' col-sm-4' style={{ marginTop: '30px', textAlign: 'center' }}>
            <AnalyticsIcon sx={{ fontSize: '60px', pb: 1 }} />
            <h5> Grow your Business</h5>
            <p>Sell to buyers anytime, anywhere</p>
          </div>

          <div className=' col-sm-4' style={{ marginTop: '30px', textAlign: 'center' }}>
            <PaidIcon sx={{ fontSize: '60px', pb: 1 }} />
            <h5> Zero Cost</h5>
            <p>No commission or transaction fee</p>
          </div>

          <div className=' col-sm-4' style={{ marginTop: '30px', textAlign: 'center' }}>
            <DataThresholdingIcon sx={{ fontSize: '60px', pb: 1 }} />
            <h5>Manage Business Easily</h5>
            <p>Lead management system & other features</p>
          </div>
        </Box>
      </Box>

      <Box sx={{ m: 2 }}>
        <h3 style={{ margin: '30px 0', textAlign: 'center' }}><b>Get a free listing in 3 simple steps</b></h3>
        <Box sx={{ display: 'flex' }}>
          <div className=' col-sm-4' style={{ marginTop: '30px', textAlign: 'center' }}>
            <img style={{ width: '60px', height: '60px', borderRadius: '10%', marginBottom: '10px' }} src={createAccImg} alt="createAccImg" />
            <h5> Create Account</h5>
            <p>Add your name and phone number to get started</p>
          </div>

          <div className=' col-sm-4' style={{ marginTop: '30px', textAlign: 'center' }}>
            <img style={{ width: '60px', height: '60px', borderRadius: '10%', marginBottom: '10px' }} src={addBuisnesImg} alt="addBuisnesImg" />
            <h5>Add Business</h5>
            <p>Add name, address & e-mail of your company, store/ business</p>
          </div>

          <div className=' col-sm-4' style={{ marginTop: '30px', textAlign: 'center' }}>
            <img style={{ width: '60px', height: '60px', borderRadius: '10%', marginBottom: '10px' }} src={addProductImg} alt="addProductImg" />
            <h5>Add Products/ Services</h5>
            <p>Minimum 3 products/ services needed for your free listing page</p>
          </div>
        </Box>

      </Box>

      <Box sx={{ display: 'flex', m: 2, mt: 5, mb: 4, textAlign: 'center', bgcolor: 'lightgrey', p: 4, pl: 5 }}>
        <img style={{ width: '60px', height: '60px', borderRadius: '10%', marginLeft: '40px' }} src={arrowImg} alt="arrowImg" />
        <h3 style={{ margin: '0 100px', fontWeight: 'bold', padding: '10px 40px 0 40px' }}>Start selling for free. It only takes 5 minutes.</h3>
        <Button variant='contained'>Register<ArrowRightAltIcon sx={{ ml: '10px' }} /></Button>
      </Box>

      <Box sx={{ m: 2 }}>
        <h3 style={{ margin: '50px 0', textAlign: 'center' }}><b>Seller Success Stories</b></h3>
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


      <Box>
        <h3 style={{ margin: '50px 0', textAlign: 'center', fontWeight: 'bold' }}>Business happening on Abaris SoftTech</h3>
        <h5 style={{ fontWeight: 'bold', textAlign: 'center' }}>Lakhs of businesses ranging from SMEs to large enterprises are using the
          power of our platform to grow and make an impact:
        </h5>
        <div className='d-flex p-3 pt-5'>
          <div className='sellpage-div col-sm-5 ms-3'>
            <img src={sellpgeImg} alt="sellpgeImg" />
          </div>
          <div className='col-sm-7 d-flex flex-wrap' style={{ paddingLeft: '20px' }}>
            <div className='col-sm-5'>
              <h5 className=' fw-bold bg-black text-white p-2'>1000 Tonnes of Steel</h5>
              <p>sold by Kamal in <b>Mandi, Punjab </b> for making Indian Highways stronger.</p>
            </div>
            <div className='col-sm-5 ms-3'>
              <h5 className=' fw-bold bg-black text-white p-2'>1Lakh pharmacy instrumnts</h5>
              <p>sold by H.L. Scientific Industries in <b>Ambala, Haryana</b> for making Mumbai healthier.</p>
            </div>
            <div className='col-sm-5 mt-2'>
              <h5 className=' fw-bold bg-black text-white p-2'>4500 Solar Panels</h5>
              <p>sold by Shaurya from <b>Alwar, Rajasthan</b> sold to light up Ladakh.</p>
            </div>
            <div className='col-sm-5 mt-2 ms-3'>
              <h5 className=' fw-bold bg-black text-white p-2'>  2500 litres of water</h5>
              <p>from <b>Kanpur, Uttar Pradesh</b> was sent for the mountain regiment’s annual get together.</p>
            </div>
          </div>
        </div>
      </Box>

      <Box>
        <h3 style={{ margin: '50px 0', textAlign: 'center', fontWeight: 'bold' }}>Trusted by Global Brands</h3>
      </Box>

      <Box sx={{ m: 4 }}>
        <h3 style={{ margin: '30px 0', textAlign: 'center' }}><b>Sell on Abaris SoftTech</b></h3>
        <Typography sx={{ fontSize: '18px', letterSpacing: 1, textAlign: 'justify' }}>Abaris SoftTech is India’s largest e-commerce marketplace, catering to more than 15 Crore+ Buyers and 72 Lakh+ Suppliers. Whether you are a retailer or a manufacturer, Abaris SoftTech is the leading destination for growing business online and is trusted by more than 100 milion users across our desktop and mobile platforms.</Typography>
        <Typography sx={{ fontSize: '18px', letterSpacing: 1, textAlign: 'justify', p: '20px 0' }}>Selling on Abaris SoftTech #Abaris SoftTechAurKya. Register by entering your contact details, and simply add products in your catalog.</Typography>
        <Typography sx={{ fontSize: '18px', letterSpacing: 1, textAlign: 'justify' }}>Whats more? Our Seller portal offers a one stop solution for all your needs. Be it handling buyer enquiries, converting leads or accepting payments, we have something for everything. Sign up for free here and transform your way of doing business.</Typography>
      </Box>


      <Footer />
    </>
  )
}

export default Sell
