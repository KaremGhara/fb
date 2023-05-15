import { createAsyncThunk, isRejected } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk('posts/fetchPosts',
async () => {
const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=b218fcd70b0f41d3b0ec60ef300e3eb1')
return response.data;

});