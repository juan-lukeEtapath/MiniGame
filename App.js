import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { LinearGradient} from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { GameOverScreen } from './screens/GameOverScreen';
import { Colours } from './utils/colour';

export default function App() {
  const [userNum,setUserNum] = useState();
  const [gameOver,  setGameOver] = useState(false);

  function numPicked(userNum) {
    setUserNum(userNum);
  };

  function endGame() {
    setGameOver(true);
  };

  let screen = <StartGameScreen onNumPicked={numPicked} />;

  if (userNum) {
    screen = <GameScreen userNumber={userNum} onGameOver={endGame} />;
  };

  if (gameOver) {
    screen = <GameOverScreen />
  };

  return (
    <LinearGradient colors={[Colours.Primary400,Colours.Secondary500]} style={styles.root}>
      <ImageBackground 
        source={require('./assets/nums.jpg')}  
        resizeMode='cover' 
        style={styles.root}
        imageStyle={styles.bgImage}>
        <SafeAreaView style={styles.root}>
          {screen} 
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.15,
  },
});
