import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Alert} from 'react-native';
import Button from './src/container/button';
import { getNewShuffle } from './src/helpers/asyncActions'
import { whoWin } from './src/helpers/getCardValue';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.id = '';
    this.state = {
      cards:[],
      isShowSecondCard:false,
    }
  }

  componentDidMount(){
    getNewShuffle()
    .then(cards => this.setState({cards: cards.cards}));
  }

  onUpPressed = () => {
    const result = whoWin(this.state.cards, 'Up')
    this.setState({isShowSecondCard: true})
    setTimeout(()=> this.createAlert(result), 1000)
  }

  onDownPressed = () => {
    const result = whoWin(this.state.cards, 'Down')
    this.setState({isShowSecondCard: true})
    setTimeout(()=> this.createAlert(result), 1000)
  }
  
  onOkPress = () => {
    console.log('No Pressed')
  }

  createAlert = result => 
     Alert.alert(
      result,
      'Do you want to play another game?',
      [
        {text: 'Yes', onPress: this.onOkPress},
        {text: 'No', onPress: () => console.log('No Pressed')},
      ],
      {cancelable: false},
    );

  render() {
    const { cards, isShowSecondCard } = this.state
    const imageUrl = isShowSecondCard ? { uri: cards[1].image } : require('./Assets/card-back.jpg')
    return (
      <View style={styles.container}>
      {cards.length>0 &&
        <View>
              <Image
                style={{width: 314, height: 226}}
                source={{uri: cards[0].image}}
                resizeMode = 'contain'
              />
              <Image
                style={{width: 314, height: 226}}
                source={imageUrl}
                resizeMode = 'contain'
              />
        </View>
      }
              
      <Button
        text='Up'
        onPress={this.onUpPressed}
      />
      <Button
        text='Down'
        onPress={this.onDownPressed}
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
