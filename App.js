
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import ListScreen from './src/components/ListScreen';
import FormScreen from './src/components/FormScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {



  
  const Tab = createBottomTabNavigator();
  return (
  
     <NavigationContainer>
     <Tab.Navigator>
     
      <Tab.Screen name="List" component={ListScreen}  />
      <Tab.Screen name="Form" component={FormScreen} />
    </Tab.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
