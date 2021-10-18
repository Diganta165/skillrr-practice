import axios from "axios";
export const login={
    namespaced: true,
    state:{
        loginError: "",
        // userData:{},
        userData:''
        // userData:"bangladesh",
    },
    getters:{
        getLoginError(state){
            return state.loginError;
        },
        getUserData(state){
            return state.userData;
        }
    },
    mutations: {
         login(state, payload) {
            console.log('Mutation payload',payload)
            // try {
            //     let response = await axios.post("http://192.168.0.132:8080/api/login/", payload)
            //     state.userData = response.data.data.token    
            //     console.log(state.userData)
            // }
            // catch (err) {
            //     state.loginError = err.response.data.errors.error
            //     state.userData = {}
            // }
        
            // state.userData = payload.resData? payload.resData : payload.resUserData;
            // state.loginError = payload.resError? payload.resError : '';
            console.log('Res Data of Payload',payload.resData)
            localStorage.setItem('access_token',payload.resData)
            console.log(localStorage.getItem('access_token'))
            state.userData = payload.resData;
            state.loginError = payload.resErr;
            console.log('State.UserData', state.userData)
        }
    },
    actions: {
        async userLogin(context, payload) {
            console.log('Payload inside actions', payload)
            try {
                let response = await axios.post("http://192.168.0.132:8080/api/login/", payload)
                // state.userData = response.data.data.token    
                // console.log(state.userData)
                const resData = response.data.data.token;
                const resErr="";
                console.log('I am response',response)
                localStorage.setItem('access_token',"Hello1")
                payload = {resData, resErr}
            }
            catch (err) {
                // state.loginError = err.response.data.errors.error
                // state.userData = {}
                console.log(err)
                const resErr = err.response.data.errors.error;
                const resData = {}
                payload = {resData,resErr }
            }

            return context.commit('login', payload);
        },

    },
}