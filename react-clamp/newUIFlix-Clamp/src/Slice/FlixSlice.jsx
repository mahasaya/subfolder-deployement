import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    distributor:"",
    language:"",
    product_mpn:"",
    product_ean:"",
    product_brand:"",
}

const FlixSlice = createSlice({
    name:"flixParams",
    initialState:initialState,
    reducers:{
        setDistributor(state,value){
            state.distributor=value.payload
        },
        setLanguage(state,value){
            state.language=value.payload
        },
        setProduct_mpn(state,value){
            state.product_mpn=value.payload
        },
        setProduct_ean(state,value){
            state.product_ean=value.payload
        },
        setProduct_brand(state,value){
            state.product_brand=value.payload
        }
    }
})

export const {setDistributor,setLanguage,setProduct_brand,setProduct_ean,setProduct_mpn,setGlobal_variable} = FlixSlice.actions;
export default FlixSlice.reducer