

import * as React from 'react';
import { Text, View, StyleSheet,AppRegistry, Button } from 'react-native';

import Itens from './Itens'

export default class ListaItens extends Component {
  
  /*constructor(props){
    super(props);

    console.log('contruindo a aplicacao')

  }

  componentWillMount(){
    console.log('fzr alguma coisa antes da render')
  }

  componentDidMount(){
    console.log('fzr alguma coisa dps da render)

  }*/

  render() {
    return (
        //console.log('objeto e renderizado)
        <View>
          <Itens />
          <Itens />
          <Itens />
        </View>
      )
      
  }
}



