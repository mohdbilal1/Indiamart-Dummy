import { Box, Button, Card, CardMedia, List, TextField, Typography } from '@mui/material'
import shopImgLogo from '../assets/mainlogo.png'
import '../stylecss/shoppingStyle.css'
import ladiesWear from '../assets/ladies-wear.png'
import mensWear from '../assets/men-wear.png'
import footwear from '../assets/footwear.png'
import beautyProducts from '../assets/beauty-products.png'
import mobileAccessories from '../assets/mobile-accessories.png'
import babyCare from '../assets/baby-care.png'
import homeDecor from '../assets/home-decor.png'
import artificialJewellery from '../assets/artificial-jewellery.png'
import light from '../assets/light.png'
import industrialChemicals from '../assets/industrial-chemicals.png'
import bn1 from '../assets/bn1.jpg'
import bn2 from '../assets/bn2.jpg'
import bn3 from '../assets/bn3.jpg'
import bn4 from '../assets/bn4.jpg'
import featureProductData from '../data/shoppingPage/featuredProductData'
import ShoppingPageFooter from '../Components/ShoppingPageFooter'
import ladiesWearData from '../data/shoppingPage/ladiesWearData'
import mensWearData from '../data/shoppingPage/mensWearData'
import footWearData from '../data/shoppingPage/footWearData'
import beautyProductsData from '../data/shoppingPage/beautyProductsData'
import mobileAccessoriesData from '../data/shoppingPage/mobileAccessoriesData'
import babyCareData from '../data/shoppingPage/babyCareData'
import { useNavigate } from 'react-router-dom'



