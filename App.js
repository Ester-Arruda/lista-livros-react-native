import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BookListPage from './src/screens/BookListPage';
import DetailsBook from './src/components/DetailsBook';
import SignUp from './src/components/SignUp';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const BookStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BookListPage" component={BookListPage} />
      <Stack.Screen name="DetailsBook" component={DetailsBook} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="BookStack">
        <Drawer.Screen name="BookStack" component={BookStack} />
        <Drawer.Screen name="SignUp" component={SignUp} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
