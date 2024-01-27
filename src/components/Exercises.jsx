import React, { useState, useEffect } from "react";
import { fetchData, fetchBodyPartExercises } from "../utils/fetchData";
import { Box, Typography, Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import ExerciseCard from "./ExerciseCard";
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastExercise = currentPage * 9;
  const indexOfFirstExercise = indexOfLastExercise - 9;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ behavior: "smooth", top: 1800 });
  };
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData();
      } else {
        exercisesData = await fetchBodyPartExercises({ bodyPart });
      }

      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);
  return (
    <Box id="exercises" mt="50px" p="20px" sx={{ mt: { lg: "110px" } }}>
      <Typography mb="46px" variant="h3">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            count={Math.ceil(exercises.length / 9)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
