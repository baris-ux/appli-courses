import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";


export default function HomeScreen() {

  type Item = {
    id : string;
    name : string;
    qty : number;
    checked : boolean;
  }

  const [items, setItems] = useState<Item[]>([]);
  const [showInputs, setShowInputs] = useState(false);
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");

  const handleAdd = () => {
    const trimmed = name.trim();
    const q = parseInt(qty, 10); 

    if (!trimmed) return;           
    if (Number.isNaN(q) || q <= 0) return; 

    const newItem: Item = { 
      id: Date.now().toString(), 
      name: trimmed, 
      qty: q,   
      checked : false,                  
    };

    setItems((prev) => [...prev, newItem]);

    // reset
    setName("");
    setQty("");
    setShowInputs(false);
  };

  const toggleChecked = (id : string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const anyChecked = items.some(it => it.checked);

  const finalize = () => {
    setItems(prev => prev.filter(i => !i.checked));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste de courses</Text>

      <View style={styles.panel}>
        {items.length === 0 ? (
          <Text style={styles.empty}>Votre liste est vide 🛒</Text>
        ) : (
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.row}>

                <TouchableOpacity onPress={() => toggleChecked(item.id)}>
                  <MaterialIcons
                  name= {item.checked ? "check-box" : "check-box-outline-blank"}
                  size = {24} 
                  color= {item.checked ? "green" : "#333"} />
                </TouchableOpacity>

                <Text style={styles.item}>
                  {item.name} · x{item.qty}
                </Text>
              </View>
            )}
          />
        )}

        {showInputs && (
          <View style={styles.form}>
            <TextInput
              placeholder="Nom du produit"
              value={name}
              onChangeText={setName}
              style={styles.input}
            />
            <TextInput
              placeholder="Quantité"
              value={qty}
              onChangeText={setQty}
              style={styles.input}
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.saveBtn} onPress={handleAdd}>
              <Text>Ajouter</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.footer}>
        {anyChecked && (
          <TouchableOpacity
            style={[styles.boutton, styles.validateButton]}
            onPress={finalize}
          >
            <Text>Valider</Text>
          </TouchableOpacity>
        )}


        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowInputs(true)}
        >
          <Text>Ajouter un produit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6C5543",
    padding: 20,
    alignItems: "center",
  },
  title: {
    color: "#fdfdff",
    fontSize: 20,
    marginTop: 24,
    marginBottom: 12,
    fontWeight : "bold",
  },
  panel: {
    flex: 0.8,
    width: "100%",
    backgroundColor: "#FFFFEC",
    borderRadius: 16,
    padding: 16,
  },
  empty: {
    textAlign: "center",
    color: "#333",
    marginTop: 20,
  },
  item: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  form: {
    marginTop: 16,
    gap: 8,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
  },
  saveBtn: {
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  footer: {
    marginTop: "auto",
    width: "100%",
    paddingBottom: 30,
  },
  button: {
    backgroundColor: "#FFFFEC",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },

  row: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,               
  backgroundColor: '#fff',
  padding: 12,
  borderRadius: 8,
  marginBottom: 8,
},
itemText: {
  fontSize: 16,
  color: '#222',
},

validateButton: {
  backgroundColor: '#C7EFCF', // vert léger pour différencier
  marginBottom: 8,
},

boutton: {
  backgroundColor: '#FFFFEC',
  padding: 15,
  borderRadius: 10,
  width: '100%',
  alignItems: 'center',
},
});
