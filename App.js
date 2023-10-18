import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient} from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <LinearGradient colors={['#0f5e80','#c6c013']} style={styles.root}>
      <ImageBackground 
        source={require('./assets/nums.jpg')}  
        resizeMode='cover' 
        style={styles.root}
        imageStyle={styles.bgImage}>
        <StartGameScreen />
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
