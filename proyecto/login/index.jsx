import{Text, View} from "react-native"; //imoporta el componente de texto y de vista de la libreríaa react native
import React from "react";  //importa la librería de react en caso de que se ocupa
import { Logincontext } from "../../proyecto/navigation";

const Login = ({navigation}) => { // componente, siempre va el nombre con mayuscula

    const {setIsLoggedIn} = React.useContext(Logincontext)

    return (
        <View>
            <Text> Pantalla de Login </Text>
            <Text onPress={() => navigation.navigate("Registro")}> Moverse a Registro </Text>
            <Text onPress={() => setIsLoggedIn(true)}> Moverse a Bienvenido </Text>
        </View>
    );
};

export default Login