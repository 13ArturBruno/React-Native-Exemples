import * as React from 'react';
import { Text, View, StyleSheet,AppRegistry, Button } from 'react-native';
import { Constants } from 'expo';
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.19.1

const geraNumRandom = () => {
  var num_random = Math.random();
  num_random = Math.floor(num_random * 10)
  alert(num_random);

}

export default class App extends React.Component {
  render() {
    return 
      <View>
        <Text>Gerador de numeros randomicos</Text>
        <Button title="gerar um numero random" onPress={geraNumRandom}/>
      </View>
  }
}