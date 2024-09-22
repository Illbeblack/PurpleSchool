import {
  Animated,
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleSheet,
} from 'react-native';
import { Colors, Radius } from '../tokens';
import AddIcon from '@/assets/icons/add-icon';

export default function AddButton({ ...props }: PressableProps) {
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
    props.onPressIn?.(e);
  };

  const faidOut = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }).start();
    props.onPressOut?.(e);
  };

  return (
    <Pressable {...props} onPressIn={faidIn} onPressOut={faidOut}>
      <Animated.View style={{ ...styles.button, backgroundColor: color }}>
        <AddIcon />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: Radius.r10,
  },
});
