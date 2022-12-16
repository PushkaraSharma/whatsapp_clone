import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Entypo } from "@expo/vector-icons";
import ChatScreens from "../screens/ChatScreens";
import Dummy from "../screens/Dummy";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Chats"
            screenOptions={{
                tabBarStyle:{backgroundColor: 'whitesmoke'},
                headerStyle:{backgroundColor: 'whitesmoke'}
            }}
        >
            <Tab.Screen name="Status" component={Dummy} 
                options={{ 
                    tabBarIcon: ({size, color}) => (
                        <Ionicons name="logo-whatsapp" size={size} color={color} />
                    ) 
                }} 
            />
            <Tab.Screen name="Call" component={Dummy} 
                options={{ 
                    tabBarIcon: ({size, color}) => (
                        <Ionicons name="call-outline" size={size} color={color} />
                    ) 
                }} 
            />
            <Tab.Screen name="Camera" component={Dummy}
                options={{ 
                    tabBarIcon: ({size, color}) => (
                        <Ionicons name="camera-outline" size={size} color={color} />
                    ) 
                }} 
            />
            <Tab.Screen name="Chats" component={ChatScreens}
                options={{ 
                    tabBarIcon: ({size, color}) => (
                        <Ionicons name="ios-chatbubbles-outline" size={size} color={color} />
                    ),
                    headerRight: () => (
                        <Entypo name="new-message" size={18} color={"royalblue"} style={{marginRight: 15}}/>
                    )
                }} 
            />
            <Tab.Screen name="Settings" component={Dummy}
                options={{ 
                    tabBarIcon: ({size, color}) => (
                        <Ionicons name="settings-outline" size={size} color={color} />
                    ) 
                }} 
            />
        </Tab.Navigator>
    )
}

export default MainTabNavigator