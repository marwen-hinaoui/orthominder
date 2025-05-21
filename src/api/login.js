import apiInstance from "./axios"

export const login = async (userData) =>{
    console.log(userData);
    
    try {
        const res = await apiInstance.post(
            '/patient/login',
            userData,
            {
                headers: {
                    'Content-Type':'application/json'
                }
            }
        )

        return{ resData: res.data, resError: null }
    }
    catch (error) {
        console.log(error)
        return{ resData: null, resError: error }
    }   
}