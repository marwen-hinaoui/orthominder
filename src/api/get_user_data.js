import apiInstance from "./axios"

export const get_user_data = async (user) =>{

    try {
        const res = await apiInstance.get(
            `/get_patient_by_id/${user.id}`,
            {
                headers: {
                    'Authorization': `Bearer ${user.refresh}`
                }
            }
        )
        return{ resData: res.data, resError: null }
    }
    catch (error) {
        return{ resData: null, resError: error }
    }   
}