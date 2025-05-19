import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  useColorScheme,
  Button,
} from "react-native";
import { Burger } from "../types";
import BurgerItem from "../components/BurgerItem";
import { colors } from "../theme/colors";

const HomeScreen = () => {
  const [burgers, setBurgers] = useState<Burger[]>([]);
  const [loading, setLoading] = useState(true);
  const scheme = useColorScheme() || "light";
  const theme = colors[scheme];

  useEffect(() => {
    fetch("https://burgerhub00.github.io/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        setBurgers(data.products);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator style={{ marginTop: 50 }} />;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={burgers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BurgerItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 12,
  },
});

export default HomeScreen;
