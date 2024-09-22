import { View, Text } from 'react-native';

import { useLocalSearchParams } from 'expo-router';
import { Colors } from '@/shared/tokens';

export default function ItemPage() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text style={{ color: Colors.white}}>{id}</Text>
    </View>
  );
}
