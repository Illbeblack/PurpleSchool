import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';

export default function CustomButton({
  title,
  ...props
}: PressableProps & { title: string }) {
  return (
    <Pressable {...props}>
      <View style={styles.button}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 21,
    backgroundColor: Colors.primary,
    borderRadius: Radius.r16,
  },
  title: {
    color: Colors.white,
    fontSize: Fonts.f16,
  },
});
