import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.Container}>
      <Text style={styles.text}>bonjour</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent : 'center',
    gap: 8,
    backgroundColor: '#d8cd95ff',
    flex : 1,
  },
  text: {
    color: '#fdfdff', 
    fontSize: 20,
  },
});
