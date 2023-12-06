
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom"

const GetPriceModel = ({ setOpen, open }) => {

    const navigate = useNavigate()

    const handleClose = () => {
        setOpen(false)
        navigate('/Pipe-fittings/productdetail')
    };
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Box sx={{ mb: 5, bgcolor: 'white', borderRadius: '2px', mt: 5, position:'relative' }}>
                    <CloseIcon onClick={handleClose} sx={{ position: 'absolute', right: 2, bgcolor: 'white' }} />
                    <div style={{ height: '450px',width:'800px', display: 'flex' }}>
                        <div className=" col-sm-4 p-3">
                            <img style={{ width: 'auto', height: '180px', borderRadius: '6px' }} src="https://5.imimg.com/data5/OI/KP/TZ/SELLER-714063/pipe-fittings-1000x1000.png" alt="img" />
                            <div className=' pt-3'>
                                <Typography sx={{ p: '0 0 5px 0', fontSize: '16px' }}>PVC Pipe Fittings</Typography>
                                <span style={{ fontSize: '16px' }}>₹ 48.7</span><br />
                                <p style={{fontSize:'14px',margin:'10px 0'}}><span style={{ color: 'grey',fontSize: '14px' }}>Sold By - </span>Kelvin Plastic Private Limited, Rajkot, Gujarat</p>
                                <span style={{ fontSize: '14px' }}><span style={{ color: 'grey' }}>Size:</span> 1/2 inch, 3/4 inch, 1 inch, 2 inch</span><br />
                                <span style={{ fontSize: '14px' }}><span style={{ color: 'grey' }}>Material:</span> PVC</span><br />
                                <span style={{ fontSize: '14px' }}><span style={{ color: 'grey' }}>Usage/Application:</span> Plumbing Pipe</span><br />
                                <span style={{ fontSize: '14px' }}><span style={{ color: 'grey' }}>Brand:</span> Kelvin</span><br />
                            </div>
                        </div>
                        <div className=" col-sm-8 p-3" style={{ backgroundColor: 'rgb(232, 242, 242)' }}>
                            <Typography sx={{fontSize:'22px',mb:5,mt:5}}><b>Get Latest Price</b> and details from "Kelvin Plastic Private Limited" on your mobile quickly</Typography>
                             <label style={{paddingLeft:'10px',marginBottom:'15px'}}>Mobile Number</label>
                            <TextField label='Mobile No' sx={{ p: '10px 10px' }} fullWidth />
                            <Button variant='contained' sx={{ m: '10px', p: '15px 80px' }}>Submit</Button>
                        </div>
                    </div>


                </Box>

            </Modal>

        </>
    )
}

export default GetPriceModel;
