import apiInstance from "./axios"

export const get_appointements_details_by_patient = async (user) =>{

    try {
        const res = await apiInstance.get(
            `/get_appointements_details_by_patient/${user.id}`,
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