import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { FONTSIZE } from "../../constants/FontSizes";

export const ButtonStyles = StyleSheet.create({
    text: {
        color:COLORS.WHITE,
        fontWeight: 'bold',
        fontSize: FONTSIZE.SMALL,
        marginRight: 5,

    },
    icon:{
        color:COLORS.WHITE
    },
    container:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 11,
    }

})