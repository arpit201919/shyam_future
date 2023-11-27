import { createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../utils/axios"


const initialState = {
    isLoggedIn: false,
    productList: []
}

export const productListSlice = createSlice({
    name: "productList",
    initialState: initialState,
    reducers: {
        addProductList: (state, action) => {
            state.productList = action.payload
        },
        onLoggedIn: (state) => {
            state.isLoggedIn = true
            console.log("------", state.isLoggedIn);
        },
    }
})

export const {
    addProductList,
    onLoggedIn
} = productListSlice.actions

export const callGetProductListApi = () => async (dispatch) => {
    try {
        const response = await axiosInstance.get("/products")
        dispatch(addProductList(response.data))
    } catch (error) {
        console.log(error);
    }
}

export default productListSlice.reducer