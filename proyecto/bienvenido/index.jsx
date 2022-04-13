import{Text, View} from "react-native"; //imoporta el componente de texto y de vista de la libreríaa react native
import React from "react";  //importa la librería de react en caso de que se ocupa
import { Logincontext } from "../navigation";

const Bienvenido = () => { // componente, siempre va el nombre con mayuscula
    const {setIsLoggedIn} = React.useContext(Logincontext)
    return (
        <View>
            <Text> Pantalla de Bienvenida </Text>
            <Text onPress={() => setIsLoggedIn(false)}> Salir </Text>
        </View>
    );
};

export default Bienvenido