import { Character } from "./character";

export type StackParamList = {
  Home: undefined;
  Details: {
    character: Character;
  };
};
