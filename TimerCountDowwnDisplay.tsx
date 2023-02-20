import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    timerDate: Date
}

export const TimerCountDowwnDisplay: React.FC<Props> = ({timerDate}) => {
  return (
    <View>
         <Text style={styles.timerConntDownText}>{timerDate.getMinutes().toString().padStart(2, "0")}:{timerDate.getSeconds().toString().padStart(2, "0")}</Text>
    </View>
  )
}



const styles = StyleSheet.create({
    timerConntDownText: {
        fontSize: 40,
        color: "#fff",
        fontWeight: "800",
        
    }
})