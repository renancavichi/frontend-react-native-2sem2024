import { useEffect, useState } from 'react'
import {View, StyleSheet, Text, TextInput, Pressable} from 'react-native'
import CardAccount from './CardAccount'
//import CardAccount2 from './CardAccount2'
//import Calc from './Calc'

export default function Content(){

  const [accounts, setAccounts] = useState([])
  const [txtServico, setTxtServico] = useState('')
  const [txtUsername, setTxtUsername] = useState('')
  const [txtPass, setTxtPass] = useState('')
  const [txtImgUrl, setTxtImgUrl] = useState('')
 
   useEffect(() => {
        const getAccounts = async () => {
            const response = await fetch('http://localhost:3000/account/list')
            if(response.ok){
              const data = await response.json()
              console.log(data)
              setAccounts(data.accounts)
              return
            }
            console.log('Erro ao carregar accounts')
            return
        }

        getAccounts()
   }, [])

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
        setAccounts([data.account, ...accounts])
        return
      }
      console.log('Erro ao carregar accounts')
      return
   }

    return (
        <View style={styles.content}>
        
        {/* <Calc /> */}

        <View>
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
          <Pressable
            style={styles.button}
            onPress={handleCreateAccount}
          >
            <Text>Cadatrar</Text>
          </Pressable>
        </View>        

        { accounts.length === 0 && <Text>Loading...</Text>}

        {
          accounts.map( (account) => 
            <CardAccount
              key={account.id}
              id={account.id} 
              service={account.service}
              imgUrl={account.logo_image}
              userName={account.username}
              accounts={accounts}
              setAccounts={setAccounts}
            /> 
          )
        }
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        gap: 10,
        //backgroundColor: "#545656",
        padding: 15
        //justifyContent: 'center',
        //alignItems: 'center'
      },
    input: {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#444444',
      paddingHorizontal: 10,
      paddingVertical: 6,
      marginVertical: 5,
      borderRadius: 5
    },
    button: ({pressed}) => [{
      backgroundColor: pressed ? '#ed7900': '#f97f01',
      alignItems: 'center',
      marginVertical: 10,
      borderRadius: 10,
      paddingVertical: 5
    }]
})