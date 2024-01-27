import React,{useEffect,useState} from 'react'
import Details from '../components/Details'
import SimilarExercises from '../components/SimilarExercises'
import ExerciseVideos from '../components/ExerciseVideos'
import {useParams} from "react-router-dom"
import { Box } from '@mui/material'
import { fetchExerciseDetails,fetchExerciseVideos, fetchTargetMuscelExercises,fetchEquipmentExercises } from '../utils/fetchData'
const ExerciseDetail = () => {
   const {id}=useParams()
   const [exerciseDetails,setExerciseDetails]=useState({})
   const [exerciseVideos,setExerciseVideos]=useState([])
   const [targetMuscleExercises,setTargetMuscleExercises]=useState([])
   const [equipmentExercises,setEquipmentExercises]=useState([])
   useEffect(()=>{
     const fetchExerciseData=async()=>{
      const response=await fetchExerciseDetails({id})
      setExerciseDetails(response)
      const videoData=await fetchExerciseVideos({searchTerm:response.name})
      setExerciseVideos(videoData)
      const similarExercises=await fetchTargetMuscelExercises({target:response.target})
      setTargetMuscleExercises(similarExercises)
      const equipmentExercisesData=await fetchEquipmentExercises({equipment:response.equipment})
      setEquipmentExercises(equipmentExercisesData)
     }
     fetchExerciseData()
   },[id])
  return (
    <Box>
      <Details exerciseDetails={exerciseDetails}/>
      <ExerciseVideos exerciseVideos={exerciseVideos.contents} name={exerciseDetails.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail