import { API } from '@/entities/product/api/api';

import { Product } from '@/entities/product/model/product.model';
import {
  loadProductAtom,
  productAtom,
} from '@/entities/product/model/product.state';
import CoffeeCard from '@/shared/CoffeeCard/CoffeeCard';
import SearchInput from '@/shared/SearchInput/SearchInput';
import { Colors } from '@/shared/tokens';

import CoffeeTypes from '@/widget/coffeeTypes/ui/CoffeeTypes';

import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';

import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

export default function Catalog() {
  const [search, onSearch] = useState('');
  const { isLoading, products } = useAtomValue(productAtom);
  const loadProduct = useSetAtom(loadProductAtom);
  let items = [];

  useEffect(() => {
    if (!search) {
      loadProduct(`${API.products}`);
    }
  }, []);

  const filterItems = (arr, query) => {
    return arr.filter(
      (el) => el.description.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  };

  !search ? (items = products) : (items = filterItems(products, search));

  const renderProduct = ({ item }: { item: Product }) => {
    return (
      <View style={styles.item}>
        <CoffeeCard {...item} />
      </View>
    );
  };

  return (
    <View>
      <View style={styles.header}>
        <SearchInput
          placeholder="Найти кофе"
          value={search}
          onChangeText={onSearch}
        />
      </View>
      <View style={styles.main}>
        <CoffeeTypes />
        {isLoading && <ActivityIndicator size="large" color={Colors.primary} />}
        {items.length > 0 && (
          <FlatList data={items} renderItem={renderProduct} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.black,
    padding: 30,
  },
  main: {
    padding: 30,
    gap: 24,
  },
  item: {
    padding: 20,
  },
});
