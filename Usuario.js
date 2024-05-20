import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function Usuario({ navigation }) {
  return (
    <SafeAreaView style={styles.contaner}>
      <View style={styles.form}>
        <View style={styles.title}>
          <Text style={styles.text}>Login</Text>
        </View>
        <View style={styles.data}>
          <TextInput
            placeholderTextColor="white"
            style={styles.input}
            placeholder="Usuario"
          ></TextInput>
          <TextInput
            placeholderTextColor="white"
            style={styles.input}
            placeholder="Senha"
          ></TextInput>
        </View>
        <View style={styles.Pbotao}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate("Loja")}
          >
            <Text style={styles.botaotxt}>Logar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.botaoC}>
            <Text style={styles.botaotxt}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  form: {
    height: "70%",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  contaner: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  title: {
    height: "30%",
    display: "flex",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    color: "#8D86C9",
    fontSize: 65,
  },
  data: {
    height: "45%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: 30,
    gap: 40,
  },
  Pbotao: {
    height: "50%",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  botaotxt: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  botao: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "55%",
    height: 45,
    borderRadius: 20,
    backgroundColor: "#8D86C9",
  },
  botaoC: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "55%",
    height: 45,
    borderRadius: 20,
    backgroundColor: "#8D86C9",
  },
  input: {
    display: "flex",
    justifyContent: "center",
    width: "80%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#8D86C9",
    paddingLeft: "4%",
  },
});
