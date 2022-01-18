/**
 *
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import Form from './Form';

import {
  //  SafeAreaView,
  ScrollView,
  //  StatusBar,
  Image,
  TextInput,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ScrollViewCommands from 'react-native/Libraries/Components/ScrollView/ScrollViewCommands';

const API_KEY = 'ec3159b732099c2cf636d256d456a848';

const App = () => {
  const [data, setData] = useState({});
  const [city, setCity] = useState('');

  getWeather = async () => {
    console.log(city);
    const api_url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
    );
    const weather = await api_url.json();
    // console.log(weather);
    setData(weather);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 100,
        backgroundColor: `darkorange`,
      }}>
      <Image source={require('./Weather.png')} style={styles.img} />
      <Text
        style={{
          color: 'red',
          fontWeight: '700',
          fontSize: 35,
          marginBottom: 20,
        }}>
        The Weather App
      </Text>
      <Form getWeather={getWeather} city={city} setCity={setCity} />
      <View style={styles.weather}>
        <Text style={styles.forecast}>
          Temperature: {data && data.main && data.main.temp.toFixed(0)} °C{' '}
          {'\n'}
          {/* {console.log(data && data.main  && data.main.temp)} */}
          Speed of wind: {data &&
            data.wind &&
            data.wind.speed.toFixed(1)} m/s {'\n'}
          Humidity: {data && data.main && data.main.humidity}%
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    paddingTop: 20,
    width: 180,
    height: 120,
    resizeMode: 'center',
  },
  forecast: {
    marginTop: 30,
    fontSize: 23,
    lineHeight: 30,
    fontWeight: '500',
    color: 'blue',
  },
  weather: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
