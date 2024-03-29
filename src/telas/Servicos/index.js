import React from "react";
import { SafeAreaView, StatusBar, FlatList, KeyboardAvoidingView, Platform } from "react-native";

import estilosGlobal from "../../estilos";

import Item from "./Item";

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "NÃO DE BANHO NO SEU GATO! Mas se precisar nós damos."
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: "Uma dose da vacina V4. Seu gato precisa de duas."
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 99.9,
        descricao: "Uma dose da vacina antirrábica. Seu gato precisa todo ano."
    }
];

export default function Servicos() {
    return (
    <SafeAreaView style={estilosGlobal.preencher}>
    <StatusBar/>
    <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={estilosGlobal.preencher}
    >
    <FlatList 
      data={servicos}
      renderItem={({item}) => <Item {...item}/>}
      keyExtractor={({id}) => String(id)}
      />
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
