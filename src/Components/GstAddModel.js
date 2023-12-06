
import { Box, Button, FormControlLabel, Modal, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import '../stylecss/signinStyle.css'
import WarningIcon from '@mui/icons-material/Warning';


const SellerAddGstModel = ({ open, setOpen }) => {

    return (
        <>

            <Modal
                open={open}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Box sx={{ width: '450px', height: '350px', mb: 5,bgcolor: 'white', borderRadius: '5px', position: 'relative' }}>
                    <Typography sx={{ p:'30px 0 10px 30px', fontWeight: 'bold', fontSize: '18px' }}> <WarningIcon sx={{ mr: 2,color:'orange' }} />Add your GST Number</Typography>
                    <RadioGroup sx={{p:'0 0 0 30px'}}>
                        <FormControlLabel value="I have GST number" control={<Radio />} label="I have GST number" sx={{color:'green'}} />
                         <TextField size='small' label="GST Number" sx={{m:'4px 10px 4px 0',color:'green',width:'350px'}} />
                        <FormControlLabel value=" I don’t remember" control={<Radio />} label=" I don’t remember" sx={{color:'green'}}/>
                        <FormControlLabel value="I don’t have it" control={<Radio />} label="I don’t have it" sx={{color:'green'}}/>
                        <FormControlLabel value=" I am exempted" control={<Radio />} label="I am exempted"  sx={{color:'green'}}/>
                        <Button variant='contained' sx={{width:'350px',mt:1}}>Submit</Button>
                    </RadioGroup>
                    

                </Box>
               
            </Modal>


        </>
    )
}

export default SellerAddGstModel;
