import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Character, CharacterRequest } from "../types/character";
import CharacterCard from "../components/CharacterCard";

const Home = () => {
  const [characterList, setCharactertList] = useState<Character[]>([]);
  const URL = "https://rickandmortyapi.com/api/character";

  const getCharcters = async () => {
    try {
      const response = await axios.get<CharacterRequest>(
        `${URL}`
      );

      setCharactertList(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharcters();
  }, []);
console.log(characterList)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Personagens</Text>
      <FlatList
        data={characterList}
        renderItem={({ item }) => <CharacterCard character={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252525",
    color: "#FFFFFF",
    padding: 10,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 22,
  },
});
