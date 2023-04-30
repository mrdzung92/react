import axios from "axios";
const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api'
})

export const get = async (dialogUrl, options = {}) => {
    const response = await request.get(dialogUrl, options)
    return response.data
}

export default request;