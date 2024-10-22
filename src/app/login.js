import { ScrollView, StyleSheet, View, Text } from 'react-native'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { useRouter } from 'expo-router'

export default function Login() {
  const router = useRouter()
  return (
      <ScrollView style={styles.container}>
        <View style={{ flex: 1, marginTop: 100, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 30}}>Login</Text>


          <Button onPress={() => router.push('/signup')}>Cadastre-se</Button>
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