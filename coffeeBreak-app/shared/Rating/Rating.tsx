import StarIcon from '@/assets/icons/star-icon';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';

export default function Rating({ rating }: { rating: number | undefined }) {
  return (
    <View style={styles.container}>
      <StarIcon />
      <Text style={styles.rating}>{rating}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 4,
    left: 4,

    backgroundColor: Colors.transparent,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    paddingVertical: 6,
    paddingLeft: 8,
    width: 51,

    borderTopLeftRadius: Radius.r16,
    borderBottomRightRadius: Radius.r16,
  },
  rating: {
    fontFamily: Fonts.semibold,
    fontSize: Fonts.f10,
    color: Colors.white,
  },
});
