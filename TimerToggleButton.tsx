import React from 'react'
import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
type Props = {
    isTimerRunning:boolean;
    stopTimer: () => void;
    startTimer: () => void
}

export const TimerToggleButton: React.FC<Props> = ({isTimerRunning, startTimer, stopTimer}) => {
  return (
    <View>
        <Pressable  onPress={isTimerRunning ? stopTimer : startTimer}>
            <View style={styles.container}>
                <FontAwesome name ={isTimerRunning ? "pause" : "play"} size={125}  style={styles.icon}/>
            </View>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    icon: {
        alignSelf: "center",
        color: "#fff"
    },
    
    container: {
        borderWidth: 5,
        width:250,
        height: 250,
        borderRadius: 250 / 2,
        justifyContent: "center",
        marginVertical: 50,
        borderColor: "#fff"
    }
})
