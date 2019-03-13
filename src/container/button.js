import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textButton: {
    fontSize: 18, 
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15,
  },
  buttonContainer: {
    marginTop: 30,
    borderRadius: 7,
    width: '85%',
    alignSelf: 'center',
  },
  typeDefaultContainer: {
    backgroundColor: '#FFFFFF',
  },
  typeDefaultText: {
    color: 'red',
  },
  typeDarkContainer: {
    backgroundColor: '#6C6C6C',
  },
  typeDarkText: {
    color: '#FFFFFF',
  },
});

const Button = ({
  text,
  onPress,
  textStyle,
  buttonContainerStyle,
  type = 'Default',

}) => (
  <TouchableOpacity
    style={[
      styles.buttonContainer,
      buttonContainerStyle,
      styles[`type${type}Container`],

    ]}
    onPress={onPress}
  >
    <Text style={[
      styles.textButton,
      textStyle,
      styles[`type${type}Text`],

    ]}
    > {text}
    </Text>
  </TouchableOpacity>
);

export default Button;
