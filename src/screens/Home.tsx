import { StyleSheet, Switch, Text, View, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ThemeContext } from "../components/ThemeContext";
import { temaClaro, temaEscuro } from "../theme/theme";
import { Character, CharacterRequest } from "../types/character";
import CharacterCard from "../components/CharacterCard";

const Home = () => {
  const [characterList, setCharactertList] = useState<Character[]>([]);
  const {theme, toggleSwitch} = useContext(ThemeContext);
  const URL = "https://rickandmortyapi.com/api/character";

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme === "temaClaro" ? temaClaro.colorFundo : temaEscuro.colorFundo,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
    },
    text: {
      color: theme === "temaClaro" ? temaClaro.colorLetras : temaEscuro.colorLetras,
      fontSize: 22,
    },
  });
  
  
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
console.log(theme)
  return (
    <View style={styles.container}>
       <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={theme === "temaClaro" ? "#220759" : "#ed85ed"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={theme === "temaEscuro"}
      />
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


