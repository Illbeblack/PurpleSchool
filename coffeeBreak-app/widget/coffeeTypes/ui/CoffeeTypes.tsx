import { API } from '@/entities/product/api/api';
import { loadProducrtAtom } from '@/entities/product/model/producrt.state';
import TypeChip from '@/shared/TypeChip/TypeChip';
import { useSetAtom } from 'jotai';
import { StyleSheet, View } from 'react-native';

export default function CoffeeTypes() {
  const types = [
    { id: 0, name: 'Все', type: '' },
    { id: 1, name: 'Капучино', type: 'cappuccino' },
    { id: 2, name: 'Латте', type: 'latte' },
    { id: 3, name: 'Макиатто', type: 'macchiato' },
    { id: 4, name: 'Американо', type: 'americano' },
  ];

  const loadProduct = useSetAtom(loadProducrtAtom);

  return (
    <View style={styles.container}>
      {types.map((t) => (
        <TypeChip
          key={t.id}
          lable={t.name}
          onPress={() => loadProduct(`${API.products}?type=${t.type}`)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
  },
});
