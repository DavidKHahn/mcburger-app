import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  Alert,
  useColorScheme,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { useCart } from "../context/CartContext";
import { colors } from "../theme/colors";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

const DetailScreen = ({ route }: Props) => {
  const { item } = route.params;
  const { dispatch } = useCart();
  const scheme = useColorScheme() || "light";
  const theme = colors[scheme];

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", item });
    Alert.alert("Added to Cart", `${item.name} was added`);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={[styles.name, { color: theme.text }]}>{item.name}</Text>
      <Text style={{ color: theme.text }}>
        Price: ${(item.price / 100).toFixed(2)}
      </Text>
      <Text style={{ color: theme.text }}>
        Calories: {item.calorie ?? "N/A"}
      </Text>
      <Text style={[styles.description, { color: theme.text }]}>
        {item.description}
      </Text>
      <Button
        title="Add to Cart"
        onPress={handleAddToCart}
        color={theme.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1 },
  image: { width: "100%", height: 200, borderRadius: 10, marginBottom: 12 },
  name: { fontSize: 22, fontWeight: "bold", marginBottom: 6 },
  description: { marginTop: 10 },
});

export default DetailScreen;
