// To use React-native navigation
// npm install @react-navigation/native
// npm expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/native-stack

import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens import
import SplashScreen from "../../screens/SplashScreen";
import Home from "../../screens/Home";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 4000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*  */}
        {showSplashScreen ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }} // header show nhi karega
          />
        ) : null}

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



// For Bottom Tabs navigator
// npm install @react-navigation/bottom-tabs

// For Icons we will use => react-native-vector-icons npm package
// npm add react-native-vector-icons
// npx react-native link react-native-vector-icons

// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import { Ionicons } from "react-native-vector-icons/Ionicons";

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: () => <Ionicons name="home"/>}}/>
//         <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: (data) => console.log(data)}}/>
//         <Tab.Screen name="Splash" component={SplashScreen} options={{ tabBarIcon: () => <BottomTconsContainer name="splash"/>}}/>
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

const BottomTconsContainer = (props) => {
    return <Ionicons name={props.name}/>
}

