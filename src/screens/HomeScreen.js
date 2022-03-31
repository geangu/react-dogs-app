import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import BreedList from '../components/BreedList';
import TopBar from '../components/TopBar';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar />
      <TopBar />
      <BreedList
        onItemPress={(item, image) =>
          navigation.navigate('Details', {name: item, image})
        }
      />
    </>
  );
};

export default HomeScreen;
