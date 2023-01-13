import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Dimensions } from 'react-native'

const {width, height} = Dimensions.get('window')

const NewsDetail = () => {
  return (
    <ScrollView style={styles.container}>
        <Image style={styles.image} source={require('../../assets/test.jpg')} /> 
        <View style={styles.contentContainer}>
            <Text style={styles.title}>Ini Judul</Text>
            <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{},
    image:{
        width: width,
        height: height / 3
    },
    contentContainer:{
        padding: 10
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content:{
        fontSize: 16,
        color: '#4e4d4d'
    }
});

export default NewsDetail;
