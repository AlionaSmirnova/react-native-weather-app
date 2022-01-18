import React from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
} from 'react-native';

const Form = ({city, setCity, getWeather}) => {
  return (
    <View style={styles.formStyle}>
      <TextInput
        placeholder="Enter the city..."
        value={city}
        name="city"
        style={styles.input}
        onChangeText={inputValue => setCity(inputValue)}
      />
      <Button
        title="Get the weather forecast"
        color="white"
        style={{fontSize: 30}}
        onPress={getWeather}>
        {' '}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 200,
    fontSize: 18,
    padding: 7,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  formStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    height: 50,
    color: 'red',
    fontWeight: '700',
  },
});
export default Form;
