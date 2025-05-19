import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, Alert } from "react-native";
import BurgerItem from "../components/BurgerItem";
import { Burger } from "../types";

const HomeScreen = () => {
  const [burgers, setBurgers] = useState<Burger[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://burgerhub00.github.io/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        setBurgers(data.products);
        setLoading(false);
      })
      .catch((err) => {
        Alert.alert("Error fetching burgers", err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator style={{ marginTop: 50 }} />;

  return (
    <FlatList
      data={burgers}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <BurgerItem item={item} />}
    />
  );
};

export default HomeScreen;
