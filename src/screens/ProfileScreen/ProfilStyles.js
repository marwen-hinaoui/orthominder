import { StyleSheet } from "react-native";
import { FONTSIZE, ICONSIZE } from "../../constants/FontSizes";

export const ProfileStyles = StyleSheet.create({
    container:{
  
        display:'flex',
        alignItems:'center',
    },
    avatar:{
        width:170,
        height:170,
    },
    row:{
        display:'flex',
        flexDirection: 'row',
    },
    text:{
        fontSize:FONTSIZE.PRIMARY,
    },
    icon:{
        fontSize:ICONSIZE.PRIMARY,
        marginRight: 7
    }
})