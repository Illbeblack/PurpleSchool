import {
  Animated,
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
} from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';

export default function CustomButton({
  title,
  ...props
}: PressableProps & { title: string }) {
  const animatedValue = new Animated.Value(0);

  const color = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [Colors.primary, Colors.primaryHover],
  });

  const faidIn = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 50,
      useNativeDriver: true,
    }).start();
    props.onPressIn && props.onPressIn(e);
  };

  const faidOut = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }).start();
    props.onPressOut && props.onPressOut(e);
  };

  return (
    <Pressable {...props} onPressIn={faidIn} onPressOut={faidOut}>
      <Animated.View style={{ ...styles.button, backgroundColor: color }}>
        <Text style={styles.title}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 21,
    borderRadius: Radius.r16,
  },
  title: {
    color: Colors.white,
    fontSize: Fonts.f16,
  },
});
