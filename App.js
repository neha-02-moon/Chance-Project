import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import Home from './src/screen/Home';

export default function App() {
  return (
    <View style={styles.mainContainer}>
         <View style={styles.homeTop}>
           <Image style={styles.headerImage} source={require("./assets/Wavy_Lst-01_Single-11.jpg")}/>
           <Text style={[styles.mainHeader,{
             fontSize:50,
             marginTop:0,
           }
          ]} >The personality first connecting app </Text>
           <Text style={styles.paraHeader} >if you were a fruit,then you'd be a fine-apple</Text>
           <View style={styles.btnContainer}>
             <TouchableOpacity style={styles.userBtn}>
             <Text style={styles.btnTxt}>Login</Text>
             </TouchableOpacity>

             <TouchableOpacity style={styles.userBtn}>
             <Text style={styles.btnTxt}>Signup</Text>
             </TouchableOpacity>
             
                    </View> 
        </View> 
      
    </View>
    
  );
}

const styles = StyleSheet.create({
 maincontainer: {
    height:"100%",
    display:'flex',
    justifyContent:"space-between",
    paddingHorizontal:20,
    backgroundColor: '#fff',
    textAlign:"center",  
  },

homeTop:{
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:"10%",

},
headerImage:{
height:undefined,
width:"100%",
aspectRatio:1,
},

mainHeader:{
fontsize:50,
},

paraHeader:{
  fontsize:10,
  textAlign:'center',
  marginTop:10,

},
btnContainer:{
  flexDirection:'row',
  justifyContent:"space-between",
  width:"90%",
},
userBtn:{
  backgroundColor:"#ADD8E6",
  padding:15,
  width:"45%",

},
btnTxt:{
fontSize:18,
textAlign:"center"
}

});


  