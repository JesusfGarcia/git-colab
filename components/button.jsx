import {TouchableOpacity, StyleSheet} from "react-native";

//Crear un componente Input
const Mybutton = ({children}) => {
    
return (
    <TouchableOpacity style={styles.buttonStyle}>{children}</TouchableOpacity>
)
}

const styles = StyleSheet.create({
    buttonStyle: {
    height: 60,
    width: 300,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#6f4a8e"
    }
})

export default Mybutton;