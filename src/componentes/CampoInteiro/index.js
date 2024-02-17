import React from "react";

import estilosPadrao from './estilos';

import { TextInput, StyleSheet } from "react-native";

export default function CampoInteiro({valor, estilos, acao}){
    const atualiza = (novoValor, acaoRetorno) => {
        const verificaInteiro = novoValor.match(/^[0-9]*$/);
        if (!verificaInteiro) return;

        const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2')

        acaoRetorno(removeZeroEsquerda);
    }

    const numeroEmTexto = String(valor);

    return <TextInput 
    style={[estilosPadrao.campo, estilos]}
    keyboardType='number-pad'
    selectTextOnFocus
    onChangeText={(novoValor) => {acao(novoValor)}}
    value= {numeroEmTexto}
    />
}