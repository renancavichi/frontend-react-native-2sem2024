import {View, StyleSheet} from 'react-native'
//import CardAccount from './CardAccount'
import CardAccount2 from './CardAccount2'

export default function Content(){

    const accounts = [
        {
          id: 1,
          service: "Gmail",
          imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQmvE-UWwkOMDfh58HggMn6XxzXRBXTHoG6zkZOMy75IIv7H0KcsnZgD2IfVUuNCshVNA&usqp=CAU",
          userName: "renancavichi@gmail.com"
        },
        {
          id: 2,
          service: "Instagram",
          imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png",
          userName: "@renancavichi"
        },
        {
          id: 3,
          service: "Github",
          imgUrl: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
          userName: "renancavichi"
        }
    ]

    return (
        <View style={styles.content}>
        {
          accounts.map( (account) => 
            <CardAccount2
              key={account.id} 
              service={account.service}
              imgUrl={account.imgUrl}
              userName={account.userName}
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