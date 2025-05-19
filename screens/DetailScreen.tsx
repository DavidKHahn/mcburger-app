import React from "react";
import { View, Text, Image, Button, StyleSheet, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

const DetailScreen = ({ route, navigation }: Props) => {
  const { item } = route.params;

  const handleAddToCart = () => {
    Alert.alert("Added to Cart", `Added ${item.name} to cart`);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>Price: ${item.price / 100}</Text>
      <Text style={styles.calories}>Calories: {item.calories ?? "N/A"}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Button title="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  image: { width: "100%", height: 200, marginBottom: 16, borderRadius: 8 },
  name: { fontSize: 22, fontWeight: "bold", marginBottom: 8 },
  price: { fontSize: 18, color: "#555", marginBottom: 4 },
  calories: { fontSize: 16, color: "#777", marginBottom: 8 },
  description: { fontSize: 16, marginBottom: 16 },
});

export default DetailScreen;
