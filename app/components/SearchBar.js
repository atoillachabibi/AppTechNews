import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.SearchInput} placeholder='Cari berita...' />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
    },
    SearchInput: {
        width: '100%',
        height: '100%',
        paddingLeft: 8,
        fontSize: 16
    }
})

export default SearchBar;