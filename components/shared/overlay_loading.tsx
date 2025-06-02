import { ActivityIndicator,Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const {width,height} = Dimensions.get('screen');

export default function OverlayLoading() {
    return (
        <View style={styles.overLayBackground}>
            <ActivityIndicator size={'large'} color={'#fff'} />
            <Text style={styles.text}>Loading...</Text>
        </View>
  )
}

const styles = StyleSheet.create({
    overLayBackground:{
        zIndex:30,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:0,
        left:0,
        height,
        width,
        backgroundColor:'rgba(0,0,0,.8)',
    },
    text:{
        color:'#fff',
        fontSize:20,
    },
})