import {Text, View} from "react-native";
import React from "react";
import { Logincontext } from "../../navigation";


const Login= ({navigation}) => {
    const {setIsLoggedIn} = React.useContext(Logincontext)
    return (
        <View>
            <Text> Pantalla login </Text>
            <Text onPress={() => navigation.navigate("Registro")}> moverse a registro</Text>
            <Text onPress={() => setIsLoggedIn(true)}> moverse a binvenida </Text>
        </View>
    );
};

export default Login