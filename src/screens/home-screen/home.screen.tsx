import React from "react"
import { HomeView } from "./components/home.view"
import { useHomeHooks } from "./home.hooks"

export const HomeScreen = () => {
    const {
        productData
    } = useHomeHooks()

    return <HomeView
        productData={productData}
    />
}