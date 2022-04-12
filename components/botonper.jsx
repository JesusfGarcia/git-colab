import {TouchableOpacity, StyleSheet, Text} from "react-native";

    const MyBoton= ({text = "texto por defecto", onPress = null }) =>{
    
    return(
        
        <TouchableOpacity style = {styles.Touchable} onPress = {onPress}>
            <Text style={styles.boton}>
                {text}
            </Text>
        </TouchableOpacity>
    ) 
}

const styles= StyleSheet.create({
    boton: {
        backgroundColor: "#DE108D",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 98,
    },
    
    Touchable: {
        alignSelf: "flex-start"
    }

})

export default MyBoton