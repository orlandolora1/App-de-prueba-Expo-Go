import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  const [texto, setTexto] = useState("");
  const [textoGuardado, setTextoGuardado] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Orlando Lora Ortega</Text>
      <Text style={styles.subtitulo}>Carnet: 2018-0068</Text>

      <View style={styles.separador} />

      <Text style={styles.label}>Escribe algo:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe aquí..."
        value={texto}
        onChangeText={setTexto}
      />
      <Button title="Mostrar texto" onPress={() => setTextoGuardado(texto)} />

      {textoGuardado !== "" && (
        <Text style={styles.resultado}>Escribiste: {textoGuardado}</Text>
      )}

      <View style={styles.separador} />

      <Pressable style={styles.boton} onPress={() => router.push("/two")}>
        <Text style={styles.botonTexto}>Ver lista</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 80,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    marginTop: 4,
  },
  separador: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 24,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  resultado: {
    marginTop: 12,
    fontSize: 16,
    fontStyle: "italic",
  },
  boton: {
    backgroundColor: "#2e78b7",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  botonTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
