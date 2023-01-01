import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import React from 'react';

export default function ToastMessage() {
  const showToastMsg = () => {
    try {
      // ToastAndroid.show('Hello World', ToastAndroid.LONG);
      
      // ToastAndroid.showWithGravity(
      //   'Hello world',
      //   ToastAndroid.LONG,
      //   ToastAndroid.TOP,
      // );
      
      ToastAndroid.showWithGravityAndOffset(
        'Hello World',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        100, // x-Axis
        100, // y-Axis
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => showToastMsg()}
        style={{
          backgroundColor: 'red',
          width: '80%',
          alignItems: 'center',
          padding: 10,
          borderRadius: 20,
        }}>
        <Text style={{color: '#fff'}}>Show Toast Msg</Text>
      </TouchableOpacity>
    </View>
  );
}