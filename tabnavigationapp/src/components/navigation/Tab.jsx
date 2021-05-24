import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Tab({tab,color,icon,onPress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Ionicons name={icon} size={24} color={color} />
            <Text style={{color}}>{tab.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        padding: 5,
        justifyContent: 'center'
    }
})
