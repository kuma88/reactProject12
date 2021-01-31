import React from "react";
import {StyleSheet, View, TextInput, Button} from "react-native";



export default function ColorForm() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} autoCapitalize="none"/>
            <Button title="Add"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 40,
        flexDirection: "row",
        alignItems: "center",
    },

    textInput:{
        flex: 1,
        borderWidth: 2,
        fontSize: 30,
        margin:2,
        borderRadius:5,
        padding:2,
    },

})