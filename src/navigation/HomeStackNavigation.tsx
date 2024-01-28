import { createStackNavigator } from '@react-navigation/stack';

import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';

const Stack = createStackNavigator();

function HomeStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
}

export default HomeStackNavigation;