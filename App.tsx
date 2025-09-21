/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {
  Button,
  PaperProvider,
  MD3LightTheme as DefaultTheme,
} from 'react-native-paper';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const themeDark = {
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      secondary: 'black',
    },
  };
  const themeLight = {
    colors: {
      ...DefaultTheme.colors,
      primary: 'black',
      secondary: 'black',
    },
  };
  const colorScheme = useColorScheme();

  const paperTheme =
    colorScheme === 'dark' ? { ...themeDark } : { ...themeLight };

  return (
    <PaperProvider theme={paperTheme}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppContent />
      </SafeAreaProvider>
    </PaperProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}
      >
        Press mer
      </Button>
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
