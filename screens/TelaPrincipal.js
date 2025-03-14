import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import RealizarCalculo from "../components/RealizarCalculo";

export default function TelaPrincipal() {
  const [nomeProduto, setNomeProduto] = useState("");
  const [valorOriginal, setValorOriginal] = useState("");
  const [valorDesconto, setValorDesconto] = useState("");
  const [mostrarDados, setMostrarDados] = useState(false);

  return (     
    <View style={styles.container}>
      <Image
        source={{
          uri: '../assets/images.png',
        }}
        style={styles.imagem}
      />    
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do produto"
        value={nomeProduto}
        onChangeText={(nome) => setNomeProduto(nome)}
      />
      <TextInput        
        style={styles.input}
        placeholder="Digite o valor original do produto"        
        keyboardType="numeric"
        value={valorOriginal}
        onChangeText={(valorOriginal) => setValorOriginal(valorOriginal)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a porcentagem de desconto"
        keyboardType="numeric"
        value={valorDesconto}
        onChangeText={(valorDesconto) => setValorDesconto(valorDesconto)}
      />
      <Button title="Calcular" onPress={() => setMostrarDados(true)} />
        {mostrarDados && (
            <RealizarCalculo
            valorOriginal={valorOriginal}
            porcDesconto={porcentagemDesconto}
        />
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 300,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
  },
});
