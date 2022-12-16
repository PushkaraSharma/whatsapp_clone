import ChatInside from '../screens/ChatInside';
import ChatScreens from '../screens/ChatScreens';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator from './MainTabNavigator';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer >
        <Stack.Navigator>
            <Stack.Screen 
                name='Home'
                component={MainTabNavigator}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='Chat'
                component={ChatInside}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator