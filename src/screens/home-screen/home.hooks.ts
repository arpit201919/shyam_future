import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetProductListApi } from "../../store/slice";

interface homeHookProps {
    productData: any[]
}

export const useHomeHooks = (): homeHookProps => {
    const [productData, setProductData] = useState([])
    const isFocused = useIsFocused()
    const dispatch = useDispatch<any>()
    const productStore = useSelector((store: any) => store.productList)
    const { productList } = productStore

    console.log("====", productList);


    useEffect(() => {
        if (isFocused) {
            getProducts()
        }
    }, [isFocused])

    useEffect(() => {
        if (productList) {
            setProductData(productList)
        }

    }, [productList])

    const getProducts = () => {
        dispatch(callGetProductListApi())
    }

    return {
        productData
    }

}