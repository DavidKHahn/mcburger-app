import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Burger, RootStackParamList } from "../types";

type Props = {
  item: Burger;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const BurgerItem = ({ item }: Props) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Details", { item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price / 100}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  image: { width: 60, height: 60, borderRadius: 5 },
  info: { marginLeft: 10 },
  name: { fontWeight: "bold", fontSize: 16 },
  price: { marginTop: 4, color: "#666" },
});

export default BurgerItem;
