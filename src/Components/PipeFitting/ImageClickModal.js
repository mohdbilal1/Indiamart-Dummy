import { LiaCrownSolid } from 'react-icons/lia';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom"

const ImageClickModal = ({setOpen,open}) => {
  
    const navigate = useNavigate()
   
    const handleClose = () => {
        setOpen(false)
        navigate('/Pipe-fittings')
    };
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Box sx={{ mb: 5, bgcolor: 'white', borderRadius: '2px', mt: 5 }}>
                    <CloseIcon onClick={handleClose} sx={{ position: 'absolute', right: 95, bgcolor: 'white' }} />
                    <div style={{ height: '550px', display: 'flex' }}>
                        <div className=" col-sm-6">
                            <img style={{ width: '540px', height: '550px' }} src="https://5.imimg.com/data5/OI/KP/TZ/SELLER-714063/pipe-fittings-1000x1000.png" alt="img" />
                        </div>
                        <div className=" col-sm-6 pt-3" style={{ backgroundColor: 'rgb(232, 242, 242)' }}>
                            <Typography sx={{ p: '0 0 5px 0', fontSize: '24px', fontWeight: 'bold' }}>PVC Pipe Fittings</Typography>
                            <span style={{ fontWeight: 'bold', fontSize: '18px' }}>₹ 48.7</span><br /><br />
                            <span><span style={{ color: 'grey' }}>Size:</span> 1/2 inch, 3/4 inch, 1 inch, 2 inch</span><br />
                            <span><span style={{ color: 'grey' }}>Material:</span> PVC</span>
                            <Button size="small" sx={{ ml: '170px', borderRadius: '15px' }} variant="outlined">View complete details</Button><br />
                            <span><span style={{ color: 'grey' }}>Usage/Application:</span> Plumbing Pipe</span><br />
                            <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '10px', margin: '6px' }}>
                                <h6><b>Sold By - </b><a href="/">Kelvin Plastic Private Limited </a>, Rajkot, Gujarat</h6>
                                <span><LiaCrownSolid style={{ color: 'green', fontSize: '24px', marginRight: '8px' }} />Leading Supplier</span>
                                <span><VerifiedOutlinedIcon sx={{ color: 'burlywood', mr: 1, ml: 2 }} />TrustSEAL Verified</span>
                            </div>
                            <TextField label='Mobile No' sx={{ p: '10px 10px' }} fullWidth />
                            <Button variant='contained' sx={{ m: '10px 0 10px 70px', p: '20px 60px' }}>Contact Supplier</Button>
                        </div>
                    </div>


                </Box>

            </Modal>

        </>
    )
}

export default ImageClickModal;
