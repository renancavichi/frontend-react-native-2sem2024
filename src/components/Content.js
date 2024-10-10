import { useEffect } from 'react'
import {View, StyleSheet, Text} from 'react-native'
import CardAccount from './CardAccount'
import { useAccountStore } from '../stores/useAccountStore'

export default function Content(){

  const { accounts, setAccounts } = useAccountStore()

  console.log('Accounts: ', accounts)
  
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


    return (
        <View style={styles.content}>
               
        { accounts.length === 0 && <Text>Loading...</Text>}

        {
          accounts.map( (account) => 
            <CardAccount
              key={account.id}
              id={account.id} 
              service={account.service}
              imgUrl={account.logo_image}
              userName={account.username}
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
      }
})