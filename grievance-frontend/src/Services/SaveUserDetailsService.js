import axios from 'axios'

const USER_BASE_REST_API_URL = 'http://localhost:8080/api/v1/users';

class SaveUserDetailsService{
    saveUserDetails(){
        return axios.post(USER_BASE_REST_API_URL)
    }
}

export default new SaveUserDetailsService();