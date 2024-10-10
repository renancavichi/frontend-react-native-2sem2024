import {View, Text, StyleSheet, Pressable} from 'react-native'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'

export default function CardAccount ({ id, service, userName, imgUrl }) {

    const router = useRouter()

    return (
        <Pressable onPress={() => router.push({pathname: '/showPass', params: {id}})}>
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
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        borderStyle: 'solid',
        borderColor: '#EEEEEE',
        borderWidth: 1,
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
    }
})