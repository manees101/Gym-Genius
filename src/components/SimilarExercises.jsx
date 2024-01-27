import React from 'react'
import ExerciseCard from './ExerciseCard'
import { Box,Typography,Stack } from '@mui/material'
import Loader from './Loader'
import HorizontalScrollBar from './HorizontalScrollBar'

const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {

  return (
    <Box
    sx={{mt:{lg:"100px",xs:"0"}}}>
    <Typography variant='h4' mb="60px">
     Exercises that target the same muscel group
    </Typography>
    <Stack direction="row" sx={{p:"2px",position:"relative"}}>
   {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises}/> :<Loader/>}
    </Stack>
    <Typography variant='h4' mb="60px" mt="40px">
     Exercises that uses the same equipment
    </Typography>
    <Stack direction="row" sx={{p:"2px",position:"relative"}}>
   {equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises}/> :<Loader/>}
    </Stack>
    </Box>
  )
}

export default SimilarExercises