import React, { useState, useEffect } from "react";
import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import { fetchData,fetchBodyPartData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";
const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
    const [search,setSearch]=useState("")
    
    const [bodyParts,setBodyParts]=useState([])
    const handleSearch=async()=>{

        if(search)
        {
           const data=await fetchData()
           const filteredData=data.filter((exercise)=>(exercise.name.toLowerCase().includes(search)
           || exercise.target.toLowerCase().includes(search)
           || exercise.equipment.toLowerCase().includes(search)
           || exercise.bodyPart.toLowerCase().includes(search)
           ))
           setSearch("")
           setExercises([...filteredData])
           
        }
    }
   useEffect(()=>{
    const fetchBodyPart=async()=>{
    const data=await fetchBodyPartData()
    setBodyParts(["all",...data])
    }
    fetchBodyPart()
   },[])

  return (
    <Stack alignItems="center" justifyContent="center" p="20px" mt="200px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder="Search Exercises"
          type="text"
          height="76px"
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            borderRadius: "40px",
            backgroundColor: "#fff",
          }}
        ></TextField>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "red",
            height: "56px",
            width: { lg: "170px", xs: "70px" },
            fontSize: { lg: "20px", xs: "14px" },
            color: "#fff",
            textTransform: "none",
            position: "absolute",
            right: "0px",

          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{width:"100%",position:"relative",p:"20px"}}>
       <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts="true"/>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
