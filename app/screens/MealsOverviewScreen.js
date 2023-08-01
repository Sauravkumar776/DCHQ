import { MEALS, CATEGORIES } from "../data/dummy_data"
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

// we get route navigation prop in any screen that has been registered as a stack screen
// we also have the hook useRoute and useNavigation

const MealsOverviewScreen = () => {

    const route = useRoute();
    const navigation = useNavigation();
    const catId = route.params.categoryId;

    useLayoutEffect( () => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId ).title;
        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId,navigation])

    const mealId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(mealId) >= 0
    })

    const renderMealItem = (itemData) => {
        const mealItemsProp ={
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity,
            duration: itemData.item.duration
        }
        return (
            <MealItem {...mealItemsProp}/>
        )
    }

    return (<View>
        <FlatList data={displayedMeals}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem} />
    </View>)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})

export default MealsOverviewScreen;