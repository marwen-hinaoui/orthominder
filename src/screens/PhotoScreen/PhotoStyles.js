import { StyleSheet } from "react-native";
import { COLORS } from '../../constants/colors'
export const PhotoStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  overlay: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 10,
  },
  statusText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    display:'flex',
    flexDirection:'row',
    bottom:'80',
    alignSelf:'center',
    justifyContent:'space-around',
    width: '60%',
    
  },
  cameraButton: {
    backgroundColor: COLORS.PRIMARY,
    height:60,
    width: 60,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'50%'
  },

  faceGuide: {
    width:555,
    height:555,
  },
  faceGuideContainer:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height:'100%'
  }

})
