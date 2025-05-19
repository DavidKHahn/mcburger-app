import React from "react";
import { View, StyleSheet } from "react-native";
import CartIcon from "./CartIcon";
import LogoutIcon from "./LogoutIcon";

const HeaderRightIcons = () => {
  return (
    <View style={styles.container}>
      <CartIcon />
      <LogoutIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginRight: 10,
  },
});

export default HeaderRightIcons;
