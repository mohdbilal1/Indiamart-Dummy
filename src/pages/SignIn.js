
import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import '../stylecss/signinStyle.css'
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [open, setOpen] = useState(false);
  const [verifyOpen, setVerifyOpen] = useState(false);
  const [getOtp, setGetOtp] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate()


  const handleOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
    navigate('/')
  };

  useEffect(() => {
    handleOpen()
  }, [])

  const verifyNumber = () => {
    if (inputValue === '') {
      setError(true);
    } else if (inputValue.length === 10) {
      setVerifyOpen(true)
    } else {
      setError(true);
    }

  }

  const inpHanldeChnge = (e) => {
    setInputValue(e.target.value)
  }


  const verifyHandleClose = () => {
    setVerifyOpen(false)
    navigate('/')
  };
  const clickToGetOtp = () => {
    setGetOtp(true)
  }
  const otpHandleClose = () => {
    setGetOtp(false)
    navigate('/')
  };



  return (
    <>

      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box sx={{ width: '400px', height: '300px', mb: 5, bgcolor: 'white', borderRadius: '2px', position: 'relative' }}>
          <CloseIcon onClick={handleClose} sx={{ position: 'absolute', right: 10, top: 12, bgcolor: 'white' }} />
          <Typography sx={{ bgcolor: 'rgb(16, 110, 228)', p: 2, color: 'white', fontWeight: 'bold' }}> Sign In</Typography>
          <label style={{ fontSize: '14px', margin: '30px 0 10px 10px' }}>mobile Number:</label>
          <div style={{ marginLeft: '10px', marginRight: '10px' }}>
            <TextField label='Mobile No'
              type='number'
              fullWidth
              required
              name='number'
              value={inputValue}
              onChange={inpHanldeChnge}
              error={error}
              helperText={error ? 'Please Enter Contact Number' : ''}

            />
          </div>
          <Button onClick={verifyNumber} variant='contained' sx={{ m: '15px 0 10px 90px', p: '10px 60px' }}>Submit</Button>
        </Box>

      </Modal>

      <Modal
        open={verifyOpen}
        onClose={verifyHandleClose}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box sx={{ width: '400px', height: '300px', mb: 5, bgcolor: 'white', borderRadius: '2px', position: 'relative' }}>
          <CloseIcon onClick={handleClose} sx={{ position: 'absolute', right: 10, top: 12, bgcolor: 'white' }} />
          <Typography sx={{ bgcolor: 'rgb(16, 110, 228)', p: 2, color: 'white', fontWeight: 'bold' }}>Verify Your Number</Typography>
          <Typography sx={{ p: 2, fontWeight: 'bold' }}>Get Connected to Verified Sellers</Typography>
          <Typography sx={{ p: 1 }}>Click below to get 4 digit One Time Password (OTP)
            on your Mobile Number <b>{inputValue}</b> via SMS
          </Typography>
          <Button onClick={clickToGetOtp} variant='contained' sx={{ m: '15px 0 10px 90px', p: '10px 60px' }}>Request OTP</Button>
        </Box>

      </Modal>

      <Modal
        open={getOtp}
        onClose={otpHandleClose}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box sx={{ width: '400px', height: '300px', mb: 5, bgcolor: 'white', borderRadius: '2px', position: 'relative' }}>
          <CloseIcon onClick={handleClose} sx={{ position: 'absolute', right: 10, top: 12, bgcolor: 'white' }} />
          <Typography sx={{ bgcolor: 'rgb(16, 110, 228)', p: 2, color: 'white', fontWeight: 'bold' }}>Verify Your Number</Typography>

          <Typography sx={{ p: 2, fontWeight: 'bold' }}>Get Connected to Verified Sellers</Typography>
          <Typography sx={{ p: 1 }}>Click below to get 4 digit One Time Password (OTP)
            on your Mobile Number <b>{inputValue}</b> via SMS
          </Typography>
          <TextField sx={{ width: '100px', ml: 4, mt: 1 }} size='small' placeholder='OTP' />
          <Button size='small' variant='contained' sx={{ m: '8px 0 10px 10px', p: '10px 60px' }}>Submit</Button>
          <div className='d-flex ps-5'>
            <p>Don't Recieve OTP ?</p>
            <a style={{ marginLeft: '5px' }} href='/' variant='outlined'>Resend</a>
          </div>

        </Box>

      </Modal>


    </>
  )
}

export default SignIn
