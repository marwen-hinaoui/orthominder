import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { FONTSIZE } from "../../constants/FontSizes";

export const AuthStyles = StyleSheet.create({
    image:{
        width:420,
        height:420,
    },
    container:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'

    },
    text:{
        textAlign:'right',
        color:COLORS.BLACK,
        fontSize:FONTSIZE.PRIMARY,
        fontWeight:'bold',
        marginTop:1,

    }

})