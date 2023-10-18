import { Text, StyleSheet }  from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#c6c013',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#c6c013',
    borderRadius: 16,
    padding: 12,
  },  
});
