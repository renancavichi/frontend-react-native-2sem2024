import { View, Text, StyleSheet} from 'react-native'
import { Image } from 'expo-image'
import Feather from '@expo/vector-icons/Feather'
import { Link } from 'expo-router'
import { useLoginStore } from '../stores/useLoginStore'

export default function Header(){

    const {name, avatar} = useLoginStore()

    return (
        <View style={styles.header}>
            <View style={styles.user}>
                <Image 
                    style={styles.avatar}
                    source={avatar} //Local
                    //source="https://avatars.githubusercontent.com/u/4259630?v=4"
                />
                <Text style={styles.name}>{name}</Text>
            </View>
            <Link href="signup">
                <Feather style={styles.menu} name="plus" size={24} color="black" />
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        //backgroundColor: "#899986",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    name: {
        fontWeight: '600',
        fontSize: 18
    },
    menu: {
        padding: 10
    }
})