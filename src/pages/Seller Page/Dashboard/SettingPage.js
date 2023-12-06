import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, FormControlLabel, FormGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import Navbar from "../../../Components/Navbar"
import DashboardSideBar from "../../../Components/DashboardSideBar";
import { Tab, TabPanel, Tabs, TabsList } from "@mui/base";
import { NavLink } from "react-router-dom";


const SettingPg = () => {


    return (
        <>
            <Navbar />
            <Box sx={{ display: 'flex', bgcolor: 'rgb(232, 232, 242)' }}>
                <div className=" col-sm-2 position-sticky start-0" style={{ width: '120px' }}>
                    <DashboardSideBar />
                </div>

                <div className=" col-sm-10" style={{ width: '1120px' }}>
                    <Box sx={{ m: 2 }}>
                        <Tabs defaultValue={0}>
                            <TabsList>
                                <Tab style={{ fontWeight: 'bold', borderRadius: '15px 15px 0 0', border: 'none', padding: '8px 12px', marginRight: '5px', backgroundColor: 'white' }} value={0}>Notification Settings </Tab>
                                <Tab style={{ fontWeight: 'bold', borderRadius: '15px 15px 0 0', border: 'none', padding: '8px 12px', marginRight: '5px', backgroundColor: 'white' }} value={1}> Account Settings </Tab>
                                <Tab style={{ fontWeight: 'bold', borderRadius: '15px 15px 0 0', border: 'none', padding: '8px 12px', marginRight: '5px', backgroundColor: 'white' }} value={2}>PNS Call Settings</Tab>
                                <Tab style={{ fontWeight: 'bold', borderRadius: '15px 15px 0 0', border: 'none', padding: '8px 12px', marginRight: '5px', backgroundColor: 'white' }} value={3}>BuyLead Preferences</Tab>
                                <Tab style={{ fontWeight: 'bold', borderRadius: '15px 15px 0 0', border: 'none', padding: '8px 12px', marginRight: '5px', backgroundColor: 'white' }} value={4}>Privacy & Security</Tab>
                            </TabsList>
                            <TabPanel value={0}>
                                <TableContainer sx={{ boxShadow: '0.5px 0.5px 4px grey', mt: 0.3, borderRadius: '6px' }}>
                                    <Table sx={{ bgcolor: 'white' }}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ width: '400px', fontWeight: 'bold' }}>Manage Your Settings for Important Alerts</TableCell>
                                                <TableCell sx={{ fontWeight: 'bold', fontSize: '18px' }}>Email</TableCell>
                                                <TableCell sx={{ fontWeight: 'bold', fontSize: '18px' }}>SMS</TableCell>
                                                <TableCell sx={{ fontWeight: 'bold', fontSize: '18px' }}>APP</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow sx={{ fontWeight: 'bold', bgcolor: 'rgb(212, 212, 212)' }}>
                                                <span style={{ paddingLeft: '20px' }}>Enquiries</span>
                                                <TableCell></TableCell><TableCell></TableCell><TableCell></TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>
                                                    <p style={{ margin: 0, fontSize: '18px' }}>Business Enquiries</p>
                                                    <p style={{ margin: 0, color: 'grey', fontSize: '14px' }}>Sent to you by buyers.</p>
                                                </TableCell>
                                                <TableCell><Checkbox disabled checked /> </TableCell>
                                                <TableCell><Checkbox checked /> </TableCell>
                                                <TableCell><Checkbox checked /> </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>
                                                    <p style={{ margin: 0, fontSize: '18px' }}>Replies to your responses</p>
                                                    <p style={{ margin: 0, color: 'grey', fontSize: '14px' }}>Receive notification of replies sent by the buyer to your responses.</p>
                                                </TableCell>
                                                <TableCell><Checkbox checked /> </TableCell>
                                                <TableCell> _ </TableCell>
                                                <TableCell><Checkbox checked /> </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>
                                                    <p style={{ margin: 0, fontSize: '18px' }}>Follow-up Reminders</p>
                                                    <p style={{ margin: 0, color: 'grey', fontSize: '14px' }}>Get notified 10 min before the upcoming reminders.</p>
                                                </TableCell>
                                                <TableCell><Checkbox checked /> </TableCell>
                                                <TableCell> _ </TableCell>
                                                <TableCell><Checkbox checked /> </TableCell>
                                            </TableRow>

                                            <TableRow sx={{ fontWeight: 'bold', bgcolor: 'rgb(212, 212, 212)' }}>
                                                <span style={{ paddingLeft: '20px' }}>BuyLeads / Tenders</span>
                                                <TableCell></TableCell><TableCell></TableCell><TableCell></TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>
                                                    <p style={{ margin: 0, fontSize: '18px' }}>BuyLead Alerts</p>
                                                    <p style={{ margin: 0, color: 'grey', fontSize: '14px' }}>Latest requirements posted by the buyers</p>
                                                </TableCell>
                                                <TableCell><Checkbox checked /> </TableCell>
                                                <TableCell> _ </TableCell>
                                                <TableCell><Checkbox checked /> </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>
                                                    <p style={{ margin: 0, fontSize: '18px' }}>BuyLead Post Purchase</p>
                                                    <p style={{ margin: 0, color: 'grey', fontSize: '14px' }}>Email with details and contact info of the buyer whose BuyLead the seller has consumed</p>
                                                </TableCell>
                                                <TableCell><Checkbox checked /> </TableCell>
                                                <TableCell> _ </TableCell>
                                                <TableCell><Checkbox checked /> </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>
                                                    <p style={{ margin: 0, fontSize: '18px' }}>IMA: Allocation and Lapse</p>
                                                    <p style={{ margin: 0, color: 'grey', fontSize: '14px' }}>BuyLeads allocation and Lapse information under the Abaris Advantage Programme</p>
                                                </TableCell>
                                                <TableCell><Checkbox checked /> </TableCell>
                                                <TableCell> _ </TableCell>
                                                <TableCell><Checkbox checked /> </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>
                                                    <p style={{ margin: 0, fontSize: '18px' }}>Tender Alerts</p>
                                                    <p style={{ margin: 0, color: 'grey', fontSize: '14px' }}>Recommended Tenders available for your products</p>
                                                </TableCell>
                                                <TableCell><Checkbox checked /> </TableCell>
                                                <TableCell> _ </TableCell>
                                                <TableCell>_</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <p style={{ margin: 0, fontSize: '18px' }}>Tender Post Purchase</p>
                                                    <p style={{ margin: 0, color: 'grey', fontSize: '14px' }}>Email with details of Tenders that the seller has consumed/purcahsed on Abaris</p>
                                                </TableCell>
                                                <TableCell><Checkbox checked /> </TableCell>
                                                <TableCell> _ </TableCell>
                                                <TableCell>_ </TableCell>
                                            </TableRow>

                                            <TableRow sx={{ fontWeight: 'bold', bgcolor: 'rgb(212, 212, 212)' }}>
                                                <span style={{ paddingLeft: '20px' }}>Promotional Communication</span>
                                                <TableCell></TableCell><TableCell></TableCell><TableCell></TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>
                                                    <p style={{ margin: 0, fontSize: '18px' }}>Abaris's new offerings</p>
                                                    <p style={{ margin: 0, color: 'grey', fontSize: '14px' }}>To help you grow your business with newly launched products & services.</p>
                                                </TableCell>
                                                <TableCell><Checkbox checked disabled /> </TableCell>
                                                <TableCell><Checkbox checked /> </TableCell>
                                                <TableCell>_ </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <p style={{ margin: 0, fontSize: '18px' }}>Third Party Promotional Offers</p>
                                                    <p style={{ margin: 0, color: 'grey', fontSize: '14px' }}>Receive exclusive business offers only for Abaris's members.</p>
                                                </TableCell>
                                                <TableCell><Checkbox checked /> </TableCell>
                                                <TableCell> <Checkbox checked /></TableCell>
                                                <TableCell>_ </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>
                                                    <p style={{ margin: 0, fontSize: '18px' }}>Business Surveys</p>
                                                    <p style={{ margin: 0, color: 'grey', fontSize: '14px' }}>To participate in market research conducted by independent third parties to understand business/industry trends.</p>
                                                </TableCell>
                                                <TableCell><Checkbox checked /> </TableCell>
                                                <TableCell> _ </TableCell>
                                                <TableCell>_ </TableCell>
                                            </TableRow>

                                            <TableRow sx={{ fontWeight: 'bold', bgcolor: 'rgb(212, 212, 212)' }}>
                                                <span style={{ paddingLeft: '20px' }}>Service Messages</span>
                                                <TableCell></TableCell><TableCell></TableCell><TableCell></TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>
                                                    <p style={{ margin: 0, fontSize: '18px' }}>Abaris Service Messages</p>
                                                    <p style={{ margin: 0, color: 'grey', fontSize: '14px' }}>Messages about your active services & business promotion on Abaris.</p>
                                                </TableCell>
                                                <TableCell><Checkbox checked disabled /> </TableCell>
                                                <TableCell> <Checkbox checked />  </TableCell>
                                                <TableCell>_ </TableCell>
                                            </TableRow>

                                            <TableRow sx={{ fontWeight: 'bold', bgcolor: 'rgb(212, 212, 212)' }}>
                                                <span style={{ paddingLeft: '20px' }}>Your Buying Activities</span>
                                                <TableCell></TableCell><TableCell></TableCell><TableCell></TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>
                                                    <p style={{ margin: 0, fontSize: '18px' }}>Buying Alerts</p>
                                                    <p style={{ margin: 0, color: 'grey', fontSize: '14px' }}>Reminders for products you may want to buy.</p>
                                                </TableCell>
                                                <TableCell><Checkbox checked /> </TableCell>
                                                <TableCell> _ </TableCell>
                                                <TableCell>_ </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </TabPanel>
                            <TabPanel value={1}>
                                <Box sx={{ bgcolor: 'white', p: 5, mt: 0.3 }}>
                                    <Box sx={{ borderBottom: '1px solid rgb(217, 227, 217)', pb: 3 }}>
                                        <Typography sx={{ fontWeight: 'bold', p: '10px 0' }}>Sync your E-mail with Abaris Lead Manager</Typography>
                                        <Typography sx={{ fontSize: '14px', color: 'grey' }}>Sync all your email replies and email read/unread status to Abaris buyers in Lead Manager and have a complete view of your communication in one place.</Typography>
                                        <NavLink><strong style={{ color: 'black', fontSize: '14px' }}>Note:</strong><span style={{ color: 'grey' }}>Please wait for a minimum of 24 hours for changes to reflect.</span></NavLink>
                                    </Box>
                                    <Box sx={{ borderBottom: '1px solid rgb(217, 227, 217)', pb: 3 }}>
                                        <Typography sx={{ fontWeight: 'bold', p: '10px 0' }}>Display Catalog PDF</Typography>
                                        <Typography sx={{ color: 'grey', fontSize: '14px' }}>Generate PDF of your catalog and display it in 'About Us' Section on your catalog.</Typography>
                                        <Typography sx={{ color: 'grey', fontSize: '14px' }}>On disabling this, the PDF will not be visible on your catalog.</Typography>
                                    </Box>
                                    <Box sx={{ borderBottom: '1px solid rgb(217, 227, 217)', pb: 3 }}>
                                        <Typography sx={{ fontWeight: 'bold', p: '10px 0' }}>Disable Account</Typography>
                                        <Typography sx={{ fontSize: '14px', color: 'grey' }}>Deactivate your profile and remove your product listing and catalog from Abaris. By disabling your account, you will stop receiving business enquiries from Abaris.</Typography>
                                        <Button variant="outlined" sx={{ m: '10px 0', p: '4px 40px' }}>Disable</Button>
                                    </Box>
                                    <Box sx={{ borderBottom: '1px solid rgb(217, 227, 217)', pb: 3 }}>
                                        <Typography sx={{ fontWeight: 'bold', m: '10px' }}>Additional Language for Communication</Typography>
                                        <FormGroup>
                                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                <FormControlLabel sx={{ ml: '60px', fontWeight: 'bold' }} control={<Checkbox defaultChecked />} label="Engilsh" />
                                                <FormControlLabel sx={{ ml: '60px', fontWeight: 'bold' }} control={<Checkbox />} label="Hindi" />
                                                <FormControlLabel sx={{ ml: '60px', fontWeight: 'bold' }} control={<Checkbox />} label="Marathi" />
                                                <FormControlLabel sx={{ ml: '60px', fontWeight: 'bold' }} control={<Checkbox />} label="Gujarati" />
                                                <FormControlLabel sx={{ ml: '60px', fontWeight: 'bold' }} control={<Checkbox />} label="Cannada" />
                                                <FormControlLabel sx={{ ml: '60px', fontWeight: 'bold' }} control={<Checkbox />} label="Telugu" />
                                                <FormControlLabel sx={{ ml: '60px', fontWeight: 'bold' }} control={<Checkbox />} label="Bengali" />
                                                <FormControlLabel sx={{ ml: '60px', fontWeight: 'bold' }} control={<Checkbox />} label="Tamil" />
                                                <FormControlLabel sx={{ ml: '60px', fontWeight: 'bold' }} control={<Checkbox />} label="Malayalum" />
                                            </div>
                                        </FormGroup>
                                        <Button variant="contained" sx={{ p: '5px 30px', m: '20px 0 0 65px' }}>Save</Button>
                                    </Box>
                                </Box>
                            </TabPanel>
                            <TabPanel value={2}>
                                <Box sx={{ display: 'flex', width: '1120px' }}>
                                    <div className=" col-sm-6">

                                        <Box sx={{ width: '600px', ml: '1px', pl: 3, bgcolor: 'white', mt: 0.3 }}>
                                            <Typography sx={{ fontSize: '20px', p: '20px 0' }}>Preferred Number Service</Typography>
                                            <Typography sx={{ color: 'green', fontSize: '16px', mb: 3 }}>To know more about PNS and get this exclusive service please contact 096-9696-9696</Typography>
                                            <Typography sx={{ borderTop: '1px solid grey', borderBottom: '1px solid grey', p: '10px 12px', fontWeight: 'bold', color: 'grey' }}>Frequently Asked Questions</Typography>
                                            <Accordion sx={{ boxShadow: 'none' }}>
                                                <AccordionSummary>
                                                    <Typography> What is PNS?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography sx={{ fontSize: '14px' }}> It is a unique number given to you by IndiaMART. It is part of the package which you have subscribed to. When a buyer calls on this number all your numbers registered with IndiaMART ring simultaneously and ensure that you do not miss any business call.</Typography>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion sx={{ boxShadow: 'none' }}>
                                                <AccordionSummary>
                                                    <Typography>What benefits do I get?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography sx={{ fontSize: '14px' }}>The benefits of this facility:-
                                                        Never miss a business call as it connects to all your registered numbers simultaneously.
                                                        Better enquiry (business calls) tracking with instant SMS & email alerts.
                                                        Reduced spam/ telemarketing calls on this number (up to 95% control).
                                                        All the calls through a single number
                                                        Track how much business you got from IM (ROI).
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>


                                            <Accordion sx={{ boxShadow: 'none' }}>
                                                <AccordionSummary>
                                                    <Typography>In what sequence my numbers would be connected?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography sx={{ fontSize: '14px' }}>All the numbers listed and checked above ring at the same time. You can set preference- which number you want to ring at what time by putting them in office hour/ non-office hour list.</Typography>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion sx={{ boxShadow: 'none' }}>
                                                <AccordionSummary>
                                                    <Typography>What are office & non-office hour timings?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography sx={{ fontSize: '14px' }}>The timings are-
                                                        Office Hours: 9:00 A.M.- 7:00 P.M. (Mon-Sat)
                                                        Non-Office Hours: 7:00 P.M.- 9:00 A.M. (Mon-Sat)+(Sun & National Bank holidays as per RBI)</Typography>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion sx={{ boxShadow: 'none' }}>
                                                <AccordionSummary>
                                                    <Typography>How many mobile & landline numbers can be managed via this service?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography sx={{ fontSize: '14px' }}>You can manage a total of max. 5 numbers- with at-least 1 mobile number.</Typography>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion sx={{ boxShadow: 'none' }}>
                                                <AccordionSummary>
                                                    <Typography>Where can the buyers see my Preferred Number?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography sx={{ fontSize: '14px' }}>Your Preferred Number is visible on your catalog (Website) in "Contact Us" box on the footer of every page and also on "Contact Us" page along with other mobile numbers. It is also visible on all IndiaMart platforms.</Typography>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion sx={{ boxShadow: 'none' }}>
                                                <AccordionSummary>
                                                    <Typography>How do I set the office hour phone numbers & non-office hour phone numbers?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography sx={{ fontSize: '14px' }}>Log in to https://seller.indiamart.com and browse to "My Preferred Number" page. You can configure your numbers according to timings (office hour and non-office hour) on this page.</Typography>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion sx={{ boxShadow: 'none' }}>
                                                <AccordionSummary>
                                                    <Typography>I am not able to receive / send SMS on this number?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography sx={{ fontSize: '14px' }}>The feature of SMS is not supported with this service.</Typography>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion sx={{ boxShadow: 'none' }}>
                                                <AccordionSummary>
                                                    <Typography>What if I miss any call from this number?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography sx={{ fontSize: '14px' }}>An SMS and Email will be sent on your primary mobile number and Email address registered with IndiaMART, giving you the details of the caller number and time of call.</Typography>
                                                </AccordionDetails>
                                            </Accordion>


                                            <Accordion sx={{ boxShadow: 'none' }}>
                                                <AccordionSummary>
                                                    <Typography>If I have registered only land-line numbers (or if buyer calls from a land line number), then after the call is made, where will the SMS go for me or the buyer?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography sx={{ fontSize: '14px' }}>SMS is not delivered to a landline number.</Typography>
                                                </AccordionDetails>
                                            </Accordion>


                                            <Accordion sx={{ boxShadow: 'none' }}>
                                                <AccordionSummary>
                                                    <Typography>Can I use this number on my office stationery?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography sx={{ fontSize: '14px' }}>Yes. As it is a dedicated number allocated to you, you can use this number for your office stationery and in your mail communications as well</Typography>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion sx={{ boxShadow: 'none' }}>
                                                <AccordionSummary>
                                                    <Typography>How authenticated is any interaction done through this service ?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography sx={{ fontSize: '14px' }}>We don't keep a record of the calls being made. However the SMS/ Mail being sent to you will also be visible in "MY Enquiries" section in MY.IndiaMART.com for your future reference.</Typography>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion sx={{ boxShadow: 'none' }}>
                                                <AccordionSummary>
                                                    <Typography>When a buyer calls on this Preferred Number, then whose number will be shown on my mobile phone/caller ID?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography sx={{ fontSize: '14px' }}>You will see an internal service number- . However, after the call is made, both you and the buyer will receive an SMS carrying the number of other party. We recommend that you save the number in your mobile phone as "IndiaMART Buyer" so as to recognize each and every business enquiry and never miss it.</Typography>
                                                </AccordionDetails>
                                            </Accordion>



                                        </Box>

                                    </div>
                                    <div className=" col-sm-4 ps-5">
                                        <Typography sx={{ fontWeight: 'bold', p: '50px 0 0 100px' }}>How PNS Works</Typography>
                                        <Typography sx={{ fontSize: '12px', color: 'grey', p: '10px 0 0 85px' }}>Buyer dials your PNS Number</Typography>
                                        <Button variant="contained" sx={{ p: '4px 4px', fontSize: '10px', mb: '-110px', ml: '110px' }}>Your PNS number</Button>
                                        <div> <img style={{ margin: '20px 0 10px 80px' }} src='https://seller.imimg.com/gifs-new/group-5.png' alt="imgg" /></div>
                                        <Typography sx={{ fontSize: '12px', color: 'grey', p: '10px 0 0 45px' }}>Call is forwarded to all of your registered numbers linked to PNS</Typography>
                                    </div>
                                </Box>
                            </TabPanel>
                            <TabPanel value={3}>BuyLead Preferences</TabPanel>
                            <TabPanel value={4}>
                                <Box sx={{ bgcolor: 'white',mt:0.3 }}>
                                    <Box sx={{ p: '10px 20px', borderBottom: '1px solid rgb(217, 227, 217)' }}>
                                        <Typography sx={{ fontWeight: 'bold' }}>Secure your Account</Typography>
                                        <Typography sx={{ m: '14px 0', color: 'grey', fontSize: '14px' }}>This option will allow you to logout your IndiaMART account from all the devices where it is logged in</Typography>
                                        <Button variant="outlined">Sign out From All Devices</Button>
                                    </Box>
                                    <Box sx={{ p: '10px 20px', borderBottom: '1px solid rgb(217, 227, 217)' }}>
                                        <Typography sx={{ fontWeight: 'bold' }}>Change your password</Typography>
                                        <Typography sx={{ color: 'grey', fontSize: '14px' }}>Use this option to change the password for your IndiaMART account</Typography>
                                        <div className=" d-flex mt-4">
                                            <Typography sx={{ fontWeight: 'bold',mt:2 }}>New Password :</Typography>
                                            <TextField sx={{width:'400px',ml:'93px'}} placeholder="Enter Your New Password" />
                                        </div>
                                        <div className=" d-flex mt-4">
                                            <Typography sx={{ fontWeight: 'bold',mt:2 }}>Re-Enter New Password :</Typography>
                                            <TextField sx={{width:'400px',ml:'30px'}} placeholder="Enter Your New Password" />
                                        </div>
                                        <div>
                                        <Button sx={{mt:3,ml:5}} variant="contained">Request OTP on Mobile number</Button> <br />
                                        <Button sx={{mt:3,ml:5,p:'6px 50px'}} variant="outlined">Request OTP on Email</Button>
                                        </div>

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

export default SettingPg
