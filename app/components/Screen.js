import React from 'react';
import { StyleSheet, ScrollView, StatusBar } from 'react-native';


const Screen = ({ children }) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};

const styles  = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f7f3f3', 
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15
    },
});

export default Screen;
