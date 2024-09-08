import React, { useEffect } from 'react';
import { SafeAreaView, Image, View, StyleSheet } from 'react-native';

export default function LoadingScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loadingImageContainer}>
        <Image
          style={styles.circleImg}
          source={require('../assets/Circle.png')}
          resizeMode="cover"
        />
        <Image
          style={styles.logoImg}
          source={require('../assets/LogoAgroCare.png')}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#103F19', // Cor de fundo igual à das outras telas
  },
  loadingImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  logoImg: {
    width: 320,
    height: 100,
    position: 'absolute',
    zIndex: 1,
  },
  circleImg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 10,
    left: -210,
    opacity: 0.5,
    zIndex: 0,
  },
});
