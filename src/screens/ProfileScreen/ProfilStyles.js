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
        alignSelf:'center',
        marginBottom:20,
    },
    row:{
        display:'flex',
        flexDirection: 'row',
    },
    text:{
        fontSize:FONTSIZE.SMALL,
        fontWeight:'500'
    },
    icon:{
        fontSize:ICONSIZE.SMALL,
        marginRight: 9
    }
})