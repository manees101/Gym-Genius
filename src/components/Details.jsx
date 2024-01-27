import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImg from "../assets/icons/body-part.png";
import equipmentImg from "../assets/icons/equipment.png";
import targetImg from "../assets/icons/target.png";
const Details = ({ exerciseDetails }) => {
  const { name, target, gifUrl, instructions, equipment, bodyPart } =
    exerciseDetails;
  const exerciseObj = [
    {
      icon: BodyPartImg,
      name: bodyPart,
    },
    {
      icon: targetImg,
      name: target,
    },
    {
      icon: equipmentImg,
      name: equipment,
    },
  ];
  return (
    <Stack gap="30px">
      <Stack
        direction={{ lg: "row" }}
        p={20}
        alignItems="center"
        justifyContent="space-around"
        gap="60px"
      >
        <img
          src={gifUrl}
          alt={name}
          style={{ width: "400px", height: "500px" }}
        />
        <Stack gap={{ lg: "35px", xs: "20x" }}>
          <Typography variant="h3" fontWeight="bold" mb="20px">
            {name}
          </Typography>
          <Typography>
            Exercises keep you strong. {name} is
            <br />
            one of the best exercises for your {target}.
            <br />
            It will help you improve your mood and gain energy.
          </Typography>
          {exerciseObj?.map((item) => (
            <Stack
              key={item.name}
              direction="row"
              alignItems="center"
              gap="24px"
            >
              <Button
                sx={{
                  background: "#fff2db",
                  borderRadius: "50%",
                  width: "80px",
                  height: "80px",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{ width: "50px", height: "50px" }}
                />
              </Button>

              <Typography variant="h5" textTransform="capitalize">
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack gap="30px">
        <Typography variant="h5" fontWeight="bold">
          Instructions:
        </Typography>
        {instructions?.map((item, index) => (
          <Typography variant="h6">
            {index + 1}. {item}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
};

export default Details;
