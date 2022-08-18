import React from "react";
import { View, Image, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, Dimensions } from "react-native";
import Botao from "../../components/Botao";
import Texto from "../../components/Texto";
import logo from '../../../assets/icon.png'

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

export default function Cadastro() {
    const [name, onChangeName] = React.useState("")
    const [email, onChangeEmail] = React.useState("")
    const [senha, onChangeSenha] = React.useState(null)
    const [confirmaSenha, onChangeConfirmaSenha] = React.useState(null)

    return (
        <DismissKeyboard>
            <View style={styles.container}>
                <View style={styles.logoArea}>
                    <Image source={logo} style={styles.logo} />
                    <Texto style={styles.nome}>Orgs Alimentos</Texto>
                </View>
                <Texto style={styles.tituloCadastro}>Cadastre-se</Texto>
                <Texto style={styles.inputTitulo}>Nome completo</Texto>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeName}
                    placeholder="Digite seu nome"
                    value={name}
                />
                <Texto style={styles.inputTitulo}>E-mail</Texto>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    placeholder="exemplo@exemplo.com"
                    value={email}
                />
                <Texto style={styles.inputTitulo}>Senha</Texto>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeSenha}
                    placeholder="Crie uma senha"
                    value={senha}
                    secureTextEntry={true}
                />
                <Texto style={styles.inputTitulo}>Confirmação de senha</Texto>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeConfirmaSenha}
                    placeholder="Confirme sua senha"
                    value={confirmaSenha}
                    secureTextEntry={true}
                />
                <Botao texto="Cadastrar" style={styles.botao} onPress={() => { }} />
            </View>
        </DismissKeyboard>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 16,

        justifyContent: "center",
        marginBottom: "30%"
    },
    tituloCadastro: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 26
    },
    logoArea: {
        alignItems: "center",
        // margin: 16,
        borderBottom: 1
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