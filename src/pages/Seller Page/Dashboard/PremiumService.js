import { Accordion, AccordionDetails, AccordionSummary, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import DashboardSideBar from "../../../Components/DashboardSideBar"
import Navbar from "../../../Components/Navbar"
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import PhoneCallbackOutlinedIcon from '@mui/icons-material/PhoneCallbackOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import vyperImg from '../../../assets/vyapar_logo.png'


const PremiumService = () => {
    return (
        <>
            <Navbar />
            <Box sx={{ display: 'flex', bgcolor: 'rgb(242, 242, 242)' }}>
                <div className=" col-sm-2" style={{ width: '120px',position:'sticky',left:0 }}>
                    <DashboardSideBar />
                </div>

                <div className=" col-sm-11">
                    <Box sx={{ m: 5 }}>
                        <h4 style={{ textAlign: 'center', padding: '0 0 20px 0' }}>Benefits of our Paid Plan</h4>

                        <Box sx={{ display: 'flex', boxShadow: '0.1px 0.1px 2px grey' }}>
                            <TableContainer sx={{ m: 2 }}>
                                <Table sx={{ backgroundColor: 'white' }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ textAlign: 'right', fontWeight: 'bold', fontSize: '18px' }}>Features</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'right' }}>
                                                Buy Leads
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'right' }}>
                                                Visibility
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'right' }}>
                                                Business Enquiries
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'right' }}>
                                                Lead Manager
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'right' }}>
                                                Payment Gateway
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'right' }}>
                                                Preferred Number Services
                                            </TableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>
                            </TableContainer>


                            <TableContainer sx={{ m: 2 }}>
                                <Table sx={{ backgroundColor: 'white' }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '18px' }}>Free Listing <br /><span style={{ fontSize: '10px', color: 'grey' }}>pay <b>₹ 299</b> Per BuyLead</span></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'center' }}>
                                                0
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'center' }}>
                                                Lower
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'center' }}>
                                                Limited
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'center' }}>
                                                Desktop Only
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'center' }}>
                                                No
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'center' }}>
                                                No
                                            </TableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <TableContainer sx={{ m: 2 }}>
                                <Table sx={{ backgroundColor: 'white' }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '18px' }}>Monthly Plans  ₹ 500 OFF<br /><span style={{ fontSize: '10px', color: 'grey' }}>Effectively <b>₹ 50</b> Per BuyLead</span></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'center' }}>
                                                60* in a Month + 20# BL Extra Free
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'center' }}>
                                                Higher
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'center' }}>
                                                Much More
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'center' }}>
                                                Desktop + App
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'center' }}>
                                                Yes
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'center' }}>
                                                Yes
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'center' }}>
                                                ₹3,500  ₹3,000 per month
                                            </TableCell>
                                        </TableRow>


                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <TableContainer sx={{ m: 2 }}>
                                <Table sx={{ backgroundColor: 'white' }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '18px' }}>Monthly Plans  ₹ 8000 OFF<br /><span style={{ fontSize: '10px', color: 'grey' }}>Effectively <b>₹ 32</b> Per BuyLead</span></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'center' }}>
                                                885* in a Year + 50# BL Extra Free
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'center' }}>
                                                Higher
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'center' }}>
                                                Much More
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'center' }}>
                                                Desktop + App
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'center' }}>
                                                Yes
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'center' }}>
                                                Yes
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ p: '10px 20px 10px 0', textAlign: 'center' }}>
                                                ₹3,500  ₹2,333 per month
                                            </TableCell>
                                        </TableRow>


                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Box>

                        <Box>
                            <h4 style={{ textAlign: 'center', padding: '10px 0 20px 0' }}>Features included in our Paid Plan</h4>
                            <Box sx={{ width: '700px', ml: '140px' }}>
                                <Accordion sx={{ boxShadow: 'none' }}>
                                    <AccordionSummary>
                                        <ListAltOutlinedIcon sx={{ color: 'blueviolet', mr: 1 }} /> <Typography sx={{ color: 'blueviolet', fontWeight: 'bold' }}> Improved Visibility</Typography><KeyboardArrowDownIcon sx={{ ml: '447px', color: 'blueviolet' }} />
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography> Get higher listing on Abaris, appear on top of search results and improve the chances of acquiring more customers.</Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion sx={{ boxShadow: 'none' }}>
                                    <AccordionSummary>
                                        <TimelineOutlinedIcon sx={{ color: 'blueviolet', mr: 1 }} /> <Typography sx={{ color: 'blueviolet', fontWeight: 'bold' }}>BuyLeads at a lower-cost</Typography><KeyboardArrowDownIcon sx={{ ml: '400px', color: 'blueviolet' }} />
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>Choose from a list of verified buyers looking for your products/services who have shared their requirement with Abaris asking to be connected to right suppliers.</Typography>
                                    </AccordionDetails>
                                </Accordion>


                                <Accordion sx={{ boxShadow: 'none' }}>
                                    <AccordionSummary>
                                        <HelpCenterOutlinedIcon sx={{ color: 'blueviolet', mr: 1 }} /> <Typography sx={{ color: 'blueviolet', fontWeight: 'bold' }}>More Business Enquiriest</Typography><KeyboardArrowDownIcon sx={{ ml: '400px', color: 'blueviolet' }} />
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>Direct enquiries for your products/services sent to you by buyers looking for them.</Typography>
                                    </AccordionDetails>
                                </Accordion>


                                <Accordion sx={{ boxShadow: 'none' }}>
                                    <AccordionSummary>
                                        <MessageOutlinedIcon sx={{ color: 'blueviolet', mr: 1 }} /><Typography sx={{ color: 'blueviolet', fontWeight: 'bold' }}> Lead Manager on both Desktop & App</Typography><KeyboardArrowDownIcon sx={{ ml: '310px', color: 'blueviolet' }} />
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>A CRM solution to organise, manage and track all your leads and enquiries at one place.</Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion sx={{ boxShadow: 'none' }}>
                                    <AccordionSummary>
                                        <PaymentOutlinedIcon sx={{ color: 'blueviolet', mr: 1 }} /><Typography sx={{ color: 'blueviolet', fontWeight: 'bold' }}>Secure Payment Gateway</Typography><KeyboardArrowDownIcon sx={{ ml: '400px', color: 'blueviolet' }} />
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>Pay with Abaris, a payment gateway solution to receive money from any of your customers easily.</Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion sx={{ boxShadow: 'none' }}>
                                    <AccordionSummary>
                                        <PhoneCallbackOutlinedIcon sx={{ color: 'blueviolet', mr: 1 }} /><Typography sx={{ color: 'blueviolet', fontWeight: 'bold' }}> Preferred Number Service</Typography><KeyboardArrowDownIcon sx={{ ml: '400px', color: 'blueviolet' }} />
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>A cloud telephony service that lets you connect your 5 phone numbers, which ring simultaneously for each buyer call to ensure no call is missed.</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',bgcolor:'blanchedalmond',p:'20px 0',mt:3 }}>
                           <div>
                             <img style={{width:'40px'}} src={vyperImg} alt="vyperImg" />
                           </div>
                            <div className="ps-4">
                                <Typography sx={{ ml: 1,fontWeight:'bold' }}>+ 6 month Vyapar subscription for free</Typography>
                                <Typography>Manage your complete business with Vyapar. Best software for billing, inventory & accounting</Typography>
                            </div>
                        </Box>

                        <Box sx={{textAlign:'center',pt:4}}>
                            <Typography>Want to know more?</Typography>
                            <Typography>Call us at <b>096-9696-9696</b></Typography>
                        </Box>
                    </Box>
                </div>
            </Box>

        </>
    )
}

export default PremiumService
