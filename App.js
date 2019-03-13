import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Button from './src/container/button';
import { getNewShuffle } from './src/helpers/asyncActions'

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.id = '';
  }

  componentDidMount(){
    getNewShuffle()
    .then(id => console.log(id))
  }

  onUpPressed () => {

  }

  onDownPressed () => {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 314, height: 226}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          resizeMode = 'contain'
        />
      <Button
        text='Up'
        onPress={()=>console.log('On press')}
      />
      <Button
        text='Down'
        onPress={()=>console.log('On press')}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
