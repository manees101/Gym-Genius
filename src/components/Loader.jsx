import React from "react";
import { Stack } from "@mui/material";
import { InfinitySpin } from "react-loader-spinner";
const Loader = () => {
  return (
    <Stack alignItems="center" justifyContent="center" width="100%">
      <InfinitySpin color="gray" />
    </Stack>
  );
};

export default Loader;
