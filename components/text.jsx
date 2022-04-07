import {Text, StyleSheet} from "react-native";

//Crear un componente
const Mytext = ({children}) => {
    
return (
    <Text style={styles.text}>{children}</Text>
)
}

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        fontWeight: "bold"
    }
})

export default Mytext;

//Tarea: Crear textInput y un touchableOpacity