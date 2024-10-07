import HomeIcon from '@/assets/icons/home-icon';
import OrderIcon from '@/assets/icons/order-icon';
import Divider from '@/shared/Divider/Divider';

import { Colors, Radius } from '@/shared/tokens';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <>
            <TouchableOpacity
              key={route.name}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabbarItem}
            >
              {index === 0 ? (
                <HomeIcon color={isFocused ? Colors.primary : Colors.gray} />
              ) : (
                <OrderIcon color={isFocused ? Colors.primary : Colors.gray} />
              )}
              <Text>{label}</Text>
            </TouchableOpacity>
            {index === 0 && <Divider />}
          </>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: Colors.white,
    height: 70,
    width: '100%',
    borderRadius: Radius.r24,
  },
  tabbarItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
  },
  separator: {
    color: Colors.lightGray,

    fontSize: 32,
  },
});
