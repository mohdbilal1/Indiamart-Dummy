import { Box, List } from "@mui/material"
import { NavLink } from "react-router-dom";
import '../stylecss/buyLeadStyle.css';

const BuyLeadNavbar = () => {
    return (
        <>
            <Box sx={{ bgcolor: 'rgb(63, 63, 63)',position:'sticky',top:65,zIndex:10 ,ml:0.1,width:'1140px'}}>
                <List sx={{ display: 'flex', textAlign: 'center'}}>

                    <li className='buy-lead-nav'>

                        <NavLink to='/buylead-page'>Relevant Leads</NavLink>
                    </li>
                    <li className='buy-lead-nav'>
                        <NavLink to='/recentlead-page'> Recent Leads</NavLink>
                    </li>
                    
                    <li className='buy-lead-nav'>
                        <NavLink to='/exportlead-page'>Export Leads</NavLink>
                    </li>
                    <li className='buy-lead-nav'>
                        <NavLink to='/'> More Leads</NavLink>
                    </li>
                    <li className='buy-lead-nav'>
                        <NavLink to='/'>Shortlisted Leads</NavLink>
                    </li>
                    <li className='buy-lead-nav'>
                        <NavLink to='/'>Latest Tenders</NavLink>
                    </li>
                    <li className='buy-lead-nav'>
                        <NavLink to='/'>Consumed Leads</NavLink>
                    </li>
                    <li className='buy-lead-nav'>
                        <NavLink to='/'>Transaction History</NavLink>
                    </li>


                </List>
            </Box>

        </>
    )
}

export default BuyLeadNavbar
