import { View, Text } from 'react-native'
import CustomCalendar from '../../components/CustomCalendar'
import { useSelector } from 'react-redux'
import { get_appointements_details_by_patient } from '../../api/get_appointements_details_by_patient'
import { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'



export default function HomeScreen({navigation}) {
  const user = useSelector( state => state.app.user )
  const [ appointemntData, setAppointemntData ] = useState({})
    useFocusEffect(
      useCallback(
        () => {
          const fetchData = async () =>{
            const res = await get_appointements_details_by_patient(user)
            if(res.resData){
              setAppointemntData(res.resData)
              console.log(res.resData)
              
            }else {
              console.log(res.resError)
            }
          }
          fetchData()
        },
        [],
      )
    )



  return (

        <View>
        <CustomCalendar appointemnt_day={appointemntData.appointemnt_day} next_appointemnt_day={appointemntData.next_appointemnt_day} />
        </View>
      


  )
}