import { StyleSheet, Text, View } from 'react-native';


export default function Menage() {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Ménage</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : "#6C5443",
    flex : 1,
    justifyContent : 'flex-start',
    alignItems : 'center',
  },
  titre : {
    color : 'white',
    fontSize : 32,
    top : 20,
    fontWeight : 'bold',
  }
});
