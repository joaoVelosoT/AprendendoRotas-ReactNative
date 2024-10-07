import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Card from "../Components/Card";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Text style={styles.tituloInContato}>Seja bem-vindo!</Text>
      <Card
        title="Sobre"
        content="Saiba mais sobre nós e nossos serviços."
        buttonText="Ir para Sobre"
        onPress={() => navigation.navigate("Sobre")}
      />

      <Text style={styles.tituloInfo}>Mais informações</Text>
{/* 
      <Button
            title="Ir para Contato"
            onPress={() => navigation.navigate('Contato')}
        /> */}

<Card
        title="Contato"
        content="Clique abaixo para entrar em contato."
        buttonText="Ir para o Contato"
        onPress={() => navigation.navigate("Contato")}
      />

      
<Card
        title="Configurações"
        content="Clique para ir para as configurações"
        buttonText="Ir para as configurações"
        onPress={() => navigation.navigate("Configuracoes")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  tituloContato: {
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  tituloInfo : {
    fontSize : 18,
    fontWeight : 'bold',
    marginTop : 20,
    marginBottom : 20,
    textAlign : 'center'
  }
});
