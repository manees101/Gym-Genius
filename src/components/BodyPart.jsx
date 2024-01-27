import React from 'react'
import Icon from "../assets/icons/gym.png"
import { Stack,Typography } from '@mui/material'
const BodyPart = ({bodyPart,setBodyPart,item}) => {

  return (
    <Stack
    type="Button"
    alignItems="center"
    justifyContent="center"
    className='bodyPart-card'
    onClick={()=>setBodyPart(item)}
    sx={{
       borderTop: bodyPart===item ? "4px solid #ff2625":"",
        backgroundColor:"#fff",
        borderBottomLeftRadius:"20px",
        width:"270px",
        height:"280px",
        cursor:"pointer",
        gap:"48px"

    }}
    >
        <img src={Icon} alt="dumbbel" style={{width:"40px",height:"40px"}} />
        <Typography fontSize="20px" fontWeight="bold" color="#3A1212" textTransform="capitalize">
         {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart