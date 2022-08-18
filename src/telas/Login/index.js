import React from "react";
import { View, TextInput, StyleSheet, Image, Dimensions, TouchableWithoutFeedback, Keyboard } from "react-native";
import Botao from "../../components/Botao";
import logo from '../../../assets/icon.png'
import Texto from "../../components/Texto";

const width = Dimensions.get("screen").width

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

export default function Login() {

    const [text, onChangeText] = React.useState("")
    const [number, onChangeNumber] = React.useState(null)
    return (
        <>
            <DismissKeyboard>
                <View style={styles.container}>
                    <View style={styles.logoArea}>
                        <Image source={logo} style={styles.logo} />
                        <Texto style={styles.nome}>Orgs Alimentos</Texto>
                    </View>
                    <Texto style={styles.inputTitulo}>Usuário</Texto>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="exemplo@exemplo.com"
                        value={text}
                    />
                    <Texto style={styles.inputTitulo}>Senha</Texto>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        placeholder="Digite sua senha"
                        value={number}
                        secureTextEntry={true}
                    />
                    <Botao texto="Entrar" style={styles.botao} onPress={() => { }} />
                    <Texto style={styles.linkCadastro}>Cadastre-se</Texto>
                </View>
            </DismissKeyboard>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 16,

        justifyContent: "center",
        marginBottom: "50%"
    },
    logoArea: {
        alignItems: "center",
        margin: 16
    },
    logo: {
        width: 100,
        height: 100
    },
    nome: {
        fontWeight: "bold",
        fontSize: 26,
        margin: 16,
        color: "#434343"
    },
    inputTitulo: {
        marginVertical: 8
    },
    input: {
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
    },
    botao: {
        marginTop: 16
    },
    linkCadastro: {
        textAlign: "center",
        textDecorationLine: "underline",
        marginTop: 16
    }
});