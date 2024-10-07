import { API } from '@/entities/product/api/api';
import { loadProductAtom } from '@/entities/product/model/product.state';
import TypeChip from '@/shared/TypeChip/TypeChip';
import { Types } from '@/shared/types';

import { useSetAtom } from 'jotai';
import { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';

export default function CoffeeTypes() {
  const loadProduct = useSetAtom(loadProductAtom);

  const loadProductHandler = useCallback((type: string) => {
    loadProduct(`${API.products}?type=${type}`);
  }, []);

  return (
    <View style={styles.container}>
      {Types.map((t) => (
        <TypeChip
          key={t.id}
          lable={t.name}
          onPress={() => loadProductHandler(t.type)}
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
