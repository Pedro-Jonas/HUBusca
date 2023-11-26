import { StyleSheet, View, TextInput } from 'react-native';

export default function Search() {
    return (
        <View style={styles.search}>
            <TextInput style={styles.input} placeholder='Pesquisar' autoCapitalize='none' autoCorrect={false}/>
        </View>
    );
}

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    height: 60,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
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