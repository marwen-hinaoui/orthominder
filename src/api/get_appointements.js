import apiInstance from "./axios"

export const get_appointements = async (user) =>{

    try {
        const res = await apiInstance.get(
            `/get_appointements_by_patient_id/${user.id}`,
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