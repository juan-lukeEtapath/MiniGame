import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";


function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max-min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let maxBoundry = 100;
let minBoundry = 1;

function GameScreen({userNumber, onGameOver}) {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(minBoundry, maxBoundry, userNumber ));

  useEffect(() => {
    if (currentGuess == userNumber) {
      onGameOver();
    }

  }, [currentGuess, userNumber, onGameOver]);

  function nextGuess(increase) {
    if ((increase && currentGuess < userNumber) || (!increase && currentGuess > userNumber)) {
      Alert.alert("Don't lie!", "You know this isn't the true option", [{ text: "My bad", style: 'cancel'}]);
      return;
    }


    increase ? maxBoundry = currentGuess : minBoundry = currentGuess;
    const newNum = generateRandomBetween(minBoundry, maxBoundry, currentGuess);
    setCurrentGuess(newNum);
  };

  return (
    <View style={styles.screen}>
      <Title>Computer's guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>      
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPressed={nextGuess.bind(this, true)}>-</PrimaryButton>
          <PrimaryButton onPressed={nextGuess.bind(this, false)}>+</PrimaryButton>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },

});
