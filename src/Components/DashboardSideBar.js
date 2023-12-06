import { Box, Link, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import { useNavigate } from "react-router-dom";


const DashboardSideBar = () => {

    const navigate=useNavigate();

    const onMessageCenter=()=>{
        navigate('/message-center')
    }
    const onDashboardHome=()=>{
        navigate('/dashboard') 
    }
    const onPremiumServicePg=()=>{
        navigate('/premium-services') 
    }
    const onProfilePge=()=>{
        navigate('/profile-page') 
    }
    const onBuyLeadpg=()=>{
        navigate('/buylead-page') 
    }
    const onProductLeadpg=()=>{
        navigate('/productlead-page') 
    }
    const onPhotosAndDocspg=()=>{
        navigate('/photoanddocs-page') 
    }

    const onBuyerToolspg=()=>{
        navigate('/buyertool-page') 
    }
    const onSettingpg=()=>{
        navigate('/setting-page') 
    }
    
    const onTellyPg=()=>{
        navigate('/tellyweb-page') 
    }
    
    
    return (
        <>
            <Box>

                <TableContainer sx={{ boxShadow: '0.1px 0.1px 3px grey' }}>
                    <Table sx={{ backgroundColor: 'white', width: '120px' }}>
                        <TableBody>

                            <TableRow onClick={onDashboardHome} sx={{ bgcolor: 'white', ":hover": { cursor: 'pointer' } }}>
                                <TableCell sx={{ p: '3px 0', textAlign: 'center' ,pt:2}}>
                                    <HomeOutlinedIcon sx={{color:'rgb(91, 10, 87)'}} />
                                    <div style={{ fontSize: '13px' }}>
                                        <Link sx={{ fontSize: '12px', textDecoration: 'none', color: 'black' }}>
                                            Dashboard</Link>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow onClick={onPremiumServicePg} sx={{ bgcolor: 'white', ":hover": { cursor: 'pointer' } }}>
                                <TableCell sx={{ p: '3px 0', textAlign: 'center' }}>
                                    <DiamondOutlinedIcon sx={{color:'rgb(91, 10, 87)'}}/>
                                    <div style={{ fontSize: '13px' }}>
                                        <Link sx={{ fontSize: '12px', textDecoration: 'none', color: 'black' }}>
                                            Paid Services</Link>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow onClick={onProfilePge}  sx={{ bgcolor: 'white', ":hover": { cursor: 'pointer' } }}>
                                <TableCell sx={{ p: '3px 0', textAlign: 'center' }}>
                                    <AccountCircleIcon sx={{color:'rgb(91, 10, 87)'}}/>
                                    <div style={{ fontSize: '13px' }}>
                                        <Link sx={{ fontSize: '12px', textDecoration: 'none', color: 'black' }}>
                                            Profile </Link>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow onClick={onMessageCenter} sx={{ bgcolor: 'white', ":hover": { cursor: 'pointer' } }}>
                                <TableCell sx={{ p: '3px 0', textAlign: 'center' }}>
                                    <QuestionAnswerOutlinedIcon sx={{color:'rgb(91, 10, 87)'}}/>
                                    <div style={{ fontSize: '13px' }}>
                                        <Link sx={{ fontSize: '12px', textDecoration: 'none', color: 'black' }}>
                                            Lead Manager</Link>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow onClick={onBuyLeadpg} sx={{ bgcolor: 'white', ":hover": { cursor: 'pointer' } }}>
                                <TableCell sx={{ p: '3px 0', textAlign: 'center' }}>
                                    <TimelineOutlinedIcon sx={{color:'rgb(91, 10, 87)'}}/>
                                    <div style={{ fontSize: '13px' }}>
                                        <Link sx={{ fontSize: '12px', textDecoration: 'none', color: 'black' }}>
                                            Buy Leads</Link>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow  onClick={onProductLeadpg}  sx={{ bgcolor: 'white', ":hover": { cursor: 'pointer' } }}>
                                <TableCell sx={{ p: '3px 0', textAlign: 'center' }}>
                                    <ShoppingCartOutlinedIcon sx={{color:'rgb(91, 10, 87)'}}/>
                                    <div style={{ fontSize: '13px' }}>
                                        <Link sx={{ fontSize: '12px', textDecoration: 'none', color: 'black' }}>
                                            Products</Link>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow  onClick={onPhotosAndDocspg}   sx={{ bgcolor: 'white', ":hover": { cursor: 'pointer' } }}>
                                <TableCell sx={{ p: '3px 0', textAlign: 'center' }}>
                                    <CloudUploadOutlinedIcon sx={{color:'rgb(91, 10, 87)'}}/>
                                    <div style={{ fontSize: '13px' }}>
                                        <Link sx={{ fontSize: '12px', textDecoration: 'none', color: 'black' }}>
                                            Photos & Docs</Link>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow onClick={onBuyerToolspg} sx={{ bgcolor: 'white', ":hover": { cursor: 'pointer' } }}>
                                <TableCell sx={{ p: '3px 0', textAlign: 'center' }}>
                                    <LocalMallOutlinedIcon sx={{color:'rgb(91, 10, 87)'}}/>
                                    <div style={{ fontSize: '13px' }}>
                                        <Link sx={{ fontSize: '12px', textDecoration: 'none', color: 'black' }}>
                                            Buyers Tools</Link>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow onClick={onSettingpg} sx={{ bgcolor: 'white', ":hover": { cursor: 'pointer' } }}>
                                <TableCell sx={{ p: '3px 0', textAlign: 'center' }}>
                                    <SettingsOutlinedIcon sx={{color:'rgb(91, 10, 87)'}}/>
                                    <div style={{ fontSize: '13px' }}>
                                        <Link sx={{ fontSize: '12px', textDecoration: 'none', color: 'black' }}>
                                            Settings</Link>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow onClick={onTellyPg} sx={{ bgcolor: 'white', ":hover": { cursor: 'pointer' } }}>
                                <TableCell sx={{ p: '3px 0', textAlign: 'center',pb:3 }}>
                                    <PollOutlinedIcon sx={{color:'rgb(91, 10, 87)'}}/>
                                    <div style={{ fontSize: '13px' }}>
                                        <Link sx={{ fontSize: '12px', textDecoration: 'none', color: 'black' }}>
                                            Tally on web</Link>
                                    </div>
                                </TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

export default DashboardSideBar
