import * as React from 'react';
import {Text, AppRegistry,View} from 'react-native';


const Estilos = {

  principal:{
    backgroundColor: 'pink',
    flex: 1


  },

  topo:{
    flex: 2,
    //fontSize: 30,
    backgroundColor: '#08509B',
    //height: 300,
    //width: 300,
    //color: '#fff',
    //fontWeight: '900',
    //padding: 30, //aplicado dentro do elemento(fundo azul)
                //define espascamento interno
    //margin: 30, //aplicado fora do fundo azul
                //define espacamento externo
    //shadowColor: '#000'
  },
  conteudo:{
    flex: 8,
    //fontSize: 30,
    backgroundColor: 'red',
    //height: 300,
    //width: 300,
    //color: '#fff',
    //fontWeight: '900',
   // padding: 30, //aplicado dentro do elemento(fundo azul)
                //define espascamento interno
   // margin: 30, //aplicado fora do fundo azul
                //define espacamento externo
   // shadowColor: '#000'
  },

  rodape: {
    flex: 1,
    backgroundColor: 'skyblue',
    //height: 300,
    //justifyContent: 'flex-end',//center //flex-start //alinha na vertival
    //alignItems: 'flex-end', //center /flex-start//alinha na horizontal
    //flexDirection:"column"
  },

};

const {principal,topo, conteudo, rodape} = Estilos

export default class App extends React.Component {
  render() {

    return (
      <View style={principal}>  
        <Text style={topo}>topo</Text>
        <Text style={conteudo}>conteudo</Text>
        <Text style={rodape}>rodape</Text>
      </View>  )
  }
}

AppRegistry.registerComponent('teste2', () => App);
