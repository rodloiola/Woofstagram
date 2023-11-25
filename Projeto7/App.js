import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nomePet, setNomePet] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [raca, setRaca] = useState('');
  const [brinquedoFavorito, setBrinquedoFavorito] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Inscreva seu Pet</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Nome do Pet"
          value={nomePet}
          onChangeText={(text) => setNomePet(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Data de Aniversário do Pet"
          value={dataNascimento}
          onChangeText={(text) => setDataNascimento(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Raça do Pet"
          value={raca}
          onChangeText={(text) => setRaca(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Brinquedo Favorito do Pet"
          value={brinquedoFavorito}
          onChangeText={(text) => setBrinquedoFavorito(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            console.log('Dados do formulário:', {
              email,
              senha,
              nomePet,
              dataNascimento,
              raca,
              brinquedoFavorito,
            })
          }
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9bccc8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    padding: 20,
    width: '100%',
    maxWidth: 400,
    borderRadius: 8,
    backgroundColor: '#ffffff', 
    shadowColor: '#009e91',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#009e91', 
    textAlign: 'center',
  },
  input: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#009e91', 
    borderRadius: 4,
    color: '#000000', 
  },
  button: {
    backgroundColor: '#009e91', 
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff', 
    fontWeight: 'bold',
  },
});