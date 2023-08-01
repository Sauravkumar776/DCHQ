import { View, Text } from "react-native";

const MealDetails = () => {
    return <View style={styles.details}>
        <Text style={styles.detailItem} >{duration}m</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>

}
export default MealDetails;