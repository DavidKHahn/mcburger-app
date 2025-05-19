import React from "react";
import { TouchableOpacity, Image, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { useCart } from "../context/CartContext";

const CartIcon = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { cart } = useCart();

  // total quantity
  const totalQuantity = cart.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Cart")}
      style={styles.container}
    >
      <Image
        source={{
          uri: "https://img.icons8.com/ios-filled/50/000000/shopping-cart.png",
        }}
        style={styles.icon}
      />
      {totalQuantity > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{totalQuantity}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "red",
    borderRadius: 10,
    minWidth: 16,
    height: 16,
    paddingHorizontal: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default CartIcon;
