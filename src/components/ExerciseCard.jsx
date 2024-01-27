import React from "react";
import { Link } from "react-router-dom";
import { Typography, Stack, Button } from "@mui/material";
const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
            {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
            {exercise.target}
        </Button>
      
      </Stack>
      <Typography fontSize="20px" pb="10px" ml="21px" color="#000" fontWeight="bold" mt="11px" textTransform="capitalize">
            {exercise.name}
        </Typography>
    </Link>
  );
};

export default ExerciseCard;
