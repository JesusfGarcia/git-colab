import {TextInput, StyleSheet, Text, View} from "react-native";

const MyTextInput= ({label = "", place = "", security = false, value = "", setValue = null}) =>{
    
    const changeText = text => setValue(text)
    
    return(
        <View>
            <Text style= {styles.textlabel}>
                {label}
            </Text>
            <TextInput type="Text" placeholder={place} style={styles.textinput} secureTextEntry = {security} value={value} onChangeText={changeText}/>
        </View>
    )
}

const styles= StyleSheet.create({
    textinput: {
        fontSize: 13,
        height: 50,
        borderColor: "#000",
        borderRadius: 5,
        borderWidth: 0,
        borderBottomWidth: 2,
    },
    textlabel: {
        fontSize: 15,
        fontFamily: "Calibri",
        fontStyle: "bold",
        

    }
})

export default MyTextInput