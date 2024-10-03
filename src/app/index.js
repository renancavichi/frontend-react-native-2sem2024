import { ScrollView, StyleSheet } from 'react-native'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/Content'


export default function Home() {
  return (
      <ScrollView style={styles.container}>
        <Header />
        <Content />
        <Footer />
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})