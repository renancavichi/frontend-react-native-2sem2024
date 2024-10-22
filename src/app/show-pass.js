import {View, StyleSheet, Text, TextInput} from 'react-native'
import { Image } from 'expo-image'
import Button from '../components/Button'
import { useLocalSearchParams, useRouter} from 'expo-router'
import { useAccountStore } from '../stores/useAccountStore'
import * as Clipboard from 'expo-clipboard'

export default function ShowPass(){

    const router = useRouter()
    const {id} = useLocalSearchParams()
    const { accounts, deleteAccount } = useAccountStore()

    const account = accounts.find((item) => item.id === +id)

    const handleDelete = async () => {
        const response = await fetch(`http://localhost:3000/account/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(response.ok){
            const data = await response.json()
            console.log(data)
            deleteAccount(+id)
            router.back()
            return
        }
        console.log('Erro ao carregar accounts')
        return
    }

    const copyToClipboard = () => {
        Clipboard.setString(account?.pass || '')
        alert('Senha copiada!')
    }

    return (
        <View style={{padding: 20}}>
            <View style={styles.card}>
                <Image 
                    style={styles.logo} 
                    source={account?.logo_image}
                />
                <View style={styles.content}>
                    <Text style={styles.service}>{account?.service}</Text>
                    <Text style={styles.username}>{account?.username}</Text>
                </View>
        </View>
            <View>
                <TextInput style={styles.input} value={account?.pass || ''} />
            </View>
            <Button onPress={copyToClipboard}>Copiar Senha</Button>
            <View style={{flexDirection: 'row', gap: 20, flex: 1, justifyContent: 'space-between'}}>
                <Button onPress={() => router.push({pathname: '/update', params: {id}})}>Editar</Button>
                <Button onPress={handleDelete}>🗑 Excluir</Button>
            </View>
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