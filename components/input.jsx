import {TextInput, StyleSheet} from "react-native";

//Crear un componente Input
const Myinput = ({children}) => {
    
return (
    <TextInput style={styles.inputStyle} placeholder="Soy un input"/> //{children}
)
}

const styles = StyleSheet.create({
    inputStyle: {
    height: 60,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#6f4a8e",
    }
})

export default Myinput;