import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { FC, useContext } from "react";
import { Character } from "../types/character";
import { useNavigation } from "@react-navigation/native";
import { temaClaro, temaEscuro } from "../theme/theme";
import { StackParamList } from "../types/navigation";
import { ThemeContext } from "./ThemeContext";

interface CardProps {
  character: Character;
}

const CharacterCard: FC<CardProps> = ({ character }) => {
  const navigation = useNavigation<any>();
  const {theme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme === "temaEscuro" ? "#252525" : "#fff",
      padding: 16,
      borderWidth: 1,
      borderColor: "#000000",
      margin: 10,
    },
    image: {
      width: 300,
      height: 200,
      borderRadius: 2,
      margin: 10,
      resizeMode: "contain",
    },
    text: {
      color: theme === "temaClaro" ? temaClaro.colorLetras : temaEscuro.colorLetras,     
    },
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Details", character)}
    >
      <Text style={styles.text}>{character.name}</Text>
      <Image style={styles.image} source={{ uri: character.image }} />
      <Text style={styles.text}>${character.species}</Text>
    </TouchableOpacity>
  );
};

export default CharacterCard;


