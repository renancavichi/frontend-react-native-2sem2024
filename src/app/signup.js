import {View, StyleSheet, Text, TextInput} from 'react-native'
import { useState } from "react"
import Button from '../components/Button'
import { useNavigation } from 'expo-router'

export default function Signup(){

    const navigation = useNavigation()

    const [txtServico, setTxtServico] = useState('')
    const [txtUsername, setTxtUsername] = useState('')
    const [txtPass, setTxtPass] = useState('')
    const [txtImgUrl, setTxtImgUrl] = useState('')

    const handleCreateAccount = async () => {
        const account = {
            service: txtServico,
            username: txtUsername,
            logo_image: txtImgUrl,
            pass: txtPass,
            user_id: 1
        }
    
        const response = await fetch('http://localhost:3000/account', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(account)
        })

        if(response.ok){
            const data = await response.json()
            console.log(data)
            navigation.navigate('index')
            return
        }

        console.log('Erro ao carregar accounts')
        return
    }

    return( 
        <View style={styles.container}>
          <Text>Serviço:</Text>
          <TextInput 
            style={styles.input}
            onChangeText={setTxtServico}
            value={txtServico}
            placeholder='Digite o nome do serviço...'
            placeholderTextColor='#DDDDDD'
          />
          <Text>Username:</Text>
          <TextInput 
            style={styles.input}
            onChangeText={setTxtUsername}
            value={txtUsername}
          />
          <Text>Password:</Text>
          <TextInput 
            style={styles.input}
            onChangeText={setTxtPass}
            value={txtPass}
          />
          <Text>Logo URL:</Text>
          <TextInput 
            style={styles.input}
            onChangeText={setTxtImgUrl}
            value={txtImgUrl}
            keyboardType='url'
          />
        <Button onPress={handleCreateAccount}>Cadatrar</Button>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
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