import {View, StyleSheet, Text, TextInput} from 'react-native'
import { Image } from 'expo-image'
import Button from '../components/Button'
import { useLocalSearchParams } from 'expo-router'

export default function ShowPass(){

    const {imgUrl, service, userName, pass} = useLocalSearchParams()

    return (
        <View style={{padding: 20}}>
            <View style={styles.card}>
                <Image 
                    style={styles.logo} 
                    source={imgUrl}
                />
                <View style={styles.content}>
                    <Text style={styles.service}>{service}</Text>
                    <Text style={styles.username}>{userName}</Text>
                </View>
        </View>
            <View>
                <TextInput style={styles.input} value={pass} />
            </View>
            <Button>Copiar Senha</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        flexDirection: 'row',
        gap: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    logo:{
        width: 60,
        height: 60
    },
    content: {
        gap: 6
    },
    service: {
        fontSize: 17
    },
    username: {
        color: '#777777'
    },
    input: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#444444',
        paddingHorizontal: 10,
        paddingVertical: 6,
        marginVertical: 5,
        borderRadius: 5
    }
})