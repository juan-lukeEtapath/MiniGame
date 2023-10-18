import { TextInput, View, StyleSheet, Alert } from "react-native";
import { useState } from "react"; 
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredNumber) {
    setEnteredNumber(enteredNumber);
  };

  function clearInput() {
    setEnteredNumber('');
  };

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 100) {
      Alert.alert('Invalid number!','Number has to be between 1 and 99',[{ text: 'Okay', style: 'destructive', onPress: clearInput}]);
      return;
    };
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.numberInput} 
        maxLength={2} 
        keyboardType="number-pad" 
        autoCapitalize="none" 
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}/>
      <View style={styles.buttonContainer} >
        <View style={styles.buttonBox}>
          <PrimaryButton onPressed={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
        <View style={styles.buttonBox}>
          <PrimaryButton onPressed={clearInput}>Cancel</PrimaryButton>
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
