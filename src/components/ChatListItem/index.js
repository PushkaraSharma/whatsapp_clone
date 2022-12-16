import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ChatListItem = ({ chat }) => {
    const navigation = useNavigation();
    return (
        <Pressable
            style={styles.mainContainer}
            onPress={() => navigation.navigate('Chat', {id: chat.id, name: chat.user.name})}
        >
            <Image source={{ uri: chat.user.image }}
                style={styles.image}
            />
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text numberOfLines={1} style={styles.name}>{chat.user.name}</Text>
                    <Text style={styles.time}>{dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text>
                </View>
                <Text numberOfLines={2} style={styles.subTitle}>{chat.lastMessage.text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginRight: 10
    },
    mainContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5
    },
    content: {
        flex: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'lightgray'
    },
    row: {
        flexDirection: 'row',
    },
    name: {
        flex: 1,
        fontWeight: 'bold',
        marginBottom: 5
    },
    time: {
        color: 'gray'
    },
    subTitle: {
        color: 'gray'
    }
})
export default ChatListItem;