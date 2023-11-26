import { StyleSheet, Text, View } from 'react-native';

export default function Top() {
    return (
        <View style={styles.top}>
          <Text style={styles.text}>HUBusca</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  top: {
    height: 80,
    width:'100%',
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#24292F',
  },
  text: {
    fontSize: 50,
    color: 'white'
  }
});
