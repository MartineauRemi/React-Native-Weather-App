import React, {useState} from 'react'
import {StyleSheet, Text, View, Image, Button} from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { getWeatherIcon } from "../API/OpenWeatherAPI"

export default function WeatherItem({data}) {
    if(data.message !== undefined) return (<Text style={styles.text}>{data.message}</Text>)

    const [celsius, setCelsius] = useState(true)

    const city = data.name
    const country = data.sys.country
    const temperature = data.main.temp
    const temp_min = data.main.temp_min
    const temp_max = data.main.temp_max
    const description = data.weather[0].description
    const iconCode = data.weather[0].icon
    
    function kelvinToCelsius(temp){return (parseInt(parseInt(temp) - 273.15))}
    function kelvinToFahrenheit(temp){return parseInt(kelvinToCelsius(temp) * (9/5)) + 32}
    const unit = celsius? "°C" : "°F"
    const currentT = celsius? kelvinToCelsius(temperature) : kelvinToFahrenheit(temperature)
    const minT = celsius? kelvinToCelsius(temp_min) : kelvinToFahrenheit(temp_min)
    const maxT = celsius? kelvinToCelsius(temp_max) : kelvinToFahrenheit(temp_max)
    
    return (
        <TouchableOpacity style={styles.weatherItem}>
                <Text style={styles.location}>{city}, {country}</Text>
                <View style={styles.currentWeather}>
                    <Image source={{uri: getWeatherIcon(iconCode)}} style={styles.image} />
                    <Text style={styles.currentTemp}>{currentT + unit}</Text>
                </View>
                <View style={styles.details}>
                    <View style={styles.minMax}>
                        <View style={styles.min}>
                            <Text style={styles.text}>Min</Text>
                            <Text style={styles.temp}>{minT + unit}</Text>
                        </View>
                        <View style={styles.max}>
                            <Text style={styles.text}>Max</Text>
                            <Text style={styles.temp}>{maxT + unit}</Text>
                        </View>
                    </View>
                    <Text style={styles.text}>{description}</Text>
                </View>
                <Button onPress={() => {setCelsius(!celsius)}} title={celsius? "°F" : "°C"}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    weatherItem: {
        backgroundColor: "rgba(51,51,51,0.6)",
        height: 500,
        justifyContent: "space-around",
        alignItems: "center",
        margin: 20
    },
    location:{
        color:"white",
        fontSize: 30,
        fontWeight: "bold",
        letterSpacing: 2,
        textAlign: "center"
    },
    currentWeather: {
        flexDirection: "row",

    },
    currentTemp:{
        color:"white",
        fontSize: 50,
        fontWeight: "bold",
        padding: 20,
        alignSelf: "center"
    },
    temp:{
        color:"white",
        fontSize: 20,
        fontWeight: "bold",
    },
    minMax:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: 300,
        padding: 10,
    },
    min:{
        backgroundColor: "rgba(31,128,222, 1)",
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 20,
        paddingBottom: 20,
    },
    max:{
        backgroundColor: "rgba(222,125,21, 1)",
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 20,
        paddingBottom: 20,
    },
    text: {
        color:"white",
        fontSize: 18,
        textAlign: "center"
    },
    image:{
        width: 150,
        height: 150
    }
})
