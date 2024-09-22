import HomeIcon from '@/assets/icons/home-icon';
import { Colors } from '@/shared/tokens';
import TabBar from '@/widget/layout/ui/TabBar';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Главная',
          headerShown: false,
          tabBarIcon: ({ color }) => <HomeIcon color={Colors.gray} />,
        }}
      />

      <Tabs.Screen name="[id]" options={{ title: 'Заказ  ' }} />
    </Tabs>
  );
}
