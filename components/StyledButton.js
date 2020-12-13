import React from 'react'
import { View, Text, StyleSheet, Pressable, TouchableWithoutFeedback } from 'react-native'

const StyledButton = (props) => {

    const type = props.type;
    const backgroundColor = type === 'primary' ? 'black' : 'white';
    const textColor = type === 'primary' ? 'white' : 'black';
    const content = props.content;

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={() => {
                    console.warn('hello');
                }}
            >
                <Text style={[styles.text, { color: textColor }]}>{content}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    container: {
        width: '100%',
        padding: 10,
    },
    text: {
        fontSize: 12,
        fontWeight: '500',
        textTransform: 'uppercase',
    }
});

export default StyledButton
