import {View, Text, StyleSheet, Button} from 'react-native'
import { useState, useEffect} from 'react'

export default function Calc ({ service, userName, imgUrl }) {

    const [valor, setValor] = useState(2)

    useEffect(()=>{
        console.log('valor alterado!')
    }, [])

    console.log('carregado o componente calc')

    return (
        <View style={styles.card}>
            <Text style={styles.service}>
                Total: {valor}
            </Text>
            <Button
                onPress={() => setValor(valor + 1)}
                title="Somar 1"
                color="#841584"
            />
        </View>
    )
}




const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10
    }
})