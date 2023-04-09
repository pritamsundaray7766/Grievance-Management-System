import axios from 'axios'

const COMPLAINT_BASE_REST_API_URL = 'http://localhost:8080/api/v1/complaints';

class ComplaintService{

    getAllComplaints(){
        return axios.get(COMPLAINT_BASE_REST_API_URL)
    }
}

export default new ComplaintService();