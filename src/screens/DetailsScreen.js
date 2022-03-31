import {View, Text, Image} from 'react-native';
import React from 'react';

const DetailsScreen = ({route}) => {
  const {name, image} = route.params;

  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          width: '100%',
          textAlign: 'center',
          paddingTop: 16,
        }}>
        {name}
      </Text>
      <Image
        source={{uri: image}}
        style={{
          height: 300,
          width: 300,
          alignSelf: 'center',
          margin: 16,
          borderRadius: 10,
        }}
      />
    </View>
  );
};

export default DetailsScreen;
