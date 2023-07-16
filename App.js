import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, } from 'react-native';
import  AppNavigation from './src/navigation/index';

export default function App() {
  return (
    <AppNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
