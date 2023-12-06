import { Box } from "@mui/material"
import DashboardSideBar from "../../../Components/DashboardSideBar"
import Navbar from "../../../Components/Navbar"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AlarmOnOutlinedIcon from '@mui/icons-material/AlarmOnOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';


const LeadManager = () => {
    return (
        <>
            <Navbar />
            <Box sx={{ display: 'flex', bgcolor: 'rgb(242, 242, 242)' }}>
                <div className=" col-sm-2 position-sticky start-0" style={{ width: '120px' }}>
                    <DashboardSideBar />
                </div>

                <div className=" col-sm-8">
                    <Box sx={{display:'flex' ,m:5}}>
                        <div><ShoppingCartOutlinedIcon sx={{width:'40px',height:'40px',borderRadius:'50%',boxShadow:'1px 1px 6px 1px grey',p:1}}/><p style={{fontSize:'12px',paddingTop:'5px'}}>My Orders</p></div>
                        <div style={{margin:'0 20px'}}> <AlarmOnOutlinedIcon sx={{width:'40px',height:'40px',borderRadius:'50%',boxShadow:'1px 1px 6px 1px grey',p:1}}/><p style={{fontSize:'12px',paddingTop:'5px'}}>Reminder</p></div>
                        <div><MoreVertOutlinedIcon sx={{width:'40px',height:'40px',borderRadius:'50%',boxShadow:'1px 1px 6px 1px grey',p:1}}/><p style={{fontSize:'12px',paddingTop:'5px'}}>Menu</p></div>
                    </Box>
                </div>
            </Box>

        </>
    )
}

export default LeadManager
