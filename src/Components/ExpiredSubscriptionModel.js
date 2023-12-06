
import { Box, Button, Modal } from '@mui/material'
import '../stylecss/signinStyle.css'
import CloseIcon from '@mui/icons-material/Close';
import { NavLink, useNavigate } from 'react-router-dom';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import ReplayIcon from '@mui/icons-material/Replay';


const ExpiredSubscriptionModel = ({ openSub, setOpenSub }) => {
    const navigate = useNavigate()

    const handleCloseSub = () => {
        setOpenSub(false)
        navigate('/dashboard')
    }

    const goToPaymentPg=()=>{
        navigate('/payment-pg')
    }
    return (
        <>

            <Modal
                open={openSub}
                onClose={handleCloseSub}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Box sx={{ width: '450px', height: '450px', mb: 5, bgcolor: 'white', borderRadius: '5px', position: 'relative' }}>
                    <CloseIcon onClick={handleCloseSub} sx={{ position: 'absolute', right: 10, top: 12, bgcolor: 'white' }} />
                    <div className=' text-center p-4'>
                        <ReportGmailerrorredIcon sx={{ color: 'red', fontSize: '52px' }} />
                        <h5 style={{margin:'20px 0'}}>Welcome Back Abdul</h5>
                        <p style={{fontSize:'14px',color:'grey'}}>Your last transaction for <b>MDC-Yearly</b> was unsuccessful on <b>October 2nd </b>Please complete your payment and improve your business with our Paid Service.</p>
                        <img style={{ height: '80px' }} src="https://tse3.mm.bing.net/th?id=OIP.wvclQLQlwsWQbr5pJ6F5gwAAAA&pid=Api&P=0&h=180" alt="img" />
                        <p className=" text-center" style={{ color: 'grey' }}><del>₹ 36,000</del><b style={{ color: 'black', marginLeft: '10px' }}>₹ 28,000 / Year</b></p>
                        <Button onClick={goToPaymentPg} variant='contained' sx={{ fontSize: '12px',padding:'10px 40px',mb:2 }}><ReplayIcon sx={{ fontSize: '16px', mr: 1 }} />Retry Payments</Button> <br />
                        <NavLink style={{color:'gray',fontWeight:'bold'}}>Skip For Now</NavLink>
                    </div>
                </Box>

            </Modal>


        </>
    )
}

export default ExpiredSubscriptionModel;
