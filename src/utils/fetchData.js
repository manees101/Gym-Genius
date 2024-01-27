import axios from "axios";
//API's used
//1. YouTube Data
//2. ExerciseDB
const options = {
  method: "GET",
  params: { limit: "500" },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_EXERCISEDB_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
let videoAPIOptions={
  method: 'GET',
  url: 'https://youtube-data8.p.rapidapi.com/search/',
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_YT_API_KEY,
    'X-RapidAPI-Host': 'youtube-data8.p.rapidapi.com'
  }
}
export const fetchData = async () => {
  try {
    const response = await axios.request(
      "https://exercisedb.p.rapidapi.com/exercises",
      options
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const fetchBodyPartData = async () => {
  try {
    const response = await axios.request(
      "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
      options
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchBodyPartExercises=async({bodyPart})=>{
  try {
    const response = await axios.request(
      `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
      options
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export const fetchExerciseDetails=async({id})=>{
  try {
    const response = await axios.request(
      `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
      options
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export const fetchTargetMuscelExercises=async({target})=>{
  try {

    const response = await axios.request(
      `https://exercisedb.p.rapidapi.com/exercises/target/${target}`,
      options
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export const fetchEquipmentExercises=async({equipment})=>{
  try {

    const response = await axios.request(
      `https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`,
      options
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export const fetchExerciseVideos=async({searchTerm})=>{
  try {

    videoAPIOptions.params.q=`${searchTerm} exercise`
    const response = await axios.request(
      videoAPIOptions
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}