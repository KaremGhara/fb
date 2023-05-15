import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../fetchDatas/fetchData";

 interface SliceState {
    isLoading: boolean;
    posts:any[],
    status:String,
    error:null
}

const initialState: SliceState = {
    isLoading: false,
    posts: [],
    status: 'idle',
    error: null
}

const ArticleSlice=createSlice({
    name: "articles",
    initialState: initialState,
    extraReducers(builder) {
        builder
        .addCase(fetchPosts.pending,(state,action)=>{
            state.status='loading';
            console.log("maybe loading");
            
            state.isLoading = true
        })
        .addCase(fetchPosts.fulfilled,(state,action)=>{
           state.status="successed";
            
           
           
            state.posts=state.posts.concat(action.payload)
            
            state.isLoading = false
            
            
            
        })
        .addCase(fetchPosts.rejected,(state,action)=>{
            state.status="rejected"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            state.error=action.error.message
        })
    },
    reducers:{
    }
})

export const getPostsStat=(state:SliceState)=> state.status;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore   
export const getAllPosts=(state:SliceState)=>state.posts;


export default ArticleSlice.reducer;
