import React, { useCallback } from "react";
import { View, Text, FlatList, Image } from "react-native"
import { styles } from "./home.styles";

interface homeProps {
    productData: any[]
}

export const HomeView = (props: homeProps) => {
    const { productData } = props

    const renderItem = useCallback(({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Image
                    resizeMode={"contain"}
                    style={styles.imageStyle}
                    source={{ uri: item.image }} />
                <View
                    style={styles.detailCont}>
                    <Text numberOfLines={1} style={styles.titleText} >{item.title}</Text>
                    <Text numberOfLines={3} style={styles.descText} >{item.description}</Text>
                    <View style={styles.row}>
                        <Text style={styles.descText}>Price:</Text>
                        <Text style={styles.priceText}>{` ₹${item.price}`}</Text>
                    </View>
                </View>
            </View>
        )
    }, [productData])

    return (
        <View style={styles.container}>
            <FlatList
                data={productData}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItem}
                maxToRenderPerBatch={10}
                onEndReachedThreshold={1}
                removeClippedSubviews={true}
                extraData={productData}
            />
        </View>
    )
}