const Shopping = () => {
  const navigate = useNavigate();

  const shopProductDetail = () => {
    navigate('/shopping/id')
  }
  
  const startSellingbtn = () => {
    navigate('/shopping/sell-on-abaris')
  }
  return (

    <>
      <Box sx={{ display: 'flex', p: 3, position: 'sticky', top: 0, bgcolor: 'white', zIndex: 10 }}>
        <div className='pt-2 pb-2'>
          <a href="/">
            <img style={{ width: 'auto', height: '35px', objectFit: 'contain', borderRadius: '8px', marginRight: '75px', marginLeft: '15px' }} src={shopImgLogo} alt="logo-img" />
          </a>
        </div>
        <TextField sx={{
          bgcolor: 'white', width: '430px', pb: 0, ml: 3,
          borderRadius: '10px 0 0 10px',
          border: '1px solid black'
        }}
          placeholder="What are you looking for?"
        />
        <Button sx={{ borderRadius: '0 10px 10px 0', bgcolor: '#1b5e20', color: 'white', width: '100px' }}>Search</Button>
        <Button variant="outlined" sx={{ ml: 3 }} onClick={startSellingbtn} >Start Selling </Button>
        <Button sx={{ ml: 3, bgcolor: '#0d47a1', color: 'white' }} >bulk requirement</Button>
      </Box>

      <Box sx={{ pl: 3, pr: 3 }}>
        <List className='top-list' sx={{ display: 'flex' }}>
          <li>
            <img src={ladiesWear} alt="ladies-Wear-img" />
            <p>Ladies Wear</p>
          </li>
          <li>
            <img src={mensWear} alt="mens-Wear-img" />
            <p>Men Wear</p>
          </li>
          <li>
            <img src={footwear} alt="footwear-img" />
            <p> Footwear</p>
          </li>
          <li>
            <img src={beautyProducts} alt="beauty-Products-img" />
            <p>Beauty Products</p>
          </li>
          <li>
            <img src={mobileAccessories} alt="mobile-accessories-img" />
            <p> Mobile Accessories</p>
          </li>
          <li>
            <img src={babyCare} alt="baby-Care-img" />
            <p>Baby Care</p>
          </li>
          <li>
            <img src={homeDecor} alt="homeDecor-img" />
            <p> Home Decor</p>
          </li>
          <li>
            <img src={artificialJewellery} alt="artificial-jewellery-img" />
            <p> Artificial Jewellery</p>
          </li>
          <li>
            <img src={light} alt="light-img" />
            <p>Light</p>
          </li>
          <li>
            <img src={industrialChemicals} alt="industrialChemicals-img" />
            <p>Industrial Chemicals</p>
          </li>
        </List>
      </Box>

      <Box className='bg-shop-img' sx={{ display: 'flex', ml: 3, mr: 3, p: 3, height: '350px' }}>
        <Typography sx={{ fontSize: '50px', fontWeight: 'bolder', position: 'relative', top: 40, mr: 5 }}>Stay Cool This Summer</Typography>
        <Card sx={{ width: '160px', height: '200px', m: 2, mt: 5, p: 1 }}>
          <CardMedia
            sx={{ height: '125px', width: '115px', mb: 1 }}
            image={bn1}
            title="cloths"
          />
          <Button size="small">Summer Wear</Button>
        </Card>
        <Card sx={{ width: '160px', height: '200px', m: 2, mt: 5, p: 1 }}>
          <CardMedia
            sx={{ height: '125px', width: '115px', mb: 1 }}
            image={bn2}
            title="fans"
          />
          <Button size="small">Ceiling Fans</Button>
        </Card>
        <Card sx={{ width: '160px', height: '200px', m: 2, mt: 5, p: 1 }}>
          <CardMedia
            sx={{ height: '125px', width: '115px', mb: 1 }}
            image={bn3}
            title="drinks"
          />
          <Button size="small">Summer Beverages</Button>
        </Card>
        <Card sx={{ width: '160px', height: '200px', m: 2, mt: 5, p: 1 }}>
          <CardMedia
            sx={{ height: '125px', width: '115px', mb: 1 }}
            image={bn4}
            title="spray"
          />
          <Button size="small">Mosquito Repellent</Button>
        </Card>
      </Box>

      <Box sx={{ m: 2, mt: 4 }}>
        <Typography sx={{ fontSize: '26px', fontWeight: 'bolder', ml: 2 }}>Featured Products</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {featureProductData.map((item, i) => {
            return (
              <Card key={i} sx={{ width: '210px', p: 3, m: 2 }}>
                <CardMedia
                  sx={{ height: '145px', width: '150px', borderRadius: '4px', mb: 3 }}
                  image={item.image}
                  title="logo-design"
                />

                <a href="/" className="cardd-link fw-bold" size="small">{item.name}</a>
                <p style={{ paddingTop: '10px' }}>{item.companyName}</p>
                <Button sx={{ display: 'block', mt: 2, fontWeight: 'bold', fontSize: '18px' }} size="small">{item.price}</Button>
                <Button variant="contained" sx={{ display: 'block', mt: 2 }} size="small" fullWidth>buy now</Button>

              </Card>
            )
          })}

        </Box>
      </Box>

      <Box sx={{ m: 2 }}>
        <Typography sx={{ fontSize: '26px', fontWeight: 'bolder', ml: 2 }}>Ladies Wear</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {ladiesWearData.map((item, i) => {
            return (
              <Card key={i} sx={{ width: '210px', p: 3, m: 2 }}>
                <CardMedia
                  sx={{ height: '145px', width: '150px', borderRadius: '4px', mb: 3 }}
                  image={item.image}
                  title="logo-design"
                />

                <a href="/" className="cardd-link fw-bold" size="small">{item.name}</a>
                <p style={{ paddingTop: '10px' }}>{item.companyName}</p>
                <Button sx={{ display: 'block', mt: 1, fontWeight: 'bold', fontSize: '18px' }} size="small">{item.price}</Button>
              </Card>
            )
          })}

        </Box>
        <Button variant='contained' sx={{ left: '42%', p: '15px 40px', mt: 1 }}>View more</Button>
      </Box>

      <Box sx={{ m: 2 }}>
        <Typography sx={{ fontSize: '26px', fontWeight: 'bolder', ml: 2 }}>Mens Wear</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {mensWearData.map((item, i) => {
            return (
              <Card key={i} sx={{ width: '210px', p: 3, m: 2 }} onClick={shopProductDetail}>
                <CardMedia
                  sx={{ height: '145px', width: '150px', borderRadius: '4px', mb: 3 }}
                  image={item.image}
                  title="logo-design"
                />

                <a href="/" className="cardd-link fw-bold" size="small">{item.name}</a>
                <p style={{ paddingTop: '10px' }}>{item.companyName}</p>
                <Button sx={{ display: 'block', mt: 1, fontWeight: 'bold', fontSize: '18px' }} size="small">{item.price}</Button>
              </Card>
            )
          })}

        </Box>
        <Button variant='contained' sx={{ left: '42%', p: '15px 40px', mt: 1 }}>View more</Button>
      </Box>

      <Box sx={{ m: 2 }}>
        <Typography sx={{ fontSize: '26px', fontWeight: 'bolder', ml: 2 }}>FootWear</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {footWearData.map((item, i) => {
            return (
              <Card key={i} sx={{ width: '210px', p: 3, m: 2 }}>
                <CardMedia
                  sx={{ height: '145px', width: '150px', borderRadius: '4px', mb: 3 }}
                  image={item.image}
                  title="logo-design"
                />

                <a href="/" className="cardd-link fw-bold" size="small">{item.name}</a>
                <p style={{ paddingTop: '10px' }}>{item.companyName}</p>
                <Button sx={{ display: 'block', mt: 1, fontWeight: 'bold', fontSize: '18px' }} size="small">{item.price}</Button>
              </Card>
            )
          })}

        </Box>
        <Button variant='contained' sx={{ left: '42%', p: '15px 40px', mt: 1 }}>View more</Button>
      </Box>

      <Box sx={{ m: 2 }}>
        <Typography sx={{ fontSize: '24px', fontWeight: 'bolder', ml: 2 }}>Beauty Products</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {beautyProductsData.map((item, i) => {
            return (
              <Card key={i} sx={{ width: '210px', p: 3, m: 2 }}>
                <CardMedia
                  sx={{ height: '145px', width: '150px', borderRadius: '4px', mb: 3 }}
                  image={item.image}
                  title="logo-design"
                />

                <a href="/" className="cardd-link fw-bold" size="small">{item.name}</a>
                <p style={{ paddingTop: '10px' }}>{item.companyName}</p>
                <Button sx={{ display: 'block', mt: 1, fontWeight: 'bold', fontSize: '18px' }} size="small">{item.price}</Button>
              </Card>
            )
          })}

        </Box>
        <Button variant='contained' sx={{ left: '42%', p: '15px 40px', mt: 1 }}>View more</Button>
      </Box>

      <Box sx={{ m: 2 }}>
        <Typography sx={{ fontSize: '26px', fontWeight: 'bolder', ml: 2 }}>Mobile Accessories</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {mobileAccessoriesData.map((item, i) => {
            return (
              <Card key={i} sx={{ width: '210px', p: 3, m: 2 }}>
                <CardMedia
                  sx={{ height: '145px', width: '150px', borderRadius: '4px', mb: 3 }}
                  image={item.image}
                  title="logo-design"
                />

                <a href="/" className="cardd-link fw-bold" size="small">{item.name}</a>
                <p style={{ paddingTop: '10px' }}>{item.companyName}</p>
                <Button sx={{ display: 'block', mt: 1, fontWeight: 'bold', fontSize: '18px' }} size="small">{item.price}</Button>
              </Card>
            )
          })}

        </Box>
        <Button variant='contained' sx={{ left: '42%', p: '15px 40px', mt: 1 }}>View more</Button>
      </Box>

      <Box sx={{ m: 2 }}>
        <Typography sx={{ fontSize: '26px', fontWeight: 'bolder', ml: 2 }}>Baby Care</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {babyCareData.map((item, i) => {
            return (
              <Card key={i} sx={{ width: '210px', p: 3, m: 2 }}>
                <CardMedia
                  sx={{ height: '145px', width: '150px', borderRadius: '4px', mb: 3 }}
                  image={item.image}
                  title="logo-design"
                />

                <a href="/" className="cardd-link fw-bold" size="small">{item.name}</a>
                <p style={{ paddingTop: '10px' }}>{item.companyName}</p>
                <Button sx={{ display: 'block', mt: 1, fontWeight: 'bold', fontSize: '18px' }} size="small">{item.price}</Button>
              </Card>
            )
          })}

        </Box>
        <Button variant='contained' sx={{ left: '42%', p: '15px 40px', mt: 1 }}>View more</Button>
      </Box>

      <ShoppingPageFooter />
    </>
  )
}

export default Shopping
