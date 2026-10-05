import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

const elementos = [
  { id: "1", nombre: "Manzana" },
  { id: "2", nombre: "Banana" },
  { id: "3", nombre: "Naranja" },
  { id: "4", nombre: "Uva" },
  { id: "5", nombre: "Fresa" },
  { id: "6", nombre: "Piña" },
];

export default function ListaScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de frutas</Text>

      <FlatList
        data={elementos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTexto}>{item.nombre}</Text>
          </View>
        )}
      />

      <Pressable style={styles.boton} onPress={() => router.push("/")}>
        <Text style={styles.botonTexto}>Volver al inicio</Text>
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
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  item: {
    backgroundColor: "#f2f2f2",
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemTexto: {
    fontSize: 16,
  },
  boton: {
    backgroundColor: "#2e78b7",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  botonTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
