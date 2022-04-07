import {Text, StyleSheet} from "react-native"

const MyText= ({children}) => {

    return(
        <Text style={styles.text}>{children}</Text>
    )
}
const styles= StyleSheet.create({
 text: {
     fontSize: 50,
      fontWeight: "bold",

 }   
})
export default MyText