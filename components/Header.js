import { View, Text, StyleSheet} from 'react-native'

export default function Header(){
    return (
        <View style={styles.header}>
          <Text>Header Ok</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: "#899986",
        justifyContent: 'center',
        alignItems: 'center'
    }
})