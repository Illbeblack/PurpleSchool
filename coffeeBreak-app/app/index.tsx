import CustomButton from '@/shared/CustomButton/CustomButton';
import { Colors, Fonts } from '@/shared/tokens';
import {
  Animated,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
export default function App() {
  // const width = Dimensions.get('window').width;

  const animatedValue = new Animated.ValueXY({ x: 0, y: -70 });
  Animated.timing(animatedValue, {
    toValue: { x: 1, y: 0 },
    duration: 3500,
    useNativeDriver: true,
  }).start();
  return (
    <>
      <ImageBackground
        source={require('@/assets/startscreen.png')}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.container}>
        <Animated.View
          style={{
            ...styles.contant,
            opacity: animatedValue.x,
            transform: [{ translateY: animatedValue.y }],
          }}
        >
          <Text style={styles.title}>Один из самых вкусных кофе в городе!</Text>
          <Text style={styles.text}>
            Свежие зёрна, настоящая арабика и бережная обжарка
          </Text>
        </Animated.View>
        <CustomButton title="Начать" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    flex: 0.45,
    justifyContent: 'flex-end',
    gap: 24,
    padding: 30,
    backgroundColor: Colors.black,
  },
  contant: {
    gap: 8,
  },
  title: {
    fontSize: Fonts.f34,
    textAlign: 'center',
    color: Colors.white,
  },
  text: {
    fontSize: Fonts.f14,
    textAlign: 'center',
    color: Colors.textGray,
  },
});
