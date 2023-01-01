import React from 'react';
import { TextInputComponent, View } from 'react-native';
import AsyncStorage from './src/screens/AsyncStorage_localstorage/AsyncStorage';
import JsonData from './src/screens/AsyncStorage_localstorage/Store_Array_Or_JsonData';
import TextInputWithIcon from './src/screens/Customize_TextInput_With_Icon/TextInputWithIcon';
import ResponsiveUI from './src/screens/Responsive-UI/Responsive_UI';

// import StackNavigator from './src/navigation/StackNavigator/StackNavigator';

// function App() {
//   return <StackNavigator />;
// }

function App(){
  return (
    <View>
      <AsyncStorage/>
      <JsonData/>
      <ResponsiveUI/>
      <TextInputWithIcon/>
    </View>
  )
}


export default App;