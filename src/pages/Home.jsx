import React, { useState } from "react";
import { Box } from "@mui/material";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import HeroBanner from "../components/HeroBanner";
const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
      />
      <Exercises 
      exercises={exercises}
      setExercises={setExercises}
      bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
