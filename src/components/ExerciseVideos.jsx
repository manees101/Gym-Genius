import React from "react";
import { Box, Typography, Stack } from "@mui/material";
const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box mt="70px">
      <Typography variant="h4" fontWeight="bold" mb="50px">
        Watch{" "}
        <span style={{ color: "red", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" },
          flexWrap: "wrap",
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item) => (
          <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="blank"
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "387px",
              height: "381px",
            }}
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Typography variant="h5">{item.video.title}</Typography>
            <Typography variant="h6">{item.video.author.title}</Typography>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
