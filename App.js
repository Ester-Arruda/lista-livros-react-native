import BookListPage from './src/screens/BookListPage';
import DetailsBook from './src/components/DetailsBook';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BookListPage" component={BookListPage}/>
        <Stack.Screen name="DetailsBook" component={DetailsBook} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}