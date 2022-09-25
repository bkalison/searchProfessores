import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';

import {  } from 'expo'

import { Archivo_400Regular, Archivo_700Bold, useFonts} from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold} from '@expo-google-fonts/poppins';
import AppStack from './src/routes/AppStack';

export default function App() {
  let [fontLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })

  if (fontLoaded) {
    return (
      <>
        <AppStack />
        <StatusBar style="auto" />
      </>
    );
  } else {
    return (
      <>
        <Text>LOADING...</Text>
        <StatusBar style="auto" />
      </>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
