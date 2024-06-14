import { StyleSheet, Text, View, Image, FlatList, ScrollView } from "react-native";
import React from "react";
import { Character } from "../types/character";
import { useRoute } from "@react-navigation/native";

const ProductDetails = () => {
  const route = useRoute<any>();

  const { name, image, status, species, gender,  episode, created } =
    route.params as Character;
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.text}>{name}</Text>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.text}>{status}</Text>
      <Text style={styles.text}>{species}</Text>
      <Text style={styles.text}>Gênero: {gender}</Text>
  <>
  
  {
    episode.map(x => {
      return (
      <Text key={x} style={styles.text}>{x}</Text>
      )})
    }
  </>
      <Text style={styles.text}>{created}</Text>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252525",
    color: "#FFFFFF",
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 2,
    margin: 10,
    resizeMode: "contain",
  },
  text: {
    color: "#FFFFFF",
    margin: 10,
  },
});
