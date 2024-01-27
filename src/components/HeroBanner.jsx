import React from 'react'
import { Typography,Box,Stack,Button } from '@mui/material'
import HeroBannerImage from "../assets/images/banner.png"
const HeroBanner = () => {
  return (
    <Box
    position="relative" 
    p="20px" sx={{mt:{lg:"200px",xs:"60px"},ml:{sm:"50px"}}}>
     <Typography fontSize={26} fontWeight={600} color="#FF2625">
        Gym Genius
     </Typography>
     <Typography fontWeight={700} sx={{fontSize:{lg:"44px",xs:"40px"}}}>
        Sweat, Smile <br/> and Repeat
     </Typography>
     <Typography fontSize="26px" lineHeight="35px">
        Check out the most efective exercises
     </Typography>
     <Button variant='contained' style={{backgroundColor:"#ff2625",fontWeight:"bold", margin:"20px 0px", padding:"10px"}}>
        Explore Exercises
     </Button>
     <Typography fontWeight={900} fontSize="200px" color="#FF2625" sx={{opacity:0.1,display:{lg:"block",xs:"none"}}}>
        Exercise
     </Typography>
     <img src={HeroBannerImage} alt="Banner_img" className='hero-banner-img' />

    </Box>
  )
}

export default HeroBanner