import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  return (
      <SafeAreaView>
        <View >
          <Text style={{color:'#000'}}>HomeScreen</Text>
        </View>
      </SafeAreaView>

  )
}