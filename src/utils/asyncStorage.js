import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeObjectData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
        console.log(e)
    }
}

export const deleteObjectData = async (key) => {
    try {
        await AsyncStorage.setItem(key, null)
    } catch (e) {
        console.log(e)
    }
}


export const getObjectData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        const obj = JSON.parse(value)
        console.log('AsyncStorage: ', obj)
        return obj
      }
    } catch (e) {
        console.log(e)
        return
    }
}