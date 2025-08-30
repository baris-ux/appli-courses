import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste de courses</Text>

      <View style = {styles.panel}>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text>Ajouter un produit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Produit fréquent</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C5543',
    padding: 20,
    alignItems: 'center',
  },
  panel: {
    backgroundColor : '#FFFFFF',
    flex: 0.8,
    width : '80%',
    margin : 10,
    borderRadius : 10,
  },
  title: {
    color: '#fdfdff',
    fontSize: 20,
    marginTop: 24,
  },
  footer: {
    marginTop: 'auto',     // pousse le bloc en bas
    width: '100%',
    alignItems: 'center',
    gap: 12,               // ⚠️ voir note ci-dessous
    paddingBottom: 30,     // espace par rapport au bas
  },
  button: {
    backgroundColor: '#FFFFEC',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
});
