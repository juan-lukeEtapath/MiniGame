import { View, Text, StyleSheet } from "react-native";
import { Colours } from "../utils/colour";

function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderRadius: 8,
    borderColor: Colours.Tertiary500,
    padding: 24,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: Colours.Tertiary500,
    fontSize: 36,
    fontWeight: 'bold',
  },

})
