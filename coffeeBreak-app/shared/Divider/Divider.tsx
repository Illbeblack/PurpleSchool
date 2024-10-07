import { StyleSheet, View } from 'react-native';
import { Colors } from '../tokens';

export default function Divider() {
  return <View style={styles.divider}></View>;
}

const styles = StyleSheet.create({
  divider: {
    backgroundColor: Colors.lightGray,
    width: 1,
    height: 46,
  },
});
