import {View, Text, StyleSheet} from 'react-native'

export default function Footer(){
    return (
        <View style={styles.footer}>
          <Text style={styles.copy}>Copyright © 2024 Renan Cavichi </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        padding: 25,
        //backgroundColor: "#998560",
        justifyContent: 'center',
        alignItems: 'center',
    },
    copy: {
        color: "#BBBBBB"
    }
})