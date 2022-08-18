import { Text, StyleSheet } from 'react-native'

export default function Texto({ children, style }) {

    let estilo = estilos.texto

    if (style?.fontWeight === 'bold') { // Se houver o style verifica, se não ignora o if
        estilo = estilos.textoNegrito
    }
    return (
        <Text style={[style, estilo]}>{ children }</Text>
    )
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal"
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal"
    }
})