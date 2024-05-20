import { StyleSheet, Image, SafeAreaView, View } from "react-native";

export default function Loja({}) {
  return (
    <SafeAreaView style={styles.contaner}>
      <View style={styles.harder}>
        <Image
          source={require("./assets/produto.png")}
          style={styles.image}
        ></Image>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  contaner: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
  },
  harder: {
    marginBottom: 8,
  },
  image: {
    width: 200,
    height: 200,
  },
});
