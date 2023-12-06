import { Box, Button, List, TextField } from '@mui/material'
import imgeLogo from '../assets/mainlogo.png'
import { PiNumberCircleOneFill, PiNumberCircleTwoFill } from 'react-icons/pi';
import { Tab, TabPanel, Tabs, TabsList } from '@mui/base';
import AddIcon from '@mui/icons-material/Add';
import { FaEquals } from 'react-icons/fa';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import '../../src/stylecss/paymentStyle.css'

const PaymentPg = () => {
    return (
        <>
            <Box sx={{ display: 'flex', bgcolor: 'rgb(128, 173, 147)' }}>
                <div className='logo-img-div pt-2 pb-2'>
                    <a href="/">
                        <img className='logo-img img-fluid' style={{ width: '100%', height: '35px', borderRadius: '8px', objectFit: 'contain' }} src={imgeLogo} alt="logo-img" />
                    </a>
                </div>
                <Box className="header-right-box d-flex" sx={{ position: 'absolute', right: 70, paddingTop: '10px' }}>
                    <p style={{ borderRight: '2px solid white', fontWeight: 'bold', paddingRight: '5px', color: 'white' }}>Need help ? +91 9760786071</p>
                    <p style={{ paddingLeft: '5px', color: 'white' }}><b>FAQ</b></p>
                </Box>

            </Box>

            <Box>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className=' d-flex' style={{ margin: '20px', color: 'grey' }}>
                        <PiNumberCircleOneFill style={{ fontSize: '30px', marginRight: '10px' }} />
                        <h4>Select Package</h4>
                    </div>
                    <div className=' d-flex' style={{ margin: '20px' }}>
                        <PiNumberCircleTwoFill style={{ fontSize: '30px', marginRight: '10px', color: 'green' }} />
                        <h4>Choose Payment Option</h4>
                    </div>
                </div>

                <div className=' d-flex' style={{ backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ margin: '20px' }}>
                        <p style={{ fontSize: '25px' }}>Order Summary</p>
                    </div>
                    <div style={{ margin: '20px', textAlign: 'center' }}>
                        <p style={{ marginBottom: '4px' }}>Mini Dynamic Catalog</p>
                        <p style={{ margin: 0, border: '1px solid grey', textAlign: 'center', backgroundColor: 'gray', color: 'white' }}>₹ 28,000</p>
                    </div>
                    <div style={{ margin: '38px 10px 0 10px' }}>
                        <p><AddIcon /></p>
                    </div>
                    <div style={{ margin: '20px', width: '150px', textAlign: 'center' }}>
                        <p style={{ marginBottom: '4px' }}>GST (18%)</p>
                        <p style={{ margin: 0, border: '1px solid grey', textAlign: 'center', backgroundColor: 'gray', color: 'white' }}> ₹ 5,040</p>
                    </div>
                    <div style={{ margin: '35px 10px 0 10px' }}>
                        <p><FaEquals /></p>
                    </div>
                    <div style={{ margin: '20px', textAlign: 'center' }}>
                        <p style={{ marginBottom: '4px', fontWeight: 'bold' }}>Total Amount Payable</p>
                        <p style={{ margin: 0, border: '1px solid grey', textAlign: 'center', backgroundColor: 'white' }}>₹ 33,040</p>
                    </div>
                </div>

                <div style={{ width: '800px', margin: '30px 130px', }}>
                    <Tabs className=" d-flex">
                        <TabsList>
                            <div className=" col-sm-3 bg-white rounded-3" >
                                <Tab value={0} style={{ borderRadius: '10px', width: '200px', padding: '10px 20px', marginTop: '4px', backgroundColor: 'white' }}>Credit/Debit Card</Tab>
                                <Tab value={1} style={{ borderRadius: '10px', width: '200px', padding: '10px 20px', marginTop: '18px', backgroundColor: 'white' }}>UPI App</Tab>
                                <Tab value={2} style={{ borderRadius: '10px', width: '200px', padding: '10px 20px', marginTop: '18px', backgroundColor: 'white' }}>Net Banking</Tab>
                                <Tab value={3} style={{ borderRadius: '10px', width: '200px', padding: '10px 20px', marginTop: '18px', backgroundColor: 'white' }}>EMI on Credit Card</Tab>
                                <Tab value={4} style={{ borderRadius: '10px', width: '200px', padding: '10px 20px', marginTop: '18px', backgroundColor: 'white' }}>Wallet</Tab>
                            </div>
                        </TabsList>
                        <div className=" col-sm-8">
                            <TabPanel value={0}>
                                <Box sx={{ bgcolor: 'white', ml: 2, p: 2, borderRadius: '10px', boxShadow: '1px 1px 5px grey', width: '600px' }}>
                                    <TextField placeholder='Card Number' fullWidth sx={{ m: '20px 0' }} /> <br />
                                    <div className=' d-flex'>
                                        <TextField type='date' />
                                        <p style={{ padding: '10px 50px 0 10px' }}>Expiry Date</p>
                                        <TextField placeholder='CVV' sx={{ width: '70px', ml: '80px' }} />
                                        <img style={{ width: '100px' }} src="https://tse1.mm.bing.net/th?id=OIP.Oq6U0htQicD3xdDSTjj5-AHaFj&pid=Api&P=0&h=180" alt="img" /> <br />
                                    </div>
                                    <TextField placeholder='Name on Card' fullWidth sx={{ m: '20px 0' }} />
                                    <p style={{ backgroundColor: 'lightgrey', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold' }}>Total Payable Amount :₹ 33,040</p>
                                    <Button variant='contained' sx={{ p: "10px 60px", m: '20px 150px' }}>Pay Now <IoIosArrowDroprightCircle style={{ fontSize: '22px', marginLeft: '5px' }} /></Button>
                                </Box>
                            </TabPanel>

                            <TabPanel value={1}>
                                <Box sx={{ bgcolor: 'white', ml: 2, p: 2, borderRadius: '10px' }}>
                                    vfbg
                                </Box>
                            </TabPanel>

                            <TabPanel value={2}>
                                <Box>
                                    ffdgb
                                </Box>
                            </TabPanel>

                            <TabPanel value={3}>
                                <Box>
                                    fgdfbf
                                </Box>
                            </TabPanel>

                            <TabPanel value={4}>
                                <Box>
                                    gnghmjh
                                </Box>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <p style={{ fontWeight: 'bold' }}>Secure Online Payment Gateway</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ width: '80px',margin:'20px' }} src="https://tse2.mm.bing.net/th?id=OIP.EN2hm-dAUE_NyuUIhzJ4lwHaDj&pid=Api&P=0&h=180" alt="img" />
                    <img style={{ width: '80px',margin:'20px' }} src="https://tse3.mm.bing.net/th?id=OIP.jljYn0VxJk77R87N2bWwxQHaDW&pid=Api&P=0&h=180" alt="img" />
                    <img style={{ width: '80px',margin:'20px' }} src="https://images.credly.com/images/b8a39013-a749-46fd-a83b-d137817d17e4/blob.png" alt="img" />
                    <img style={{ width: '80px',margin:'20px' }} src="https://tse3.mm.bing.net/th?id=OIP.zCqDB0lR3hT8aLZgbKlN3AAAAA&pid=Api&P=0&h=180" alt="img" />
                    <img style={{ width: '80px',margin:'20px' }} src="https://tse2.mm.bing.net/th?id=OIP.SkySq8-P8PUz-F28RfDtvAAAAA&pid=Api&P=0&h=180" alt="img" />
                    <img style={{ width: '100px',margin:'20px' }} src="https://tse2.mm.bing.net/th?id=OIP.uxvLr3CqBC-ZqINQJa0kXgHaEU&pid=Api&P=0&h=180" alt="img" />
                </div>

                <Box className="header-right-box" sx={{ bgcolor: 'rgb(128, 173, 147)', pl: '170px' }}>
                    <List sx={{ display: 'flex', textAlign: 'center' }}>
                        <li className='nav-list'>

                            <NavLink to='/'>Maximiser Service</NavLink>
                        </li>
                        <li className='nav-list'>
                            <NavLink to='/'>MDC Service</NavLink>
                        </li>
                        <li className='nav-list'>
                            <NavLink to='/'>Privacy Policy</NavLink>
                        </li>
                        <li className='nav-list'>
                            <NavLink to='/'>Terms of Uses</NavLink>
                        </li>
                        <li className='nav-list'>
                            <NavLink to='/'>Refund Policy</NavLink>
                        </li>
                    </List>
                </Box>
            </Box>

        </>
    )
}

export default PaymentPg
