import { Box, Button, Card, CardMedia, Rating, Table, TableCell, TableRow, TextField, Typography } from "@mui/material"
import { NavLink, useNavigate } from "react-router-dom"
import shopImgLogo from '../assets/mainlogo.png'
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ViewCarouselOutlinedIcon from '@mui/icons-material/ViewCarouselOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import OfflinePinOutlinedIcon from '@mui/icons-material/OfflinePinOutlined';
import LocalConvenienceStoreOutlinedIcon from '@mui/icons-material/LocalConvenienceStoreOutlined';
import mensWearData from "../data/shoppingPage/mensWearData";

const ShoppingProductDetails = () => {
    const navigate = useNavigate();

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
                <Button onClick={startSellingbtn} variant="outlined" sx={{ ml: 3 }} >Start Selling </Button>
                <Button sx={{ ml: 3, bgcolor: '#0d47a1', color: 'white' }} >bulk requirement</Button>
            </Box>

            <Box sx={{ display: 'flex', mt: 3 }}>
                <div className=" col-sm-6 ms-4">
                    <img style={{ width: '500px' }} src="https://5.imimg.com/data5/ECOM/Default/2022/3/CH/YN/DB/10122074/long-johns-zoomed-1000x1000.jpg" alt="img" />
                </div>
                <div className=" col-sm-6">
                    <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>Winter Long Johns-light Grey-full Set</Typography>
                    <div className=" d-flex mt-2 mb-2">
                        <h4>₹ 1,043</h4>
                        <NavLink style={{ color: 'green', marginLeft: '30px' }}><LocalOfferOutlinedIcon />Shop Now</NavLink>
                    </div>
                    <div className=" d-flex">
                        <div>
                            <Button sx={{ width: '200px', p: 1 }} variant="outlined">Bulk Order</Button>
                            <p style={{ fontSize: '12px', paddingLeft: '20px' }}>For large quantities</p>
                        </div>
                        <div className=" ms-5">
                            <Button sx={{ width: '200px', p: 1 }} variant="contained">Buy Now</Button>
                            <p style={{ fontSize: '12px', paddingLeft: '20px' }}>You will be redirected to the merchant's store</p>
                        </div>

                    </div>
                    <div className=" d-flex">
                        <Typography sx={{ fontWeight: 'bold', mt: 0.6 }}>Captainsnote Services</Typography>
                        <Button variant="outlined" sx={{ borderRadius: '20px', color: 'green', ml: 4 }}><ViewCarouselOutlinedIcon />View All Products</Button>
                    </div>
                    <div>
                        <p style={{ fontSize: '12px', margin: '2px' }}><LocationOnOutlinedIcon sx={{ fontSize: '18px', mr: 1 }} />Kochi, Kerala</p>
                        <p style={{ fontSize: '12px', margin: '2px' }}>4.5/5<Rating size="small" sx={{ ml: 1 }} defaultValue={4.5} max={5} /></p>
                        <p style={{ fontSize: '12px', margin: '2px' }}><VerifiedIcon sx={{ fontSize: '18px', color: 'green', mr: 1 }} />GST - 32ABVPG7209B1ZW</p>
                        <div className=" d-flex">
                            <p style={{ fontSize: '12px', margin: '2px' }}><OfflinePinOutlinedIcon sx={{ fontSize: '18px', color: 'green', mr: 1 }} />Verified Supplier</p>
                            <p style={{ fontSize: '12px', margin: '2px', marginLeft: '10px' }}><LocalConvenienceStoreOutlinedIcon sx={{ fontSize: '18px', color: 'green', mr: 1 }} />Manufacturer</p>
                        </div>
                    </div>
                    <div>
                        <h6 style={{ marginTop: '25px' }}>Details</h6>
                        <Table sx={{ width: '500px' }}>
                            <TableRow>
                                <TableCell>mlveda_country</TableCell>
                                <TableCell>intl</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Size</TableCell>
                                <TableCell>42</TableCell>
                            </TableRow>
                        </Table>
                    </div>
                    <div>
                        <p style={{ margin: '4px' }}>SKU : CNM-SLJ-S002</p>
                        <p style={{ margin: '4px' }}>Weight : 250 g</p>
                        <p style={{ margin: '4px' }}>This set oflong-johns are designed to give you comfort when you work in cold climates.Comes with top and bottom for giving you the ultimate protection in cold weather.</p>
                        <p style={{ margin: '4px' }}>100 % quality guaranteed.</p>
                        <p style={{ margin: '4px' }}>Free shipping for a limited period of time</p>
                        <p style={{ margin: '4px' }}>Shipping</p>
                        <p style={{ margin: '4px' }}>Shipping policy</p>
                        <p style={{ margin: '4px' }}>Refund/Cancellation</p>
                        <p style={{ margin: '4px' }}>Cancellation/refund policy</p>

                    </div>
                </div>
            </Box>

            <Box sx={{ m: 2, mt: 2 }}>
                <Typography sx={{ fontSize: '26px', fontWeight: 'bolder', ml: 2 }}>More Products </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    {mensWearData.map((item, i) => {
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

            <Box sx={{m:2}}>
                <Typography sx={{ fontSize: '26px', fontWeight: 'bolder', ml: 2 }}>Browse Related Categories </Typography>

                <div className=" d-flex flex-wrap">
                    <Card sx={{ width: '310px', display: 'flex', boxShadow: '1px 1px 5px grey', borderLeft: '8px solid rgb(181, 16, 16)', m:2,ml:5, borderRadius: '10px' }}>
                        <CardMedia
                            sx={{ height: '125px', width: '130px', borderRadius: '4px', m: 1 }}
                            image='https://3.imimg.com/data3/GW/MB/GLADMIN-9997/mens-cotton-shirts-250x250.jpg'
                            title="logo-design"
                        />

                        <a href="/" className="cardd-link fw-bold mt-5" size="small">Men Cotton Shirts</a>
                    </Card>

                    <Card sx={{ width: '310px', display: 'flex', boxShadow: '1px 1px 5px grey', borderLeft: '8px solid rgb(181, 16, 16)', m:2,ml:5, borderRadius: '10px' }}>
                        <CardMedia
                            sx={{ height: '125px', width: '130px', borderRadius: '4px', m: 1 }}
                            image='https://3.imimg.com/data3/RR/YL/GLADMIN-105908/shirt-250x250.jpg'
                            title="logo-design"
                        />

                        <a href="/" className="cardd-link fw-bold mt-5" size="small">Shirt</a>
                    </Card>

                    <Card sx={{ width: '310px', display: 'flex', boxShadow: '1px 1px 5px grey', borderLeft: '8px solid rgb(181, 16, 16)', m:2,ml:5, borderRadius: '10px' }}>
                        <CardMedia
                            sx={{ height: '125px', width: '130px', borderRadius: '4px', m: 1 }}
                            image='https://4.imimg.com/data4/OB/WN/GLADMIN-182285/mens-check-shirt-250x250.jpg'
                            title="logo-design"
                        />

                        <a href="/" className="cardd-link fw-bold mt-5" size="small">Men Check Shirt</a>
                    </Card>

                    <Card sx={{ width: '310px', display: 'flex', boxShadow: '1px 1px 5px grey', borderLeft: '8px solid rgb(181, 16, 16)', m:2,ml:5, borderRadius: '10px' }}>
                        <CardMedia
                            sx={{ height: '125px', width: '130px', borderRadius: '4px', m: 1 }}
                            image='https://4.imimg.com/data4/CI/XY/GLADMIN-185217/mens-printed-shirt-250x250.jpg'
                            title="logo-design"
                        />

                        <a href="/" className="cardd-link fw-bold mt-5" size="small">Men Printed Shirt</a>
                    </Card>


                    <Card sx={{ width: '310px', display: 'flex', boxShadow: '1px 1px 5px grey', borderLeft: '8px solid rgb(181, 16, 16)', m:2,ml:5, borderRadius: '10px' }}>
                        <CardMedia
                            sx={{ height: '125px', width: '130px', borderRadius: '4px', m: 1 }}
                            image='https://3.imimg.com/data3/KG/SD/GLADMIN-9993/men-shirts-250x250.jpg'
                            title="logo-design"
                        />

                        <a href="/" className="cardd-link fw-bold mt-5" size="small">Men Shirts</a>
                    </Card>


                    <Card sx={{ width: '310px', display: 'flex', boxShadow: '1px 1px 5px grey', borderLeft: '8px solid rgb(181, 16, 16)', m:2,ml:5, borderRadius: '10px' }}>
                        <CardMedia
                            sx={{ height: '125px', width: '130px', borderRadius: '4px', m: 1 }}
                            image='https://5.imimg.com/data5/GLADMIN/Default/2022/9/QW/KU/AG/90545/men-denim-shirt-250x250.png'
                            title="logo-design"
                        />

                        <a href="/" className="cardd-link fw-bold mt-5" size="small">Men Denim Shirt</a>
                    </Card>

                    
                </div>
            </Box>
        </>
    )
}

export default ShoppingProductDetails
