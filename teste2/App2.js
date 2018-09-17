import * as React from 'react';
import {Text, AppRegistry,View, Button} from 'react-native';


const Estilos = {

  principal:{
    marginTop: 80
  },

};

const botaoPressionado = () => {
  alert('botao pressionado')
} 

const {principal} = Estilos;

export default class App extends React.Component {
  render() {

    return (
      <View style={principal}>  
        <Button 
          onPress={botaoPressionado}
          title="clique aqui"
          color="#841584"
          accessibilityLabel="Clique para abrir ..."
        />
      </View>  )
  }
}

AppRegistry.registerComponent('teste2', () => App);
