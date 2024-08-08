import {View, Text, StyleSheet} from 'react-native'

export default function Content(){
    return (
        <View style={styles.content}>
          <Text>Content</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 5,
        backgroundColor: "#545656",
        justifyContent: 'center',
        alignItems: 'center'
      }
})