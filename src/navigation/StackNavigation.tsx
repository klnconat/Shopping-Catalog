import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import DetailPage from '../pages/DetailPage';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={BottomTabNavigation} />
      <Stack.Screen name="DetailPage" component={DetailPage} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;