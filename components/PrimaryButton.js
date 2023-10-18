import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({children}) {
  function pressHandler() {
    console.log("hello world")
  };


  return (
    <View style={styles.outerContainer}>
      <Pressable 
        style={({pressed}) => pressed ? [styles.innerContainer,styles.pressed] : styles.innerContainer} 
        onPress={pressHandler} 
        android_ripple={{ color : '#c6c013' }}>
        <Text style={styles.buttonText} >{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
    
  },
  innerContainer: {
    backgroundColor: '#021127',
    borderColor: '#af3800',
    borderWidth: 2,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
    borderRadius: 28,
  },
  buttonText: {
    textAlign: 'center',
    color: '#c6c013',
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.75,
  },
});
