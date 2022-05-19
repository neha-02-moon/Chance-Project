import { StyleSheet,Text,View } from "react-native";
import React from "react";

const Home=()=>{
    return(
<View>
    <Image style={styles.headerImage} source={require ("./assets/Wavy_Lst-01_Single-11.jpg")}/>
    
    <Text>Hello</Text>
</View>

    );
};

const styles= StyleSheet.create({});
export default Home;