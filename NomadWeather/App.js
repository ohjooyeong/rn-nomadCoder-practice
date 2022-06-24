import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.city}>
                <Text style={styles.cityName}>Seoul</Text>
            </View>
            <ScrollView
                contentContainerStyle={styles.weather}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.day}>
                    <Text style={styles.temp}>24</Text>
                    <Text style={styles.desc}>Sunny</Text>
                </View>
                <View style={styles.day}>
                    <Text style={styles.temp}>24</Text>
                    <Text style={styles.desc}>Sunny</Text>
                </View>
                <View style={styles.day}>
                    <Text style={styles.temp}>24</Text>
                    <Text style={styles.desc}>Sunny</Text>
                </View>
                <View style={styles.day}>
                    <Text style={styles.temp}>24</Text>
                    <Text style={styles.desc}>Sunny</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "tomato",
    },
    city: {
        flex: 1.2,
        justifyContent: "center",
        alignItems: "center",
    },
    cityName: {
        color: "black",
        fontSize: 58,
    },
    weather: {},
    day: {
        width: SCREEN_WIDTH,
        alignItems: "center",
    },
    temp: {
        marginTop: 50,
        fontSize: 178,
    },
    desc: { fontSize: 60, marginTop: -30 },
});
