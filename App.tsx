import { StyleSheet, Text, View } from 'react-native';
import Top from './components/top';
import Search from './components/search';

export default function App() {
  return (
    <View style={styles.container}>
      <Top/>
      <Search/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
    alignItems: 'center',
  }
});
