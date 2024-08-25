import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Colors } from '../tokens';

export default function LoadingSpinner() {
  return (
    <View style={styles.container}>
      <View>
        <ActivityIndicator size="large" color={Colors.white} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },
});
