import { ScrollView, StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import { useRouter } from 'expo-router'

export default function Init() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => router.replace('/login'), 3000)
  },[])

  return (
      <ScrollView style={styles.container}>
        <View style={{ flex: 1, marginTop: 100, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 30}}>MyPass</Text>
          <Text style={{fontSize: 16, marginVertical: 10} }>Organize suas contas e senhas com o MyPass.</Text>
          <ActivityIndicator style={{marginVertical: 30}} />
          <Footer />
        </View>
        
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})