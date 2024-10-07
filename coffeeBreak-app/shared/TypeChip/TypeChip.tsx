import {
  Text,
  Pressable,
  PressableProps,
  View,
  StyleSheet,
} from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';

export default function TypeChip({
  lable,
  ...props
}: PressableProps & { lable: string }) {
  return (
    <Pressable {...props}>
      <View style={styles.container}>
        <Text style={styles.lable}>{lable}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: Radius.r12,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  lable: {
    color: Colors.gray,
    fontFamily: Fonts.regular,
    fontSize: Fonts.f14,
  },
});
