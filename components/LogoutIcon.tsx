import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";

const LogoutIcon = () => {
  const { logout } = useAuth();

  return (
    <TouchableOpacity onPress={logout} style={styles.container}>
      <Image
        source={{
          uri: "https://img.icons8.com/ios-glyphs/30/000000/logout-rounded.png",
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

export default LogoutIcon;
