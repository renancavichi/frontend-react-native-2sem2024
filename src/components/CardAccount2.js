import {View, Text, StyleSheet} from 'react-native'
import { Image } from 'expo-image'
import EvilIcons from '@expo/vector-icons/EvilIcons';


export default function CardAccount2 ({ service, userName, imgUrl }) {

    return (
        <View style={styles.card}>
            <Image 
                style={styles.logo} 
                source={imgUrl}
            />
            <Text style={styles.service}>{service}</Text>
            <Text style={styles.username}>{userName}</Text>
            <EvilIcons name="arrow-right" size={26} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        // borderStyle: 'solid',
        // borderColor: '#EEEEEE',
        // borderWidth: 1,
        //width: '100%',
        flexDirection: 'row',
        gap: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10
    },
    logo:{
        width: 40,
        height: 40
    },
    service: {
        fontSize: 17,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#EEEEEE',
        paddingVertical: 10
    },
    username: {
        color: '#777777',
        marginLeft: 'auto',
    }
})