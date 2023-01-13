import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import BlockCard from './BlockCard'
import ViewMore from './ViewMore';

const {width} = Dimensions.get('window')

const SmallCard = ({ item }) => {
  if (item.type === 'viewMore'){
    return <ViewMore style={styles.ViewMore}/>
  }

  return (
  <BlockCard item={item} style={styles.container} imageStyle={styles.image} />
  );
};

const styles = StyleSheet.create({
    container: {
        width: width / 2,
        marginRight: 15,
        height: 200,
    },

    image: {
        height: 100,
    },
    ViewMore:{
        width: width / 2,
        height: 200,
    }
});

export default SmallCard;
