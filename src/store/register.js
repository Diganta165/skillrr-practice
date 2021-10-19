import axios from "axios"

export const register = {
    namespaced : true,

    state:{

    },
    getters:{

    },
    mutations:{

    },
    actions:{
        async userRegister(context, payload){
            console.log('register payload',payload)
            try{
                let response = axios.post('http://192.168.0.132:8080/register', payload)
                // console.log(response)
                .then(res=>{
                    console.log(res)
                })
            }catch{

            }
        }

    }
}