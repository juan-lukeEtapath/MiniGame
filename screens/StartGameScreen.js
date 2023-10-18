import { TextInput, View, Pressable, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false}/>
      <View style={styles.buttonContainer} >
        <View style={styles.buttonBox}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
        <View style={styles.buttonBox}>
          <PrimaryButton>Cancel</PrimaryButton>
        </View>
      </View>
    </View>
  ); 
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    //flex: 1,
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#042a62',
    borderRadius: 6,
    elevation: 10000,
    alignItems: 'center',
  },
  numberInput: {
    color:  '#c6c013',
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#c6c013',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonBox: {
    flex: 1,
  },
});
