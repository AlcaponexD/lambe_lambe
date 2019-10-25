import React, {Component} from 'react';
import Header  from './src/components/Header';
import { View , Text} from 'react-native';
import Post from './src/components/Post';


export default class App extends Component{
  render() {

    const comments = [
    {
        nickname:'Joao silva',
        comment:'Excelente'
    },
    {
        nickname:'Joao silva',
        comment:'ruim'
     },
    {
        nickname:'Joaaaao silva',
        comment:'Excelokente'
     }
  ]
    return(
      <View style={{flex:1}}>
          <Header />
          <Post image={require('./assets/imgs/fence.jpg')} comments={comments}></Post>
      </View>
    )
  }
}