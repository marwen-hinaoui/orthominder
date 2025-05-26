import { View, Text, Image } from 'react-native'
import CustomCalendar from '../../components/CustomCalendar'
import { useDispatch, useSelector } from 'react-redux'
import { get_appointements_details_by_patient } from '../../api/get_appointements_details_by_patient'
import { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import Loading from '../../components/Loading'
import ContentWrapper from '../../components/ContentWrapper'
import dayjs from 'dayjs'
import { get_aligner_number } from '../../api/get_aligner_number'
import { set_current_aligner } from '../../redux/slices'
import { HomeStyles } from './HomeStyles'
import Card from '../../components/Card'
import AlignerImage from '../../../assets/aligner.png'


const today = dayjs().format('YYYY-MM-DD')

export default function HomeScreen({navigation}) {
  const user = useSelector( state => state.app.user)
  const dispatch = useDispatch()
  const current_aligner = useSelector( state => state.app.current_aligner)
  const [loading, setLoading] = useState(true)

  const [ appointemntData, setAppointemntData ] = useState({})
    useFocusEffect(
      useCallback(
        () => {
          const fetchData = async () =>{
            setLoading(true)
            const res = await get_appointements_details_by_patient(user)
            const alignerRes = await get_aligner_number(user, 0, today)
            if(res.resData && alignerRes.resData){
              setAppointemntData(res.resData)
              dispatch(set_current_aligner(alignerRes.resData))

              console.log('aligner', current_aligner)
              console.log('aligner', alignerRes.resData)
              
            }else {
              console.log(res.resError)

            }
            setLoading(false)
 
          }

          fetchData()
        },
        [],
      )
    )

  if(loading){
    return( 
    <View style={{flex:1, padding:16}}>
      <Loading /> 
    </View>
    )
  }
  return appointemntData && !loading && (
    <View>
      <ContentWrapper>
      <Card marginBottom={12}>
        <Text style={HomeStyles.title}>
          <Image style={{ width:77, height:16 }} source={AlignerImage} />
          Aligner #{current_aligner.aligner_number}
          </Text>
      </Card>
      <CustomCalendar appointemnt_day={appointemntData.appointemnt_day} next_appointemnt_day={appointemntData.next_appointemnt_day} loading={loading} />
      </ContentWrapper>
    </View>

  )
}