import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Weather from "../components/Weather"


const WeatherStack = createStackNavigator()
function weatherScreen(){
    return (
        <Weather/>
    )
}
export default function Navigation() {
    return (
        <NavigationContainer>
            <WeatherStack.Navigator>
                <WeatherStack.Screen name="weather" component={weatherScreen}/>
            </WeatherStack.Navigator>
        </NavigationContainer>
    )
}
