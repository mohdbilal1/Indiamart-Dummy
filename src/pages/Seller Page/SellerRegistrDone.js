import { Box, Button, Typography } from "@mui/material"
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import offerImg from '../../assets/selloffer.png'
import vyperImg from '../../assets/vyapar_logo.png'
import { NavLink } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import SellerAddGstModel from "../../Components/GstAddModel";
import { useState } from "react";

const SellerRegistrDone = () => {
    const [open ,setOpen]=useState(false)

    const openAddGstmodel=()=>{
        setOpen(true)
    }
    return (
        <>
            <Navbar />
            <Box sx={{ m: 5 }}>
                <Box>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '24px', textAlign: 'center' }}><b style={{ color: 'blue' }}>Congratulations Testing!</b> Your basic seller registration is complete.
                        Your free catalog will be listed shortly.
                    </Typography>
                    <Typography sx={{ textAlign: 'center', m: 1 }}>Meanwhile, you can consider our Paid Listing to grow your business.</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', pl: 5 }}>
                    <Box sx={{ width: '300px', m: 3, textAlign: 'center' }}>
                        <LocalAtmIcon sx={{ color: 'violet' }} />
                        <Typography sx={{ fontWeight: 'bold', color: 'blue' }}>Visibility</Typography>
                        <Typography>More views for your products than your competitors on Abaris.</Typography>
                    </Box>
                    <Box sx={{ width: '300px', m: 3, textAlign: 'center' }}>
                        <LocalAtmIcon sx={{ color: 'violet' }} />
                        <Typography sx={{ fontWeight: 'bold', color: 'blue' }}>Buy Leads</Typography>
                        <Typography>Get 855* BuyLeads (10+7* per week) and find more buyers lookingfor your products/services.</Typography>
                    </Box>
                    <Box sx={{ width: '300px', m: 3, textAlign: 'center' }}>
                        <LocalAtmIcon sx={{ color: 'violet' }} />
                        <Typography sx={{ fontWeight: 'bold', color: 'blue' }}>Buyer Enquiries</Typography>
                        <Typography>Receive much more business enquiries via email and call.</Typography>
                    </Box>
                    <Box sx={{ width: '300px', m: 3, textAlign: 'center' }}>
                        <LocalAtmIcon sx={{ color: 'violet' }} />
                        <Typography sx={{ fontWeight: 'bold', color: 'blue' }}>Lead Manger</Typography>
                        <Typography>Manage all your business enquiries at one place</Typography>
                    </Box>
                    <Box sx={{ width: '300px', m: 3, textAlign: 'center' }}>
                        <LocalAtmIcon sx={{ color: 'violet' }} />
                        <Typography sx={{ fontWeight: 'bold', color: 'blue' }}>Pay with Abaris</Typography>
                        <Typography>Receive Payments online via Debit card/Credit card.</Typography>
                    </Box>
                    <Box sx={{ width: '300px', m: 3, textAlign: 'center' }}>
                        <LocalAtmIcon sx={{ color: 'violet' }} />
                        <Typography sx={{ fontWeight: 'bold', color: 'blue' }}>Preferred Number Service</Typography>
                        <Typography>When buyers call, all your registered numbers ring simultaneously.</Typography>
                    </Box>
                </Box>
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', m: '10px 0' }}>
                        <Typography>Avail our Limited Time Offer</Typography>
                        <img src={offerImg} alt="offerImg" />
                        <Typography> on Paid Listing</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={vyperImg} alt="vyperImg" />
                        <Typography sx={{ ml: 1 }}>+6 Month Vyapar subscription worth ₹1799 for free</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',m:'15px 0' }}>
                        <Button onClick={openAddGstmodel} variant="contained">i am interested</Button>
                        <SellerAddGstModel open={open} setOpen={setOpen} />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <NavLink to='/dashboard'>Skip, I'll check later</NavLink>
                    </Box>


                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default SellerRegistrDone
