import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
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

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <TimerToggleButton isTimerRunning={isTimerRunning} startTimer={startTimer} stopTimer={stopTimer}/>
      <TimerCountDowwnDisplay  timerDate = {new Date(timerCount)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});
