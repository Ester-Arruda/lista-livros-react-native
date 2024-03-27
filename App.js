import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BookListPage from './src/screens/BookListPage';
import DetailsBook from './src/components/DetailsBook';
import SignUp from './src/components/SignUp';
import SignIn from './src/components/SignIn';
import RegisterImagePage from './src/screens/RegisterImagePage';
import GalleryPage from './src/screens/GalleryPage';



const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const BookStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BookListPage" component={BookListPage} options={{title: 'Lista de Livros'}}/>
      <Stack.Screen name="DetailsBook" component={DetailsBook} options={{title: 'Detalhes de Livro'}}/>
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="BookStack">
        <Drawer.Screen name="BookStack" component={BookStack} options={{title: 'Lista de Livros'}}/>
        <Drawer.Screen name="SignUp" component={SignUp} options={{title: 'Cadastre-se'}}/>
        <Drawer.Screen name="SignIn" component={SignIn} options={{title: 'Entrar'}}/>
        <Drawer.Screen name="RegisterImagePage" component={RegisterImagePage} options={{title: 'Registrar Imagem'}}/>
        <Drawer.Screen name="GalleryPage" component={GalleryPage} options={{title: 'Galeria'}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
