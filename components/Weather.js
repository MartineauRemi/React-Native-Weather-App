import React from 'react'
import { SafeAreaView, View, TextInput, StyleSheet, Text, ImageBackground } from 'react-native'
import { useState } from 'react'
import { getWeatherFromCityName } from "../API/OpenWeatherAPI"
import WeatherItem from "./WeatherItem"

var search = ""

export default function Weather() {
    const [inputValue, setInputValue] = useState("")
    const [weatherItem, setWeatherItem] = useState()

    function handleSubmit(e){
        e.preventDefault()
        search = inputValue
        getWeatherFromCityName(search)
            .then(data => setWeatherItem(<WeatherItem data={data}/>))
            .catch(error => console.error(error))
    }
    return (
        <SafeAreaView style={styles.mainContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Entrez votre location"
                    onChangeText={(value) => setInputValue(value)}
                    onSubmitEditing={handleSubmit}/>  
                <View style={styles.weatherItemsContainer}>
                    {weatherItem}
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        marginTop: 1,
        backgroundColor: "#222",
        flex: 1,
    },
    textInput: {
      margin: 1,
      height: 50,
      borderColor: '#111',
      backgroundColor: "#555",
      borderRadius: 3,
      color: "white",
      paddingLeft: 10,
      borderRadius: 50,
      margin: 20
    },
    weatherItemsContainer: {
        flex: 1,
        justifyContent: "center"
    },
});
