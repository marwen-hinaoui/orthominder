import apiInstance from "./axios"

export const get_aligner_number = async (user, weared_hours, wearing_day) =>{

    try {
        const res = await apiInstance.post(
            `/get_aligner_number`,
            {
                patient_id: user.id,
                weared_hours: weared_hours,
                wearing_day: wearing_day
            },
            {
                headers: {
                    'Authorization': `Bearer ${user.refresh}`
                }
            }
        )
        return{ resData: res.data, resError: null }
    }
    catch (error) {
        console.log(error.response.data.error);
        
        return{ resData: null, resError: error.response.data.error }
    }   
}