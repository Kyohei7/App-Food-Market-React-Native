import Axios from 'axios'
import { showMessage } from '../../utils'
import { setLoading } from './global'


const API_HOST = {
    url: 'http://10.0.2.2:8000/api'
}



export const signUpAction = (dataRegister, photoReducer, navigation) => (dispatch) => {
    Axios.post(`${API_HOST.url}/register`, dataRegister)
            .then(res => {
                console.log('Data Success : ', res.data )
                
                if ( photoReducer.isUploadPhoto ) {
                    const photoForUpload = new FormData()
                    photoForUpload.append('file', photoReducer)

                    Axios.post(`${API_HOST.url}/user/photo`, 
                    photoForUpload, 
                    {
                        headers : {
                            'Authorization': `${res.data.data.token_type} ${res.data.data.access_token}`,
                            'Content-Type': 'multipart/form-data',
                        },
                    },
                )
                        .then(resUpload => {
                            console.log('Success Upload : ', resUpload)
                        })
                        .catch(err => {
                            showMessage('Upload Photo Failed')
                            console.log('Failed Upload : ', err);
                        })    
                    }
                
                dispatch(setLoading(false))
                showMessage('Register Success', 'success')
                navigation.replace('SuccessSignUp')
            })
            .catch(err => {
                dispatch(setLoading(false))
                showMessage(err?.response?.data?.data?.message)
            })
}