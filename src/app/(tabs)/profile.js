import { View, StyleSheet, Text, Alert } from 'react-native'
import { Image } from 'expo-image'
import Button from '../../components/Button'
import { useLoginStore } from '../../stores/useLoginStore'
import { useRouter } from 'expo-router'
import { deleteObjectData } from '../../utils/asyncStorage'

export default function Profile() {

    const {avatar, name} = useLoginStore()
    const { logout: logoutStore, accessToken } = useLoginStore()
    const router = useRouter()

    const handleLogout = async () => {
        const logout = {
            accessToken 
        }

        const response = await fetch('http://localhost:3000/auth/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(logout)
        })

        if(response.ok){
            const data = await response.json()
            console.log(data)
            logoutStore()
            await deleteObjectData('userLogged')
            router.replace('/login')
        } else {
            const data = await response.json()
            Alert.alert('Erro ao logar')
            console.log(data?.error)
        }
        return
    }

  return (
      <View style={styles.container}>
        <Image
            source={avatar}
            style={styles.avatar}
        />
        <Text style={styles.name}>{name}</Text>
        <Button onPress={handleLogout}>Logout</Button>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30
  },
  avatar: {
    width: 150,
    height: 150
  },
  name: {
    fontSize: 20
  }
})