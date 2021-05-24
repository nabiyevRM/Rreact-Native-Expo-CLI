import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Contact() {
    return (
        <View style={styles.container}>
            <Text>Contact Screen!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'yellow'
    }
})