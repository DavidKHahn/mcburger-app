import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { useCart } from "../context/CartContext";
import { colors } from "../theme/colors";

const CartScreen = () => {
  const { cart, dispatch } = useCart();
  const scheme = useColorScheme() || "light";
  const theme = colors[scheme];

  const getTotal = () =>
    cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.items.length === 0) {
    return (
      <View style={[styles.center, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.text }}>Your cart is empty.</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Shopping Cart</Text>

      <FlatList
        data={cart.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const itemSubtotal = (item.price * item.quantity) / 100;
          return (
            <View style={styles.card}>
              <View style={styles.row}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.info}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text>Quantity: {item.quantity}</Text>
                  <Text>Price: ${(item.price / 100).toFixed(2)}</Text>
                  <Text style={styles.subtotal}>
                    Subtotal: ${((item.price * item.quantity) / 100).toFixed(2)}
                  </Text>
                </View>
                <View style={styles.quantityControls}>
                  <TouchableOpacity
                    style={styles.qtyButton}
                    onPress={() => dispatch({ type: "DECREMENT", id: item.id })}
                  >
                    <Text style={styles.qtyText}>-</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.qtyButton}
                    onPress={() => dispatch({ type: "INCREMENT", id: item.id })}
                  >
                    <Text style={styles.qtyText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                style={styles.removeButton}
                onPress={() =>
                  dispatch({ type: "REMOVE_FROM_CART", id: item.id })
                }
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />

      <Text style={[styles.total, { color: theme.text }]}>
        Total: ${(getTotal() / 100).toFixed(2)}
      </Text>

      <TouchableOpacity
        style={styles.clearCartButton}
        onPress={() => dispatch({ type: "CLEAR_CART" })}
      >
        <Text style={styles.clearCartText}>Clear Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  subtotal: {
    color: "#888",
    marginTop: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  quantityControls: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  qtyButton: {
    backgroundColor: "#007bff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  qtyText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  removeButton: {
    backgroundColor: "red",
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 4,
  },
  removeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center",
  },
  clearCartButton: {
    backgroundColor: "#888",
    padding: 12,
    marginTop: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  clearCartText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CartScreen;
