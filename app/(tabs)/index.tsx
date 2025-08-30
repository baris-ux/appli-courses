import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.Container}>
      <Text style={styles.text}>Liste de courses</Text>
      <TouchableOpacity style={styles.ajoutProduit}>
        <Text>Ajouter un produit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.produitFrequent}>
        <Text>Produit fréquent</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    justifyContent : 'center',
    gap: 8,
    backgroundColor: '#6C5543',
    flex : 1,
  },
  text: {
    color: '#fdfdff', 
    fontSize: 20,
  },
  ajoutProduit: {
    position: 'absolute',
    bottom: 30,
    backgroundColor : "#FFFFEC",
    padding : 15,
    borderRadius : 10,
  },
  produitFrequent: {
    position: 'absolute',
    bottom: 100,
    backgroundColor : "#FFFFEC",
    padding : 15,
    borderRadius : 10,
  },
});
