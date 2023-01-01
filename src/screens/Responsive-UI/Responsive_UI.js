// Responsive UI In React Native | All About Flex Box In Style | React Native

import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions} from 'react-native';

export default function ResponsiveUI() {
  const [isRotate, setIsRotate] = useState(false);

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
        // console.log("height =",height);
        // console.log("width =",width) ;

      const orientation = isPotrait();
        // console.log(orientation); // l or p
      setIsRotate(orientation);
    }); 

    return () => {};
  }, []);

  const isPotrait = () => {
    const {height, width} = Dimensions.get('screen');

    // return height > width ? "P" : "L";
    return height > width ? false : true;
  };

//   console.log(isRotate); // true or false show karega 

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        flex: 1,
        flexDirection: isRotate ? 'row' : 'column',
      }}>
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Hello</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: 'yellow',
        }}>
        <Text>World</Text>
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'green',
        }}>
        <Text>World</Text>
      </View>
    </View>
  );
}