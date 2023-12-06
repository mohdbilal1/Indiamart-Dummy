
import { Box, Button, ButtonGroup, Modal, TextField, Typography } from '@mui/material'
import '../stylecss/signinStyle.css'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const SellPageLoginModel = ({ open, setOpen }) => {

    const navigate = useNavigate()

    const handleClose = () => {
        setOpen(false)
        navigate('/sell')
    };

    const onRegistrClick = () => {
        navigate('/sellerBusiness')
    };


    return (
        <>

            <Modal
                open={open}
                onClose={handleClose}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Box sx={{ width: '450px', height: '350px', mb: 5, bgcolor: 'white', borderRadius: '2px', position: 'relative' }}>
                    <CloseIcon onClick={handleClose} sx={{ position: 'absolute', right: 10, top: 12, bgcolor: 'white' }} />
                    <Typography sx={{ textAlign: 'center', p: 2, pr: 4, pt: 5, fontWeight: 'bold', fontSize: '18px' }}>Enter the 4-digit One Time Password(OTP) sent on your Mobile Number</Typography>
                    <ButtonGroup variant="outlined" sx={{ml:'74px'}}>
                        <Button>country</Button>
                        <Button sx={{width:'122px'}}>9760765503</Button>
                        <Button>Not me</Button>
                    </ButtonGroup>
                    <div className=' text-center'>
                        <TextField sx={{ mt: 1, width: '300px' }} size='small' placeholder='OTP' />
                        <Typography sx={{ mt: 1, color: '#2e7d32', fontWeight: 'bold', fontSize: '14px' }}>OTP Sent Successfully on Mobile.</Typography>
                        <div className='d-flex justify-content-center align-items-center'>
                            <p style={{ fontSize: '12px', paddingTop: '18px' }} >Don't Recieve OTP ?</p>
                            <a style={{ marginLeft: '5px', fontSize: '14px' }} href='/' variant='outlined'>Resend</a>
                        </div>
                        <Button onClick={onRegistrClick} size='small' variant='contained' sx={{ m: '8px 0 10px 10px', p: '10px 60px' }}>Register For Free</Button>

                    </div>

                </Box>

            </Modal>


        </>
    )
}

export default SellPageLoginModel;
