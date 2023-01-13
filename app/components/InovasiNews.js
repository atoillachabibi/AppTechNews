import React from 'react';
import { StyleSheet, View } from 'react-native';
import HorizontalList from './HorizontalList';

const InovasiNews = ({ data }) => {
  return <HorizontalList title='Inovasi News' data={data} />;
};

export default InovasiNews;
