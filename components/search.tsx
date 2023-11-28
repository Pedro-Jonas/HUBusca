import { StyleSheet, View, TextInput, Keyboard } from 'react-native';
import React, {useState} from 'react';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios'

export default function Search() {
  const [user, setUser] = useState(''); 
  const [info, setInfo] = useState({})

  const seachUser = async (user : string) => {
    Keyboard.dismiss()
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`)
      setInfo({
      name: response.data.name,
      login: response.data.login,
      avatar: response.data.avatar_url,
      location: response.data.location
      })
      setUser('')
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <>
      <View style={styles.search}>
        <TextInput 
        style = {styles.input} 
        placeholder ='Pesquisar' 
        autoCapitalize = 'none' 
        autoCorrect = {false}
        value = {user}
        onChangeText={(value) => setUser(value)}
        />
        <Ionicons name='search' size={32} color='white' onPress={() => seachUser(user)} />
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    height: 60,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  input: {
    width: 200,
    height: 40,
    backgroundColor: '#FFFFFF',
    paddingLeft: 10,
    borderRadius: 25,
    fontSize: 20
  }
});