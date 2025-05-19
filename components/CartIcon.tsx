import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const CartIcon: React.FC = () => {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.container}>
      <Image
        source={{
          uri: "https://img.icons8.com/ios-filled/50/000000/shopping-cart.png",
        }}
        style={styles.icon}
      />
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
});

export default CartIcon;
