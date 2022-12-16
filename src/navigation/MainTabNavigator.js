import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatScreens from "../screens/ChatScreens";
import Dummy from "../screens/Dummy";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return(
        <Tab.Navigator initialRouteName="Chats">
            <Tab.Screen name="Status" component={Dummy}/>
            <Tab.Screen name="Call" component={Dummy}/>
            <Tab.Screen name="Camera" component={Dummy}/>
            <Tab.Screen name="Chats" component={ChatScreens}/>
            <Tab.Screen name="Settings" component={Dummy}/>
        </Tab.Navigator>
    )
}

export default MainTabNavigator