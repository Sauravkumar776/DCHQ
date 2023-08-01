import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy_data";
import CategoryGridTile from "../components/CategoryGridTile";
import { useNavigation } from "@react-navigation/native";




const CategoriesScreen = () => {

    const navigation = useNavigation();
    const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
        navigation.navigate("MealsOverview", {
            categoryId: itemData.item.id
        })
    }
    console.log("this is the render category item")
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
}

    return <FlatList data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
    />
}

export default CategoriesScreen;