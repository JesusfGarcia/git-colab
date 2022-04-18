import {Text, View} from "react-native";
import React from "react";
import { Logincontext } from "../../navigation";




const Bienvenida= () => {
    const {setIsLoggedIn} = React.useContext(Logincontext)
    return (
        <View>
            <Text> Pantalla bienvida </Text>
            <Text onPress={() => setIsLoggedIn(false)}> log out </Text>
        </View>
    );
};

export default Bienvenida