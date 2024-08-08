import {View, Text, StyleSheet} from 'react-native'

export default function Footer(){
    return (
        <View style={styles.footer}>
          <Text>Footer Ok</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 2,
        backgroundColor: "#998560",
        justifyContent: 'center',
        alignItems: 'center'
    }
})