import { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
    const [city, setCity] = useState("Loading...");
    const [location, setLocation] = useState(null);
    const [ok, setOk] = useState(true);

    const ask = async () => {
        const { granted } = await Location.requestForegroundPermissionsAsync();
        if (!granted) {
            setOk(false);
        }
        const {
            coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync({
            accuracy: 5,
        });
        const location = await Location.reverseGeocodeAsync(
            { latitude, longitude },
            { useGoogleMaps: false }
        );
        setCity(location[0].region);
    };

    useEffect(() => {
        ask();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.city}>
                <Text style={styles.cityName}>{city}</Text>
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
        fontSize: 53,
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
