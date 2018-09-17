import * as React from 'react';
import {Text, AppRegistry,View, Text, Button} from 'react-native';



class MeuComponente extends Component{
  render(){
    <View>
      //<Text>{this.props.propriedade1}</Text>
      <Text>{this.props.teste}</Text>

    </View>
  }
}

class App3 extends Component {
  
  constructor(props){
    super(props);

    this.state = {texto :'texto teste'};
  }

  alteraTexto(){
    this.setState({texto: 'Outra coisa'});
  }

  render() {
    return (
      <View>
        <MeuComponente teste={this.state.texto} propriedade1='Banana'></MeuComponente>
        <Button 
          title='butao'
          onPress={() => {this.alteraTexto()}}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('teste3', () => App3);
