import * as React from 'react';
import {Text, StyleSheet, AppRegistry,View, Text, Button} from 'react-native';




class App3 extends Component {
  
  constructor(props){
    super(props);

    this.state = {escolhaUser :'' , escolhaCom : '',
                      resultado : ''  };
  }

  jokenpo(escolhaUser){
    var numRandom = Math.floor(Math.random() *3);
    var escolhaCom = '';

    Switch(numRandom){
      case 0:escolhaCom = 'pedra'; break;
      case 1:escolhaCom = 'papel'; break;
      case 2:escolhaCom = 'tesoura'; break;
    }

    var resultado = '';

    if(escolhaComputador == 'pedra'){
      if(escolhaUsuario == 'pedra'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'papel'){
        resultado = 'Usuário ganhou';
      }

      if(escolhaUsuario == 'tesoura'){
        resultado = 'Computador ganhou';
      }
    }

    if(escolhaComputador == 'papel'){
      if(escolhaUsuario == 'papel'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'tesoura'){
        resultado = 'Usuário ganhou';
      }

      if(escolhaUsuario == 'pedra'){
        resultado = 'Computador ganhou';
      }
    }

    if(escolhaComputador == 'tesoura'){
      if(escolhaUsuario == 'tesoura'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'pedra'){
        resultado = 'Usuário ganhou';
      }

      if(escolhaUsuario == 'papel'){
        resultado = 'Computador ganhou';
      }
    }

    this.setState({ escolhaUser : escolhaUser,
                    escolhaCom : escolhaCom })
  }
  render() {
    return (
      <View>
        <Text>Escolha do com</Text>
        <Text>Escolha do user</Text>
        <Text>resultado</Text>
        <Button title="pedra" onPress={() => {this.jokenpo('pedra')}} />
        <Button title="papel" onPress={() => {this.jokenpo('papel')}} />
        <Button title="tesoura" onPress={() => {this.jokenpo('tesoura')}} />
      </View>
    );
  }
}

AppRegistry.registerComponent('teste3', () => App3);
