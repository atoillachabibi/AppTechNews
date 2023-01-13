import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

const NewsList = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.CategoryTitle}>Kategori</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#4e4d4d'
    },
    CategoryTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white'
    }
})

export default NewsList;
