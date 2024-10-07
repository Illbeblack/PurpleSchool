import { View, Text } from 'react-native';
import { Colors } from '@/shared/tokens';
import { useLocalSearchParams } from 'expo-router';

export default function ItemPage() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text style={{ color: Colors.white }}>{id}</Text>
    </View>
  );
}
