import {Text, View, ActivityIndicator} from "react-native";
import React from "react";
import axios from "axios";


const ListaUsuarios= () => {
    const [lista, setLista] = React.useState([]);
    const [Loading, setLoading] = React.useState(true);
    
    React.useEffect(() => {
        TraerInformacion()
    },[])

    const TraerInformacion= async() =>{
        try {
            const {data} = await axios.get("https://my-money28.herokuapp.com/signup/")
            console.log(data)
            setLista(data)
            setLoading(false)
        } catch (error) {
            console.error(error)
            setLoading(false)
            
        }

    }   
    return (
        <View>
            { 
            Loading && <ActivityIndicator/>
            }
            {
                lista.map(cuenta => {
                    
                    return(
                        <Text>{cuenta.email}</Text>
                    )
                })
            }
        </View>
    );
};



export {ListaUsuarios}