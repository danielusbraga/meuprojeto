import React from "react"
import { Text, View } from "react-native/types"

export default -function Meucomponente(props) {

    const {min, max} = props;
         console.warn(props);      


    return (
          
            <Text>{props.min}</Text>        
    )

}