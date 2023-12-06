import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../stylecss/tellywebstyle.css'
import { Tab, TabPanel, Tabs, TabsList } from "@mui/base";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Price = () => {
    return (
        <>
            <Box sx={{ bgcolor: '#e8f5e9', pb: 3 }}>
                <Typography className=" fw-bold" sx={{ fontSize: '30px', textAlign: 'center', p: '20px 0' }}>Pricing plans </Typography>
                <p style={{ marginLeft: '180px', color: 'grey' }}>Choose a plan for 1 user</p>
                <div className=" d-flex justify-content-center">
                    <div className="price-div">
                        <h6>FREE FOREVER</h6>
                        <h3>₹ 0</h3>
                        <div className=" d-flex ps-3">
                            <CheckIcon sx={{ color: 'green', mr: 1 }} />
                            <p>Mobile & Web version</p>
                        </div>
                        <div className=" d-flex ps-3">
                            <CheckIcon sx={{ color: 'green', mr: 1 }} />
                            <p>Limited Access</p>
                        </div>
                        <Button sx={{ width: '260px', ml: 2, p: '10px 0', color: 'green', border: '1px solid green', mt: 5 }}>Get Started</Button>
                    </div>

                    <div className="price-div">
                        <h6>1 YEAR</h6>
                        <h3>₹ 2500</h3>
                        <div className=" d-flex ps-3">
                            <CheckIcon sx={{ color: 'green', mr: 1 }} />
                            <p> 1000 Free SMS</p>
                        </div>
                        <div className=" d-flex ps-3">
                            <CheckIcon sx={{ color: 'green', mr: 1 }} />
                            <p> Mobile & Web version</p>
                        </div>
                        <div className=" d-flex ps-3">
                            <CheckIcon sx={{ color: 'green', mr: 1 }} />
                            <p>Access to all Features</p>
                        </div>
                        <p className=" ps-3" style={{ fontSize: '14px', color: 'grey' }}>( Payment reminders, Reports, Share Invoices, Back-entry and more. )</p>
                        <Button sx={{ width: '260px', ml: 2, p: '10px 0', color: 'green', border: '1px solid green' }}>Get Started</Button>
                    </div>

                    <div className="price-div pb-3" style={{ boxShadow: '1px 1px 5px grey' }}>
                        <Button variant="outlined" sx={{ bgcolor: '#c8e6c9', color: 'black', mt: -3, ml: '70px' }}>RECOMMENDED</Button>
                        <h6 style={{ marginTop: '8px' }}>3 YEAR</h6>
                        <h3>₹ 5000</h3>
                        <h5 className=" text-center"><del>₹ 7500</del>(33% Off)</h5>
                        <div className=" d-flex ps-3">
                            <CheckIcon sx={{ color: 'green', mr: 1 }} />
                            <p> 3000 Free SMS</p>
                        </div>
                        <div className=" d-flex ps-3">
                            <CheckIcon sx={{ color: 'green', mr: 1 }} />
                            <p> Mobile & Web version</p>
                        </div>
                        <div className=" d-flex ps-3">
                            <CheckIcon sx={{ color: 'green', mr: 1 }} />
                            <p>Access to all Features</p>
                        </div>
                        <p className=" ps-3" style={{ fontSize: '14px', color: 'grey' }}>( Payment reminders, Reports, Share Invoices, Back-entry and more. )</p>
                        <Button variant="outlined" sx={{ width: '260px', ml: 2, p: '10px 0', bgcolor: 'green', color: 'white', ":hover": { color: 'white', bgcolor: 'green' } }}>Get Started</Button>
                    </div>

                </div>

                <Box sx={{ m: "30px 0 0 100px", pl: '70px' }}>
                    <p>Need additional users? <NavLink style={{ fontWeight: 'bold', color: 'green' }}>Check Price</NavLink></p>
                    <p>Note : <strong>18% GST </strong>applicable on all the plans</p>
                </Box>
            </Box>

            <Box>
                <Typography className=" fw-bold" sx={{ fontSize: '30px', textAlign: 'center', p: '20px 0' }}>Testimonials</Typography>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div style={{ padding: '0 140px' }}>
                            <Typography sx={{ fontSize: '25px' }}>
                                Excellent shortcut to monitor your business connected to Tally with Livekeeping The support staff excellence service is the main key behind the success. Satisfied with the app
                            </Typography>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ padding: '0 140px' }}>
                            <Typography sx={{ fontSize: '25px' }}>
                                Excellent shortcut to monitor your business connected to Tally with Livekeeping The support staff excellence service is the main key behind the success. Satisfied with the app
                            </Typography>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ padding: '0 140px' }}>
                            <Typography sx={{ fontSize: '25px' }}>
                                Excellent shortcut to monitor your business connected to Tally with Livekeeping The support staff excellence service is the main key behind the success. Satisfied with the app
                            </Typography>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </Box>

            <Box sx={{mb:3}}>
                <Typography className=" fw-bold" sx={{ fontSize: '30px', textAlign: 'center', p: '20px 0',marginBottom:'20px' }}>FAQ</Typography>

                <Tabs>
                    <TabsList>
                        <div>
                            <Tab style={{ border: 'none', marginLeft: '40px',padding:'10px 30px',fontWeight:'bold',borderRadius:'10px 10px 0 0' }} value={0}>General</Tab>
                            <Tab style={{ border: 'none', marginLeft: '40px',padding:'10px 30px',fontWeight:'bold',borderRadius:'10px 10px 0 0' }} value={1}>Subscription and Payments</Tab>
                            <Tab style={{ border: 'none', marginLeft: '40px',padding:'10px 30px',fontWeight:'bold',borderRadius:'10px 10px 0 0' }} value={2}>Technical</Tab>
                            <Tab style={{ border: 'none', marginLeft: '40px',padding:'10px 30px',fontWeight:'bold',borderRadius:'10px 10px 0 0' }} value={3}>Support</Tab>
                            <Tab style={{ border: 'none', marginLeft: '40px',padding:'10px 30px',fontWeight:'bold',borderRadius:'10px 10px 0 0' }} value={4}>Features</Tab>
                        </div>
                    </TabsList>
                    <TabPanel value={0}>
                        <Accordion sx={{ m: '10px 40px', boxShadow: '1px 1px 4px grey', borderRadius: '10px' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold' }}>What Is Livekeeping ?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>Livekeeping is a Tally on Mobile Application. With the help of this App Tally user can easily manage tally from anywhere.</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ m: '10px 40px', boxShadow: '1px 1px 4px grey', borderRadius: '10px' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold' }}>Can I Get Demo Or Free Trial Of The Product</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>Yes you can get a free trial for 7 days. You can always request for free demo through our website</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ m: '10px 40px', boxShadow: '1px 1px 4px grey', borderRadius: '10px' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold' }}>Can I Create Invoices,Ledger And Items From Mobile App?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>Yes you can easily create all type of vouchers & other entries through Livekeeping mobile app.Entries created will get sync with tally.</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ m: '10px 40px', boxShadow: '1px 1px 4px grey', borderRadius: '10px' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold' }}>Is My Data Secure With Livekeeping?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>Yes, your data is 100% secure with Livekeeping, we use different structured layer of security and provides safety with end to end encryption.</Typography>
                            </AccordionDetails>
                        </Accordion>
                    </TabPanel>
                    <TabPanel value={1}>
                    <Accordion sx={{ m: '10px 40px', boxShadow: '1px 1px 4px grey', borderRadius: '10px' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold' }}>What Is The Price For LiveKeeping?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>There are different plans depending on number of restricted users & duration of validity required. Please check the pricing available on the website.</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ m: '10px 40px', boxShadow: '1px 1px 4px grey', borderRadius: '10px' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold' }}>Is There Any Option To Upgrade My Current Plan?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>Yes, with LiveKeeping you can always upgrade your current plan.</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ m: '10px 40px', boxShadow: '1px 1px 4px grey', borderRadius: '10px' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold' }}>How I Can Renew My Subscription After It Gets Expired?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>You can visit to our website and pay directly to renew the subscription. If still facing issue please contact our support team.</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ m: '10px 40px', boxShadow: '1px 1px 4px grey', borderRadius: '10px' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold' }}>What Are Different Payment Methods Are Available?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>Livekeeping gives you multiple option to complete your payment with - UPI, bank transfer, other online modes.</Typography>
                            </AccordionDetails>
                        </Accordion>
                    </TabPanel>
                    <TabPanel value={2}>
                    <Accordion sx={{ m: '10px 40px', boxShadow: '1px 1px 4px grey', borderRadius: '10px' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold' }}>If Automated Syncing Gets Failed?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>This often happens when both the software - Tally & Livekeeping connector are not open together. If still facing the same issue then probably ODBC in Tally is not enabled or Port no. might not be same.</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ m: '10px 40px', boxShadow: '1px 1px 4px grey', borderRadius: '10px' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold' }}>What Is The Reason Of Data Mismatch?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>Data mismatch often happens when an improper syncing takes place. Please check if your Tally is syncing properly with Livekeeping or not.</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ m: '10px 40px', boxShadow: '1px 1px 4px grey', borderRadius: '10px' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold' }}>Request For Adding New Features?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>Surely we are open to new feedbacks, but we donot provide customised software. It's a generic product which is same for all the users.</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ m: '10px 40px', boxShadow: '1px 1px 4px grey', borderRadius: '10px' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold' }}>Is There Any Option To Recover My Lost Data?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>Yes, with Tally back up feature you can always be ready to recover your data in case of any mishappening.</Typography>
                            </AccordionDetails>
                        </Accordion>
                    </TabPanel>
                    <TabPanel value={3}>
                    <Accordion sx={{ m: '10px 40px', boxShadow: '1px 1px 4px grey', borderRadius: '10px' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold' }}>How To Add Extra Company?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>You can add unlimited companies just log in to Tally connector app and go to companies section , then Add company , Click on add tab available beside the company name , then go to my company section, click on sync.</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ m: '10px 40px', boxShadow: '1px 1px 4px grey', borderRadius: '10px' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold' }}>If Not Getting OTP?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>You can resend the OTP to your registered email id.</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ m: '10px 40px', boxShadow: '1px 1px 4px grey', borderRadius: '10px' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold' }}>How To Create Back Up For Tally?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>In connector app there is an option to create back up file for your Tally - Daily back up, Weekly back up, Monthly back up.</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ m: '10px 40px', boxShadow: '1px 1px 4px grey', borderRadius: '10px' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold' }}>Are You Providing Product Training?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>You can always request for free product training for your self and your team members. Contact support for further request.</Typography>
                            </AccordionDetails>
                        </Accordion>
                    </TabPanel>
                    <TabPanel value={4}>
                    <Accordion sx={{ m: '10px 40px', boxShadow: '1px 1px 4px grey', borderRadius: '10px' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold' }}>What Are Different Vouchers That I Can Create?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>With Livekeeping you can create following vouchers - sales, purchase, Receipt, debit note, credit note, quotation, sales order, purchase order, contra.</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ m: '10px 40px', boxShadow: '1px 1px 4px grey', borderRadius: '10px' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold' }}>Can I Choose The Mode & Frequency For Automated Reminder?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>Yes, for automated reminders different frequency and modes can be chosen.</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ m: '10px 40px', boxShadow: '1px 1px 4px grey', borderRadius: '10px' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold' }}>Is It Possible To Download Any Data In Pdf?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>Yes, all the data fetched from Tally can be downloaded in pdf format. These data can also be shared through different channels.</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ m: '10px 40px', boxShadow: '1px 1px 4px grey', borderRadius: '10px' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontWeight: 'bold' }}>What Are Different Reports That I Can Check?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>You can check the following reports - Inactive Items, Inactive customers, top customers, Top items, ageing summary, Ledger, Balance sheet, Profit & loss, Day book, Expenses.</Typography>
                            </AccordionDetails>
                        </Accordion>
                    </TabPanel>
                </Tabs>

            </Box>
        </>
    )
}

export default Price
