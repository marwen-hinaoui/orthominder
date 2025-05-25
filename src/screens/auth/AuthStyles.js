import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { FONTSIZE } from "../../constants/FontSizes";
const { height } = Dimensions.get('window')

export const AuthStyles = StyleSheet.create({
    image:{
        width:250,
        height:250,
        resizeMode:'none',
        marginBottom:-30
    },
    container:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-evenly',
        height:height,

    },
    text:{
        textAlign:'right',
        color:COLORS.BLACK,
        fontSize:FONTSIZE.SMALL,
        fontWeight:'bold',
        marginTop: 4,

    },
    form:{
        width:'80%',
    }
})
