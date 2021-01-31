import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

export default function ColorButton({backgroundColor, onPress}) {
    return(
      <TouchableHighlight style={styles.button}
        onPress={() => onPress(backgroundColor)} underlayColor="orange">
        <View style={styles.row}>
          <View style={[styles.sample, {backgroundColor}]}></View>
          <Text style={styles.buttonText}>{backgroundColor}</Text>
        </View>
      </TouchableHighlight>
    );
    
  }

  const styles = StyleSheet.create({

    button: {
      margin: 10,
      padding: 10,
      borderWidth: 2,
      borderRadius: 10,
      alignSelf: "stretch",
      backgroundColor: "rgba(255,255,255,0.5)",
    },
  
    buttonText: {
      fontSize: 30,
      textAlign: "center"
    },
  
    row: {
      flexDirection: "row",
      alignItems: "center"
    },
  
    sample:{
      borderRadius: 50,
      backgroundColor: "white",
      height: 20,
      width: 20,
      marginRight: 10
  
    }
  });