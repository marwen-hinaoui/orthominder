
import { Calendar } from 'react-native-calendars'
import { COLORS } from '../constants/colors'
import Skeleton from 'react-native-reanimated-skeleton'
import { Text, View } from 'react-native'
import Card from '../components/Card'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { useCallback, useMemo, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { FONTSIZE, ICONSIZE } from '../constants/FontSizes'
import dayjs from 'dayjs'

function getMarkedDates(start, end) {
  const marked = {}
  const startDate = dayjs(start)
  const endDate = dayjs(end)
  const diff = endDate.diff(startDate, 'day')

  for (let i = 0; i <= diff; i++) {
    const date = startDate.add(i, 'day').format('YYYY-MM-DD')

    if (i === 0) {
      marked[date] = { startingDay: true, color: '#007bff', textColor: 'white' }
    } else if (i === diff) {
      marked[date] = { endingDay: true, color: '#007bff', textColor: 'white' }
    } else {
      marked[date] = { color: '#007bff', textColor: 'white' }
    }
  }

  return marked
}

export default function CustomCalendar({appointemnt_day, next_appointemnt_day}) {



  const [currentDate, setCurrentDate] = useState('2025-05-25')
  const [key, setKey] = useState(0)
  const handleMonthChange = (month) => {
    setCurrentDate(`${month.year}-${String(month.month).padStart(2, '0')}-01`)
    setKey((prev) => prev + 1);
  }

  const markedDates = useMemo(() => {
    if (appointemnt_day && next_appointemnt_day) {
      return getMarkedDates(appointemnt_day, next_appointemnt_day)
    }
    return {}
  }, [appointemnt_day, next_appointemnt_day])
  

  return (

      
    <View style={{padding: 8}}>
    <Card marginBottom={12}>


      <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      key={key} // Force re-render with animation
    >
      <Calendar
        theme={{
        textDayFontSize:FONTSIZE.PRIMARY,
        arrowColor: '#007bff',
        textSectionTitleColor: '#333',
        textMonthFontWeight: 'bold',
        textMonthFontSize: FONTSIZE.TITLE,
        monthTextColor:COLORS.BLACK,
        'stylesheet.calendar.header': {
          header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#f0f0f0',


          },
        },
      }}
      renderArrow={(direction) =>
          direction === 'left' ? (
            <Ionicons name="chevron-back" size={ICONSIZE.LARGE} color={COLORS.PRIMARY} />
          ) : (
            <Ionicons name="chevron-forward" size={ICONSIZE.LARGE} color={COLORS.PRIMARY} />
          )
        }
        current={currentDate}
        onMonthChange={handleMonthChange}
        markingType={'period'}
        markedDates={markedDates}
      />
    </Animated.View>

    </Card>
    </View>

  )
}
