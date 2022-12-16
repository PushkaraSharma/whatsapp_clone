import { StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import {AntDesign, MaterialIcons} from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';

const InputBox = () => {
    const [msg, setMsg] = useState('');

    const onSend = () => {
        console.warn("It is pressed", msg);
        setMsg('');
    }
    return (
        <SafeAreaView edges={['bottom']} style={styles.container}>
        <AntDesign name='plus' size={24} color='royalblue'/>
        <TextInput
            style={styles.input}
            placeholder='Type your message...'
            value={msg}
            onChangeText={setMsg}
        />
        <MaterialIcons name='send' size={20} color='white'  style={styles.send}
            onPress={onSend}
        />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        paddingHorizontal: 5,
        paddingVertical: 8,
        alignItems: 'center'
    },
    input:{
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 5,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'lightgrey',
        fontSize: 16
    },
    send:{
        backgroundColor: 'royalblue',
        padding: 5,
        borderRadius: 15,
        overflow: 'hidden'
         
    }

})

export default InputBox