import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import DogService from '../api/dogsApi';
import BreedItem from './BreedItem';

const BreedList = ({onItemPress}) => {
  const [breeds, setBreeds] = useState([]);
  useEffect(() => {
    const getInfo = async () => {
      const result = await DogService.getAllBreeds();
      setBreeds(result);
    };
    getInfo();
  }, []);

  return (
    <FlatList
      numColumns={2}
      data={breeds}
      renderItem={({item}) => (
        <BreedItem item={item} onItemPress={onItemPress} />
      )}
    />
  );
};

export default BreedList;
