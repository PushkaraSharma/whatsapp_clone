import { View, Text, FlatList, StyleSheet } from 'react-native'
import chats from '../../assets/data/chats.json';
import ChatListItem from '../components/ChatListItem'

const ChatScreens = () => {

  return (
    <FlatList style={styles.list}
      data={chats}
      renderItem={({item}) => <ChatListItem chat={item}/>}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#fff'
  }
})

export default ChatScreens