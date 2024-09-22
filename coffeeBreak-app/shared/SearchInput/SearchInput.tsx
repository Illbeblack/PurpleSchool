import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { Colors, Fonts } from '../tokens';
import SearchIcon from '@/assets/icons/search-icon';

export default function SearchInput(props: TextInputProps) {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholderTextColor={Colors.gray}
        {...props}
      />
      <View style={styles.icon}>
        <SearchIcon />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 52,
    backgroundColor: Colors.darkGray,
    paddingHorizontal: 48,

    borderRadius: 16,
    fontFamily: Fonts.regular,
    fontSize: Fonts.f14,
    color: Colors.gray,
  },
  icon: {
    position: 'absolute',
    left: 0,
    padding: 16,
  },
});
