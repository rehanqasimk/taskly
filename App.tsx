import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, PixelRatio } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>{PixelRatio.get()}</Text>
        <Text style={styles.text}>Hello World</Text>
      </View>

      <View style={styles.view}>
        <Text style={styles.text}>Hello World</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    width: 200,
    height: 200,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    color: "darkblue",
  },
});
