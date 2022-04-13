import {TextInput, StyleSheet, Text, View} from "react-native";

const MyTextInput= ({label = "", place = "", security = false, value = "", setValue = null}) =>{
    
    const changeText = text => setValue(text)
    
    return(
        <View>
            <Text>
                {label}
            </Text>
            <TextInput type="Text" placeholder={place} style={styles.textinput} secureTextEntry = {security} value={value} onChangeText={changeText}/>
        </View>
    )
}

const styles= StyleSheet.create({
    textinput: {
        fontSize: 16,
        height: 40,
        backgroundColor: "#FFF",
        borderRadius: 10,
        borderColor: "#20F26F",
    }
})

export default MyTextInput