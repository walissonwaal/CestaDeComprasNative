import { StyleSheet, View, FlatList } from 'react-native'

import Topo from './components/Topo'
import Detalhes from './components/Detalhes'
import Item from './components/Item'
import Texto from '../../components/Texto'



export default function Cesta({ topo, detalhes, itens }) {
    return (
        <>
            <FlatList
                data={itens.lista}
                renderItem={Item}
                keyExtractor={({ nome }) => nome}
                ListHeaderComponent={() => {
                    return <>
                        <Topo {...topo} />
                        <View style={estilos.cesta}>
                            <Detalhes {...detalhes} />
                            <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                        </View>
                    </>
                }}
            />
        </>
    )
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },

})