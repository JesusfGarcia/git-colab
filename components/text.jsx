import {Text, StyleSheet} from "react-native";

const MyText = ({children}) =>{
    return(
        <Text styles={styles.text}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:40,
        fontWeight: "bold",
    }
})
export default MyText