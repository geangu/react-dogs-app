import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const BreedItem = ({item, onItemPress}) => {
  const [image, setImage] = useState();
  useEffect(() => {
    const getImage = async () => {
      const response = await fetch(
        `https://dog.ceo/api/breed/${item}/images/random`,
      );
      const {status, message} = await response.json();
      if (status !== 'error') {
        setImage(message);
      }
    };
    getImage();
  }, [item]);

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => onItemPress(item, image)}>
      {image ? (
        <Image
          style={styles.photo}
          source={{uri: image, cache: 'force-cache'}}
        />
      ) : (
        <ActivityIndicator size={'large'} />
      )}
      <Text style={styles.text}>{item}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {},
  button: {
    alignItems: 'center',
    borderColor: 'lightgray',
    borderRadius: 10,
    borderWidth: 1,
    margin: 4,
    padding: 16,
    width: Dimensions.get('screen').width / 2 - 8,
  },
  photo: {
    width: 120,
    height: 120,
    alignContent: 'center',
    backgroundColor: 'darkgray',
    marginBottom: 8,
    borderRadius: 4,
  },
  text: {
    fontSize: 18,
  },
});

export default BreedItem;
