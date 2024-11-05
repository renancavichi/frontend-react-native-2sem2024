import { useLoginStore } from "../stores/useLoginStore"
import { storeObjectData } from "./asyncStorage"

export async function fetchAuth(url, config){
    const accessToken = useLoginStore.getState().accessToken
    const loginStore = useLoginStore.getState().login
    const logoutStore = useLoginStore.getState().logout

    const response = await fetch(url, {
        ...config,
        headers:{
            ...config?.headers,
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    })

    const responseCloned = response.clone()
    
    if (responseCloned.status === 401){
        const data = await responseCloned.json()
        if(data?.error && data?.errorType === "tokenExpired"){
            const responseRT = await fetch('http://localhost:3000/auth/refresh-token', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                   'Authorization': `Bearer ${accessToken}`
                }
              })
            console.log('Status', responseRT.status)
            if(responseRT?.ok){
                const data = await responseRT.json()
                loginStore({accessToken: data?.accessToken, ...data.user})
                await storeObjectData('userLogged', {accessToken: data?.accessToken, ...data.user})
                console.log(data)
                const responseNew = await fetch(url, {
                    ...config,
                    headers:{
                        ...config?.headers,
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${data?.accessToken}`
                    }
                })
                return responseNew
            } else {
                logoutStore()
                await storeObjectData('userLogged', null)
                console.log('Erro ao revalidar Token no Refresh Token')
            }
        }
    }

    return response
}