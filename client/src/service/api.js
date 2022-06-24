import axios from "axios";

const URL = 'http://localhost:5000';

const UserMassage = async (data) =>{
    try {
        return await axios.post(`${URL}/contact`,data);
    } catch (error) {
        console.log("this error from getting data and error is", error);
    }
} 

export default UserMassage;