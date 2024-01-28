import { createStackNavigator } from '@react-navigation/stack';

import DetailPage from '../pages/DetailPage';

const Stack = createStackNavigator();

function DetailStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DetailPage" component={DetailPage} />
    </Stack.Navigator>
  );
}

export default DetailStackNavigation;