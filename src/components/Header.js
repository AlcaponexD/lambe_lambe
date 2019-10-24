import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image

} from 'react-native'
import icon from '../../assets/imgs/icon.png'
import * as Font from 'expo-font';

export default class Header extends Component{
    constructor(){
        super();
        this.state = {
            fontLoaded:false
        };
    }

    async componentDidMount(){
        await Font.loadAsync({
            'shelter': require('../../assets/fonts/shelter.otf')
        })
        this.setState({
            fontLoaded:true
        })
    }


    render(){
        return(
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.Image} />
                    {this.state.fontLoaded ? (
                        <Text style={styles.title}>Lambe Lambe</Text>
                    ):(
                        <Text>Não deu</Text>
                    )}
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        padding:10,
        borderBottomWidth:1,
        borderColor:'#BBB'
    },
    rowContainer:{
        flexDirection:'row',
        alignItems: 'center'
    },
    Image:{
        height:30,
        width:30,
        resizeMode:"contain"
    },
    title:{
        color:'#000',
        fontFamily:'shelter',
        height:30,
        fontSize:28
    }

})