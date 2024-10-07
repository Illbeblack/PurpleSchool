import { Product } from '@/entities/product/model/product.model';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';
import AddButton from '../AddButton/AddButton';
import Rating from '../Rating/Rating';

export default function CoffeeCard({
  name,
  subTitle,
  price,
  image,
  rating,
}: Product) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="stretch"
      />
      <Rating rating={rating} />
      <View style={styles.header}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.price}>{`${price} ₽`}</Text>
        <AddButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    backgroundColor: Colors.white,
    width: 150,
    padding: 4,
    borderRadius: Radius.r16,
  },
  image: {
    height: 132,
    width: 141,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 8,
  },
  title: {
    fontFamily: Fonts.semibold,
    fontSize: Fonts.f16,
    color: Colors.lable,
  },
  subTitle: {
    fontFamily: Fonts.regular,
    fontSize: Fonts.f12,
    color: Colors.gray,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  price: {
    fontFamily: Fonts.semibold,
    fontSize: Fonts.f18,
  },
});
