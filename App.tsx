import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Stop } from 'twilio/lib/twiml/VoiceResponse';
import {TimerCountDowwnDisplay} from './TimerCountDowwnDisplay';
import { TimerToggleButton } from './TimerToggleButton';

const time_In_Minute = 0.2 * 60 * 1000
const break_Time_minute = 0.1 * 60 * 1000

export default function App() {
const [timerCount, setTimmerCount] = useState<number>(time_In_Minute)
const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null)
const [isTimerRunning, setTimerRunning] = useState<boolean>(false)
const [timerMode, setTimerMode] = useState<"Focus"  | "Break">("Focus")

  const startTimer = () => {
    setTimerRunning(true)
 const id = setInterval(() => setTimmerCount(prev => prev -1000),1000)
    setTimerInterval(id)
  }

  const stopTimer = () => {
    if (timerInterval != null) { 
    clearInterval(timerInterval)
  }
  setTimerRunning(false)
  }

  useEffect(() => {
    if (timerCount === 0 ){
      if (timerMode === 'Focus'){
        setTimerMode("Break")
        setTimmerCount(break_Time_minute)
      } else {
        setTimerMode('Focus')
        setTimmerCount(time_In_Minute)
      }
      stopTimer()
    }
  },[timerCount])
  
  // {timerMode === 'Focus' ?  " i" : "o"}{''}
  return (
    <View style={{...styles.container, ...{backgroundColor: timerMode === 'Break' ? '#2a9d8f' : '#d95550'}}}>
      <Text style={styles.text}>{timerMode} Time </Text>
      <StatusBar style="auto" />
      <TimerToggleButton isTimerRunning={isTimerRunning} startTimer={startTimer} stopTimer={stopTimer}/>
      <TimerCountDowwnDisplay  timerDate = {new Date(timerCount)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d95550',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: "#fff"
  }

  
});
