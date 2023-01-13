import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import useNews from './app/components/hooks/useNews';
import BreakingNews from './app/components/BreakingNews';
import FeaturedNews from './app/components/FeaturedNews';
import HardwareNews from './app/components/SoftwareNews';
import SoftwareNews from './app/components/HardwareNews';
import InovasiNews from './app/components/InovasiNews';
import Screen from './app/components/Screen';
import SearchBar from './app/components/SearchBar';
import BlockCard from './app/components/BlockCard';
import SmallCard from './app/components/SmallCard';
import FlatCard from './app/components/FlatCard';
import data from './fakeData';
import NewsDetail from './app/components/NewsDetail';
import NewsList from './app/components/NewsList';

export default function App() {
  const breakingNews = data.filter(item => item.category === 'breaking-news');
  const hardwareNews = data.filter(item => item.category === 'hardware');
  const softwareNews = data.filter(item => item.category === 'software');
  const inovasiNews = data.filter(item => item.category === 'inovasi');
  // const [
  //   featuredNews, 
  //   hardwareNews, 
  //   softwareNews, 
  //   inovasiNews, 
  //   breakingNews,
  // ] = useNews()

  return (
    <Screen>
      <SearchBar />
      {/* <FeaturedNews item={featuredNews}/> */}
      <FeaturedNews 
      item={{
        id: "10",
      title: "This is the title no ten.",
      desc:
        "Desc is the short form of description and this format is the actual same as our real database.",
      thumbnail: "http://lorempixel.com/400/200/",
      }}/>
      <BreakingNews data={breakingNews}/>
      <HardwareNews data={hardwareNews}/>
      <SoftwareNews data={softwareNews}/>
      <InovasiNews data={inovasiNews}/>
    </Screen>
  );
  return <NewsList />
}
