import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View style={{
        marginTop:20
    }}>
      <Text style={styles.text}>Welcome to Budget Better</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        fontSize:35
    }
})