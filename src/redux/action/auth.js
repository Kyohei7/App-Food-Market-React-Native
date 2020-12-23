import Axios from 'axios'
import { showMessage, storeData } from '../../utils'
import { setLoading } from './global'


const API_HOST = {
    url: 'http://10.0.2.2:8000/api'
}



export const signUpAction = (dataRegister, photoReducer, navigation) => (dispatch) => {
    Axios.post(`${API_HOST.url}/register`, dataRegister)
            .then(res => {
                // Save Data User
                const profile = res.data.data.user
                

                // Save Data Token
                const token = `${res.data.data.token_type} ${res.data.data.access_token}`
                storeData('token', {value: token})
                
                if ( photoReducer.isUploadPhoto ) {
                    const photoForUpload = new FormData()
                    photoForUpload.append('file', photoReducer)

                    Axios.post(`${API_HOST.url}/user/photo`, 
                        photoForUpload, 
                        {
                            headers : {
                                'Authorization': token,
                                'Content-Type': 'multipart/form-data',
                            },
                        },
                    )       
                        .then(resUpload => {
                            profile.profile_photo_url = `http://10.0.2.2:8000/storage/${resUpload.data.data[0]}`
                            storeData('userProfile', profile )
                            navigation.reset({index: 0, routes: [{name: 'SuccessSignUp' }]})
                        })
                        .catch(err => {
                            showMessage('Upload Photo Failed')
                            navigation.reset({index: 0, routes: [{name: 'SuccessSignUp' }]})
                        })    
                    } else {
                        storeData('userProfile', profile )
                        navigation.reset({index: 0, routes: [{name: 'SuccessSignUp' }]})
                    }
                
                dispatch(setLoading(false))
            })
            .catch(err => {
                dispatch(setLoading(false))
                showMessage(err?.response?.data?.data?.message)
            })
}