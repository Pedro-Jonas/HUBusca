import { StyleSheet, View, TextInput, Keyboard, Image, Text, ScrollView, Alert } from 'react-native';
import React, {useState} from 'react';
import UserInfo from '../types/UserInfo';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios'

export default function Search() {
  const [user, setUser] = useState(''); 
  const [info, setInfo] = useState <Array<UserInfo>>([])

  const seachUser = async (user : string) => {
    Keyboard.dismiss()
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`)
      response.data.name != null?
      (setInfo([...info, {
      name: response.data.name,
      login: response.data.login,
      avatar: response.data.avatar_url,
      location: response.data.location
      }])) : (Alert.alert('Ops!', 'Usuário não encontrado'))
      setUser('')
    } catch (err) {
      console.log(err)
    }
  };
  console.log(typeof(info))

  function ShowInfo() {
    return(
      <ScrollView style={styles.totalUsers}>
        {
          info.length > 0? 
          <>
          {info.map(infoUser => {
            return(
            <View style={styles.userView} key={info.indexOf(infoUser)}>
              <Image 
              style = {styles.avatar}
              source={{
                uri: `${infoUser.avatar}`
              }}
              />
              <Text style = {styles.textInfo}>
                {`${infoUser.name}`} {'\n'}
                {`${infoUser.login}`} {'\n'}
                {`${infoUser.location} `} 
                <Ionicons name='location' size={20} color='white' />
              </Text>
            </View>
          )})}
          </>
          :
          <Text style = {styles.informative}>
            Nenhum Usuário recente 
          </Text>
        }
      </ScrollView>
    )
  }
  
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
        onSubmitEditing={() => seachUser(user)}
        />
        <Ionicons name='search' size={32} color='white' onPress={() => seachUser(user)} />
      </View>
      <ShowInfo/>
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
    gap: 10
  },
  input: {
    width: 200,
    height: 40,
    backgroundColor: '#FFFFFF',
    paddingLeft: 10,
    borderRadius: 25,
    fontSize: 20
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50
  },
  informative: {
    marginTop: 40,
    fontSize: 20,
    color: 'white'
  },
  textInfo: {
    fontSize: 20,
    color: 'white'
  },
  userView: {
    width: 380,
    height: 100,
    marginBottom: 10,
    backgroundColor: '#24292F', 
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  totalUsers: {
    flex: 1,
    gap: 30,
  }

});