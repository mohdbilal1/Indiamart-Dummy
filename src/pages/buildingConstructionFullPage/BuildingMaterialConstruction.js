import { Box, Typography } from "@mui/material"
import buildingConstructionData from "../../data/Building&Construction fullpage/Building&ConstructionData"
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { NavLink } from "react-router-dom"

const BuildingConstructionMaterialEquip = () => {
  return (
    <>
     <Navbar />
      <Typography sx={{m:'40px 0 0 43px',fontSize:'12px'}}>Abaris SoftTech - Building Construction Material, Equipment, Civil Engineering and Real Estate</Typography>
      <Box sx={{ mt: 1 }}>
        <Typography sx={{ fontSize: '24px', fontWeight: 'bold', ml: 5 }}>Building & Construction</Typography>


        <Box sx={{ display: 'flex', flexWrap: 'wrap', m: 2, pl: 2 }}>
          {buildingConstructionData.map((item, i) => {
            return (
              <Box sx={{ padding: '20px', margin: '10px', width: '370px', height: 'auto', boxShadow: '0.02px 0.02px 0.5px gray',":hover":{bgcolor:'rgb(217, 237, 247)'} }}>
                <p style={{fontWeight: 'bold',color:'brown',paddingLeft:'5px'  }}>{item.headingName}</p>
                <div style={{ display: 'flex'}}>
                  <div style={{ paddingTop: '1px' }}>
                    <img style={{ height: '170px', width: '150px', borderRadius: '6px',objectFit:'cover' }} src={item.image} alt="construction-img" />
                  </div>
                  <div style={{ paddingLeft: '25px', fontSize: '14px',paddingTop:'5px' }}>
                    <div style={{ paddingBottom: '5px' }}><NavLink to={'/Pipe-fittings'} style={{ textDecoration: 'none'}}>{item.name1}</NavLink></div>
                    <div style={{ paddingBottom: '5px' }}><NavLink style={{ textDecoration: 'none'}}>{item.name2}</NavLink></div>
                    <div style={{ paddingBottom: '5px' }}><NavLink style={{ textDecoration: 'none'}}>{item.name3}</NavLink></div>
                    <div style={{ paddingBottom: '5px'  }}><NavLink style={{ textDecoration: 'none'}}>{item.name4}</NavLink></div>
                    <div><NavLink style={{ textDecoration: 'none'}}>{item.name5}</NavLink></div>
                  </div>
                </div>
              </Box>

            )
          })}

        </Box>

      </Box>
      <Footer />
    </>
  )
}

export default BuildingConstructionMaterialEquip
