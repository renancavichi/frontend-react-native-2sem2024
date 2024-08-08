import { View, Text, StyleSheet } from 'react-native'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'


export default function App() {
  return (
      <View style={styles.container}>
        
        <Header />
        <Content />
        <Footer />
      
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})