import React from "react"
import { Text, View } from "react-native"

export default function Meucomponente(props) {

    const { min, max } = props;
    console.warn(props);




    return (
        <View>
            <Text>é maior que </Text>
            <Text>é maior que </Text>
            <Text>é maior que </Text>
            <Text>é maior que </Text>
            // meu comentário // 
            <Text>é maior que </Text>
        </View>
    )

}
